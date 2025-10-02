function gridChallenge(grid) {
    for (let i = 0; i < grid.length; i++) {
        grid[i] = grid[i].split("").sort().join("");
    }

    let rows = grid.length;
    let cols = grid[0].length;

    for (let c = 0; c < cols; c++) {
        for (let r = 1; r < rows; r++) {
            if (grid[r][c] < grid[r - 1][c]) {
                return "NO";
            }
        }
    }

    return "YES";
}
