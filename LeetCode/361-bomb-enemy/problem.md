## [361\. Bomb Enemy](https://leetcode.com/problems/bomb-enemy)

![Difficulty: Medium](https://img.shields.io/badge/Difficulty-Medium-orange)

---

Given an `m x n` matrix `grid` where each cell is either a wall `'W'`, an enemy `'E'` or empty `'0'`, return _the maximum enemies you can kill using one bomb_. You can only place the bomb in an empty cell.

The bomb kills all the enemies in the same row and column from the planted point until it hits the wall since it is too strong to be destroyed.

**Example 1:**

![Bomb Grid 1](https://assets.leetcode.com/uploads/2021/03/27/bomb1-grid.jpg)

**Input:** grid = \[\["0","E","0","0"\],\["E","0","W","E"\],\["0","E","0","0"\]\]  
**Output:** 3

**Example 2:**

![Bomb Grid 2](https://assets.leetcode.com/uploads/2021/03/27/bomb2-grid.jpg)

**Input:** grid = \[\["W","W","W"\],\["0","0","0"\],\["E","E","E"\]\]  
**Output:** 1

**Constraints:**

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 500`
- `grid[i][j]` is either `'W'`, `'E'`, or `'0'`.
