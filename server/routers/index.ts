const KoaRouter = require('koa-router');

const router = new KoaRouter()

//注册路由
router.get('/api', async (ctx: any) => {
  debugger;
  console.log('index');
  ctx.body = 'index';
});

export {router}
// module.exports = router;
