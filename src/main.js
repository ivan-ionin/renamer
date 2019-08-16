'use strict';
 
module.exports.snakeToCamelCase = (str) => {
    return str.replace(/_[a-z]{1}/gi, (s) => {
        return s.toUpperCase().substr(1);
    });
};

module.exports.camelCaseToSnake = (str) => {
    return str.replace(/([A-Z]{1})/g, '_$1').toLowerCase();
};
