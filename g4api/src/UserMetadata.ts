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

export class UserMetadataAPI<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Users
   * @name Get
   * @summary Get user metadata
   * @request GET:/user-metadata/{id}
   * @secure
   */
  get = (id: number, query?: { app?: string }, params: RequestParams = {}) =>
    this.request<Record<string, any>, ProblemDetails>({
      path: `/user-metadata/${id}`,
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
   * @summary Set user metadata
   * @request PUT:/user-metadata/{id}
   * @secure
   */
  put = (id: number, data: Record<string, any>, query?: { app?: string }, params: RequestParams = {}) =>
    this.request<void, ProblemDetails>({
      path: `/user-metadata/${id}`,
      method: "PUT",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
