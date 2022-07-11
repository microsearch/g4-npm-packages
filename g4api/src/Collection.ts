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

import { ProblemDetails, UpdateCollectionRequest, UpdateCollectionResponse } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class CollectionAPI<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Collections
   * @name Post
   * @summary Add/Update documents in a collection
   * @request POST:/collection
   * @secure
   */
  post = (data: UpdateCollectionRequest, params: RequestParams = {}) =>
    this.request<UpdateCollectionResponse, ProblemDetails>({
      path: `/collection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
