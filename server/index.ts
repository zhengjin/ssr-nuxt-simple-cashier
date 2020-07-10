const Koa = require('koa');
const consola = require('consola');
const {Nuxt, Builder} = require('nuxt');
// const {router} = require('./routers/index');
// import * as Koa from 'koa';
// import * as consola from 'consola';
// import router from './routers/index';
// import {Nuxt, Builder} from '@nuxt/types';
const KoaRouter = require('koa-router');

const router = new KoaRouter();

const app = new Koa();

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js');
config.dev = app.env !== 'production';

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config);

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server;

  await nuxt.ready();
  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  }

  // app.use(router.route());
  app.use(async(ctx: any, next: any) => {
    const reg = /node_api/i;
    debugger;
    if(!reg.test(ctx.url)){
      ctx.status = 200;
      ctx.respond = false; // Bypass Koa's built-in response handling
      ctx.req.ctx = ctx; // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
      nuxt.render(ctx.req, ctx.res);
    } else {
      try {
        await next();
      } catch (err) {
        ctx.response.status = err.statusCode || err.status || 500;
        ctx.response.body = {
          message: err.message
        }
      }
    }
  });

  //注册路由
  router.get('/node_api/api', async (ctx: any) => {
    debugger;
    console.log('index');
    ctx.body = 'index1111';
  });
  router.post('/node_api/api', async (ctx: any) => {
    debugger;
    console.log('index');
    ctx.body = 'index';
  });

  app.use(router.routes());  // 添加路由中间件
  app.use(router.allowedMethods()); // 对请求进行一些限制处理

  app.listen(port, host);
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start();
