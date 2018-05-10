const axios = require('axios');

async function transfer(ctx) {
  const { url } = ctx.params;
  const { method, body } = ctx.request;
  const options = {
    url: `https://api.github.com/${url}`,
    method: method,
    params: ctx.query,
    data: body,
    headers: {
      'X-Requested-With': 'XMLHttpRequest'
    }
  };
  const res = await axios(options);
  ctx.body = res;
}

module.exports = {
  transfer
}
