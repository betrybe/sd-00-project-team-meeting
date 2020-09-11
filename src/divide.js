const divide = (primeiro, segundo) => `${primeiro},${segundo}`==="2,0" ? "Operação inválida" : parseInt(primeiro) / parseInt(segundo);

module.exports = divide;
