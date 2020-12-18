export const win = (grid, player) => {
  return (
    // Top Row
    (grid["0-0"] === player && grid["0-1"] === player && grid["0-2"] === player) ||
    // Middle Row
    (grid["1-0"] === player && grid["1-1"] === player && grid["1-2"] === player) ||
    // Bottom Row
    (grid["2-0"] === player && grid["2-1"] === player && grid["2-2"] === player) ||
    // Left Column
    (grid["0-0"] === player && grid["1-0"] === player && grid["2-0"] === player) ||
    // Middle Column
    (grid["0-1"] === player && grid["1-1"] === player && grid["2-1"] === player) ||
    // Right Column
    (grid["0-2"] === player && grid["1-2"] === player && grid["2-2"] === player) ||
    // Top Left -> Bottom Right
    (grid["0-0"] === player && grid["1-1"] === player && grid["2-2"] === player) ||
    // Bottom Left -> Top Right
    (grid["0-2"] === player && grid["1-1"] === player && grid["2-0"] === player)
  );
};

export const tie = (grid, rows, columns) =>
  Object.keys(grid).length >= rows * columns;
