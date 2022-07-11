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

import { GetRolesResponse, ProblemDetails } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class RolesAPI<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Roles
   * @name GetScope
   * @summary Get role list for a tenant and scope
   * @request GET:/roles/{scope}
   * @secure
   */
  getScope = (scope: string, params: RequestParams = {}) =>
    this.request<GetRolesResponse, ProblemDetails>({
      path: `/roles/${scope}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Roles
   * @name Get
   * @summary Get role list for a tenant
   * @request GET:/roles
   * @secure
   */
  get = (params: RequestParams = {}) =>
    this.request<GetRolesResponse, ProblemDetails>({
      path: `/roles`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
