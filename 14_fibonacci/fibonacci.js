const fibonacci = function (num) {
    let index = parseInt(num);

    if (index === 0) {
        return 0;
    } else if (index < 0) {
        return "OOPS";
    }

    const sequence = [1, 1];
    for (let i = 2; i < num; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
