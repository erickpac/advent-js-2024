/**
 * 16.- ❄️ Cleaning the snow path
 * The elves are working hard to clear paths filled with magical snow ❄️. This snow has a special property: if two identical and adjacent snow piles are found, they disappear automatically.
 *
 * Your task is to write a function to help the elves simulate this process. The path is represented by a string and each snow pile by a character.
 *
 * You need to remove all adjacent snow piles that are the same until no more moves are possible.
 */

function removeSnow(s) {
  let stack = []; // Initialize an empty stack to keep track of characters

  for (let char of s) {
    // Iterate through each character in the string
    if (stack.length && stack[stack.length - 1] === char) {
      // If the stack is not empty and the top of the stack is the same as the current character
      stack.pop(); // Remove the top character from the stack (adjacent duplicates)
    } else {
      stack.push(char); // Otherwise, push the current character onto the stack
    }
  }

  return stack.join(""); // Join the characters in the stack to form the resulting string
}

// Test cases
console.log("\n16.- ❄️ Cleaning the snow path");
console.log(removeSnow("zxxzoz")); // -> "oz"
// 1. Remove "xx", resulting in "zzoz"
// 2. Remove "zz", resulting in "oz"

console.log(removeSnow("abcdd")); // -> "abc"
// 1. Remove "dd", resulting in "abc"

console.log(removeSnow("zzz")); // -> "z"
// 1. Remove "zz", resulting in "z"

console.log(removeSnow("a")); // -> "a"
// No duplicate piles
