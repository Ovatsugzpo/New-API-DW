const {Router} = require('express'),
      router = Router()

router.get('/eps')
router.get('/temps')
router.get('/ep/:ep/:temp?')
router.get('/temp/:temp')

module.exports = router