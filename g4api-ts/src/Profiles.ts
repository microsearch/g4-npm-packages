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

import { GetProfilesResponse, ProblemDetails } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Profiles<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Profiles
   * @name Get
   * @summary Get profile list for a tenant
   * @request GET:/profiles
   * @secure
   */
  get = (params: RequestParams = {}) =>
    this.request<GetProfilesResponse, ProblemDetails>({
      path: `/profiles`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
