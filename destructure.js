// //destructure exercise 1

// let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
// let {numPlanets, yearNeptuneDiscovered} = facts;

// console.log(numPlanets); // console logs 8
// console.log(yearNeptuneDiscovered); //console logs 1846

//destructure exercise 2

// let planetFacts = {
//     numPlanets: 8,
//     yearNeptuneDiscovered: 1846,
//     yearMarsDiscovered: 1659
//   };
  
//   let {numPlanets, ...discoveryYears} = planetFacts;
  
//   console.log(discoveryYears); // {yearNeptuneDiscovered: 1846,yearMarsDiscovered: 1659}

// function getUserData({firstName, favoriteColor="green"}){
//     return `Your name is ${firstName} and you like ${favoriteColor}`;
//   }
  
//   getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // Your name is Alejandro and you like purple
//   getUserData({firstName: "Melissa"}) // Your name is Melissa your favorite color is green
//   getUserData({}) // Your name is undefined and your favorite color is green

//array destructuring exercise 1

// let [first, second, third] = ["Maya", "Marisa", "Chi"];

// console.log(first); // Maya
// console.log(second); // Marisa
// console.log(third); // Chi

//array destructuring exercise 2

// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//     "Raindrops on roses",
//     "whiskers on kittens",
//     "Bright copper kettles",
//     "warm woolen mittens",
//     "Brown paper packages tied up with strings"
//   ]
  
//   console.log(raindrops); // "Raindrops on roses"
//   console.log(whiskers); // "whiskers on kittens"
//   console.log(aFewOfMyFavoriteThings);
//   // ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]

//array destructuring exercise 3
// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]]

// console.log(numbers) // [10,30,20]

//destructure exercise :

const obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
  const {a,b} = obj.numbers

  //destructure exercise: swap

  [arr[0], arr[1]] = [arr[1], arr[0]]

  //exercise gold metal
  raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre']);

  const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})
