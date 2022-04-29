/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface AdminUser {
  /** @format int32 */
  id: number;

  /** @format date-time */
  created: string;
  status: UserStatus;
  username: string;
  fullname: string;
  email: string;
  roles: number[];

  /** @format date-time */
  lastSeen: string | null;
  roleNames: string[];
}

export interface AuthenticatedSessionResponse {
  validCredentials: boolean;
  accessAllowed: boolean;
  sessionId: string | null;

  /** @format int32 */
  userId: number | null;
  username: string | null;
  fullname: string | null;
  email: string | null;
  bearer: string | null;
  claims: string[] | null;
  roles: string[] | null;
  profiles: string[] | null;
  version: string;
}

export interface Collection {
  /** @format int32 */
  id: number;
  name: string;
  title: string;
  instances: CollectionInstance[];
}

export interface CollectionDocument {
  signature?: string | null;
  filename?: string | null;
  title: string;
  fields: Record<string, string>;
}

export interface CollectionInstance {
  /** @format int32 */
  id: number;
  schema: Record<string, FieldDescriptor>;

  /** @format date-time */
  created: string;

  /** @format date-time */
  updated: string | null;

  /** @format date-time */
  indexed: string | null;
}

export interface CreateAdminRequest {
  username: string;
  password?: string | null;
  passwordCrypto?: string | null;
  passwordSalt?: string | null;
  passwordHash?: string | null;
  fullname: string;
  email: string;
  roles: number[];
}

export interface CreateAdminResponse {
  /** @format int32 */
  id?: number;
}

export interface CreateProfileRequest {
  name: string;
  collections: number[];
}

export interface CreateProfileResponse {
  /** @format int32 */
  id: number;
}

export interface CreateRoleRequest {
  defaultScope?: string | null;
  name: string;
  claims?: string[] | null;
}

export interface CreateRoleResponse {
  /** @format int32 */
  id: number;
}

export interface CreateSessionRequest {
  /** @example user@microsearch.net */
  username: string;

  /** @example password123 */
  password: string;
  data?: any;

  /** @format int32 */
  timeout?: number | null;
  detail?: Record<string, any>;
}

export interface CreateTenantRequest {
  name: string;
  description?: string | null;
}

export interface CreateTenantResponse {
  /** @format int32 */
  id: number;
}

export interface CreateUserRequest {
  status?: UserStatus;
  username?: string | null;
  password?: string | null;
  fullname?: string | null;
  email?: string | null;
  roles?: number[] | null;
  profiles?: number[] | null;
  collections?: number[] | null;
  denyCollections?: number[] | null;
  customFields?: Record<string, any>;
  appName?: string | null;
  appMetadata?: Record<string, any>;
}

export interface CreateUserResponse {
  /** @format int32 */
  id: number;
}

export interface ExportedUser {
  /** @format date-time */
  created: string;
  status: UserStatus;
  username: string;
  fullname: string;
  email: string;
  roles: string[];
  profiles: string[];
  collections: string[];
  denyCollections: string[];
  passwordHash: string;

  /** @format date-time */
  archived: string | null;
  metadata: Record<string, Record<string, any>>;
}

export interface ExportUsersResponse {
  tenant: string;
  version: string;
  stage: string;

  /** @format date-time */
  exported: string;
  users: ExportedUser[];
}

export type FieldDescriptor = object;

export interface G4AuthAuthMessage {
  validCredentials: boolean;
  accessAllowed: boolean;
  username: string;
  host: string;
}

export interface G4CollectionLoadedMessage {
  /** @format int32 */
  count: number;
  name: string;
  title: string;
}

export interface G4CollectionLoadingMessage {
  /** @format int32 */
  count: number;
  name: string;
  title: string;
}

export interface G4DocumentLoadedMessage {
  username: string;

  /** @format int64 */
  docId: number;
  signature: string;
  docType: string | null;
  filename: string | null;
  loaded: string | null;
  policies: string[];
  jobId: string | null;
}

export interface G4SessionCloseMessage {
  sessionId: string;
  host: string;
}

export interface G4SessionCreateMessage {
  sessionId: string;
  username: string;
  host: string;
}

export interface G4SessionFailMessage {
  username: string;
  host: string;
}

export interface G4TenantArchiveMessage {
  /** @format int32 */
  tenantId: number;
}

export interface G4TenantCreateMessage {
  /** @format int32 */
  tenantId: number;
  name: string;
  description: string | null;
}

export interface G4UserArchiveMessage {
  /** @format int32 */
  id: number;
  host: string;
}

export interface G4UserCreateMessage {
  username: string;

  /** @format int32 */
  id: number;
  host: string;
}

export interface G4UserImportMessage {
  username: string;

  /** @format int32 */
  id: number;
  host: string;
}

export interface G4UserUpdateMessage {
  username: string | null;

  /** @format int32 */
  id: number;
  host: string;
}

export interface GetAdminsResponse {
  admins?: AdminUser[] | null;
}

export interface GetCollectionsResponse {
  collections: Collection[];
}

export interface GetProfileResponse {
  /** @format int32 */
  id: number;
  name: string;
  collections: number[];
}

export interface GetProfilesResponse {
  profiles: GetProfileResponse[];
}

export interface GetRolesResponse {
  scopes: string[];
  roles: RoleResponse[];
}

export interface GetSessionResponse {
  bearer: string;

  /** @format int32 */
  userId: number;
  data: any;
}

export interface GetTenantResponse {
  /** @format int32 */
  id: number;
  name: string;

  /** @format date-time */
  created: string;
  description: string | null;

  /** @format uuid */
  repository: string;
  activeUsers: Record<string, number>;
  archivedUsers: Record<string, number>;
  userEvents: Record<string, number>;

  /** @format date-time */
  firstEvent: string | null;

  /** @format date-time */
  lastEvent: string | null;
}

export interface GetTenantsResponse {
  tenants: GetTenantResponse[];
}

export interface GetUserDetailsResponse {
  /** @format int32 */
  id: number;

  /** @format date-time */
  created: string;
  status: UserStatus;
  username: string;
  fullname: string;
  email: string;
  roles: number[];
  profiles: number[];

  /** @format date-time */
  lastSeen: string | null;
  metadata: Record<string, Record<string, any>>;
  roleNames: string[];
  profileNames: string[];
}

export interface GetUserEventsRequest {
  /** @format int32 */
  userId?: number | null;

  /** @format date-time */
  start?: string | null;

  /** @format date-time */
  stop?: string | null;
  eventType?: UserEventType;
  host?: string | null;
  appName?: string | null;

  /** @format int32 */
  skip?: number | null;

  /** @format int32 */
  take?: number | null;
}

export interface GetUserEventsResponse {
  request: GetUserEventsRequest;

  /** @format int32 */
  total: number;
  events: RetrievedUserEvent[];
}

export interface GetUserResponse {
  /** @format int32 */
  id: number;

  /** @format date-time */
  created: string;
  status: UserStatus;
  username: string;
  fullname: string;
  email: string;
  roles: number[];
  profiles: number[];

  /** @format date-time */
  lastSeen: string;
  metadata: Record<string, any>;
  roleNames: string[];
  profileNames: string[];
}

export interface GetUsersRequest {
  appName?: string | null;
  contains?: string | null;

  /** @format int32 */
  skip?: number | null;

  /** @format int32 */
  take?: number | null;
  archived?: boolean | null;
}

export interface GetUsersWithAppMetadataResponse {
  /** @format int32 */
  total: number;
  contains: string | null;

  /** @format int32 */
  skip: number | null;

  /** @format int32 */
  take: number | null;
  archived: boolean | null;
  users: UserWithAppMetadata[];
}

export interface ImportUserRequest {
  status: UserStatus;
  username: string;
  passwordCrypto: string;
  passwordSalt: string;
  passwordHash: string;
  fullname: string;
  email: string;
  roles: number[];
  profiles: number[];
  collections: number[];
  denyCollections: number[];
  customFields?: Record<string, any>;
  appName?: string | null;
  appMetadata?: Record<string, any>;
}

export interface ImportUserResponse {
  /** @format int32 */
  id: number;
  bearer: string;
}

export interface ImportUsersRequest {
  tenant: string;
  version: string;
  users: ExportedUser[];
}

export interface ImportUsersResponse {
  /** @format int32 */
  importErrors: number;

  /** @format int32 */
  usersImported: number;
  errors: string[];
  imports: string[];
}

export interface LoadDocumentRequest {
  signature: string;
  docType: string;
  filename?: string | null;
  policies: string[];

  /** @format int32 */
  parts?: number | null;
}

export interface LoadDocumentResponse {
  /** @format int64 */
  id: number;
  signedUploadUrls: string[];
  bearer: string;
}

export interface PasswordChangeRequest {
  username: string;
  password: string;
  newPassword: string;
}

export interface PasswordPolicy {
  /** @format int32 */
  minLength?: number;

  /** @format int32 */
  minNumeric?: number;

  /** @format int32 */
  minUpperCase?: number;

  /** @format int32 */
  minLowerCase?: number;

  /** @format int32 */
  minNonAlphanumeric?: number;
}

export interface PostCollectionRequest {
  jobId?: string | null;
  name: string;
  title: string;
  schema: Record<string, FieldDescriptor>;
  documents: CollectionDocument[];
}

export interface PostCollectionResponse {
  /** @format int32 */
  collectionId: number;

  /** @format int32 */
  instanceId: number;
  errors: string[];
}

export interface ProblemDetails {
  type?: string | null;
  title?: string | null;

  /** @format int32 */
  status?: number | null;
  detail?: string | null;
  instance?: string | null;
}

export interface RefreshResponse {
  username: string;
  claims: string[];
  bearer: string;
}

export interface RetrievedUserEvent {
  /** @format int32 */
  userId: number;

  /** @format int32 */
  activeUserId: number;

  /** @format date-time */
  occurred: string;
  eventType: UserEventType;
  host: string;
  appName: string | null;
  detail: Record<string, any>;
  username: string;
  fullname: string;
  activeUsername: string;
  activeFullname: string;
  status: UserStatus;
}

export interface RoleResponse {
  /** @format int32 */
  id: number;
  scope: string;
  name: string;
  claims: string[];
}

export interface SecurityToken {
  username: string | null;
  fullname: string;
  token: string;
}

export interface UpdateProfileRequest {
  name?: string | null;
  collections?: number[] | null;
}

export interface UpdateProfileResponse {
  /** @format int32 */
  id: number;
  name: string;
  collections: number[];
}

export interface UpdateRoleRequest {
  defaultScope?: string | null;
  newName?: string | null;
  claims?: string[] | null;
}

export interface UpdateUserRequest {
  status?: UserStatus;
  username?: string | null;
  fullname?: string | null;
  email?: string | null;
  scope?: string | null;
  roles?: number[] | null;
  profiles?: number[] | null;
  collections?: number[] | null;
  denyCollections?: number[] | null;
  customFields?: Record<string, any>;
  password?: string | null;
  passwordCrypto?: string | null;
  passwordSalt?: string | null;
  passwordHash?: string | null;
  appName?: string | null;
  appMetadata?: Record<string, any>;
}

export interface UpdateUserResponse {
  /** @format int32 */
  id: number;
  status: UserStatus;
  username: string;
  fullname: string;
  email: string;
  roles: number[];
  profiles: number[];
  collections: number[];
  denyCollections: number[];

  /** @format date-time */
  lastSeen: string | null;
  metadata: Record<string, any>;
}

export interface UserAuthenticationRequest {
  /** @example user@microsearch.net */
  username: string;

  /** @example password123 */
  password: string;
  detail?: Record<string, any>;
}

export interface UserAuthenticationResponse {
  validCredentials: boolean;
  accessAllowed: boolean;

  /** @format int32 */
  userId: number | null;
  username: string | null;
  fullname: string | null;
  email: string | null;
  bearer: string | null;
  claims: string[] | null;
  roles: string[] | null;
  profiles: string[] | null;
  version: string;
}

export interface UserClaimAccountRequest {
  token: string;
  username?: string | null;
  password?: string | null;
}

/**
 * @format int32
 */
export type UserEventType = 0 | 1 | 2 | 3 | 4 | 5 | 1000 | 1001 | 1002 | 1003 | 1004 | 1005;

export interface UserResetPasswordRequest {
  token: string;
  password?: string | null;
}

/**
 * @format int32
 */
export type UserStatus = 0 | 1 | 2 | 3 | 4 | 5;

export interface UserWithAppMetadata {
  /** @format int32 */
  id: number;
  status: UserStatus;
  username: string;
  fullname: string;
  email: string;
  roles: number[];
  profiles: number[];
  collections: number[];
  denyCollections: number[];

  /** @format date-time */
  lastSeen: string | null;
  metadata: Record<string, any>;
}
