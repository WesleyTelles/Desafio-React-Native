# Países do Mundo

App React Native com Expo que lista todos os países do mundo consumindo a API pública [REST Countries](https://restcountries.com).

## Funcionalidades

- Lista todos os países em cards com bandeira (emoji), nome, capital e população
- Campo de busca para filtrar países pelo nome em tempo real
- Contador de países exibidos
- Indicador de carregamento e tratamento de erro de rede

## Pré-requisitos

- [Node.js](https://nodejs.org) 18 ou superior
- [Expo Go](https://expo.dev/go) instalado no celular (Android ou iOS)

## Como rodar

```bash
# 1. Instale as dependências
npm install

# 2. Inicie o servidor de desenvolvimento
npx expo start
```

Com o Expo Go aberto no celular, escaneie o QR code exibido no terminal ou no navegador.

> Para rodar no emulador: pressione `a` (Android) ou `i` (iOS) no terminal após `npx expo start`.

## Tecnologias

| Recurso | Descrição |
|---|---|
| [Expo SDK 52](https://expo.dev) | Plataforma de desenvolvimento |
| [React Native](https://reactnative.dev) | Framework mobile |
| [REST Countries API](https://restcountries.com/v3.1/all) | Dados dos países |
| `StyleSheet` | Estilização nativa, sem bibliotecas externas |

## Estrutura

```
desafioreactnative/
├── App.js          # Componente principal (única tela)
├── package.json    # Dependências
└── README.md
```

## API utilizada

`GET https://restcountries.com/v3.1/all`

Campos consumidos: `flag`, `name.common`, `capital`, `population`, `cca3`.
