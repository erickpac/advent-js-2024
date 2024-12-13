/**
 * 4.- Decorating the Christmas tree
 * It's time to put up the Christmas tree at home! 🎄 But this year we want it to be special.
 * We're going to create a function that receives the height of the tree (a positive integer between 1 and 100)
 * and a special character to decorate it.
 *
 * The function should return a string that represents the Christmas tree, constructed as follows:
 * - The tree is made up of triangles of special characters.
 * - The spaces on the sides of the tree are represented with underscores _.
 * - All trees have a trunk of two lines, represented by the # character.
 * - The tree should always have the same length on each side.
 * - You must ensure the tree has the correct shape using line breaks \n for each line.
 */
function createXmasTree(height, ornament) {
  // Create the tree decoration lines
  const decoration = Array.from({ length: height }, (_, index) => {
    // Calculate the spaces needed on each side of the ornaments
    const spaces = "_".repeat(height - index - 1);
    // Calculate the number of ornaments for the current line
    const decorations = ornament.repeat(2 * index + 1);
    // Return the formatted line with spaces and ornaments
    return spaces + decorations + spaces;
  });

  // Calculate the padding for the trunk
  const trunkPadding = "_".repeat(height - 1);
  // Create the trunk lines
  const trunk = trunkPadding + "#" + trunkPadding;

  // Combine the decoration lines and trunk lines into a single string
  return [...decoration, trunk, trunk].join("\n");
}

// Test cases
console.log("\n4.- Decorating the Christmas tree");
console.log(createXmasTree(5, "*"));
console.log(createXmasTree(3, "o"));
console.log(createXmasTree(7, "x"));
