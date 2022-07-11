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

import { GetUserEventsRequest, GetUserEventsResponse, ProblemDetails } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class UserEventsAPI<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Returns a list of user events.
   *
   * @tags Users
   * @name Post
   * @summary Get user events
   * @request POST:/user-events
   * @secure
   */
  post = (data: GetUserEventsRequest, params: RequestParams = {}) =>
    this.request<GetUserEventsResponse, ProblemDetails>({
      path: `/user-events`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
