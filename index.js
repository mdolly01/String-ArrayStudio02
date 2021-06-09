let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

let strings = [protoArray1, protoArray2, protoArray3, protoArray4];

//a) Use the 'includes' method to check to see if the words in each string are separated by commas (,), semicolons (;) or just spaces.
//test = strings[0].includes(";",","," ")
console.log(strings[0].includes(","));
console.log(strings[1].includes(";"));
console.log(strings[2].includes(" "));
console.log(strings[3].includes(","));

//b) If the string uses commas to separate the words, split it into an array, reverse the entries, and then join the array into a new comma separated string.
let newArray = []
newArray = protoArray1.split(",")
newArray.reverse()
console.log(newArray)


//c) If the string uses semicolons to separate the words, split it into an array, alphabetize the entries, and then join the array into a new comma separated string.
let newArray2 = [];
newArray2 = protoArray2.split(";");
console.log(newArray2);


//d) If the string uses spaces to separate the words, split it into an array, reverse alphabetize the entries, and then join the array into a new space separated string.
let newArray3 = [];
newArray3 = protoArray3.split(" ");
console.log(newArray3);
newArray3 = newArray3.join(" ");
console.log(newArray3);



//e) If the string uses ‘comma spaces’ to separate the list, modify your code to produce the same result as part “b”, making sure that the extra spaces are NOT part of the final string.
let newArray4 = [];
newArray4 = protoArray4.split(" ,");
console.log(newArray4);
newArray4 = newArray4.join(",");
console.log(newArray4);
