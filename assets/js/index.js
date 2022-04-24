//declare function getSide
const getSide = (message) => {
  //prompt user with message
  const userInput = prompt(message);

  //convert input to string
  const userInputNumber = parseInt(userInput, 10);

  //check if its number
  if (!Number.isNaN(userInputNumber)) {
    return userInputNumber;
  }
};

//declare function validateSides

const validateSides = () => {};

//declare function triangle
const triangle = () => {};

//declare variable side A
const sideA = getSide("Please enter sideA?");
console.log(sideA);

//declare variable side B
const sideB = getSide("Please enter sideB?");
console.log(sideB);

//declare variable side C
const sideC = getSide("Please enter sideC?");
console.log(sideC);

//validate side A,side B,side C

//if invalid present a message
//if valid then continue

//check for triangle type
//display message
