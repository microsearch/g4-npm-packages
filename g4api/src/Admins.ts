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

import { GetAdminsResponse, ProblemDetails } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Admins<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Returns the list of all admin user records.
   *
   * @tags Admins
   * @name Get
   * @summary Get admin user list
   * @request GET:/admins
   * @secure
   */
  get = (params: RequestParams = {}) =>
    this.request<GetAdminsResponse, ProblemDetails>({
      path: `/admins`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
