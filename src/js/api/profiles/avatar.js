import { BASE_URL, PROFILES_ENDPOINT } from '../api.js';

export async function putAvatar(name, avatar) {
  const token = localStorage.getItem('token');
  try {
    const res = await fetch(`${BASE_URL}${PROFILES_ENDPOINT}${name}/media`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ avatar }),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
}
