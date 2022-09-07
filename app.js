console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function arraySum(numbers) {
  let sum = 0;
  numbers.forEach((number) => {
    sum += number;
  });
  return sum;
}
arraySum(numbers);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
const book = {};
book.title = "Lord Of The Rings";
book.author = "J.R.R. Tolkien";
book.pages = 1241;
book.readCount = 5;

book.info = function () {
  return `${this.title} by ${this.author}, has ${this.pages} pages. I have read this book ${this.readCount} times.`;
};

// Exercise 3 Reverse a String
console.log("EXERCISE 3:\n==========\n");
let sentence = "The quick brown fox jumps over the lazy dog";
let splitSentence = sentence.split(" ");
console.log(splitSentence);

let arrayChar = sentence.split("");
console.log(arrayChar);

let arrayReverse = arrayChar.reverse().join("");
console.log(arrayReverse);

let stringReverse = arrayReverse.split(" ").reverse().join(" ");
console.log(stringReverse);

// Exercise 4 Parse a CSV
console.log("EXERCISE 4:\n==========\n");
let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

let result = csvData.split(/\r?\n/);
console.log(result);

let firstRow = result.shift();
console.log(firstRow);

let people = [];
for (let row of result) {
  let columns = row.split(",");
  let name = columns[0];
  let age = columns[1];

  let person = {
    name: name,
    age: age,
  };

  people.push(person);
}

console.log(people);
