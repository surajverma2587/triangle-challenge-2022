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

const validateSides = (sideA, sideB, sideC) => {
  //check if all three numbers are present
  const allSidesDefined = sideA && sideB && sideC;

  // check if all number > than 0
  const allSidesGreaterThanZero = sideA > 0 && sideB > 0 && sideC > 0;

  //check for triangle inequality
  const inequalityCheck =
    sideA + sideB > sideC && sideB + sideC > sideA && sideA + sideC > sideB;

  //return true for all three checks
  return allSidesDefined && allSidesGreaterThanZero && inequalityCheck;
};

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
const isValid = validateSides(sideA, sideB, sideC);

//if invalid present a message
if (isValid) {
  console.log("yippee");
} else {
  alert("The triangle is invalid");
}
//if valid then continue

//check for triangle type
//display message
