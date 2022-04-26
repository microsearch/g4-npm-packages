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

import { ExportUsersResponse, ProblemDetails } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class ExportUsers<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags ImportExport
   * @name Post
   * @summary Export users
   * @request POST:/export-users
   * @secure
   */
  post = (params: RequestParams = {}) =>
    this.request<ExportUsersResponse, ProblemDetails>({
      path: `/export-users`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
}
