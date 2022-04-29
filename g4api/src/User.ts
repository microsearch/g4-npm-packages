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

import {
  CreateUserRequest,
  CreateUserResponse,
  GetUserResponse,
  ProblemDetails,
  UpdateUserRequest,
  UpdateUserResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class User<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Users
   * @name Get
   * @summary Get user by user id
   * @request GET:/user/{id}
   * @secure
   */
  get = (id: number, params: RequestParams = {}) =>
    this.request<GetUserResponse, ProblemDetails>({
      path: `/user/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name Put
   * @summary Update existing user
   * @request PUT:/user/{id}
   * @secure
   */
  put = (id: number, data: UpdateUserRequest, params: RequestParams = {}) =>
    this.request<UpdateUserResponse, ProblemDetails>({
      path: `/user/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name Delete
   * @summary Archive a user
   * @request DELETE:/user/{id}
   * @secure
   */
  delete = (id: number, params: RequestParams = {}) =>
    this.request<void, ProblemDetails>({
      path: `/user/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name Post
   * @summary Create new user
   * @request POST:/user
   * @secure
   */
  post = (data: CreateUserRequest, params: RequestParams = {}) =>
    this.request<CreateUserResponse, ProblemDetails>({
      path: `/user`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
