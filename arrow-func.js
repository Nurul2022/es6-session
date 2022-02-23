
//5. **** Arrow Function  *************
// // normal function****
// function sum(a, b) {
//   let result = a + b
//   return result
// }
// const result = sum(10, 15)
// console.log(result)

// arrow function *****
const sum = (a, b) => a + b


const sum = (a, b, c) => {
  let sum1 = a + b
  let sum2 = a + c

  return sum2
}
const result = sum(10, 21, 34)
console.log(result)
