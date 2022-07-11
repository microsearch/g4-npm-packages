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
  CreateProfileRequest,
  CreateProfileResponse,
  ProblemDetails,
  UpdateProfileRequest,
  UpdateProfileResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ProfileAPI<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Profiles
   * @name Get
   * @summary Get a profile by id
   * @request GET:/profile/{id}
   * @secure
   */
  get = (id: number, params: RequestParams = {}) =>
    this.request<any, ProblemDetails>({
      path: `/profile/${id}`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Profiles
   * @name Put
   * @summary Update a profile
   * @request PUT:/profile/{id}
   * @secure
   */
  put = (id: number, data: UpdateProfileRequest, params: RequestParams = {}) =>
    this.request<UpdateProfileResponse, ProblemDetails>({
      path: `/profile/${id}`,
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
   * @tags Profiles
   * @name Delete
   * @summary Archive a profile
   * @request DELETE:/profile/{id}
   * @secure
   */
  delete = (id: number, params: RequestParams = {}) =>
    this.request<void, ProblemDetails>({
      path: `/profile/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Profiles
   * @name Post
   * @summary Create a new profile
   * @request POST:/profile
   * @secure
   */
  post = (data: CreateProfileRequest, params: RequestParams = {}) =>
    this.request<CreateProfileResponse, ProblemDetails>({
      path: `/profile`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
