// Exercise 01

let board = [
  [1, 2, 3],
  ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
  [true, false],
];

for (const boards of board) {
  for (const tigger of boards) {
    console.log(tigger);
  }
}

// Exercise 02

// 2.1

const doggo = {
  name: "vick",
  breed: "pitbull",
  //   2.2
  favFoods: ["chicken", "rice"],
};

// 2.3
console.log(doggo.favFoods[1]);

// 2.4
const favSumfoods = () => {
  for (food of doggo["favFoods"]) {
    return food;
  }
};

console.log(favSumfoods());

// Exercise 03

// 3.1
const recipe = {
  title: "choclate cake",
  ingredients: {
    // 3.2
    butter: "250g",
    sugar: "100g",
    flour: "350g",
  },
};

// 3.3
recipe.ingredients.ginger = "10g";

console.log(recipe);
// 3.4
recipe.ingredients["Brown sugar"] = recipe.ingredients["sugar"];

delete recipe.ingredients["sugar"];

console.log(recipe);

// 3.5
console.log(Object.values(recipe.ingredients));
