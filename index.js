const _ = require('lodash');

const array = [1, [2, [3, [4, [5]]]]];

const flattenedArray = _.flattenDeep(array);

console.log(flattenedArray);
