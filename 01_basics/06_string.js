const name = "Saloni"
const repocount = 50

// console.log(name+repocount+"value");
console.log(`Hello my name is ${name} and my repocount is ${repocount}`);
//String Interpolation

const gameName = new String('Saloni-vis-kum')

console.log(gameName[0]);
console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2))
console.log(gameName.indexOf("n"));

const newString = gameName.substring(0,3)
console.log(newString);

const anotherString =gameName.slice(-5,4)
console.log(anotherString);

const newSpace ="Saloni    "
console.log(newSpace.trim);

console.log(gameName.replace('l' , '-'))

console.log(gameName.includes("lo"));

console.log(gameName.split('-'));

