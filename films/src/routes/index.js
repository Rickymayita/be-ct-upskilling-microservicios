const { Router } = require('express')
const contollers = require('../controllers')
const middlewares = require('../middlewares')

const router = Router();

router.get('/', contollers.getFilms)

router.post('/', middlewares.filmValidation, contollers.createFilm)

module.exports = router;