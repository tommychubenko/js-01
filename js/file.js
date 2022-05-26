function filterArray(numbers, value) {
  // Change code below this line
  const filteredNumbers = numbers.filter( number => number > value);
 

  return filteredNumbers;
  // Change code above this line
}

console.log(filterArray([1, 2, 3, 4, 5], 3))


function filterArray(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];

    for(const number of numbers){
      if(number > value){
        filteredNumbers.push(number)
      }
    }

  return filteredNumbers;
  // Change code above this line
}

// console.log(filterArray([1, 2, 3, 4, 5], 3))



// function getCommonElements(array1, array2) {
//   // Change code below this line
//   // console.log([...array1, ...array2]);
//   // const totalArray = [...array1, ...array2];
//   // console.log(totalArray);
//   // const uniqArray = [...new Set(totalArray)];
//   const uniqArray = [];
//   // console.log(uniqArray)
  
//   for (const array of array1) {
//     console.log(array);
//     if (array2.includes(array)) {
//       uniqArray.push(array)
//     };
//     console.log(uniqArray)
//   }
  

// return uniqArray

//  // Change code above this line
// };

// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])


// function findLongestWord(string) {
//   // Change code below this line
//   const words = string.split(" ");
//   let longestWord = "";
//   console.log(words);
  
//   for (let i = 0; i < words.length; i += 1)  {

   
    
//     if (words[i].length > longestWord.length) {
//       longestWord = words[i];
//     }
          
//     }

// return longestWord
//   // Change code above this line
// };


// findLongestWord("The quick brown fox jumped over the lazy dog")

// function checkForSpam(message) {
//   let result;
//   // Change code below this line
//  result = message.toLowerCase().includes("spam")|| message.toLowerCase().includes("sale")
//   // Change code above this line
//   return result;
// }



// function getExtremeElements(array) {
//   // Change code below this line
 
//   console.log(array.length - 1);
//   return [array[0], array[array.length - 1]];

  

//   // Change code above this line
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]))

// function checkForSpam(message) {
//   let result;
//   // Change code below this line
  
 
//   result = message.toLowerCase().includes("spam")|| message.toLowerCase().includes("sale")

  

//   // Change code above this line
//   return result;
// };

// console.log(checkForSpam("Get best sale offers now!"))




// function checkForSpam(message) {
//   let result;
//   // Change code below this line
    
//   result = message.toLowerCase().includes("spam" && "sale");


//   // Change code above this line
//   return result;
// }
// console.log(checkForSpam('Trust me, this is not a spam message'))


// const lalala = 'Trust me, this is not a spam message';

// console.log(lalala.toLowerCase())
// function checkForName(fullName, name) {
//   // const fulllName = fullName.toLowercase;

//  const result = fullName.includes(name); // Change this line
//   return result;
// }

// // console.log(fulllName);

// console.log(checkForName("Egor Kolbasov", "Egor"))




// // const { max } = require("lodash");

// // const { max } = require("lodash");

// function formatMessage(message, maxLength) {

//   let result;
//   // Change code below this line

//   // console.log(message.length);
//   result = message.length <= maxLength? message: message.slice(0, maxLength) + "...";



//   return result;
// };

// console.log(formatMessage("Curabitur ligula sapien", 16))






// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line

//   const totalPrice = pricePerDroid * orderedQuantity;

//   if (totalPrice < customerCredits){
//     message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`
//   }

//   else {message = "Insufficient funds!"}

//   // Change code above this line
//   return message;
// }

// console.log(makeTransaction(1000, 3, 15000));
// console.log(makeTransaction(500, 10, 5000));




// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },

//   addPotion(newPotion) {
    
//     for (const potion of this.potions) {
//       // console.log(potion)
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`
        
//       }
     
//     };
//  return this.potions.push(newPotion)

//   },
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };

// atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
// console.log(atTheOldToad.potions)


// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({email, accessLevel}) {
//     super(email);
//     this.accessLevel = accessLevel;
//     this.blacklistedEmails = [];
//     this.includes;
//   }
    
//     blacklist(email){
//       this.blacklistedEmails.push(email)
//   }

//     isBlacklisted(email){
//       this.includes = this.blacklistedEmails.includes(email)
//     return this.includes}

//     }
    
  



//   // Change code above this line


// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });
// console.log(mango);
// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true


// const test = ["Jambo"];
// console.log(test.includes("Jambo"))

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// };


// class Admin extends User {
//   // Change code below this line


//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({email, accessLevel}){
//     super(); 
   
    

//   }

//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.table(mango); // "mango@mail.com"
// // console.log(mango.accessLevel); // "superuser"




// class Car {
//   // Change code below this line
  
//   static MAX_PRICE = 50000;
  
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {

    
//     this.#price = newPrice;
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000


// console.log(audi.MAX_PRICE)










// class Car {
//   // Change code below this line
//   #brand
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   };

//   getBrand() {
//     return this.#brand
//   }

//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }

  

//   // Change code above this line
// };

// const mango = new Car({ brand: "Audi", model: "Q3", price: 36000 })
// // mango.brand = "BMW";
// console.log(mango);





// class Car {
//   // Change code below this line

//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   // Change code above this line
// }


// class StringBuilder {
//   constructor(value) {
//     this.value = value;
//   }

//     getValue(){
//       return this.value;
//   };
  
//     padStart(str) {
//       this.value = str + this.value
//   };
  

//     padEnd(str) {
//     return this.value = this.value + str
    
//   }

//   padBoth(str) {
//     return this.value = str + this.value + str
    
//   }

//   }



// // Change code above this line
// const builder = new StringBuilder(".");



// console.log(builder.getValue()); // "."



// builder.padStart("^");



// console.log(builder.getValue()); // "^."


// builder.padEnd("^");


// console.log(builder.getValue()); // "^.^"


// builder.padBoth("=");


// console.log(builder.getValue()); // "=^.^="




// class Storage {
//   constructor(items) {     
//     this.items = items

//   }
 
//   getItems(){
//   return this.items
//   }

//   addItem(newItem) {
//     this.items.push(newItem);   
//   }

//   removeItem(itemToRemove) {
//     const itemToRemoveIndex = this.items.indexOf(itemToRemove);
//     this.items.splice(itemToRemoveIndex, 1);


   
//   }

// };




// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]






// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]



// const User = function ({ name, email } = {}) {
  
//   this.name = name;
//   this.email = email;



// }

// const mango = new User({name: "Mango", email: "email@mail.com"});

// console.log(mango);

// User.prototype.changeName = function (newName) {
//   this.name = newName
// };

// mango.changeName("Kiwi");

// console.log(mango);




// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ];


// // Change code below this line
// const getTotalBalanceByGender = (users, gender) => users.filter(user => user.gender === gender).reduce((acc, user)=> acc + user.balance,0);
// // Change code above this line

// console.log(getTotalBalanceByGender(users, 'male'))


// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ];


// // Change code below this line
// const getSortedFriends = users => users.flatMap(user => user.friends).filter(
//   (name, index, array) => array.indexOf(name) === index ).sort((a,b)=>a.localeCompare(b))

// // Change code above this line

// console.log(getSortedFriends(users))


// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ];


// // Change code below this line
// const getNamesSortedByFriendCount = users => [...users].sort((a,b) => a.friends.length - b.friends.length).map(user=>user.name);
// // Change code above this line

// console.log(getNamesSortedByFriendCount(users))


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books.filter(book => book.rating > MIN_BOOK_RATING).map(book => book.author).sort((a,b)=>a.localeCompare(b));


// console.log(names);


// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ];


// // Change code below this line
// const sortByDescendingFriendCount = users => users.sort((a,b)=> b.friends.length - a.friends.length);
// // Change code above this line


// console.log(sortByDescendingFriendCount(users))


// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ];




// // Change code below this line
// const sortByAscendingBalance = users => users.sort((a, b)=> a.balance - b.balance);
// // Change code above this line


// console.log(sortByAscendingBalance(users))


// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every(value => value % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(value => value % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every(value => value % 2 === 0);;
// const eachElementInSecondIsOdd = secondArray.every(value => value % 2 !== 0);;

// const eachElementInThirdIsEven = thirdArray.every(value => value % 2 === 0);;
// const eachElementInThirdIsOdd = thirdArray.every(value => value % 2 !== 0);;


// console.log(eachElementInFirstIsEven);
// console.log(eachElementInFirstIsOdd);
// console.log(eachElementInSecondIsEven);
// console.log(eachElementInSecondIsOdd);
// console.log(eachElementInThirdIsEven);
// console.log(eachElementInThirdIsOdd);


// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ];




// // Change code below this line
// const getUserWithEmail = (users, email) => users.find(user => user.email === email);
// // Change code above this line



// console.log(getUserWithEmail(users, "shereeanthony@kog.com"))



// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';
// // Change code below this line

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);

// console.log(bookWithTitle)




// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ];




// const getActiveUsers = (users) => users.filter(user => !user.isActive);


  
  
 

// console.log(getActiveUsers(users));


// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ];


// // Change code below this line
// const getUsersWithAge = (users, minAge, maxAge) => 
//   users.filter(({age}) => age > minAge && age < maxAge)

// ;

// console.log(getUsersWithAge(users, 10, 30))
// Change code above this line



// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];


// const getUserNames = users => (users.map(user => user.name))

// ;
  
// console.log(getUserNames)
    
  

// console.log(getUserNames())

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line

// const genres = books.flatMap(book => book.genres);


// console.log(genres)

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(planet => planet.length);

// console.log(planetsLengths);



// function changeEven(numbers, value) {
//   // Change code below this line

//   const newArray = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     console.log(numbers[i]);

//     numbers[i] % 2 === 0 ? newArray.push(numbers[i] + value) + value : newArray.push(numbers[i])


//     // if (numbers[i] % 2 === 0) {
//     //   newArray.push(numbers[i] + value) ;
//     // }
    
//   }
//   return newArray
//   // Change code above this line
// }


// console.log(changeEven([1, 2, 3, 4, 5], 10))



// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line


//   firstArray.forEach(element => {
      
//     if (secondArray.includes(element)){
//       commonElements.push(element);
//     }
      
      
//     });

//   // for (let i = 0; i < firstArray.length; i += 1) {
//   //   if (secondArray.includes(firstArray[i])) {
//   //     commonElements.push(firstArray[i]);
//   //   }
//   // }

//   return commonElements;
//   // Change code above this line
// }


// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]))
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   numbers.forEach(number => {

//     if (number > value) {
//       filteredNumbers.push(number)
//     }
    
//   });


  

//   // Change code above this line
//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3))

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   orderedItems.forEach(item => {
//     console.log(item);
//     totalPrice += item
    
//   });


//   // for (let i = 0; i < orderedItems.length; i += 1) {
//   //   console.log(orderedItems[i]);
//   //   totalPrice += orderedItems[i];
//   // }

//   // Change code above this line
//   return totalPrice;
// };

// console.log(calculateTotalPrice([12, 85, 37, 4]));




// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//     order(pizzaName, makePizza, onOrderError) {

//      return this.pizzas.includes(pizzaName) ? makePizza(pizzaName) : onOrderError(error)
       
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   // console.log(`Your order is accepted. Cooking pizza ${pizzaName}.`)
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(pizzaName) {
//   return `Error! There is no pizza with a name ${pizzaName} in the assortment.`;
// }


// Method calls with callbacks


// console.log(makePizza("Smoked"));
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);




// const makeSheff = function (name) {
//   const makeDish = function (dish) {

//     console.log(`Шеф кухар ${name} буде готувати ${dish}`);
//   }
//   return makeDish;
// }

// const poly = makeSheff("Полі");

// poly()


// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line




  
  
//   addPotion(newPotion) {

//     console.log(newPotion.name);

//     console.log(this.potions.includes(newPotion.name))

    // const potionsCopy = [...this.potions];
    // console.table(potionsCopy);

    // for (const potion of this.potions) {
      
    //   console.log(`Шукаємо ${newPotion.name}`)
    //   console.log(`Ми знайшли ${potion.name} - порівнюємо...`)
    //   console.log(potion.name === newPotion.name ? "ЗНАЙШЛИ!" : "Немає" )
    // }
      
    
    

  //  },
  
  
  // addPotion(newPotion) {

  //   for (const potion of this.potions)
  //   {
  //     console.log(`Шукаємо ${newPotion.name}`);
  //     console.log(potion)

  //     console.log(potion.name === newPotion.name);

  //     if (potion.name === newPotion.name) {
        
  //       console.log(`Error! Potion ${newPotion} is already in your inventory!`)
  //       return `Error! Potion ${newPotion.name} is already in your inventory!`;

  //     }
      
  //   }
  //   this.potions.push(newPotion);
  //  },


  // removePotion(potionName) { 

  //   for (const potion of this.potions) {      
      
  //     console.log(potion);
  //     console.log(potion.name === potionName);

  //     if (potion.name === potionName) {
  //       let indexOfPotion = 0;
  //       console.log(this.potions.indexOf(potion));
  //       indexOfPotion = this.potions.indexOf(potion);
  //       console.log(indexOfPotion);

  //       this.potions.splice(indexOfPotion, 1);

  //       console.table(this.potions);

  //       return;
  //       }

  //   }
  //   console.log(`Potion ${potionName} is not in inventory!`)
  //   return `Potion ${potionName} is not in inventory!`;



  // },
  
  

  // removePotion(potionName) {

    
  //   const potionIndex = this.potions.indexOf(potionName);

  //   if (potionIndex === -1) {
  //     return `Potion ${potionName} is not in inventory!`;
  //   }

  //   this.potions.splice(potionIndex, 1);
  // },


  // updatePotionName(oldName, newName) {

  //   for (const name of this.potions) {
        
  //     // console.log(name.name)
      
  //     if (name.name === oldName) {
          
  //       name.name = newName;
  //       return
  //       // console.log()

  //       }


  //     }

  //       console.log(`${oldName} - такого імені в списку немає`)
  //  },




  // updatePotionName(oldName, newName) {
  //   const potionIndex = this.potions.indexOf(oldName);

  //   if (potionIndex === -1) {
  //     return `Potion ${oldName} is not in inventory!`;
  //   }

  //   this.potions.splice(potionIndex, 1, newName);
  // },
  // Change code above this line
// };




  


// atTheOldToad.addPotion({ name: "Speed potion", price: 460 })
// console.table(atTheOldToad.potions);



// const redFruits = [{name: "first fruit", fruit: "apple"}, "strawberry", "cherry", "cranberries"];
// const fruit = "apple";
// console.table(redFruits)
// // Проверяем наличие элемента
// const hasFruit = redFruits.includes(fruit.fruit);

// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }

// console.log([{ name: "Speed potion", price: 460 }].includes({ name: "Speed potion", price: 460 }))


// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
  
//   addPotion(newPotion) {
//     for (const potion of this.potions) {

//       if (potion.includes(newPotion)) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }

//       this.potions.push(newPotion);
    
//     }
//   },
// }

//   // Change code above this line


// atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
// console.log(atTheOldToad.potions)





//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };


// atTheOldToad.getPotions()





// // const atTheOldToad = {
// //   potions: [
// //     { name: "Speed potion", price: 460 },
// //     { name: "Dragon breath", price: 780 },
// //     { name: "Stone skin", price: 520 },
// //   ],
// //   // Change code below this line
// //   getPotions() {
// //     return this.potions;
// //   },



// //   addPotion(newPotion) {          
// //     if (this.potions.includes(newPotion)) {
// //       return `Error! Potion ${newPotion} is already in your inventory!`;
// //     }
// //     console.log(`We are adding ${newPotion}`);
// //     this.potions.push(newPotion);
  

        
      

// //   }
// //   ,



//   // removePotion(potionName) {
    
  
//   //   for (const potion of this.potions) {
      
//   //     // console.log(potion);

//   //     if (potion.name === potionName) {
        
//   //       const potionIndex = this.potions.indexOf(potion);
//   //       this.potions.splice(potionIndex, 1);
//   //       return this.potions;
        
//   //     }
//   //   }
    
   
    
//   // },
    
    
//   // updatePotionName(oldName, newName) {

//   //   for (const potion of this.potions) {
      
//   //     console.log(potion);

//   //     if (potion.name === oldName) {
        
//   //       const potionIndex = this.potions.indexOf(potion);

//   //       console.log(`Значення "${oldName}" було знайдено під індексом ${potionIndex}!`);

//   //       this.potions.splice(potionIndex, 1);
//   //       // this.potions.splice(potionIndex, 0, newName);
//   //       return this.potions;
        
//   //     }
//   //   }
//   // }
// }

// atTheOldToad.addPotion({ name: "Invisibility", price: 620 });

// console.table(atTheOldToad.potions);

// // const atTheOldToad = {
// //   potions: ["Speed potion", "Dragon breath", "Stone skin"],
// //   // Change code below this line
// // getPotions(){
// //    return this.potions;
// //    console.log(this.potions);
// //  } 
// //   // Change code above this line
// // };

// // atTheOldToad.getPotions()

// // const bookShelf = {

// //   // Change code below this line

// //   books: ["The last kingdom", "The guardian of dreams"],
// //   getBooks() {
// //     return "Returning all books";
// //   },


// //   addBook(bookName) {
// //     return `Adding book ${bookName}`;
// //   },

// // removeBook(bookName) {
// //     return `Deleting book ${bookName}`;
// //   },

// // updateBook(oldName, newName){
// //     return 'Updating book ${oldName} to ${newName}'

// //   // Change code above this line
// //   }
// // }

// // console.log(bookShelf.updateBook("Sands of dune", "Dune"))

// // // Change code below this line
// // function findMatches(arrays, ...args) {
// //   const matches = []; // Don't change this line

// //   console.log(arrays);
// //   console.log(args);
  
// //   for (const arg of args) {
   
// //     if (arrays.includes(arg)) {
      
// //       matches.push(arg);
// //     }

// //  }
// //   console.log(matches)
// //   // Change code above this line
// //   return matches;
// // }


// // findMatches([1, 2, 3, 4, 6], 1, 8, 2, 7)
// // // возвращает[1, 2]

// // // Change code below this line
// // function addOverNum(...args) {
// //   let total = 0;
// //   const allArgs = [];
// //   for (const arg of args) {
// //     allArgs.push(arg);
// //     if (arg > allArgs[0]) {    
// //       total += arg;
// //     };  }
// //   console.log(allArgs);
// //   console.log(total);

// //   return total
// //   // Change code above this line
// // }


// // addOverNum(10, 12, 4, 11, 48, 10, 8); //71


// // // Change code below this line
// // function add(...args) {
// //   let sum = 0;
// //   for (const arg of args) {
// //     sum += arg;
// //     console.log(arg);
// //     console.log(sum);
// //   }
// //   return sum
// // }

// //   add(15, 27)
  
  
// //   Change code above this line




// // function makeTask(data) {
// //   const completed = false;
// //   const category = "General";
// //   const priority = "Normal";
// //   // Change code below this line
// // console.log( {category, priority, completed, ...args})
// //   // Change code above this line
// // }


// // const products = [
// //   { name: "Radar", price: 1300, quantity: 4 },
// //   { name: "Scanner", price: 2700, quantity: 3 },
// //   { name: "Droid", price: 400, quantity: 7 },
// //   { name: "Grip", price: 1200, quantity: 9 },
// // ];

// // function calculateTotalPrice(productName) {

// //   for (const product of products) {    
// //     let answer = 0;

// //     console.log(product)

    
// //     if (product.name === productName) {
    
// //       answer =  product.price * product.quantity;
// //        }
    
   

// //   }

// //     return answer;
// // }

// // calculateTotalPrice("Grip")

// // const products = [
// //   { name: "Radar", price: 1300, quantity: 4 },
// //   { name: "Scanner", price: 2700, quantity: 3 },
// //   { name: "Droid", price: 400, quantity: 7 },
// //   { name: "Grip", price: 1200, quantity: 9 },
// // ];



// // function getAllPropValues(propName) {
// //   // Change code below this line

  

// //   for (const product of products) {
// //     console.log(product);
    
// //     const { name, parice, quantity } = products;


// //     // console.log(name);
// //   }

// //   answer.push(product.propName);

// //   console.log(answer)

// //   return answer
 
// //   Change code above this line
// // }
// // getAllPropValues("name")


// // const products = [
// //   { name: "Radar", price: 1300, quantity: 4 },
// //   { name: "Scanner", price: 2700, quantity: 3 },
// //   { name: "Droid", price: 400, quantity: 7 },
// //   { name: "Grip", price: 1200, quantity: 9 },
// // ];

// // var answer = 0;

// // function getProductPrice(productName) {
// //   // Change code below this line

// //   for (const product of products) {
// //     console.log(product);

  



// //     if (productName === product.name) {
// //       console.log("YES");
// //       console.log(product.price);
// //       answer = product.price;
// //       console.log(answer)
// //       break
    
// //     }
// //     else {
// //       answer = null;
// //     console.log(answer)}
    
// //     // console.log(product.price);
// //     // return answer;
    
// //   }
  
// //   return answer

// //   // Change code above this line
// // };

// // getProductPrice('Scanner')




// // const colors = [
// //   { hex: "#f44336", rgb: "244,67,54" },
// //   { hex: "#2196f3", rgb: "33,150,243" },
// //   { hex: "#4caf50", rgb: "76,175,80" },
// //   { hex: "#ffeb3b", rgb: "255,235,59" },
// // ];

// // const hexColors = [];
// // const rgbColors = [];
// // // Change code below this line


// // for (const color of colors) {
  
// //     hexColors.push(color.hex);
// //     rgbColors.push(color.rgb);

// // }


// // console.log(hexColors);
// // console.log(rgbColors);




// // function countProps(object) {
// //   // Change code below this line
// //   let propCount = 0;

// //   const keys = Object.keys(object);

// //    for (const key of keys){

// //        propCount += 1;
     
// //        return propCount

// //    }
 
// //   // Change code above this line
// // }
// // countProps({ name: "Mango", age: 2 });




// // const apartment = {
// //   descr: "Spacious apartment in the city center",
// //   rating: 4,
// //   price: 2153,
// // };

// // console.table(apartment);
// // const values = [];
// // // Change code below this line
// // const keys = Object.keys(apartment);
// // // const values = Object.values(apartment);

// // for (const key of keys) {
    
// //     values.push(apartment[key])

// // }

// // console.log(keys);
// // console.log(values);





// // function countProps(object) {
// //   let propCount = 0;
// //   // Change code below this line

// //    for (const key in object) {


// //   if (object.hasOwnProperty(key)){

// //       propCount += 1;
// // }
    
// //   // Change code above this line
// //   return propCount;
// // }


// // countProps({});

// //     console.log(propCount);





// // const keys = [];
// // const values = [];
// // const advert = {
// //   service: "apt",
// // };
// // const apartment = Object.create(advert);
// // apartment.descr = "Spacious apartment in the city center";
// // apartment.rating = 4;
// // apartment.price = 2153;

// // for (const key in apartment) {
// //   // Change code below this line

// //   keys.push(key);
// //   values.push(apartment[key]);

// //   // Change code above this line
// // }
// // console.table(apartment);
// // console.log(keys);
// // console.log(values)




// // const apartment = {
// //   descr: "Spacious apartment in the city center",
// //   rating: 4,
// //   price: 2153,
// // };
// // const keys = [];
// // const values = [];
// // // Change code below this line

// // for (const key in apartment){
// //     keys.push(key);
// //     values.push(apartment[key]);
    
// // };




// // console.log('Ha-ha')


// // const numbers = (15, 25, 46, 88, 15, 14);

// // const add = function (...args) {

// //     let total = 0;

    

// //     for (const arg of args) {
// //         total += arg;
// //     }
    
// //     console.log(args)
// //     console.log(total)

// // }

// // add(15, 25, 46, 88, 15, 14);





// // const str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'


// // const url = function (argument) {
    
// //     const result = argument.toLowerCase().split(' ').join('-');

// //     console.log(result)
// // }

// // url(str);


// // const toReverse = function(pass) {
// //     const letters = pass.split('');
// //     // console.log(letters)
// //     let invertedPass = '';

// //     for (const letter of letters) {
        
// //         const lowerLetter = letter === letter.toLowerCase();
// //         invertedPass += lowerLetter ?
// //             letter.toUpperCase()
// //             : letter.toLowerCase();
// //     }
// //     return console.log(invertedPass);
// // }



// // const pass1 = "ljLjglGLglUGlj";
// // toReverse(pass1)




// // const changeCase = function (string) {
// //     const letters = string.split('');
// //     let invertedString = '';

// //     for (const letter of letters) {
// //         const isInLowerCase = letter === letter.toLowerCase();

// //         invertedString += isInLowerCase ? letter.toUpperCase()
// //             : letter.toLowerCase();
// //     }
// //     console.log(invertedString);
// // }

// // changeCase('ljLjglGLglUGlj')





// // const cards = ["Карта-1", "Карта-2", "Карта-3", "Карта-4", "Карта-5", "Карта-6"];
// // const cardToRemove = "Карта-4";

// // const cardToAdd = "Карта-777";

// // const index = cards.indexOf(cardToRemove);
// // console.log("Індекс карти для видалення: " + index);
// // cards.splice(index,1);
// // console.table(cards); 
// // cards.splice(3, 0, cardToAdd);
// // console.table(cards);







// // const title = "Here we go Again"

// // const webTitle = title.toLocaleLowerCase().split(" ").join("-");
// // console.log(webTitle);





// // const numbers = [15, 13, 55, 86, 98, 3, 99, 32];
// // let smallestNumber = numbers[0];


// // for (let number of numbers) {
// //     if (smallestNumber < number){
// //         smallestNumber = number
// //     }
// // }
// // console.log(smallestNumber)



// // const cart = [55, 66, 52, 85, 21, 35, 78];

// // let totalAmount = 0;

// // for (const prod of cart) {
// //      totalAmount += prod;

// // }
// // console.log(totalAmount)
// // for (let i = 0; i < cart.length; i += 1) {
    
// //     console.log(cart[i]);
// //     totalAmount += cart[i];
// // }
    
// // }

// // console.log(`totalAmount ${totalAmount}`);




// // const friends = ["Mango", "Kiwi", "Ajax"];




// // for (const friend of friends) {
// //     console.log(friend)
// // };

// // const lastIndex = friends.length - 1;

// // console.table(friends)
// // console.log(friends[1])
// // console.log(lastIndex)






// // const btnAdd = document.querySelector("button[data-add]");
// // const dataValue = document.querySelector("input[data-value]")


// // btnAdd.addEventListener("click", () => {
// //     console.log("click hhehehehe");
// //     console.log(dataValue.value);
// // })








// // console.log(btnAdd)




// // const numberOfEmpoyes = 4;

// // const minSalary = 500;
// // const maxSalary = 5000;
// // let totalSalary = 0;

// // for (let i = 1; i <= numberOfEmpoyes; i += 1)
// // {
// //     let salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary); 
// //     totalSalary += salary;
        
// //         console.log(`Зарплата сотрудника № ${i} будет ${salary}`)
   
// // }
// //  console.log(`Общая зарплата всех сотрудников будет равна ${totalSalary}`)




// // for (let i = 0; i <= 100; i += 10){
// //     console.log(i);
// // }



// // let stars = Number(prompt("Введите число звезд"));



// // let price;

// // if (stars === 1) {
// //     price = 10}

// // else if (stars === 2) {
// //     price = 20
// // }

// // else if (stars === 3) {
// //     price = 30
// // }

// // else if (stars === 4) {
// //     price = 40
// // }

// // else if (stars === 5) {
// //     price = 50
// // }

// // else { price = "Невірно вибраний варіант" };

// // switch (stars) {
// //     case 1: price = 10;
// //         break;
// //     case 2: price = 20;
// //         break;
// //     case 3: price = 30;
// //         break;
// //     case 4: price = 40;
// //         break;
// //     case 5: price = 50;
// //         break;
// //     default: console.log("Невірно введене число");
// // }

// // console.log(`Ціна за номер в готелі з ${stars} зірками, буде коштувати ${price} грн`);















// // const salary = 1000;

// // if (salary < 500) { console.log("lalala") };






// // const x = 1;
// // let y = true

// // console.log(y)

// // const x = prompt('Введите количество товара');
// // let sss = prompt("согласны?");
// // console.log(sss);
// // console.log(typeof sss);

// // let elementX = '15px';

// // const result = parseInt(elementX);
// // console.log(result);

// // let salary = 1300.956545;

// // console.log(Number(salary.toFixed(2)));

// // console.log(typeof(salary));

// // salary.toFixed(3);
// // console.log(salary.toFixed(3));

// // console.log(Number('sajdfahsj'));


// // const one = 2;
// // const two = 3;

// // console.log(one ** two)

// // let one = prompt("Введите первое число:");
// // one = Number(one);
// // console.log(one);

// // let two = prompt("Введите второе число:");
// // two = Number(two);
// // console.log(two);

// // let result = one ** two;

// // console.log(result);
// // console.log(one, "в степени", two, "- будет", result);

// // const numberA = 100;
// // const numberB = 99;

// // let result = Math.random();
// // console.log(result);

// // result = result * (numberA - numberB);
// // console.log(result);

// // result = result + numberB
// // console.log(result);


// // result = result.toFixed();

// // console.log(result);