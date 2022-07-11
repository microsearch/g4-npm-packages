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

import { ProblemDetails } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class RoleMetadataAPI<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Roles
   * @name Get
   * @summary Get role metadata
   * @request GET:/role-metadata/{id}
   * @secure
   */
  get = (id: number, query?: { app?: string }, params: RequestParams = {}) =>
    this.request<Record<string, any>, ProblemDetails>({
      path: `/role-metadata/${id}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Roles
   * @name Put
   * @summary Set role metadata
   * @request PUT:/role-metadata/{id}
   * @secure
   */
  put = (id: number, data: Record<string, any>, query?: { app?: string }, params: RequestParams = {}) =>
    this.request<void, ProblemDetails>({
      path: `/role-metadata/${id}`,
      method: "PUT",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
