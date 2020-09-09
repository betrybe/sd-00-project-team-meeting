const subtrai = require('../src/subtrai');

describe('Implemente uma função que realize a subtração de dois números inteiros', () => {
  it('a subtração de 2 e 2 é 0', () => {
    expect(subtrai(2, 2)).toBe(0);
  });

  it('a subtração de 0 e 2 é -2', () => {
    expect(subtrai(0, 2)).toBe(-2);
  });

  it('a subtração de 7 e 4 é 3', () => {
    expect(subtrai(7, 4)).toBe(3);
  });
});
