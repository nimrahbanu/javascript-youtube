//singeltone
const mySym = Symbol("key1")
let obj ={
    name:'ninny',
    "class wise": "4th",
    [mySym]:"mykey1",
    age:12,
    location:['jaipur','ajmer'],
    area:{
        city:'jaipur',
        village:'chomu'
    }
}
// console.log(obj);//  symbol key { name: 'ninny', 'class wise': '4th', age: 12, location: [ 'jaipur', 'ajmer' ], area: { city: 'jaipur', village: 'chomu' }, Symbol(key1): 'mykey1' }
// console.log(obj["class wise"]);
// console.log(obj.mySym) //undefined
// console.log(obj[mySym]) // mykey1
// console.log(mySym) //Symbol(key1)

// obj.name = "niny updated"
// Object.freeze(obj)
// obj["name"] = "MInty"
// obj["class wise"] = "MInty"
// console.log(obj) //isne freeze krdiya aage ka update nhi kiya{ name: 'niny updated', 'class wise': '4th', age: 12, location: [ 'jaipur', 'ajmer' ], area: { city: 'jaipur', village: 'chomu' }, Symbol(key1): 'mykey1' }

// obj.greetingONe = function(){
//     console.log(`hello js user ${this.age}`)
// }
// console.log(obj.greetingONe) //[Function (anonymous)]
// console.log(obj.greetingONe())//hello js user 12