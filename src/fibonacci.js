const fibonacci = (a) => {
    if (a === 0) { 
        return 1
    } else if (a === 1) {
        return 1
    } else {
        return fibonacci(a-1) + fibonacci(a-2)
    }
};

module.exports = fibonacci;
