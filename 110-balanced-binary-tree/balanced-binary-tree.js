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
var isBalanced = function(root) {
     // Helper function to calculate height of the tree
    const getHeight = function(node) {
        if (node === null) return 0;
        const leftHeight = getHeight(node.left);
        const rightHeight = getHeight(node.right);
        return Math.max(leftHeight, rightHeight) + 1;
    };
    
    // Helper function to check if the tree is balanced
    const checkBalanced = function(node) {
        if (node === null) return true;
        const leftHeight = getHeight(node.left);
        const rightHeight = getHeight(node.right);
        if (Math.abs(leftHeight - rightHeight) > 1) return false;
        return checkBalanced(node.left) && checkBalanced(node.right);
    };
    
    return checkBalanced(root);
};