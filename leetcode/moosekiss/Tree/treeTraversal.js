// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}

let node1 = new TreeNode(1);
let node2 = new TreeNode(2);
let node3 = new TreeNode(3);
let node4 = new TreeNode(4);
let node5 = new TreeNode(5);
let node6 = new TreeNode(6);
let node7 = new TreeNode(7);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node3.right = node7;

/*
        1
    2       3
  4   5   6   7

*/

// inorder(중위순회)  : L N R
const recursiveInorder = function(node) {
    if(!node) return;

    recursiveInorder(node.left);
    console.log(node.val);
    recursiveInorder(node.right);

}
recursiveInorder(node1);

// preorder(전위순회) : N L R
// const recursivePreorder = function(node) {
//     if(!node) return;

//     console.log(node.val);
//     recursivePreorder(node.left);
//     recursivePreorder(node.right);

// }
// recursivePreorder(node1);

// postorder(후위순회): L R N
// const recursivePostorder = function(node) {
//     if(!node) return;

//     recursivePostorder(node.left);
//     recursivePostorder(node.right);
//     console.log(node.val);

// }
// recursivePostorder(node1);


/*
        1
    2       3
  4   5   6   7

*/
/*
iterative - stack
inorder(중위순회)  : L N R
*/
// const iterativeInorder = function(node) {
//     let currNode = node;
//     let stack = [];

//     while(true) {
//         if(currNode != null) {
//             stack.push(currNode);
//             currNode = currNode.left;
//         } else if(stack.length > 0) {
//             currNode = stack.pop();
//             console.log(currNode.val);
//             currNode = currNode.right;
//         } else {
//             break;
//         }
        
//     }
// }
// iterativeInorder(node1);

/*
push [1]
push [1][2]
push [1][2][4]
pop [1][2] / 4
pop [1] / 4 2
push [1][5]
pop [1] / 4 2 5
pop [] / 4 2 5 1
push [3]
push [3][6]
pop [3] / 4 2 5 1 6
pop [] / 4 2 5 1 6 3
push [7]
pop [] / 4 2 5 1 6 3 7
*/