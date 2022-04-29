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

export class UserResetTokens<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Internal
   * @name Get
   * @summary Request user password reset tokens
   * @request GET:/user-reset-tokens
   * @secure
   */
  get = (query?: { email?: string }, params: RequestParams = {}) =>
    this.request<SecurityToken[], ProblemDetails>({
      path: `/user-reset-tokens`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
