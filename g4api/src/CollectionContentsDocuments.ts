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
  CollectionContentsDocumentsRequest,
  CollectionContentsDocumentsResponse,
  ProblemDetails,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class CollectionContentsDocumentsAPI<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Collections
   * @name Post
   * @summary Get TOC node documents for collection
   * @request POST:/collection-contents-documents
   * @secure
   */
  post = (data: CollectionContentsDocumentsRequest, params: RequestParams = {}) =>
    this.request<CollectionContentsDocumentsResponse, ProblemDetails>({
      path: `/collection-contents-documents`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
