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
  console.log(params);
}
