const { Router } = require('express')
const contollers = require('../controllers')

const router = Router();

router.get('/', contollers.getFilms)

router.post('/', contollers.createFilm)

module.exports = router;