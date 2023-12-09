import { BASE_URL, LISTINGS_ENDPOINT } from '../api.js';

export async function postBid(id, amount) {
  const token = localStorage.getItem('token');
  const res = await fetch(`${BASE_URL}${LISTINGS_ENDPOINT}${id}/bids`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ amount }),
  });
  const data = await res.json();
  return data;
}
