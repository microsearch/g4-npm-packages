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

import { ImportUserRequest, ImportUserResponse, ProblemDetails } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class UserImport<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Users
   * @name Post
   * @summary Import a new user (DEPRECATED: use POST /import-users instead)
   * @request POST:/user-import
   * @secure
   */
  post = (data: ImportUserRequest, params: RequestParams = {}) =>
    this.request<ImportUserResponse, ProblemDetails>({
      path: `/user-import`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
