const Ingredient = require('./Ingredient')
const Allergene = require('./Allergene')
const Additif = require('./Additif')
const TypeElement = require('./TypeElement')

function createElement(type, nom, valeur, unite) {
    switch(type) {
        case TypeElement.INGREDIENT:
            return new Ingredient(nom, valeur, unite)
        case TypeElement.ALLERGENE:
            return new Allergene(nom, valeur, unite)
        case TypeElement.ADDITIF:
            return new Additif(nom, valeur, unite)
        default:
            throw new Error(`Type inconnu : ${type}`)
    }
}

module.exports = { createElement }