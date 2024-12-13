/**
 * 10.- 👩‍💻 The elfish assembler
 * The elf programmers are creating a small magical assembler to control the machines in Santa Claus's workshop.
 *
 * To assist them, we will implement a simple interpreter that supports the following magical instructions:
 * - MOV x y: Copies the value x (which can be a number or the content of a register) into register y
 * - INC x: Increments the content of register x by 1
 * - DEC x: Decrements the content of register x by 1
 * - JMP x y: If the value in register x is 0, then jumps to the instruction at index y and continues executing the program from there.
 *
 * Expected behavior:
 * - If an attempt is made to access, increment, or decrement a register that has not been initialized, the default value 0 will be used.
 * - The jump with JMP is absolute and goes to the exact index indicated by y.
 * - Upon completion, the program should return the content of register A. If A did not have a defined value, it returns undefined.
 */

function compile(instructions) {
  const registers = {}; // Initialize an empty object to store register values
  let pointer = 0; // Initialize the instruction pointer to the first instruction

  while (pointer < instructions.length) {
    // Split the current instruction into command and operands
    const [command, x, y] = instructions[pointer].split(" ");

    switch (command) {
      case "MOV":
        // Move the value of x (either a number or the value of another register) into register y
        registers[y] = isNaN(x) ? registers[x] || 0 : parseInt(x, 10);
        break;
      case "INC":
        // Increment the value of register x by 1
        registers[x] = (registers[x] || 0) + 1;
        break;
      case "DEC":
        // Decrement the value of register x by 1
        registers[x] = (registers[x] || 0) - 1;
        break;
      case "JMP":
        // If the value of register x is 0, jump to the instruction at index y
        if ((registers[x] || 0) === 0) {
          pointer = parseInt(y, 10);
          continue; // Skip the pointer increment to jump to the new instruction
        }
        break;
    }

    pointer++; // Move to the next instruction
  }

  // Return the value of register A, or undefined if it was never set
  return registers["A"];
}

// Test cases
console.log("\n10.- 👩‍💻 The elfish assembler");
console.log(
  compile(["MOV 5 A", "INC A", "DEC A", "INC A", "DEC A", "JMP A 2"])
); // ➞ 1
console.log(
  compile(["MOV 5 A", "MOV A B", "MOV B C", "MOV C D", "MOV D A", "JMP A 0"])
); // ➞ 5
