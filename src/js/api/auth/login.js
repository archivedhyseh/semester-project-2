import { BASE_URL, LOGIN_ENDPOINT } from '../api.js';

export async function login(email, password) {
  try {
    const res = await fetch(`${BASE_URL}${LOGIN_ENDPOINT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
}
