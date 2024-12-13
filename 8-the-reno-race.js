/**
 * 8.- 🦌 The reno race
 * It's time to select the fastest reindeer for Santa's journeys! 🦌🎄
 * Santa Claus has organized exciting reindeer races to determine which ones are in the best shape.
 *
 * Your task is to display each reindeer's progress on a snow track in isometric format.
 *
 * The information you receive:
 * - indices: An array of integers representing each reindeer's progress on the track:
 * - 0: The lane is empty.
 * - Positive number: The reindeer's current position from the beginning of the track.
 * - Negative number: The reindeer's current position from the end of the track.
 * - length: The length of each lane.
 *
 * Return a string representing the race track:
 * - Each lane has exactly length positions filled with snow (~).
 * - Each reindeer is represented with the letter r.
 * - Lanes are numbered at the end with /1, /2, etc.
 * - The view is isometric, so the lower lanes are shifted to the right.
 */
function drawRace(indices, length) {
  // Map each reindeer's position to its corresponding lane
  const lanes = indices.map((position, index) => {
    // Initialize the track with snow (~) for the given length
    let track = "~".repeat(length);

    if (position !== 0) {
      // Calculate the clamped position of the reindeer on the track
      const clampedPosition =
        position > 0 ? position : length - Math.abs(position);

      // Place the reindeer (r) at the calculated position on the track
      track =
        track.slice(0, clampedPosition) +
        "r" +
        track.slice(clampedPosition + 1);
    }

    // Append the lane number to the end of the track
    return track + ` /${index + 1}`;
  });

  // Adjust the lanes for isometric view and join them into a single string
  return lanes
    .map((lane, index) => " ".repeat(lanes.length - 1 - index) + lane)
    .join("\n");
}

// Test cases
console.log("\n8.- 🦌 The reno race");
console.log(drawRace([0, 5, -3], 10));
console.log(drawRace([2, -1, 0, 5], 8));
console.log(drawRace([3, 7, -2], 12));
