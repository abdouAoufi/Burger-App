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
  let a = 0 ; 
  let b = 0 ;
  let swap = 0 ;
  for( a  = 0 ; a < values.length -1 ; a++){
    for(b = 0 ; b < values.length -1 ; b++){
      if(values[b] > values[b+1]){
        swap = values[b];
        values[b] = values[b+1]
        values[b+1] = swap ;
      }
    }
  }
  console.log(values)
}

// sort([20, 10 , 30 , 50])


function hasNumber(myString) {
  return /\d/.test(myString);
}

console.log(hasNumber("afy88"))


const queryprams = [];
for (let i in this.state.ingredients) {
  queryprams.push(
    encodeURIComponent(i) +
      "=" +
      encodeURIComponent(this.state.ingredients[i])
  );
}
queryprams.push(encodeURIComponent("price") + "=" + this.state.totalPrice);
const queryString = queryprams.join("&");