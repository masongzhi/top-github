const rp = require('request-promise');

async function transfer(ctx) {
  const { url } = ctx.params;
  const { method, body } = ctx.request;
  const options = {
    uri: `https://api.github.com/${url}`,
    qs: ctx.query,
    body: body,
    headers: {
      'User-Agent': 'Request-Promise'
    },
    json: true
  };
  const res = await rp(options);
  ctx.body = res;
}

module.exports = {
  repositorySearchUrl
}
