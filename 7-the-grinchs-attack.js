/**
 * 7.- 👹 The Grinch's attack
 * The grinch 👹 has passed through Santa Claus's workshop! And what a mess he has made.
 * He has changed the order of some packages, so shipments cannot be made.
 *
 * Luckily, the elf Pheralb has detected the pattern the grinch followed to jumble them.
 * He has written the rules that we must follow to reorder the packages. The instructions are as follows:
 *
 * You will receive a string containing letters and parentheses.
 * Every time you find a pair of parentheses, you need to reverse the content within them.
 * If there are nested parentheses, solve the innermost ones first.
 * Return the resulting string with parentheses removed, but with the content correctly reversed.
 */
function fixPackages(packages) {
  // Continue processing while there are parentheses in the string
  while (packages.includes("(")) {
    // Use a regular expression to find the innermost parentheses and reverse their content
    packages = packages.replace(/\(([^()]*)\)/g, (_, p1) =>
      p1.split("").reverse().join("")
    );
  }

  // Return the final processed string without parentheses
  return packages;
}

// Test cases
console.log("\n7.- 👹 The Grinch's attack");
console.log(fixPackages("a(cb)de"));
console.log(fixPackages("a(bc(def)g)h"));
console.log(fixPackages("abc(def(gh)i)jk"));
console.log(fixPackages("a(b(c))e"));
