const rp = require('request-promise');

async function repositorySearchUrl(ctx, next) {
  const options = {
    uri: 'https://api.github.com/search/repositories',
    qs: ctx.query,
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
