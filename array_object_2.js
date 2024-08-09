let age = 100;

let first_name = "John Doe";

let inStock = true;

// hoisting
let last_name;
// console.log(last_name);

// 0,      1        2       3
// let person = ["name", "age", "address", "phone"]

/* 

    array syntax

        <Keyword> <arrayName> = [<element>, <element>,]
        eg: 
            let person = ["name", "age", "address", "phone"]

    object syntax

        <Keyword> <object> = {
            <key> : value,
            <property> : value,
            <attribute> : value,

        }

        eg: 
            let person = {
                name : "John",
                age: "20",
                address: "Pokhara"
            }

*/

// person[2];

// let person = ["name", "first_name", "last_name", "age", "address", "phone"];

let name = {
  first_name: "John",
  last_name: "Doe",
};

let address = {
  location: "Pokhara",
  Street: "Lakeside",
};

let phone = {
  phone1: "981231232",
  phone2: "982343223",
};

// let person = [name, address, phone, 20, true, null, {title : "web"}]

// console.log(person);

let colors = ["red", "green", "blue"];

// console.log("Before changing - ", colors[2])

let change = "change me"

change = "ok changed"

colors[2] = "white"

// console.log("After changing - ", colors[2])


console.log("colors" , colors)
console.log({"colors" : colors})
console.log({colors : colors})
console.log({colors})

// create three objects inside an array, each object should contain title and hex value of the respective color.
// For instance do for three colors: red, green and blue 

let hexValue = [
{
    title : [
        {
            
        }
            
    ],
    hex : "#FF0000"
},
{
    title : "green",
    hex : "#00FF00"
}
]