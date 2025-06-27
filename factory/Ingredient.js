const Element = require('./Element')

class Ingredient extends Element {
    constructor(nom, valeur, unite) {
        super(nom, valeur, unite)
    }
}

module.exports = Ingredient