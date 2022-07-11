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

import { ProblemDetails } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class DocumentAPI<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Documents
   * @name Post
   * @summary Verify an uploaded document
   * @request POST:/document/{id}
   * @secure
   */
  post = (id: number, query?: { jobid?: string }, params: RequestParams = {}) =>
    this.request<void, ProblemDetails>({
      path: `/document/${id}`,
      method: "POST",
      query: query,
      secure: true,
      ...params,
    });
}
