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
  CreateCollectionRequest,
  CreateCollectionResponse,
  GetCollectionsResponse,
  ProblemDetails,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class CollectionsAPI<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Collections
   * @name Get
   * @summary Get list of document collections
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
   * @summary Create document collection
   * @request POST:/collections
   * @secure
   */
  post = (data: CreateCollectionRequest, params: RequestParams = {}) =>
    this.request<CreateCollectionResponse, ProblemDetails>({
      path: `/collections`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
