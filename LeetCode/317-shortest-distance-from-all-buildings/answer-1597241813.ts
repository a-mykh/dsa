/**
 * Approach: Breadth-First Search.
 * 
 * Calculating the distance from each building only once.
 * Only calculating the sum of distances for empty lands that can reach all buildings.
 *
 * Time: O(m*n*b), where m and n are the dimensions of the grid, and b is the number of buildings.
 *       The BFS is performed for each building, and in the worst case, it visits all cells in the grid.
 * Space: O(m*n*b) for the dist array and O(m*n) for the reach and visited arrays.
 */
function shortestDistance(grid: number[][]): number {
    const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const m = grid.length;
    const n = grid[0].length;

    // Find all building locations
    const buildings: number[][] = [];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                buildings.push([i, j]);
            }
        }
    }

    // To store distance from each cell to each building, where dist[i][j][b] represents distance (i, j) to building 'b'
    const dist: number[][][] = Array.from(
        { length: m },
        () => Array.from(
            { length: n },
            () => Array(buildings.length).fill(0)
        )
    );

    // To store number of buildings that can reach empty grid cell.
    const reach: number[][] = Array.from({ length: m }, () => Array(n).fill(0));

    // BFS
    for (let b = 0; b < buildings.length; b++) {
        const queue: number[][] = [[buildings[b][0], buildings[b][1]]];
        const visited: boolean[][] = Array.from({ length: m }, () => Array(n).fill(false));

        visited[buildings[b][0]][buildings[b][1]] = true;

        let level = 0;

        // Calculate the distance from each building to each empty cell.
        while (queue.length > 0) {
            const size = queue.length;

            for (let i = 0; i < size; i++) {
                const [row, col] = queue.shift()!;

                // ... and save calculated distances
                dist[row][col][b] = level;

                for (const [dr, dc] of dirs) {
                    const nr = row + dr;
                    const nc = col + dc;

                    if (
                        nr >= 0 && nr < m &&
                        nc >= 0 && nc < n &&
                        grid[nr][nc] === 0 &&
                        !visited[nr][nc]
                    ) {
                        visited[nr][nc] = true;
                        queue.push([nr, nc]);
                    }
                }
            }

            level++;
        }

        // Increment each cell that can be reachable from current building.
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (!grid[i][j] && visited[i][j]) {
                    reach[i][j]++;
                }
            }
        }
    }

    let minDistance = Infinity;

    // if empty cell is reachable from all buildings, calculate total distance to all buildings
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0 && reach[i][j] === buildings.length) {
                let totalDistance = 0;

                for (let b = 0; b < buildings.length; b++) {
                    totalDistance += dist[i][j][b];
                }

                minDistance = Math.min(minDistance, totalDistance);
            }
        }
    }

    return minDistance === Infinity ? -1 : minDistance;
};
