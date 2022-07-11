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

import { ProblemDetails, SecurityToken } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class UserClaimTokensAPI<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Internal
   * @name Get
   * @summary Request user claim tokens
   * @request GET:/user-claim-tokens
   * @secure
   */
  get = (query?: { email?: string }, params: RequestParams = {}) =>
    this.request<SecurityToken[], ProblemDetails>({
      path: `/user-claim-tokens`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
