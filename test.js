'use strict';

let renamer = require('./src/main');

let snake = 'my_sweet_database_name';
let camel = 'mySweetFieldName';

console.log('Snake "%s" to camel case: %s', snake, renamer.snakeToCamelCase(snake));
console.log('Camel "%s" to snake: %s', camel, renamer.camelCaseToSnake(camel));
