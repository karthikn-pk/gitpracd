// var generateName = require("sillyname");
import generateName from "sillyname";
import superheroes from "superheroes";

superheroes.all;
//=> ['3-D Man', 'A-Bomb', …]

var superheroname = superheroes.random();
var sillyname = generateName();

// console.log(`my name is ${sillyname}  `);
// console.log(`my friend name is ${sillyname}`);

console.log(`my name is ${superheroname}  `);
console.log(`my friend name is ${superheroname}`);
