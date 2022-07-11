import * as g4 from "@microsearch/g4api";

export { G4ApiOptions, G4ApiCloneOptions, G4Api };

type G4ApiOptions = {
  /**
   * API endpoint The API endpoint is normally specified an environment name
   * (e.g. "dev", "prod", etc.). A complete URL may also be provided (e.g.
   * "http://localhost:5000"). This should only be used for G4 Service
   * debugging.
   */
  endpoint: string;
  /**
   * Tenant name. Not specifying a tenant implies a G4 Admin login.
   */
  tenant?: string;
  /**
   * Application name. This should almost always be specified. It will make
   * logging information much more useful.
   */
  application?: string;
  /**
   * Session Id. This is useful when you already have an established session.
   */
  sessionId?: string;
};

type G4ApiCloneOptions = {
  tenant?: string;
  application?: string;
};

const DEFAULT_REQUEST_TIMEOUT = 30 * 1000; // ms

class G4Api {
  constructor(options: G4ApiOptions) {
    let headers: Record<string, string> = {};
    if (options.tenant) headers["x-g4-tenant"] = options.tenant;
    if (options.application) headers["x-g4-application"] = options.application;
    if (options.endpoint.match(/^[a-z]+$/))
      options.endpoint = `https://g4-${options.endpoint}.v1.mrcapi.net`;
    if (options.sessionId) headers["x-g4-session-id"] = options.sessionId;
    this.config = {
      baseURL: options.endpoint,
      headers: headers,
      timeout: DEFAULT_REQUEST_TIMEOUT,
    };
    this.options = { ...options };
  }

  /**
   * Clone a G4Api with a different tenant or application.
   */
  clone(options: G4ApiCloneOptions) {
    const g4api = new G4Api({
      endpoint: this.options.endpoint,
      tenant: options.tenant ?? this.options.tenant,
      application: options.application ?? this.options.application,
      sessionId: this.options.sessionId,
    });
    g4api.config.headers["authorization"] =
      this.config.headers["authorization"];
    return g4api;
  }

  /**
   * Get bearer token
   */
  get bearer() {
    return this.bearerToken;
  }

  /**
   * Set bearer token directly
   *
   * This is not typically necessary.
   */
  set bearer(bearer: string | null) {
    if (bearer === null) {
      this.bearerToken = "";
    } else {
      this.bearerToken = bearer;
      this.config.headers["authorization"] = `bearer ${bearer}`;
    }
  }

  /**
   * Set API key
   *
   * Useful for back-end services which need to use the G4 API without
   * authentication.
   */
  set apikey(apikey: string) {
    this.config.headers["authorization"] = `apikey ${apikey}`;
    this.bearerToken = "";
  }

  /**
   * Set session timeout.
   *
   * @param timeout Timeout in seconds
   */
  set timeout(timeout: number) {
    this.config.timeout = timeout * 1000;
  }

  /**
   * Get endpoint
   */
  get endpoint() {
    return this.options.endpoint;
  }

  /**
   * /admin API
   */
  get admin() {
    return new g4.AdminAPI(this.config);
  }

  /**
   * /admins API
   */
  get admins() {
    return new g4.AdminsAPI(this.config);
  }

  /**
   * /auth API
   */
  get auth() {
    return new g4.AuthAPI(this.config);
  }

  /**
   * /collections API
   */
  get collections() {
    return new g4.CollectionsAPI(this.config);
  }

  /**
   * /document API
   */
  get document() {
    return new g4.DocumentAPI(this.config);
  }

  /**
   * /documents API
   */
  get documents() {
    return new g4.DocumentsAPI(this.config);
  }

  /**
   * /export-users API
   */
  get exportUsers() {
    return new g4.ExportUsersAPI(this.config);
  }

  /**
   * /import-users API
   */
  get importUsers() {
    return new g4.ImportUsersAPI(this.config);
  }

  /**
   * /password API
   */
  get password() {
    return new g4.PasswordAPI(this.config);
  }

  /**
   * /policy API
   */
  get policy() {
    return new g4.PolicyAPI(this.config);
  }

  /**
   * /profile API
   */
  get profile() {
    return new g4.ProfileAPI(this.config);
  }

  /**
   * /profile-metadata API
   */
  get profileMetadata() {
    return new g4.ProfileMetadataAPI(this.config);
  }

  /**
   * /profiles API
   */
  get profiles() {
    return new g4.ProfilesAPI(this.config);
  }

  /**
   * /role API
   */
  get role() {
    return new g4.RoleAPI(this.config);
  }

  /**
   * /role-metadata API
   */
  get roleMetadata() {
    return new g4.RoleMetadataAPI(this.config);
  }

  /**
   * /roles API
   */
  get roles() {
    return new g4.RolesAPI(this.config);
  }

  /**
   * /session API
   */
  get session() {
    return new g4.SessionAPI(this.config);
  }

  /**
   * /sync API
   */
  get sync() {
    return new g4.SyncAPI(this.config);
  }

  /**
   * /tenant API
   */
  get tenant() {
    return new g4.TenantAPI(this.config);
  }

  /**
   * /tenant-metadata API
   */
  get tenantMetadata() {
    return new g4.TenantMetadataAPI(this.config);
  }

  /**
   * /tenants API
   */
  get tenants() {
    return new g4.TenantsAPI(this.config);
  }

  /**
   * /user API
   */
  get user() {
    return new g4.UserAPI(this.config);
  }

  /**
   * /user-claim API
   */
  get userClaim() {
    return new g4.UserClaimAPI(this.config);
  }

  /**
   * /user-claim-tokens API
   */
  get userClaimTokens() {
    return new g4.UserClaimTokensAPI(this.config);
  }

  /**
   * /user-details API
   */
  get userDetails() {
    return new g4.UserDetailsAPI(this.config);
  }

  /**
   * /user-events API
   */
  get userEvents() {
    return new g4.UserEventsAPI(this.config);
  }

  /**
   * /user-import API
   */
  get userImport() {
    return new g4.UserImportAPI(this.config);
  }

  /**
   * /user-metadata API
   */
  get userMetadata() {
    return new g4.UserMetadataAPI(this.config);
  }

  /**
   * /user-password API
   */
  get userPassword() {
    return new g4.UserPasswordAPI(this.config);
  }

  /**
   * /user-reset-tokens API
   */
  get userResetTokens() {
    return new g4.UserResetTokensAPI(this.config);
  }

  /**
   * /users API
   */
  get users() {
    return new g4.UsersAPI(this.config);
  }

  private options: G4ApiOptions;
  private config: g4.ApiConfig;
  private bearerToken = "";
}
