const test = require('./');
const concat = require('./concat');

var fullName = concat("Émile", "Paradis");
test(fullName);