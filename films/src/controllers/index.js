const { catchedAsync } = require('../utils')

module.exports ={
    getFilms: catchedAsync(require('./getFlims')),
    createFilm: catchedAsync(require('./createFilm'),)
}