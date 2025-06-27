class Element {
    constructor(nom, valeur, unite) {
        if (this.constructor === Element) {
            throw new Error('Element est une classe abstraite et ne peut être instanciée directement')
        }
        this.nom = nom
        this.valeur = valeur
        this.unite = unite
    }
}

module.exports = Element