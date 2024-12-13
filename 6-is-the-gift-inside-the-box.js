/**
 * 6.- Is the gift inside the box?
 * We have already wrapped hundreds of presents 🎁… but an elf forgot to check if the present, represented by an asterisk *,
 * is inside the box
 *
 * The box has a present (*) and counts as "inside the box" if:
 * - It is completely surrounded by # on the box's edges.
 * - The * is not on the box's edges.
 *
 * Keep in mind that the * can be inside, outside, or may not even be there. We must return true if the * is inside the box
 * and false otherwise.
 */
function inBox(box) {
  // Remove the first and last rows of the box
  const innerRows = box.slice(1, -1);

  // Check if any of the inner rows (excluding the first and last columns) contain the gift (*)
  return innerRows.some((row) => row.slice(1, -1).includes("*"));
}

// Test cases
console.log("\n6.- Is the gift inside the box?");
console.log(inBox(["###", "#*#", "###"])); // ➞ true
console.log(inBox(["####", "#* #", "#  #", "####"])); // ➞ true
console.log(inBox(["#####", "#   #", "#  #*", "#####"])); // ➞ false
console.log(inBox(["#####", "#   #", "#   #", "#   #", "#####"])); // ➞ false
console.log(inBox(["#*#", "###", "###"])); // ➞ false
console.log(inBox(["###", "#*#", "###"])); // ➞ true
