/**
 * 12.- 💵 How much does the tree cost?
 * You are in a very special market where Christmas trees 🎄 are sold. Each one comes decorated with a series of very peculiar ornaments, and the price of the tree is determined by the ornaments it has.
 * - *: Snowflake - Value: 1
 * - o: Christmas Ball - Value: 5
 * - ^: Decorative Tree - Value: 10
 * - #: Shiny Garland - Value: 50
 * - @: Polar Star - Value: 100
 *
 * Normally, you would sum up all the values of the ornaments and that's it…
 *
 * But, watch out! If an ornament is immediately to the left of another of greater value, instead of adding, its value is subtracted.
 */
function calculatePrice(ornaments) {
  // Define the values of each ornament type
  const values = { "*": 1, o: 5, "^": 10, "#": 50, "@": 100 };
  let total = 0; // Initialize the total cost to 0

  // Iterate through each character in the ornaments string
  ornaments.split("").forEach((ornament, i) => {
    const current = values[ornament]; // Get the value of the current ornament
    const next = values[ornaments[i + 1]]; // Get the value of the next ornament

    // Check if the current ornament is invalid
    if (current === undefined) {
      total = undefined; // Set total to undefined for invalid ornament
      return;
    }

    // If the current ornament is less than the next, subtract its value
    if (current < next) {
      total -= current;
    } else {
      // Otherwise, add its value
      total += current;
    }
  });

  return total; // Return the total cost of the ornaments
}

// Test cases
console.log("\n12.- 💵 How much does the tree cost?");
console.log(calculatePrice("***")); // ➞ 3
console.log(calculatePrice("*o")); // ➞ 4
console.log(calculatePrice("o*")); // ➞ 6
console.log(calculatePrice("*o*")); // ➞ 5
console.log(calculatePrice("**o*")); // ➞ 6
console.log(calculatePrice("o***")); // ➞ 8
console.log(calculatePrice("*o@")); // ➞ 94
console.log(calculatePrice("*#")); // ➞ 49
console.log(calculatePrice("@@@")); // ➞ 300
console.log(calculatePrice("#@")); // ➞ 50
console.log(calculatePrice("#@Z")); // ➞ undefined
