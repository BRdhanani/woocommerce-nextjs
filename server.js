const next = require('next');
const express = require('express');

var WooCommerceAPI = require('woocommerce-api');
 
var WooCommerce = new WooCommerceAPI({
  url: 'http://localhost/woocommerce-nextjs',
  consumerKey: 'ck_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  consumerSecret: 'cs_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  wpAPI: true,
  version: 'wc/v1'
});

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
	const server = express();

	server.get('+', (req, res) => {
		return handle(req, res);
	})

	server.listen(3000, err => {
		if (err) throw err;
		console.log('Ready on http://localhost:3000')
	})
})
.catch(ex => {
	console.error(ex.stack);
	process.exit(1);
});