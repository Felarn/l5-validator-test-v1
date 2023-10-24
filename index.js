import Validator from "./src/Validator.js";

const v = new Validator();

// Позволяет описывать валидацию для свойств объекта
const schema = v.object().shape({
  id: v.number().odd(), // теперь, при валидации объекта с ключом id, значение этого ключа пройдет валидацию в соответствии с текущими методами
  basket: v.array().length(3),
});

console.log(
  schema.isValid({ id: 11, basket: ["potatos", "tomatos", "oranges"] })
); // true
console.log(
  schema.isValid({ id: 12, basket: ["potatos", "tomatos", "oranges"] })
); // false
console.log(schema.isValid({ id: 11, basket: [] })); // false

export default Validator;
