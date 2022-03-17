/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = function(root) {
    const result = [];
    
    // inorder(중위순회)  : L N R
    // preorder(전위순회) : N L R
    // postorder(후위순회): L R N
    function inorder(root) {
        if(!root) return;

        inorder(root.left);
        result.push(root.val);
        inorder(root.right);

    }
    inorder(root);
    return result;
};
// Follow up: Recursive solution is trivial, could you do it iteratively?

let root = [1, null, 2, 3];
// let root = [];
// let root = [1];
// let root = [1,2,5,3];
const result = inorderTraversal(root);