const palindromes = function (phrase) {
    const alphanumeric = "abcdefghijklmnopqrstuvwxyz0123456789";

    let formatted = phrase
        .toLowerCase()
        .split("")
        .filter((char) => alphanumeric.includes(char))
        .join("");

    let reversed = formatted.split("").reverse().join("");

    return formatted === reversed;
};

// Do not edit below this line
module.exports = palindromes;
