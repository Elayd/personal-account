export const Statuses = {
  getStatusesInfo: (userId: string, applicationID: number, accessToken: string) =>
    fetch(`http://localhost:3000/statuses?userId=${userId}&applicationID=${applicationID}`, {
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
