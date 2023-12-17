import { BASE_URL, PROFILES_ENDPOINT } from '../api.js';

export async function getProfileListings(name, limit, offset, sort) {
  const token = localStorage.getItem('token');
  const param = `?limit=${limit}&offset=${offset}&sortOrder=${sort}&_bids=true&sort=created`;
  try {
    const res = await fetch(
      `${BASE_URL}${PROFILES_ENDPOINT}${name}/listings${param}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
}
