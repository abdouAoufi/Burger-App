/* jshint ignore:start */
const prices = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};
const ingredient = ["salad", "cheese", "meat", "bacon"];
const values = [1, 0, 0, 0];
let result = 0;
function transformIngredien() {
  ingredient.forEach((item, index) => {
    result += prices[item] * values[index];
  });
  console.log(result);
}

// transformIngredien();

let paramsString = "q=URLtils.searchParam&topic=api";
let searchParams = new URLSearchParams(paramsString);

for (let params of searchParams) {
  // console.log(params);
}

let talk = function () {
  console.log(this.sound);
};
let bormir = {
  speak: talk,
  sound: "Bormir ! ",
};

let anotherObject = {
  sound: "another Object",
  blabber: bormir.speak,
};

// bormir.speak();
// anotherObject.blabber();

/*
? Bubble search 
loop from the first element to the last 
if the left element > right element 
swap (right , left )
3 , 1 , 2 , 4 
if(left:3>left:1){
  left = right : 1
  right = left : 
}


else 
right ++ 

*/

function sort(values) {
  let a = 0;
  let b = 0;
  let swap = 0;
  for (a = 0; a < values.length - 1; a++) {
    for (b = 0; b < values.length - 1; b++) {
      if (values[b] > values[b + 1]) {
        swap = values[b];
        values[b] = values[b + 1];
        values[b + 1] = swap;
      }
    }
  }
  console.log(values);
}

// sort([20, 10 , 30 , 50])

function hasNumber(myString) {
  return /\d/.test(myString);
}

// console.log(hasNumber("afy88"));

// const queryprams = [];
// for (let i in this.state.ingredients) {
//   queryprams.push(
//     encodeURIComponent(i) + "=" + encodeURIComponent(this.state.ingredients[i])
//   );
// }
// queryprams.push(encodeURIComponent("price") + "=" + this.state.totalPrice);
// const queryString = queryprams.join("&");

// const addIngredientHandler = (type) => {
//   const oldCount = this.state.ingredients[type]; // salad
//   const updatedCounted = oldCount + 1; // 2
//   const updatedIngredient = {
//     ...this.state.ingredients, // ! original array
//   };
//   updatedIngredient[type] = updatedCounted; // update salad elemtnt
//   const priceAddition = INGREDIENT_PRICE[type]; // get price of salad
//   const oldPrice = this.state.totalPrice; // get the old total price
//   const newPrice = oldPrice + priceAddition; // add to it the addition
//   this.setState({
//     totalPrice: newPrice,
//     ingredients: updatedIngredient,
//   });
//   this.updatePurshase(updatedIngredient);
// };

// const removeIngredientHandler = (type) => {
//   const oldCount = this.state.ingredients[type];
//   const updatedCounted = oldCount - 1;
//   const updatedIngredient = {
//     ...this.state.ingredients,
//   };
//   updatedIngredient[type] = updatedCounted;
//   const priceAddition = INGREDIENT_PRICE[type];
//   const oldPrice = this.state.totalPrice;
//   if (oldCount <= 0) {
//     return;
//   }
//   const newPrice = oldPrice - priceAddition;
//   this.setState({
//     totalPrice: newPrice,
//     ingredients: updatedIngredient,
//   });
//   this.updatePurshase(updatedIngredient);
// };

// updatePurshase(ingredient) {
//   const sum = Object.keys(ingredient)
//     .map((igKey) => {
//       return ingredient[igKey];
//     })
//     .reduce((sum, el) => {
//       return sum + el;
//     }, 0); // if the sum of all ingredients
//   this.setState({ pushasble: sum > 0 });
// }

const persons = [];

// for (let i = 0; i < 10; i++) {
//   let age = Math.floor(Math.random() * 100) ;
//   persons.push({ age: age });
// }
console.log(persons)
function binarySearch(list, target) {
  let start = 0; // 0
  let end = list.length; // 5

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    console.log("MIDDLE =>", middle);
    if (list[middle].age === target) {
      return true;
    } else if (list[list.length - 1].age === target) {
      return true;
    } else if (list[middle].age < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return false;
}

// console.log(binarySearch(persons, 19));
