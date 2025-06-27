const Element = require('./Element')

class Allergene extends Element {
    constructor(nom, valeur, unite) {
        super(nom, valeur, unite)
    }
}

module.exports = Allergene