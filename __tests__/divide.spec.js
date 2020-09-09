const divide = require('../src/divide');

describe('Implemente uma função que realize a divisão de dois números inteiros', () => {
  it('a divisão de 2 e 2 é 1', () => {
    expect(divide(2, 2)).toBe(1);
  });

  it('a divisão de 0 e 2 é 0', () => {
    expect(divide(0, 2)).toBe(0);
  });

  it('a divisão de 5 e 1 é 5', () => {
    expect(divide(5, 1)).toBe(5);
  });

  it('a divisão de 2 e 0 é inválido', () => {
    expect(divide(2, 0)).toBe("Operação inválida");
  });

});
