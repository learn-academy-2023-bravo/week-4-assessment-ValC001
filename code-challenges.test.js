// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest






//1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
const colors2 = [ "chartreuse","indigo", "periwinkle", "ochre","aquamarine" ,"saffron"
]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]


//Pseudo Code 
// Create a describe statement
//Create an It statement that takes in an arguement "returns an array, that  removes the first item from the array and shuffles the remaining content." 
//Add the const array with the values needed to remove one and shuffle the rest of the values.
// Create an expect statement within the IT statement that returns an array with the first item removed and the rest shuffled.
describe("colorShuffler",() => {
  it ("returns an array, that  removes the first item from the array and shuffles the remaining content.",() =>{
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    const colors2 = [ "chartreuse","indigo", "periwinkle", "ochre", "aquamarine" ,"saffron"
]
expect(colorShuffler(colors1)).toEqual("purple", "blue", "green", "yellow", "pink")
expect(colorShuffler(colors2)).toEqual()

  })
})


// b) Create the function that makes the test pass.

//Creat the function colorShuffler.
//Use the slice function to cut the first index.
//Use the "for i" code to make it shuffled. 
//Use random method in the code to make the arrays be shuffled after slicing.

function colorShuffler(colors1){
  let colorShuffler = colors1.slice(1);
  for (let i = colorShuffler.length -1;i>0;i--){
    const  colorsResult = Math.floor(math.random()*(i+1));
    [colorShuffler[1],colorShuffler[colorsResult]] = colorShuffler[colorsResult],colorShuffler[i];
  }
  return colorShuffler
}


















// 2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

//const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
//    const votes2 = { upVotes: 2, downVotes: 33 }

// Expected output: -31

// b) Create the function that makes the test pass.
//Pseudo Code
// Create a describe function named upDownVoterTallier
// Create an it statement that takes in an arguement.
// Add the consts 
// Create expect statement with toEqual statement with expected results.
describe("upDownVoterTallier",() => {
  it ("returns an array, that takes in an object that contains up votes and down votes and returns the end tally",() =>
    //const votes1 = { upVotes: 13, downVotes: 2 }
    //const votes2 = { upVotes: 2, downVotes: 33 }
    expect(upDownVoterTallier(votes1)).toEqual("11")
    expect(colorShuffler(votes2)).toEqual("-31")
  })
})


  


// b) Create the function that makes the test pass.
//Pseudo Code 
//Create the function upDownVoterTallier 
// Make the object into an array of just numbers 
// We will be using the "for i" code
// The code should be able to add the two values in the array and produce the sum.
 const votes1 = [13,2]
 const votes2 = [ 33,2]

function upDownVoterTallier(votes1){
  if (votes1.length === 0){
    return [];
  }
  let result = votes1[0];
  for(let i = 1; i< votes1.length; i ++){
    result.push(result[i-1]+ votes1[1]);
  }
  return result;
}


// 3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]
// Pseudo Code
//Create a describe statement named duplicateRemover
//Create a IT statment that will take in the arguement.
// Add the consts
// Create an expect /it function that will combine both arrays into one.
// 
describe("duplicateRemover", ()=>{
  it("Takes in 2 arrays as arguements and returns one array with no duplicate values.", ()=>{
      const dataArray1 =["array","object","number","string", "Boolean"]
      const dataArray2 = ["string","null","Boolean","string","undefined"]
      expect(duplicateRemover(dataArray1 + dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
  })
})



// b) Create the function that makes the test pass.
 const duplicateRemover = duplicateRemover (dataArray1,dataArray2);
 console.log(duplicateRemover);
