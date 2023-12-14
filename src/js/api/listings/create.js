import { BASE_URL, LISTINGS_ENDPOINT } from '../api.js';

export async function postListing(title, description, tags, media, endsAt) {
  const token = localStorage.getItem('token');
  try {
    const res = await fetch(`${BASE_URL}${LISTINGS_ENDPOINT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title, description, tags, media, endsAt }),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
}
