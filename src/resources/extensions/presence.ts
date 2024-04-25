// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'uapi/core';
import { APIResource } from 'uapi/resource';
import { isRequestOptions } from 'uapi/core';
import * as PresenceAPI from 'uapi/resources/extensions/presence';

export class Presence extends APIResource {
  /**
   * Use this request to list the presence status of one or several Extensions.
   */
  list(
    userId: string,
    extension: '@self' | unknown,
    query?: PresenceListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PresenceListResponse>;
  list(
    userId: string,
    extension: '@self' | unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PresenceListResponse>;
  list(
    userId: string,
    extension: '@self' | unknown,
    query: PresenceListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PresenceListResponse> {
    if (isRequestOptions(query)) {
      return this.list(userId, extension, {}, query);
    }
    return this._client.get(`/extensions/${userId}/${extension}/presence`, { query, ...options });
  }
}

export interface PresenceListResponse {
  entry?: Array<PresenceListResponse.Entry>;

  /**
   * Whether the results are filtered. It takes into the consideration the default
   * filterBy.
   */
  filtered?: boolean;

  /**
   * The size of the chunk.
   */
  itemsPerPage?: number;

  /**
   * See Paging
   */
  paging?: PresenceListResponse.Paging;

  /**
   * Whether the results are sorted.
   */
  sorted?: boolean;

  /**
   * The index to start with when retrieving chunks. If you do not supply this
   * property, then it will be assumed zero. To retrieve next or previous chunk, use
   * the nextChunk, respectively prevChuck returned in response object.
   */
  startIndex?: number;
}

export namespace PresenceListResponse {
  export interface Entry {
    /**
     * The phone number of the extension.
     */
    extension: '@self' | unknown;

    /**
     * See PhoneRegistration
     */
    registration: Entry.Registration;

    /**
     * Defines presence status. Possible values:
     *  _ 0 - offline
     *  _ 1 - available
     *  \* 3 - busy
     */
    status: 0 | 1 | 3;
  }

  export namespace Entry {
    /**
     * See PhoneRegistration
     */
    export interface Registration {
      /**
       * Defines the User-Agent of the connected device.
       */
      agent?: string;

      /**
       * Specifies registration expiration date. Missing when registration has expired.
       */
      expire?: string;

      /**
       * Defines registration status. Possible values:
       *  _ 1 - registered
       *  _ 2 - no registration necessary
       *  _ -1 - not registered
       *  _ 0 - unknown
       */
      registration?: number;
    }
  }

  /**
   * See Paging
   */
  export interface Paging {
    /**
     * The index of the first object in the next chunk. To retrieve the next chunk, set
     * startIndex in the request to the value returned for this property. Not available
     * when this chunk is the last chunk.
     */
    next?: string;

    /**
     * The index of the first object in the previvous chunk. To retrieve the previous
     * chunk, set startIndex in the request to the value returned for this property.
     * Not available when this chunck is the first chunk.
     */
    prev?: string;
  }
}

export interface PresenceListParams {
  /**
   * The page size of a collection.
   */
  count?: number;

  /**
   * An array of ExtensionPresence field names. For standard values, please see the
   * Presence object.
   */
  fields?: Array<string>;

  /**
   * Records can be filtered only by the extension field.
   */
  filterBy?: 'extension';

  /**
   * Records can be filtered only by the extension field. _ equals (requires
   * filterValue as String) _ contains (requires filterValue as String) _ startsWith
   * (requires filterValue as String _ inArray (requires filterValue as Array)
   */
  filterOp?: 'equals' | 'contains' | 'startsWith' | 'inArray';

  /**
   * The value to `filterBy`.
   */
  filterValue?: string;

  /**
   * The parameter can be set to one of the values: asc or desc. Records will be
   * ordered by the number of the extension. You are not allowed to set the field to
   * sort by.
   */
  sortOrder?: 'asc' | 'desc';

  /**
   * The start index of the paged collection.
   */
  startIndex?: number;
}

export namespace Presence {
  export import PresenceListResponse = PresenceAPI.PresenceListResponse;
  export import PresenceListParams = PresenceAPI.PresenceListParams;
}
