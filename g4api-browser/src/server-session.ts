import * as g4 from "@microsearch/g4api";
import { G4Api, G4ApiOptions, getG4ApiError } from "@microsearch/g4api-support";

const getLocalStorageKey = (app?: string) => `g4-${app ?? "app"}-session`;

/**
 * Create or retrieve session singleton.
 */
export function getG4ServerSession(options: G4ApiOptions): G4ServerSession {
  options.sessionId = undefined;
  const localStorageKey = getLocalStorageKey(options.application);
  const storedSession = window.localStorage.getItem(localStorageKey);
  if (storedSession === null) {
    return new G4ServerSession(options);
  } else {
    const auth: g4.AuthenticatedSessionResponse = JSON.parse(storedSession);
    if (auth === null || auth.sessionId === null) {
      window.localStorage.removeItem(localStorageKey);
    } else {
      options.sessionId = auth.sessionId;
    }
    return new G4ServerSession(options, auth);
  }
}

/**
 * G4ServerSession represents a session created using the G4 session API.
 * It is the preferred way to create G4 sessions in the browser.
 */
export class G4ServerSession extends G4Api {
  /**
   * You should not normally construct a G4ServerSession object. Instead, you
   * should be using getG4ServerSession() to retrieve and update the session
   * singleton.
   */
  constructor(options: G4ApiOptions, auth?: g4.AuthenticatedSessionResponse) {
    super(options);
    this.localStorageKey = getLocalStorageKey(options.application);
    this.authentication = auth ? auth : null;
  }

  /**
   * Create a new session and save it to local storage.
   */
  async connect(
    username: string,
    password: string,
    data?: object
  ): Promise<g4.AuthenticatedSessionResponse> {
    if (this.connected()) {
      this.disconnect();
    }
    const response = (await this.session.post({ username, password, data }))
      .data;
    this.bearer = response.bearer;
    this.authentication = response.accessAllowed ? { ...response } : null;
    this.saveSession();
    return response;
  }

  /**
   * Disconnect from existing session and remove it from local storage.
   */
  async disconnect() {
    if (this.connected()) {
      await this.session.delete(this.authentication!.sessionId!);
      this.authentication = null;
      this.saveSession();
    }
  }

  /**
   * Do we have a valid session id?
   *
   * Internal check. Does not validate the current session id.
   */
  connected() {
    return (
      this.authentication !== null && this.authentication.sessionId !== null
    );
  }

  /**
   * Is the current session still valid?
   *
   * This actually makes an API request in order to validate the current
   * session.
   */
  async active(): Promise<boolean> {
    try {
      if (this.connected()) {
        const response = (
          await this.session.get(this.authentication!.sessionId!)
        ).data;
        this.bearer = response.bearer;
        this.saveSession();
        return true;
      }
    } catch (error: unknown) {
      this.authentication = null;
      this.saveSession();
    }
    return false;
  }

  /**
   * Force a session refresh. May not actually be necessary and will probably be
   * deprecated in the future.
   */
  async refresh() {
    await this.getSessionData();
  }

  /**
   * Retrieve any application-defined data associated with this session.
   */
  async getSessionData(): Promise<object | null> {
    try {
      if (this.connected()) {
        const response = (
          await this.session.get(this.authentication!.sessionId!)
        ).data;
        this.bearer = response.bearer;
        this.saveSession();
        return response.data;
      }
    } catch (error: unknown) {
      this.authentication = null;
      this.saveSession();
    }
    return null;
  }

  /**
   * Set application-defined data for this session.
   */
  async setSessionData(data: object | null) {
    try {
      if (this.connected()) {
        await this.session.put(this.authentication!.sessionId!, data);
      }
    } catch (error: unknown) {
      this.authentication = null;
      this.saveSession();
    }
  }

  private saveSession() {
    if (this.connected()) {
      window.localStorage.setItem(
        this.localStorageKey,
        JSON.stringify(this.authentication)
      );
    } else {
      window.localStorage.removeItem(this.localStorageKey);
    }
  }

  private localStorageKey: string;
  private authentication: g4.AuthenticatedSessionResponse | null = null;
}
