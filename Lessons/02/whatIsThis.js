'use strict' 

// strict mode is introduced with ES5 -> it fixes some inconsistencies and discourages some bad practices

const person = {
  name: 'Sofa',
  fullName: function () {
    return this.name + 'score' // Sofascore
  },
  testName: () => {
    return "TEST" + this.name
  }
}

function printThis() {
  // try to comment out use strict and run this file again, you'll see this is changed
  console.log(this)
}

console.log(person.fullName())
console.log(person.testName())
printThis()

console.log(this)