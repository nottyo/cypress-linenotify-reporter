const axios = require('axios');

const lineNotify = (message, token) => {
  const endpoint = 'https://notify-api.line.me/api/notify';
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${token}`,
    },
  };
  const params = new URLSearchParams();
  params.append('message', message);
  return axios.default.post(endpoint, params, config);
};

module.exports = lineNotify;
