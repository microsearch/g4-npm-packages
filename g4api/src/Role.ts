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

import {
  CreateRoleRequest,
  CreateRoleResponse,
  ProblemDetails,
  RoleResponse,
  UpdateRoleRequest,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class RoleAPI<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Roles
   * @name Get
   * @summary Get a role by id
   * @request GET:/role/{id}
   * @secure
   */
  get = (id: number, params: RequestParams = {}) =>
    this.request<RoleResponse, ProblemDetails>({
      path: `/role/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Roles
   * @name Put
   * @summary Update a role
   * @request PUT:/role/{id}
   * @secure
   */
  put = (id: number, data: UpdateRoleRequest, params: RequestParams = {}) =>
    this.request<RoleResponse, ProblemDetails>({
      path: `/role/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Roles
   * @name Delete
   * @summary Archive a role
   * @request DELETE:/role/{id}
   * @secure
   */
  delete = (id: number, params: RequestParams = {}) =>
    this.request<void, ProblemDetails>({
      path: `/role/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Roles
   * @name Post
   * @summary Create a new role
   * @request POST:/role
   * @secure
   */
  post = (data: CreateRoleRequest, params: RequestParams = {}) =>
    this.request<CreateRoleResponse, ProblemDetails>({
      path: `/role`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
