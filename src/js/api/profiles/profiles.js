import { BASE_URL, PROFILES_ENDPOINT } from '../api.js';

export async function getProfile(name) {
  const token = localStorage.getItem('token');
  try {
    const res = await fetch(`${BASE_URL}${PROFILES_ENDPOINT}${name}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
}
