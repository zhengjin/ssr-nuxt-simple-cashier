// @ts-nocheck
import express from 'express';
import consola from 'consola';
import {Nuxt, Builder} from 'nuxt';
import bodyParser from 'body-parser';

import router from './routers';

const app = express();

// Import and Set Nuxt.js options
import config from '../nuxt.config';

config.dev = !(process.env.NODE_ENV === 'production');

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config);

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server;

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    builder.build()
  } else {
    await nuxt.ready()
  }

  app.use('/node_api', router);

  // Init body-parser options (inbuilt with express)
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));

  // Give nuxt middleware to express
  app.use(nuxt.render);

  // Listen the server
  app.listen(port, host);
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start();
