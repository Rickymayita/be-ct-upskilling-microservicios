const characters = require('./characters.json')

module.exports={
    list: async () => {
        return characters;
    },
    create: async () => {
        throw Error('hay un error al momento de crear un personaje')
    }
}