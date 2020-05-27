// binary search tree
class BST{
    constructor(){
        this.root = null;
    }
}

class BSTNode{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function insert(val){
    var runner = this.root;
    while(runner != null){
        if(val >= runner.val){
            if(runner.left == null){
                runner.left = new Node(val);
            }
            else{
                runner.right = new Node(val);
            }
        }
        else{
            if(runner.left == null){
                runner.left = new Node(val);
            }
            else{
                runner.right = new Node(val);
            }
        }
    }
}

function contians(val){
    var runner = this.root;
    while(runner != null){
        if(val == runner.val){
            return true;
        }
        if(val > runner.val){
            runner = runner.right;
        }
        else{
            runner = runner.left;
        }
    }
    return false;
}

function sortedArrToBST(arr){
    if(arr.length < 1) {
        return null;
    }
    var mid = Math.floor((arr.length - 1) / 2);
    var root = new BSTNode(arr[mid]);
    root.left = sortedArrToBST(arr.slice(0, mid));
    root.right = sortedArrToBST(arr.slice(mid+1, arr.length));
    return root;
}

function size(Node){
    if (Node == null) {
        return 0;
    }
    return (size(Node.left) + size(Node.right) + 1);
}

function height(node){
    if(node == null) {
        return 0;
    }
    return Math.max(height(node.left), height(node.right));
}

function isBalanced(node) {
    if (node == null) {
        return true;
    }
    var left = isBalanced(node.left);
    var right = isBalanced(node.right);
    if (Math.abs(left-right) <=1 && isBalanced(node.left) && isBalanced(node.right)) {
        return true;
    } else {
        return false;
    }
}

// delete
function deleteWrapper(val) {
    if(this.contains(val)){
        this.delete(this.root, val);
    } else {
        return -1;
    }
}
function deleteVal(node, value) {
    if(node == null){
        return;
    } else if(value < node.value){
        node.left = this.delete(node.left, value);
    } else if(value > node.value){
        node.right = this.delete(node.right, value);
    } else {    // if(value == node.value)
        // CASE 1: Deleting with ONE child or NO child
        if(node.left == null){
            var temp = node.right;
            node = null;
            return temp;
        } else if(node.right == null){
            var temp = node.left;
            node = null;
            return temp;
        }
        // CASE 2: Deleting with two child (finding Min of RIGHT SUBTREE)
        else{
            var temp = this.findMin(node.right);
            node.value = temp.value;
            node.right = this.delete(node.right, temp.value);   // move the min node of right subtree up;
                                                                // call delete to delete the min node from the subtree
        }
    }
    return node;
}

function inorder(){
        //[5]
    //[3]     [7]
// [2]  [4] [6] [8]
//[2,3,4,5,6,7,8]
// PRINT OUT THE VALUES WITHIN THE BST FROM MIN TO MAX
this.inorderHelper(this.root);
} 
function inorderHelper(node){
    if(node != null){
        this.inorderHelper(node.left);
        console.log(node.value);
        this.inorderHelper(node.right);
    }
}