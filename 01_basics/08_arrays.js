let myArr = [1,2,3,4,5]
// myArr.push(6)
// console.log(myArr) //[ 1, 2, 3, 4, 5, 6 ]
// myArr.pop()
// console.log(myArr) //[ 1, 2, 3, 4, 5 ]
// myArr.unshift(2)
// console.log(myArr); //[ 2, 1, 2, 3, 4, 5 ] add in first index
 
// myArr.shift() //Removes the first element from an array and returns it. 
// console.log(myArr); //[ 2, 1, 2, 3, 4, 5 ] add in first index
// const newArr = myArr.join()
// console.log(myArr) //[ 1, 2, 3, 4, 5 ]
// console.log(newArr) //string 1,2,3,4,5

// console.log("A", myArr);
// const myarr1 = myArr.slice(1,3)
// console.log(myarr1)
// console.log("B", myArr);

// const myarr2 = myArr.splice(1,3)// original array ko manipulate krta h
// console.log("myarr2", myarr2)
// console.log("C", myArr)

const arr1 = ['mango','banana','apple']
const arr2 = ['graps','papaya','pineapple']
// console.log(arr1.push(arr2)) //4 4th index pr
// console.log(arr1) //[ 'mango', 'banana', 'apple', [ 'graps', 'papaya', 'pineapple' ] ]
// const arr3 = arr1.concat(arr2)
// console.log(arr1.concat(arr2)) //[ 'mango', 'banana', 'apple', 'graps', 'papaya', 'pineapple' ]
// console.log(arr3);//[ 'mango', 'banana', 'apple', 'graps', 'papaya', 'pineapple' ]
console.log([...arr1, ...arr2]);//spread [ 'mango', 'banana', 'apple', 'graps', 'papaya', 'pineapple' ]
 
const newArrDepth = [1,2,3,[4,5], 6,7,[7,8,[9,0,1,[3,4]]]]
const realNewArr = newArrDepth.flat(Infinity)
console.log(realNewArr); //[ 1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 0, 1, 3, 4 ]

console.log(Array.isArray("Ninny")); //false
console.log(Array.from("Niny")); //[ 'N', 'i', 'n', 'y' ]
console.log(Array.from({nasme:"Niny"})); //[]

let score1 = 100
let score2 =2000
console.log(Array.of(score1,score2)); //[ 100, 2000 ]
