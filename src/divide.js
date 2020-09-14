const divide = (a,b) => {
    let result;
    if (b !== 0) {
        result =  a/b;
    } else {
        result = "Operação inválida";
    }
    return result;
};

module.exports = divide;
