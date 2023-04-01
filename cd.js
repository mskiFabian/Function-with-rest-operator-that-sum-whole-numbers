const add = function (...numbers) {
  let sum = 0
  numbers.forEach(num => {
      sum += num
  }) 
  return sum
}
console.log(add(2,3))
console.log(add(2,3,5,2))
console.log(add(2,3,6,7))

