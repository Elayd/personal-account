export const Applications = {
  getApplications: (id: string, accessToken: string, page: number, limit: number = 5) =>
    fetch(`http://localhost:3000/applications?userId=${id}&_page=${page}&_limit=${limit}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Bearer ${accessToken}`
      }
    }).then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
};
