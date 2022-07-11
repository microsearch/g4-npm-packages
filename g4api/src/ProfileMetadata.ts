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

export class ProfileMetadataAPI<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Profiles
   * @name Get
   * @summary Get profile metadata
   * @request GET:/profile-metadata/{id}
   * @secure
   */
  get = (id: number, query?: { app?: string }, params: RequestParams = {}) =>
    this.request<Record<string, any>, ProblemDetails>({
      path: `/profile-metadata/${id}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Profiles
   * @name Put
   * @summary Set profile metadata
   * @request PUT:/profile-metadata/{id}
   * @secure
   */
  put = (id: number, data: Record<string, any>, query?: { app?: string }, params: RequestParams = {}) =>
    this.request<void, ProblemDetails>({
      path: `/profile-metadata/${id}`,
      method: "PUT",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
