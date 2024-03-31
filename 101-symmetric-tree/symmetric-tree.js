/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    // Helper function to check if two nodes are symmetric
    const isMirror = (node1, node2) => {
        // If both nodes are null, they are symmetric
        if (!node1 && !node2) {
            return true;
        }
        // If one node is null and the other is not, they are not symmetric
        if (!node1 || !node2) {
            return false;
        }
        // If the values of the nodes are different, they are not symmetric
        if (node1.val !== node2.val) {
            return false;
        }
        // Recursively check if the left subtree of one node is the mirror of the right subtree of the other node
        // and vice versa
        return isMirror(node1.left, node2.right) && isMirror(node1.right, node2.left);
    };

    // If the root is null, it is symmetric
    if (!root) {
        return true;
    }

    // Check if the left subtree is the mirror of the right subtree
    return isMirror(root.left, root.right);
};