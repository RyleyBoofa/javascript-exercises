const removeFromArray = function(arr) {
    const argsArray = Array.from(arguments);
    return arr.filter((item) => !argsArray.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
