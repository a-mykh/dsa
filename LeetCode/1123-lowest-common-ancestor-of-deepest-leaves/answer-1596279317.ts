/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

interface TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
};

/**
 * Approach: Depth-First Search (DFS), Recursion
 * 
 * The algorithm recursively calculates the depth of the left and right subtrees using the `getDepth` helper function.
 * This helper function calculates the maximum depth of a binary tree rooted at the given node.
 * 
 * Advantages of the solution:
 * - the code is relatively short and easy to understand.
 * - separation of concerns between `lcaDeepestLeaves` and `getDepth` enhances modularity.
 * Disadvantages of the solution:
 * - redundant depth calculations: the `getDepth` function is called multiple times for the same subtrees.
 * - lack of caching/memoization
 * - stack overflow risk: in extremely deep trees, the recursive calls to getDepth and lcaDeepestLeaves could lead to a stack overflow error.
 * 
 * Time: O(n)
 * Space: O(h)
 */
function lcaDeepestLeaves2(root: TreeNode | null): TreeNode | null {
    const depthL = getDepth(root?.left ?? null);
    const depthR = getDepth(root?.right ?? null);

    if (depthL === depthR) return root;

    return lcaDeepestLeaves2((depthL > depthR ? root?.left : root?.right) ?? null);
};

function getDepth(n: TreeNode | null): number {
    return n ? 1 + Math.max(getDepth(n.left), getDepth(n.right)) : 0;
};
