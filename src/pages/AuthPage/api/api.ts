import { IMutateData } from '../types/types.ts';

export const authUser = {
  login: (data: IMutateData) =>
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data)
    })
};

export const userData = {
  getUserData: (id: string, accessToken: string) =>
    fetch(`http://localhost:3000/userInfo/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Bearer ${accessToken}`
      }
    })
};
