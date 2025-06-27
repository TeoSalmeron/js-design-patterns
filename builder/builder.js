class Produit {
    constructor() {
        this.nom = null
        this.grade = null
        this.categorie = null
        this.additifs = []
        this.ingredients = []
        this.allergenes = []
        this.marque = null
    }
}

class Categorie {
    constructor(nom) {
        this.nom = nom
    }
}

class Additif {
    constructor(nom, qteMilligrammes) {
        this.nom = nom
        this.qteMilligrammes = qteMilligrammes
    }
}

class Marque {
    constructor(nom) {
        this.nom = nom
    }
}

class Ingredient {
    constructor(nom, qteMilligrammes) {
        this.nom = nom 
        this.qteMilligrammes = qteMilligrammes
    }
}

class Allergene {
    constructor(nom, qteMilligrammes) {
        this.nom = nom
        this.qteMilligrammes = qteMilligrammes
    }
}

class ProduitBuilder {
    constructor() {
        this.produit = new Produit()
    }

    setNom(nom) {
        this.produit.nom = nom
        return this
    }

    setGrade(grade) {
        this.produit.grade = grade
        return this
    }

    setCategorie(nom) {
        this.produit.categorie = new Categorie(nom)
        return this
    }

    setMarque(nom) {
        this.produit.marque = new Marque(nom)
        return this
    }

    setAdditifs(nom, qteMilligrammes) {
        this.produit.additifs.push(new Additif(nom, qteMilligrammes))
        return this
    }

    setIngredient(nom, qteMilligrammes) {
        this.produit.ingredients.push(new Ingredient(nom, qteMilligrammes))
        return this
    }

    setAllergene(nom, qteMilligrammes) {
        this.produit.allergenes.push(new Allergene(nom, qteMilligrammes))
        return this
    }

    build() {
        return this.produit
    }
}

const produit = new ProduitBuilder()
    .setNom("Croissant")
    .setGrade("D")
    .setCategorie("Pâtisserie")
    .setMarque("La Bonne Boulangerie")
    .setAdditifs("E150", 5)
    .setAdditifs("E151, 6")
    .setIngredient("Farine", 100)
    .setIngredient("Sucre", 200)
    .setAllergene("Gluten", 10)
    .build()

console.log(produit)