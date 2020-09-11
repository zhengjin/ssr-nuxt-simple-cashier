import {Router} from 'express';

const router = Router();

router.get('/foo', async (req: any, res: any) => {
  res.write(`get Time: ${Date.now()}`);
  res.end(JSON.stringify(req.body, null, 2));
});

router.post('/foo', async (req: any, res: any) => {
  debugger;
  res.write(`post Time: ${Date.now()}`);
  res.end(JSON.stringify(req.body, null, 2));
});

router.use('/login', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.write('you posted:\n');
  res.end(JSON.stringify(req.body, null, 2));
});

export default router;
