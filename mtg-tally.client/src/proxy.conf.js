const { env } = require('process');

//const target = env.ASPNETCORE_HTTPS_PORT ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}` :
//  env.ASPNETCORE_URLS ? env.ASPNETCORE_URLS.split(';')[0] : 'https://localhost:7252';

const PROXY_CONFIG = [
  {
    context: [
      "/weatherforecast",
    ],
    target: "https://mtg-tally-api-f9ehetg9a8cfh6h2.canadacentral-01.azurewebsites.net/",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
