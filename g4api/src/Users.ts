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

import { GetUsersRequest, GetUsersWithAppMetadataResponse, ProblemDetails } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class UsersAPI<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Returns the list of user records which match the specified (optional) criteria.
   *
   * @tags Users
   * @name Get
   * @summary Get user list (DEPRECATED: use POST /users instead)
   * @request GET:/users
   * @secure
   */
  get = (query?: { contains?: string; skip?: number; take?: number; archived?: boolean }, params: RequestParams = {}) =>
    this.request<GetUsersWithAppMetadataResponse, ProblemDetails>({
      path: `/users`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Returns the list of user records which match the specified (optional) criteria.
   *
   * @tags Users
   * @name Post
   * @summary Get user list
   * @request POST:/users
   * @secure
   */
  post = (data: GetUsersRequest, params: RequestParams = {}) =>
    this.request<GetUsersWithAppMetadataResponse, ProblemDetails>({
      path: `/users`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
