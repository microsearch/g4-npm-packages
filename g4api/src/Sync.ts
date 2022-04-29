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
import { HttpClient, RequestParams } from "./http-client";

export class Sync<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Authentication
   * @name Post
   * @summary Process any pending G3 account synchronization requests
   * @request POST:/sync
   * @secure
   */
  post = (params: RequestParams = {}) =>
    this.request<void, ProblemDetails>({
      path: `/sync`,
      method: "POST",
      secure: true,
      ...params,
    });
}
