import { BASE_URL, LISTINGS_ENDPOINT } from '../api.js';

export async function getListings(limit, offset, sort, active, tag) {
  const param = `?limit=${limit}&offset=${offset}&sortOrder=${sort}&_active=${active}&_tag=${tag}&_bids=true`;
  const res = await fetch(`${BASE_URL}${LISTINGS_ENDPOINT}${param}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  return data;
}
