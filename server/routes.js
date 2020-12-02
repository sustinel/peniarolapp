const Router = require('koa-router');
const router = new Router();
const parse = require('co-body');

const { getProducts } = require('./queries.js');

const prepareAuth = (ctx) => {
    const accessToken = ctx.cookies.get("accessToken");
    const shopOrigin = ctx.cookies.get("shopOrigin");
    return {
        token: accessToken,
        shop: shopOrigin
    }
};

// Define routes here
router.get('/products/', async (ctx) => {
 
    const auth = prepareAuth(ctx);
    var products = {};
    await getProducts(auth).then(response => products = response.data.data.products); 
    console.error(JSON.stringify(products));  
    ctx.body = products;
});
router.get('/test/', async (ctx) => {
    ctx.body="<div><b>peñarol</b> es el mas grande</div>";
});
module.exports = {
    router
}
