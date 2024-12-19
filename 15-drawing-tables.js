/**
 * 15.- ✏️ Drawing tables
 * ChatGPT has arrived at the North Pole and the elf Sam Elfman is working on an application for managing gifts and children.
 *
 * To enhance the presentation, he wants to create a function drawTable that receives an array of objects and converts it into a text table.
 *
 * The drawn table should represent the object data as follows:
 * - It has a header with the column name.
 * - The column name has the first letter capitalized.
 * - Each row should contain the values of the objects in the corresponding order.
 * - Each value must be left-aligned.
 * - Fields always leave a space on the left.
 * - Fields leave the necessary space on the right to align the box.
 */
function drawTable(data) {
  // Get the keys from the first object to use as column names
  const keys = Object.keys(data[0]);

  // Calculate the maximum width for each column
  const columnWidths = keys.map((key) =>
    Math.max(key.length, ...data.map((item) => String(item[key]).length))
  );

  // Create the header
  let result = "+";
  for (let i = 0; i < keys.length; i++) {
    result += "-".repeat(columnWidths[i] + 2) + "+";
  }
  result += "\n|";

  for (let i = 0; i < keys.length; i++) {
    result +=
      ` ${keys[i][0].toUpperCase() + keys[i].slice(1)} `.padEnd(
        columnWidths[i] + 2
      ) + "|";
  }

  result += "\n+";

  for (let i = 0; i < keys.length; i++) {
    result += "-".repeat(columnWidths[i] + 2) + "+";
  }
  result += "\n";

  // Create the rows
  for (let i = 0; i < data.length; i++) {
    result += "|";
    for (let j = 0; j < keys.length; j++) {
      result += ` ${String(data[i][keys[j]]).padEnd(columnWidths[j])} |`;
    }
    result += "\n";
  }

  // Add the bottom line
  result += "+";
  for (let i = 0; i < keys.length; i++) {
    result += "-".repeat(columnWidths[i] + 2) + "+";
  }

  return result;
}

// Test cases
console.log("\n15.- ✏️ Drawing tables");
console.log(
  drawTable([
    { name: "Alice", city: "London" },
    { name: "Bob", city: "Paris" },
    { name: "Charlie", city: "New York" },
  ])
);
// +---------+-----------+
// | Name    | City      |
// +---------+-----------+
// | Alice   | London    |
// | Bob     | Paris     |
// | Charlie | New York  |
// +---------+-----------+

console.log(
  drawTable([
    { gift: "Doll", quantity: 10 },
    { gift: "Book", quantity: 5 },
    { gift: "Music CD", quantity: 1 },
  ])
);
// +----------+----------+
// | Gift     | Quantity |
// +----------+----------+
// | Doll     | 10       |
// | Book     | 5        |
// | Music CD | 1        |
// +----------+----------+)

console.log(
  drawTable([
    { id: "midugato", isCat: true },
    { id: "miduperro", isCat: false },
  ])
);
// "+-----------+-------+
// | Id        | IsCat |
// +-----------+-------+
// | midugato  | true  |
// | miduperro | false |
// +-----------+-------+"
