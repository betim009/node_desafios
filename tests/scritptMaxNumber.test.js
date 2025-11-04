const { maxNumber } = require('../scripts/scritptMaxNumber.js');

describe('maxNumber', () => {
    it('retorna o maior número e sua posição conforme o exemplo do enunciado', () => {
        expect(maxNumber([3, 5, 10])).toBe('10 2');
    });

    it('funciona com array contendo um único elemento', () => {
        expect(maxNumber([42])).toBe('42 0');
    });

    it('identifica o maior número quando ele aparece no início da lista', () => {
        expect(maxNumber([50, 10, 5])).toBe('50 0');
    });
});
