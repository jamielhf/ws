const router = require('koa-router')()
const userController = require('../controllers/user')

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/login', userController.login)

module.exports = router
