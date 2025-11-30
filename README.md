# 💱 Sistema de Conversão de Moedas e Criptomoedas

## Descrição do Projeto

Desenvolvimento de um sistema web para conversão de moedas, com foco na cotação de **Bitcoin** para as principais moedas fiduciárias (Real, Euro e Dólar). O projeto demonstra a habilidade de integrar dados externos em tempo real para fornecer uma ferramenta de cálculo financeiro precisa e instantânea.

## 🎯 Desafio

O principal desafio foi consumir uma API de câmbio de forma assíncrona e segura, garantindo que o cálculo da conversão fosse feito com base em dados atualizados e que a interface do usuário fosse responsiva e intuitiva.

## ✨ Solução: Análise de Pontos Fortes do JavaScript

A lógica implementada no JavaScript demonstra um desenvolvimento focado em eficiência e usabilidade:

1.  **Consumo de API Assíncrono:** O uso de `fetch` e a estrutura de Promises (implícita ou explícita) para obter as cotações em tempo real é um ponto forte, garantindo que a aplicação não trave enquanto espera pelos dados externos.
2.  **Lógica de Conversão Centralizada:** A função principal de conversão (`converterMoeda` ou similar) é responsável por todo o cálculo, o que torna o código limpo, fácil de testar e de manter.
3.  **Manipulação de Eventos:** O código utiliza *event listeners* (como `onclick` ou `addEventListener`) para reagir às interações do usuário (cliques nos botões de moeda e entrada de valor), demonstrando uma boa prática de desenvolvimento front-end.
4.  **Tratamento de Dados:** A lógica de arredondamento e formatação dos valores convertidos (para exibir o resultado com a precisão correta e o símbolo da moeda) é crucial para a experiência do usuário em um aplicativo financeiro.
5.  **Modularidade Implícita:** O código é estruturado em blocos lógicos (seleção de moeda, obtenção de valor, chamada de API, exibição de resultado), o que facilita a compreensão do fluxo de trabalho.

## 🛠️ Tecnologias Utilizadas

| Categoria | Tecnologias |
| :--- | :--- |
| **Front-end** | HTML5, CSS3, JavaScript |
| **Integração** | Fetch API (para consumo de dados de cotação em tempo real) |
| **Lógica** | Funções de Cálculo, Manipulação de Eventos |

## 📈 Resultados Esperados

O sistema permite que o usuário:

*   **Tome Decisões Rápidas:** A conversão instantânea permite decisões financeiras e de investimento mais ágeis.
*   **Aumento da Usabilidade:** A interface simples e o cálculo automático eliminam a necessidade de o usuário buscar cotações em fontes externas.
*   **Precisão:** O consumo de API garante que as taxas de câmbio utilizadas sejam as mais atuais possíveis.

## 🔗 Acesso ao Projeto

https://joel-rian.github.io/ConversaoDeMoeda/

---
*Desenvolvido por Yerijhon Rian*
