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

import { ProblemDetails, UserResetPasswordRequest } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class UserPasswordAPI<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Internal
   * @name Put
   * @summary Reset a user password
   * @request PUT:/user-password
   * @secure
   */
  put = (data: UserResetPasswordRequest, params: RequestParams = {}) =>
    this.request<void, ProblemDetails>({
      path: `/user-password`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
