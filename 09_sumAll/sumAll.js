const sumAll = function(min, max) {
    if (min < 0 || max < 0) return "ERROR";
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    // if (min % 1 !== 0 || max % 1 !== 0) return "ERROR";
    // if (typeof min !== "number" || typeof max !== "number") return "ERROR";
    let sum = 0;
    if (min > max) {
        [min, max] = [max, min];
    }
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
