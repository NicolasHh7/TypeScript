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

---

## ⚙️ Automação e Compilação

Para tornar o desenvolvimento mais fluido e evitar a tarefa repetitiva de compilar manualmente cada alteração, utilizamos o modo **Watch**:

* **tsc -w**: Este comando inicia o compilador do TypeScript em modo de observação (*watch mode*). Ele monitora todos os arquivos `.ts` do projeto e, a cada vez que você salva uma alteração, o código é automaticamente compilado para JavaScript.

> "A eficiência é a aliada da curiosidade; quanto menos tempo gastamos com processos, mais tempo temos para as descobertas."

---

## SUMMARY
* **[1] Const-obj.ts** | **[2] index-signature.ts** | **[3] func-type-annot...** | **[4] Let&Const.ts** | **[5] literal-types.ts**
* **[6] readonly-array&tupl...** | **[7] readonly-obj.ts** | **[8] type-annotation.ts** | **[9] type-array.ts** | **[10] type-inference.ts**
* **[11] type-null&undefi...** | **[12] type-tutle.ts** | **[13] typeAllias.ts** | **[14] typeAnnotation.ts** | **[15] typeAny.ts**
* **[16] typeBigInt.ts** | **[17] typeEnum.ts** | **[18] typeIntersection.ts** | **[19] typeObject.ts** | **[20] typeReturn.ts**
* **[21] typeSymbol.ts** | **[22] TypeVoid.ts**

## 🧠 Conceitos Rápidos

01. **Const-obj.ts**: Uso de `as const` para tornar objetos e seus valores literais imutáveis.
02. **index-signature.ts**: Tipagem de objetos com chaves dinâmicas ou desconhecidas.
03. **func-type-annot...**: Definição de tipos para parâmetros e retornos de funções.
04. **Let&Const.ts**: Diferenças de inferência entre variáveis mutáveis e constantes.
05. **literal-types.ts**: Uso de valores específicos como tipos exatos.
06. **readonly-array&tupl...**: Arrays e tuplas que não permitem modificação após a criação.
07. **readonly-obj.ts**: Propriedades de objetos marcadas para serem apenas de leitura.
08. **type-annotation.ts**: Declaração explícita de tipos em variáveis.
09. **type-array.ts**: Estruturas de listas para armazenar dados de um mesmo tipo.
10. **type-inference.ts**: Capacidade do TS de deduzir tipos automaticamente.
11. **type-null&undefi...**: Tratamento de valores nulos e não definidos.
12. **type-tutle.ts**: Arrays com tamanho e tipos de posições fixos (Tuplas).
13. **typeAllias.ts**: Criação de apelidos personalizados para tipos complexos.
14. **typeAnnotation.ts**: Práticas adicionais de anotação de tipos.
15. **typeAny.ts**: Tipo que permite qualquer valor (anula a checagem estática).
16. **typeBigInt.ts**: Manipulação de inteiros de grande escala.
17. **typeEnum.ts**: Grupos de constantes nomeadas para melhorar a legibilidade.
18. **typeIntersection.ts**: Combinação de múltiplos tipos em um só usando `&`.
19. **typeObject.ts**: Definição de estruturas de objetos e suas propriedades.
20. **typeReturn.ts**: Especificação rigorosa do tipo de retorno de uma função.
21. **typeSymbol.ts**: Uso de identificadores únicos para chaves de objetos.
22. **TypeVoid.ts**: Utilizado para funções que não retornam nenhum valor.

