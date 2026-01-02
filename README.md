# 📘 Introdução ao TypeScript

Este repositório tem como objetivo servir como uma introdução ao TypeScript, abordando desde os conceitos iniciais até a configuração completa do ambiente de desenvolvimento.

<p align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="50" height="40"/> 
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="50" height="40"/> 
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="50" height="40"/> 
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width="50" height="40"/>
</p>

---

## 🚀 Início e Instalação

Para começar a utilizar o TypeScript no seu projeto, utilize os comandos abaixo:

* **Instalação como dependência de desenvolvimento:**
    ```bash
    npm i typescript -D
    ```
* **Instalação da versão mais recente (Beta/Next):**
    ```bash
    npm i typescript@next
    ```

> **Observações Importantes:**
> * O TypeScript encapsula o JavaScript, adicionando **tipagem estática**.
> * Conflitos ocorrem se uma função TypeScript tiver o mesmo nome de uma função JavaScript no mesmo escopo.
> * No TypeScript, os parâmetros **devem ser tipados** (ex: `number`, `string`, etc).

---

## 📦 Gerenciamento de Módulos e Escopo

### Script Mode
No ambiente HTML tradicional, o último script carregado sobrescreve o anterior, mesmo que ambos possuam funções com o mesmo nome. Esse comportamento gera conflitos quando o código não está modularizado.

### ES Modules (Padrão Moderno)
Permite separar o código de acordo com seu contexto e responsabilidade. É o padrão utilizado no desenvolvimento moderno de aplicações JS/TS.
* **Comandos:** `import` e `export`.

### CommonJS
Forma original de empacotamento no Node.js onde os scripts são tratados como módulos isolados.
* **Características:** Utiliza `module.exports` e `require`.
* **Carregamento:** Assíncrono.

---

## ⚙️ Configuração (tsconfig.json)

O arquivo `tsconfig.json` é o cérebro do compilador TypeScript.

1.  **Criação do arquivo de configuração:**
    ```bash
    npx tsc --init
    ```
2.  **Compilação dos arquivos:**
    ```bash
    npx tsc
    ```

---

## 🎨 Padronização com Prettier

O Prettier é uma ferramenta essencial para a formatação automática de código, garantindo consistência técnica e legibilidade.

* Ajuda a manter um padrão de escrita fixo.
* Facilita a leitura e manutenção por múltiplos desenvolvedores.
* Pode ser configurado como extensão no editor de código (VS Code, etc).

### Configurações Comuns (Format)
* **Formatter:** Define qual motor de formatação usar.
* **End of Line:** Padroniza as quebras de linha entre diferentes sistemas operacionais.
* **Format On Save:** Formata o arquivo automaticamente sempre que você salvar.