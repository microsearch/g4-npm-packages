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

export class TenantMetadataAPI<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Users
   * @name Get
   * @summary Get tenant metadata
   * @request GET:/tenant-metadata
   * @secure
   */
  get = (query?: { app?: string }, params: RequestParams = {}) =>
    this.request<Record<string, any>, ProblemDetails>({
      path: `/tenant-metadata`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name Put
   * @summary Set tenant metadata
   * @request PUT:/tenant-metadata
   * @secure
   */
  put = (data: Record<string, any>, query?: { app?: string }, params: RequestParams = {}) =>
    this.request<void, ProblemDetails>({
      path: `/tenant-metadata`,
      method: "PUT",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
