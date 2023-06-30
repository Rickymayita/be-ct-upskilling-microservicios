const films = require('./films.json')

module.exports={
    list: async ()=>{
        return films
    },
    create: async () => {
        throw Error('hay un error en la BDD momento de crear una pelicula')
    }
}