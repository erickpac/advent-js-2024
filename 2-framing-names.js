/**
 * 2.- Framing names
 * Santa Claus 🎅 wants to frame the names of the good children to decorate his workshop 🖼️,
 * but the frame must follow specific rules. Your task is to help the elves generate this magical frame.
 *
 * Rules:
 * - Given an array of names, you must create a rectangular frame that contains all of them.
 * - Each name must be on a line, aligned to the left.
 * - The frame is built with * and has a border one line thick.
 * - The width of the frame automatically adapts to the longest name plus a margin of 1 space on each side.
 */
function frameNames(names) {
  // Determine the maximum length of the names
  const maxLength = Math.max(...names.map((name) => name.length));
  // Calculate the frame width, accounting for a space on each side of the longest name
  const frameWidth = maxLength + 4; // 2 spaces + 2 border '*'
  // Create the top and bottom border
  const border = "*".repeat(frameWidth);
  // Create the framed lines for each name
  const framedNames = names.map((name) => `* ${name.padEnd(maxLength, " ")} *`);

  return [border, ...framedNames, border].join("\n");
}

// Test cases
console.log("\n2.- Framing names");
console.log(frameNames(["midu", "madeval", "educalvolpz"]));
console.log(frameNames(["midu"]));
console.log(frameNames(["a", "bb", "ccc"]));
console.log(frameNames(["a", "bb", "ccc", "dddd"]));
