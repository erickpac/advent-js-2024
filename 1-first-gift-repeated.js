/**
 * 1.- First gift repeated
 * Santa Claus 🎅 has received a list of magical numbers representing gifts 🎁 but some of them are duplicated
 * and must be removed to avoid confusion.
 *
 * Additionally, the gifts must be sorted in ascending order before being delivered to the elves.
 *
 * Your task is to write a function that receives a list of integers (which may include duplicates)
 * and returns a new list without duplicates, sorted in ascending order.
 */
function prepareGifts(giftNumbers) {
  // Use a Set to remove duplicates and then sort the numbers
  const uniqueGifts = new Set(giftNumbers);
  // Convert the Set back to an array and sort it
  const sortedGifts = Array.from(uniqueGifts).sort((a, b) => a - b);

  return sortedGifts;
}

// Test case:
console.log("\n1.- First gift repeated");
console.log(prepareGifts([5, 3, 8, 3, 1, 5, 7, 8, 2]));
