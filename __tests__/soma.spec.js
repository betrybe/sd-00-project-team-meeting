const soma = require('../src/soma');

describe('Implemente uma função que realize a soma de dois números inteiros', () => {
  it('a soma de 2 e 2 é 4', () => {
    expect(soma(2, 2)).toBe(4);
  });

  it('a soma de 0 e 2 é 2', () => {
    expect(soma(0, 2)).toBe(2);
  });

  it('a soma de 3 e 4 é 7', () => {
    expect(soma(3, 4)).toBe(7);
  });
});
