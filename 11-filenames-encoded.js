/**
 * 11.- 🏴‍☠️ Filenames encoded
 * The Grinch has hacked 🏴‍☠️ Santa Claus's workshop systems and has encoded the names of all the important files. Now the elves can't find the original files and they need your help to decipher the names.
 *
 * Each file follows this format:
 * - It starts with a number (can contain any number of digits).
 * - Then has an underscore _.
 * - Continues with a file name and its extension.
 * - Ends with an extra extension at the end (which we don't need).
 *
 * Keep in mind that the file names may contain letters (a-z, A-Z), numbers (0-9), other underscores (_), and hyphens (-).
 *
 * Your task is to implement a function that receives a string with the name of an encoded file and returns only the important part: the file name and its extension.
 */
function decodeFilename(filename) {
  /**
   * Regular expression to match the encoded filename format
   *
   * The regex breakdown:
   * - ^\d+_ : Matches the start of the string (^) followed by one or more digits (\d+) and an underscore (_).
   * - (.+?) : Captures one or more of any character (.) in a non-greedy way (?), which means it will stop at the first occurrence of the next part of the regex.
   * - \.[^\.]+$ : Matches a dot (\.) followed by one or more characters that are not a dot ([^\.]+) until the end of the string ($).
   */
  const regex = /^\d+_(.+?)\.[^\.]+$/;
  // Match the filename against the regular expression
  const match = filename.match(regex);
  // Return the captured group (important part of the filename) or undefined if no match
  return match ? match[1] : undefined;
}

// Test cases
console.log("\n11.- 🏴‍☠️ Filenames encoded");
decodeFilename("2023122512345678_sleighDesign.png.grinchwa"); // ➞ "sleighDesign.png"
decodeFilename("42_chimney_dimensions.pdf.hack2023"); // ➞ "chimney_dimensions.pdf"
decodeFilename("987654321_elf-roster.csv.tempfile"); // ➞ "elf-roster.csv";
