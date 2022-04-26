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
  GetCollectionsResponse,
  PostCollectionRequest,
  PostCollectionResponse,
  ProblemDetails,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Collections<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Collections
   * @name Get
   * @request GET:/collections
   * @secure
   */
  get = (params: RequestParams = {}) =>
    this.request<GetCollectionsResponse, ProblemDetails>({
      path: `/collections`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Collections
   * @name Post
   * @request POST:/collections
   * @secure
   */
  post = (data: PostCollectionRequest, params: RequestParams = {}) =>
    this.request<PostCollectionResponse, ProblemDetails>({
      path: `/collections`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
