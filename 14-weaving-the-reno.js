/**
 * 14.- 🦌 Weaving the reno
 * Reindeer need to move to occupy the stables, but there cannot be more than one reindeer per stable. Additionally, to keep the reindeer comfortable, we must minimize the total distance they travel to get settled.
 *
 * We have two parameters:
 * - reindeer: An array of integers representing the positions of the reindeer.
 * - stables: An array of integers representing the positions of the stables.
 *
 * Each reindeer must be moved from its current position to a stable. However, it is important to note that there can only be one reindeer per stable.
 *
 * Your task is to calculate the minimum number of moves needed for all the reindeer to end up in a stable.
 *
 * Note: Keep in mind that the stables array will always be the same size as the reindeer array and that the stables will always be unique.
 */
function minMovesToStables(reindeer, stables) {
  // Sort both arrays
  reindeer.sort((a, b) => a - b);
  stables.sort((a, b) => a - b);

  // Calculate the total moves
  let totalMoves = 0;
  for (let i = 0; i < reindeer.length; i++) {
    totalMoves += Math.abs(reindeer[i] - stables[i]);
  }

  return totalMoves;
}

// Examples
console.log(minMovesToStables([2, 6, 9], [3, 8, 5])); // -> 3
console.log(minMovesToStables([1, 1, 3], [1, 8, 4])); // -> 8
