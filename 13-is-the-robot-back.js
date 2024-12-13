/**
 * 13.- 🤖 Is the robot back?
 * The elves at the North Pole have created a special robot 🤖 that helps Santa Claus distribute gifts inside a large warehouse. The robot moves on a 2D plane and we start from the origin (0, 0).
 *
 * We want to know if, after executing a series of movements, the robot returns to exactly where it started.
 *
 * The robot's basic commands are:
 * - L: Move to the left
 * - R: Move to the right
 * - U: Move upwards
 * - D: Move downwards
 *
 * But it also has certain modifiers for the movements:
 * - *: The movement is done with double intensity (e.g., *R means RR)
 * - !: The next movement is inverted (e.g., R!L is considered as RR)
 * - ?: The next movement is done only if it hasn't been done before (e.g., R?R means R)
 *
 * Note: When the movement is inverted with ! the inverted movement is counted and not the original one. For example, !U?U inverts the U movement, so it counts as having done the D movement but not the U. Thus, !U?U translates to D?U, and therefore, the final U movement is done.
 *
 * You must return:
 * - true: if the robot returns exactly to where it started
 * - [x, y]: if the robot does not return to where it started, return the position where it stopped
 */
function isRobotBack(moves) {
  let x = 0,
    y = 0;
  let movements = new Set();
  let invertNext = false;

  const deltas = {
    L: [-1, 0],
    R: [1, 0],
    U: [0, 1],
    D: [0, -1],
  };

  for (let i = 0; i < moves.length; i++) {
    let cmd = moves[i];

    if (cmd === "*") {
      let next = moves[i + 1];
      if (deltas[next]) {
        const [dx, dy] = deltas[next];
        x += 2 * dx;
        y += 2 * dy;
      }
      i++; // Skip next character
    } else if (cmd === "!") {
      invertNext = true;
    } else if (cmd === "?") {
      let next = moves[i + 1];
      if (deltas[next]) {
        if (!movements.has(next)) {
          const [dx, dy] = deltas[next];
          x += dx;
          y += dy;
          movements.add(next);
        }
      }
      i++; // Skip next character
    } else if (deltas[cmd]) {
      let [dx, dy] = deltas[cmd];
      if (invertNext) {
        dx = -dx;
        dy = -dy;
        invertNext = false;
      }
      x += dx;
      y += dy;
      movements.add(cmd);
    } else {
      return undefined; // Invalid command
    }
  }

  return x === 0 && y === 0 ? true : [x, y];
}

// Example usage for isRobotBack
console.log(isRobotBack("R")); // ➞ [1, 0]
console.log(isRobotBack("RL")); // ➞ true
console.log(isRobotBack("RLUD")); // ➞ true
console.log(isRobotBack("*RU")); // ➞ [2, 1]
console.log(isRobotBack("R*U")); // ➞ [1, 2]
console.log(isRobotBack("LLL!R")); // ➞ [-4, 0]
console.log(isRobotBack("R?R")); // ➞ [1, 0]
console.log(isRobotBack("U?D")); // ➞ true
console.log(isRobotBack("R!L")); // ➞ [2, 0]
console.log(isRobotBack("U!D")); // ➞ [0, 2]
console.log(isRobotBack("R?L")); // ➞ true
console.log(isRobotBack("U?U")); // ➞ [0, 1]
console.log(isRobotBack("*U?U")); // ➞ [0, 2]
console.log(isRobotBack("U?D?U")); // ➞ true
console.log(isRobotBack("R!U?U")); // ➞ [1, 0]
console.log(isRobotBack("UU!U?D")); // ➞ [0, 1]
