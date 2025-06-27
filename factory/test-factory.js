const { createElement } = require('./factory')
const TypeElement = require('./TypeElement')
const Unite = require('./Unite')

const sucre = createElement(TypeElement.INGREDIENT, 'Sucre', 20, Unite.MILLI_GRAMMES)
console.log(sucre)

const gluten = createElement(TypeElement.ALLERGENE, 'Gluten', 5, Unite.MICRO_GRAMMES)
console.log(gluten)

const e150 = createElement(TypeElement.ADDITIF, 'Colorant E150', 2, Unite.MILLI_GRAMMES)
console.log(e150)