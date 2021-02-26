var preorderTraversal = function(root) {
    const res = [];
    const stack = [];
      while(stack.length > 0 || root){
        while(root){
            res.push(root.val);
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        root = root.right;  
    }
    return res;
};