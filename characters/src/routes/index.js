const { Router } = require('express')
const contollers = require('../controlllers')

const router = Router();

router.get('/', contollers.getCharacters)

router.post('/', contollers.createCharacter)

module.exports = router;