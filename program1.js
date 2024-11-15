const getTotalIsles = function (grid) {
  if (!grid || grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;

  function dfs(i, j) {
      if (i < 0 || j < 0 || i >= rows || j >= cols || grid[i][j] === 'W') {
          return;
      }
      grid[i][j] = 'W';
      dfs(i + 1, j);
      dfs(i - 1, j);
      dfs(i, j + 1);
      dfs(i, j - 1);
  }

  let islandCount = 0;

  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          if (grid[i][j] === 'L') {
              dfs(i, j);
              islandCount++;
          }
      }
  }

  return islandCount;
};

module.exports = getTotalIsles;
