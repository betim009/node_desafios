# node_desafios

## Instalação
- Após clonar o repositório, instale as dependências com:

```bash
npm install
```

## Executar todos os testes
- Para rodar toda a suíte de testes utilizamos o Jest:

```bash
npm test
```

## Executar um teste específico
- Para rodar apenas um arquivo de teste, informe o caminho usando `--runTestsByPath`. Exemplos:

```bash
npm test -- --runTestsByPath tests/scriptEstoque.test.js
npm test -- --runTestsByPath tests/scritptMaxNumber.test.js
```
