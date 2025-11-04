const { estoque } = require('../scripts/scriptEstoque.js');

describe('estoque', () => {
    it('retorna apenas um aviso quando existe um único produto zerado', () => {
        const produtos = ['Mouse', 'Teclado', 'Monitor'];
        const quantidades = [10, 10, 0];

        expect(estoque(produtos, quantidades)).toEqual(['Monitor zerado']);
    });

    it('retorna avisos para todos os produtos zerados na ordem original', () => {
        const produtos = ['SSD', 'Monitor LG', 'Webcam', 'Mousepad'];
        const quantidades = [0, 3, 0, 0];

        expect(estoque(produtos, quantidades)).toEqual([
            'SSD zerado',
            'Webcam zerado',
            'Mousepad zerado',
        ]);
    });

    it('retorna estoque completo quando não há produtos zerados', () => {
        const produtos = ['Notebook', 'Headset'];
        const quantidades = [4, 8];

        expect(estoque(produtos, quantidades)).toEqual(['estoque completo']);
    });

    it('considera estoque completo quando a lista está vazia', () => {
        expect(estoque([], [])).toEqual(['estoque completo']);
    });

    it('lança erro quando as listas possuem tamanhos diferentes', () => {
        expect(() => estoque(['Mouse'], [1, 2])).toThrow('As listas devem ter o mesmo tamanho.');
    });
});
