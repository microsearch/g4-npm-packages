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

import { CreateTenantRequest, CreateTenantResponse, GetTenantResponse, ProblemDetails } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Tenant<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Tenants
   * @name Get
   * @summary Get tenant by id
   * @request GET:/tenant/{id}
   * @secure
   */
  get = (id: number, params: RequestParams = {}) =>
    this.request<GetTenantResponse, ProblemDetails>({
      path: `/tenant/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Tenants
   * @name Delete
   * @summary Archive a tenant
   * @request DELETE:/tenant/{id}
   * @secure
   */
  delete = (id: number, params: RequestParams = {}) =>
    this.request<void, ProblemDetails>({
      path: `/tenant/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Tenants
   * @name Post
   * @summary Create a new tenant
   * @request POST:/tenant
   * @secure
   */
  post = (data: CreateTenantRequest, params: RequestParams = {}) =>
    this.request<CreateTenantResponse, ProblemDetails>({
      path: `/tenant`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
