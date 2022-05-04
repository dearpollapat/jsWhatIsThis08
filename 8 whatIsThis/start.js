// lexical scope & dynamic scope
// function printName() {
//   console.log(this);
// }

// printName();
// how to know what is 'this' ?
function printName() {
  console.log(this);
  console.log("my name is " + this.name);
}

////invoker object
// const steve = { name: "steve", printName };
// const anna = { name: "anna", printName };

// steve.printName();
// anna.printName();
////global object (window , global)

// name = "Global";
// printName();
////constructor function
// function Person(name) {
//   this.name = name;
//   this.printName = printName;
// }

// const steve = new Person("pollapat");
// steve.printName();

// call(), apply(), bind()
function printName(nationality, city) {
  console.log(this);
  console.log(
    `my name is ${this.name} , i'm ${nationality} and am living in ${city}`
  );
}

function Person(name, nationality, city) {
  this.name = name;
  this.nationality = nationality;
  this.city = city;

  printName(this.nationality, this.city);
  printName.call(this, this.nationality, this.city);
  printName.apply(this, [this.nationality, this.city]);

  const printPollapt = printName.bind(this);
  printPollapt(this.nationality, this.city);
}

const pollapt = new Person("pollapat", "thai", "bankok");
