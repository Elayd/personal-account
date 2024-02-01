import { PersonData } from '../types/types.ts';

export const personInfo = {
  update: (data: PersonData, id: string, accessToken: string) =>
    fetch(`http://localhost:3000/userInfo/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Bearer ${accessToken}`
      },
      body: JSON.stringify(data)
    })
};
