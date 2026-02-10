export function clamp(value, min, max) {
  if (min > max) {
    throw new Error("Invalid range");
  }
  return Math.min(Math.max(value, min), max);
}

export function average(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    // throw new Error("Average requires a non-empty array of numbers");
    return 'NaN';
  }

  const total = numbers.reduce((sum, value) => sum + value, 0);
  return total / numbers.length;
}

// average("abc");


const userInput = 'abc'; 
let returnValue = average(userInput);

if( returnValue !== "NaN"){
    console.log("You must pass a non-empty array of numbers");
} else {
    console.log("The average is: " + returnValue);
}



// console.log(clamp(5, 1, 10));    // Output: 5
// console.log(clamp(-3, 0, 100));  // Output: 0
// console.log(clamp(150, 0, 100)); // Output: 100
// console.log(clamp(50, 50, 50));   // Output: 50
// console.log(clamp(10, 20, 30));   // Output: 20

/* 

    value , min, max    => result 
    5, 1, 10           => 5
    -3, 0, 100         => 0
    150, 0, 100        => 100
    50, 50, 50         => 50
    10, 20, 30         => 20


*/


export function uniqueTags(csv){
    const tags = csv
        .split(",")
        .map(tag=>tag.trim())
        .filter(Boolean);
    return Array.from(new Set(tags));
}; 


console.log(uniqueTags("js, node, express, js, node, node")); // Output: ["js", "node", "express"]