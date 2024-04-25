// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Uapi from 'uapi';
import { Response } from 'node-fetch';

const uapi = new Uapi({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource presence', () => {
  test('list', async () => {
    const responsePromise = uapi.extensions.presence.list('string', '@self');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      uapi.extensions.presence.list('string', '@self', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Uapi.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      uapi.extensions.presence.list(
        'string',
        '@self',
        {
          count: 0,
          fields: ['string', 'string', 'string'],
          filterBy: 'extension',
          filterOp: 'equals',
          filterValue: 'string',
          sortOrder: 'asc',
          startIndex: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Uapi.NotFoundError);
  });
});
