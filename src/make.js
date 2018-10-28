function make(args) {
    const arr = [];
    arr.push(args);
    function findFunc(...data) {
        if (data[0] instanceof Function) {
            return arr.reduce(data[0]);
        }
        if (data.length > 1) {
            for (let i = 0; i < data.length; i++) {
                arr.push(data[i]);
            }
        } else
            arr.push(data[0]);
        return findFunc;
    }
    return findFunc;
}