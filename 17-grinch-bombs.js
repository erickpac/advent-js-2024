/**
 * 17.- 💣 Grinch's bombs
 * The Grinch has been up to his tricks in the North Pole and has planted explosive coal bombs 💣 in the elves' toy factory.
 * He wants all the toys to be rendered useless, and that's why he has left a grid where some cells have explosive coal (true) and others are empty (false).
 *
 * The elves need your help to map the dangerous areas. Each empty cell should display a number indicating how many explosive coal bombs there are in the adjacent positions, including diagonals.
 */
function detectBombs(grid) {
  // Initialize a 2D array to store the result
  let result = new Array(grid.length)
    .fill(0)
    .map(() => new Array(grid[0].length).fill(0));

  // Define the directions to check for bombs
  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  // Iterate over each cell in the grid
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      // Check if the current cell is a bomb
      if (grid[i][j]) {
        // Increment the adjacent cells
        for (let [dx, dy] of directions) {
          let x = i + dx;
          let y = j + dy;
          if (x >= 0 && x < grid.length && y >= 0 && y < grid[i].length) {
            result[x][y]++;
          }
        }
      }
    }
  }

  return result;
}

// Test cases
console.log("\n17.- 💣 Grinch's bombs");
console.log(
  detectBombs([
    [true, false, false],
    [false, true, false],
    [false, false, false],
  ])
);
// [
//   [1, 2, 1],
//   [2, 1, 1],
//   [1, 1, 1]
// ]

console.log(
  detectBombs([
    [true, false],
    [false, false],
  ])
);
// [
//   [0, 1],
//   [1, 1]
// ]

console.log(
  detectBombs([
    [true, true],
    [false, false],
    [true, true],
  ])
);
// [
//   [1, 1],
//   [4, 4],
//   [1, 1]
// ]
