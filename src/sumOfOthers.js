module.exports = function sumOfOthers(array) {
    let sum = 0;
    array.forEach(element => {
        sum += element;
    });
    const result = [];
    array.forEach(element => {
        element = sum - element;
        result.push(element);
    })
    return result;
}