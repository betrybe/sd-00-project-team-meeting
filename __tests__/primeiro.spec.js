const primeiro = require('../src/primeiro');

describe('Implemente uma função que retorne o valor do primeiro elemento', () => {
  it('retorna 2', () => {
    expect(primeiro(2, 0)).toBe(2);
  });

  it('retorna 0', () => {
    expect(primeiro(0, 2)).toBe(0);
  });

  it('retorna a primeira string', () => {
    expect(primeiro("primeiro", "outro")).toBe("primeiro");
  });
});
