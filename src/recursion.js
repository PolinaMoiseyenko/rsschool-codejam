
module.exports = function recursion(tree) {
    const treeToArr = [[]];
    const level = 0;
    rec(level, treeToArr, tree);
    return treeToArr;
};
function rec(level, treeToArr, tree) {
    if (treeToArr.length < level + 1)
        treeToArr.push([]); //add level
    treeToArr[level].push(tree.value);
    if ('left' in tree)
        rec(level + 1, treeToArr, tree.left);
    if ('right' in tree)
        rec(level + 1, treeToArr, tree.right);
}
