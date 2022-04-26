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

import { CreateAdminRequest, CreateAdminResponse, ProblemDetails } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Admin<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Admins
   * @name Post
   * @summary Create new admin user
   * @request POST:/admin
   * @secure
   */
  post = (data: CreateAdminRequest, params: RequestParams = {}) =>
    this.request<CreateAdminResponse, ProblemDetails>({
      path: `/admin`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
