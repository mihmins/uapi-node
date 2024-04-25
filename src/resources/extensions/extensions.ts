// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'uapi/resource';
import * as PresenceAPI from 'uapi/resources/extensions/presence';

export class Extensions extends APIResource {
  presence: PresenceAPI.Presence = new PresenceAPI.Presence(this._client);
}

export namespace Extensions {
  export import Presence = PresenceAPI.Presence;
  export import PresenceListResponse = PresenceAPI.PresenceListResponse;
  export import PresenceListParams = PresenceAPI.PresenceListParams;
}
