let house = [
  {
    room: "kitchen",
    color: "cream",
    length: 100,
    width: 100,
    height: 8,
    unit: "feet",
    width: "200m",
  },
  {
    room: "bedroom",
    color: "blue",
    length: "101m",
    height: "11ft",
    width: "250m",
  },
  {
    room: "livingroom",
    color: "white",
    length: "120m",
    height: "8ft",
    width: "100m",
    member: [
      {
        mName: "ram",
        phone: "912321312",
        address: [],
      },
      {
        mName: "hari",
        phone: "912321312",
        address: [],
      },
    ],
  },
];

let colors = ["orange", "red", "green"];
colors[3] = "white"

let new_member = {
    fName : "John",
    phone : "98123123"
};

house[1].member = new_member
// console.log(house[1].member)
// colors.push("white")
// console.log(colors[3])
// console.log(colors)

let phone = {
  phone1: "981231232",
  phone2: "982343223",
};
// console.log(colors);
// console.log(colors[2]);
// console.log(phone.phone1)
// console.log(house);

let projector = [
  {
    pName: "viewsonic",
    model: "xyz",
    price: 10000,
  },
  {
    pName: "acer",
    model: "xyz-100",
    price: 20000,
  },
  {
    pName: "acer",
    model: "xyz-200",
    price: 50000,
  },
];

let address1 = {
  location : "Pokhara",
  street : "lakeside"
}

house[2].member[0].address = address1

console.log(house[2].member[0].address)



// price of projector name-model is Rs amount

// console.log("Project Name:" , projector[0].pName)
// console.log("Project Name:" + " " + projector[0].pName)

// console.log("price of" + " " + projector[0].pName + "-" + projector[0].model + " " + "is Rs " + projector[0].price);

/* 
// Template literal
    back tick => ``

*/

// console.log("hello world")
// console.log('hello world')
// 

// The phone number of mName is phone

// let phoneNumber = house[2].member[1].phone;
// let user_name = house[2].member[1].mName;
// console.log(phoneNumber);
// console.log(`The phone number of ${user_name} is ${phoneNumber}`);
