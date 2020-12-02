const axios = require("axios/index");

const graphQLClient = (query, auth) => {
  const settings = {
    async: true,
    crossDomain: true,
    url: `https://${auth.shop}/admin/api/2020-10/graphql.json`,
    method: "POST",
    headers: {
      "X-Shopify-Access-Token": auth.token,
      "Content-Type": "application/graphql",
    },
    data: {},
    timeout: 10000,
  };
  try
 {
    return axios(Object.assign({}, settings, { data: query }));
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  graphQLClient,
};
