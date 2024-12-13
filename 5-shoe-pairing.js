/**
 * 5.- Shoe pairing
 * Santa Claus's elves 🧝🧝‍♂️ have found a bunch of mismatched magic boots in the workshop. Each boot is described by two values:
 * - type indicates if it's a left boot (I) or a right boot (R).
 * - size indicates the size of the boot.
 *
 * Your task is to help the elves pair all the boots of the same size having a left and a right one. To do this, you should return a list of the available boots after pairing them.
 *
 * Note: You can have more than one pair of boots of the same size!
 */
function organizeShoes(shoes) {
  // Create a map to store the count of left and right shoes for each size
  const sizeMap = new Map();

  // Iterate over each shoe in the input array
  shoes.forEach(({ type, size }) => {
    // If the size is not already in the map, initialize it with counts for left (I) and right (R) shoes
    if (!sizeMap.has(size)) {
      sizeMap.set(size, { I: 0, R: 0 });
    }
    // Increment the count for the corresponding shoe type (I or R)
    sizeMap.get(size)[type]++;
  });

  // Convert the map entries to an array and reduce it to an array of paired shoe sizes
  return Array.from(sizeMap.entries()).reduce((pairs, [size, counts]) => {
    // Calculate the number of pairs for the current size (minimum of left and right shoe counts)
    const pairCount = Math.min(counts.I, counts.R);
    // Add the size to the result array for each pair found
    return pairs.concat(Array(pairCount).fill(size));
  }, []);
}

// Test cases
console.log("\n5.- Shoe pairing");
const shoes = [
  { type: "I", size: 38 },
  { type: "R", size: 38 },
  { type: "R", size: 42 },
  { type: "I", size: 41 },
  { type: "I", size: 42 },
];

console.log(organizeShoes(shoes)); // [38, 42]

const shoes2 = [
  { type: "I", size: 38 },
  { type: "R", size: 38 },
  { type: "I", size: 38 },
  { type: "I", size: 38 },
  { type: "R", size: 38 },
];
console.log(organizeShoes(shoes2)); // [38, 38]

const shoes3 = [
  { type: "I", size: 38 },
  { type: "R", size: 36 },
  { type: "R", size: 42 },
  { type: "I", size: 41 },
  { type: "I", size: 43 },
];
console.log(organizeShoes(shoes3)); // []
