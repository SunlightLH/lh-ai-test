const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const json = require('koa-json');
const logger = require('koa-logger');

const app = new Koa();
const router = new Router();

// Middleware
app.use(logger());
app.use(json());
app.use(bodyParser());

// Error handling
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = {
      success: false,
      message: err.message
    };
    ctx.app.emit('error', err, ctx);
  }
});

// Routes
router.get('/', async (ctx) => {
  ctx.body = {
    success: true,
    message: 'Welcome to lh-ai-test Koa API!',
    timestamp: new Date().toISOString()
  };
});

router.get('/api/health', async (ctx) => {
  ctx.body = {
    success: true,
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  };
});

router.get('/api/users', async (ctx) => {
  ctx.body = {
    success: true,
    data: [
      { id: 1, name: 'Alice', email: 'alice@example.com' },
      { id: 2, name: 'Bob', email: 'bob@example.com' },
      { id: 3, name: 'Charlie', email: 'charlie@example.com' }
    ]
  };
});

router.post('/api/users', async (ctx) => {
  const { name, email } = ctx.request.body;
  
  if (!name || !email) {
    ctx.status = 400;
    ctx.body = {
      success: false,
      message: 'Name and email are required'
    };
    return;
  }
  
  ctx.status = 201;
  ctx.body = {
    success: true,
    message: 'User created successfully',
    data: {
      id: Date.now(),
      name,
      email,
      createdAt: new Date().toISOString()
    }
  };
});

// Apply routes
app.use(router.routes()).use(router.allowedMethods());

// Error event handling
app.on('error', (err, ctx) => {
  console.error('Server error:', err);
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📝 API Endpoints:`);
  console.log(`   GET  /`);
  console.log(`   GET  /api/health`);
  console.log(`   GET  /api/users`);
  console.log(`   POST /api/users`);
});

module.exports = app;
