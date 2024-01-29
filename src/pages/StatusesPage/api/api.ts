export const StatusBadgesData = {
  getStatusBadges: (id: string, accessToken: string) =>
    fetch(`http://localhost:3000/statuses/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Bearer ${accessToken}`
      }
    })
};
