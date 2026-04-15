//Primitive -> 7
// String,
// Number, 
//  Boolean,
// null(1 dm khali empty)
// undefined, 
// Symbol
// BigInt


//Non-Primitive(refrence type)
//Array, Objects,  functions

//JavaScript is a dynamically typed language. 
//In JavaScript, you don't need to specify the data type of a variable (like "string" or "number") when you declare it. Instead, the data type is determined at runtime based on the value currently assigned to the variable

// console.log(typeof (null)) //object
// const id = Symbol('123')
// const second_id = Symbol('123')
// console.table({id, second_id})
// console.table(id === second_id) //false
// console.log(typeof id) //symbol

//  const bigNumber = 6876865756767621n
//  console.log(typeof bigNumber) //bigint

 
function myFInction(){
    console.log("hello")
}
console.log(typeof myFInction); // function


//++++++++++++Memory+++++++++++
//Stack(Primitive->copy milta h), Heap(Non-primitive->refrence milta h->original value me changes hote h)


 