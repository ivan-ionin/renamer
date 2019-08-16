# Renamer
Snake names to camel case and back

## Examples

let renamer = require('renamer');

console.log(renamer.snakeToCamelCase('my_sweet_field_name')); // mySweetFieldName
console.log(renamer.camelCaseToSnake('mySweetFieldName')); // my_sweet_field_name
