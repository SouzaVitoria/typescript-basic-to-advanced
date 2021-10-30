# typescript-basic-to-advanced

Typescript from Basic to Advanced - [Link do Curso]()

### Configuração do ambiente

- **Iniciar pacote nodeJS _(package.json)_:** _npm init -y_
- **Instalar o compilador _(pacote)_ Typescript:** _npm i typescript_
- **Criar arquivo de configuração Typescript com algumas opções iniciais:** _npx tsc --init --rootdir src --outdir lib_
- **Rodar:** _`npx tsc --watch`_
- **Depois que a pasta lib foi criada, consegue rodar o seguinte comando**: _`node lib/index.js`_
- **Instalar o pacote _ts-node_, para conseguir compilar os arquivos TS, sem precisar converter para JS antes:** _`npm i ts-node`_
- **Rodando o ts-node:** _`npx ts-node *caminho*`_

#### Projetos React com Typescript

- **Criar projeto:** _`npx create-react-app example --template typescript`_
- **Rodar:** _`npm run start`_
- **Realizar Deploy:** _`npm run build`_, gerando a pasta _build_
- **Simular hospedagem _(servidor)_:** _`npx serve build`_
