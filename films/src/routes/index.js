const { Router } = require('express')
const contollers = require('../controllers')
const middlewares = require('../middlewares')

const router = Router();

router.get('/films', contollers.getFilms)

router.post('/films', middlewares.filmValidation, contollers.createFilm)

module.exports = router;