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
  AuthenticatedSessionResponse,
  CreateSessionRequest,
  GetSessionResponse,
  ProblemDetails,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class SessionAPI<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Sessions
   * @name Post
   * @summary Create a persistent session
   * @request POST:/session
   * @secure
   */
  post = (data: CreateSessionRequest, params: RequestParams = {}) =>
    this.request<AuthenticatedSessionResponse, ProblemDetails>({
      path: `/session`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Sessions
   * @name Get
   * @summary Get session
   * @request GET:/session/{id}
   * @secure
   */
  get = (id: string, params: RequestParams = {}) =>
    this.request<GetSessionResponse, ProblemDetails>({
      path: `/session/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Sessions
   * @name Put
   * @summary Update session data
   * @request PUT:/session/{id}
   * @secure
   */
  put = (id: string, data: any, params: RequestParams = {}) =>
    this.request<void, ProblemDetails>({
      path: `/session/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Sessions
   * @name Delete
   * @summary Delete session
   * @request DELETE:/session/{id}
   * @secure
   */
  delete = (id: string, params: RequestParams = {}) =>
    this.request<void, ProblemDetails>({
      path: `/session/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
}
