import { BASE_URL, PROFILES_ENDPOINT } from '../api.js';

export async function getProfile(name) {
  const token = localStorage.getItem('token');
  const param = `?_listings=true`;
  const res = await fetch(`${BASE_URL}${PROFILES_ENDPOINT}${name}${param}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data;
}
