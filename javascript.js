const convertButton = document.querySelector(".convert-button");
const currencySelectFrom = document.querySelector(".currency-to-select"); // "de"
const currencySelectTo = document.querySelector(".currency-select"); // "para"
const inputEl = document.querySelector(".input-currency");

// --- Elementos do Bloco "DE" (Esquerda) ---
const fromImg = document.getElementById("img-from");
const fromName = document.getElementById("currency-name-from");
const fromValue = document.getElementById("currency-value-from");

// --- Elementos do Bloco "PARA" (Direita) ---
const toImg = document.getElementById("img-to");
const toName = document.getElementById("currency-name-to");
const toValue = document.getElementById("currency-value-to");

// Taxas de câmbio: Preço de 1 unidade da moeda em Reais (BRL)
const priceInBRL = {
    BRL: 1,
    USD: 5.3,
    EUR: 6.2,
    BTC: 487735.30
};

// Mapeia o <select> "Converter de" para o código da moeda
function mapFrom(value) {
    if (value === "debtc") return "BTC";
    if (value === "dereal") return "BRL";
    if (value === "dedolar") return "USD";
    if (value === "deeuro") return "EUR";
    return null;
}

// Mapeia o <select> "Converter para" para o código da moeda
function mapTo(value) {
    if (value === "btc") return "BTC";
    if (value === "real") return "BRL";
    if (value === "dolar") return "USD";
    if (value === "euro") return "EUR";
    return null;
}

// Formata um número para o estilo da moeda (ex: R$ 5,00, US$ 1.00)
function formatByCurrency(amount, currency) {
    const options = {
        style: "currency",
        currency: currency
    };

    if (currency === "USD") return new Intl.NumberFormat("en-US", options).format(amount);
    if (currency === "EUR") return new Intl.NumberFormat("de-DE", options).format(amount);
    if (currency === "BTC") {
        options.maximumFractionDigits = 8;
        return new Intl.NumberFormat("pt-BR", options).format(amount);
    }
    return new Intl.NumberFormat("pt-BR", options).format(amount);
}

// >>> NOVA FUNÇÃO PARA LIMPAR OS VALORES <<<
function resetValues() {
    const fromCurrency = mapFrom(currencySelectFrom.value);
    const toCurrency = mapTo(currencySelectTo.value);

    inputEl.value = ""; // Limpa o campo de input
    fromValue.textContent = formatByCurrency(0, fromCurrency);
    toValue.textContent = formatByCurrency(0, toCurrency);
}

// Função principal de conversão (agora só chamada pelo botão)
function convertValues() {
    const fromCurrency = mapFrom(currencySelectFrom.value);
    const toCurrency = mapTo(currencySelectTo.value);

    const rawInput = inputEl.value.trim().replace(",", ".");

    if (!rawInput) {
        alert("Por favor, digite um valor para converter.");
        return;
    }

    const inputNumber = Number(rawInput);

    if (isNaN(inputNumber)) {
        alert("Por favor, digite um número válido.");
        return;
    }

    const valueInBRL = inputNumber * priceInBRL[fromCurrency];
    const finalValue = valueInBRL / priceInBRL[toCurrency];

    fromValue.textContent = formatByCurrency(inputNumber, fromCurrency);
    toValue.textContent = formatByCurrency(finalValue, toCurrency);
}

// Atualiza a interface do bloco "DE" quando o select muda
function changeCurrencyFrom() {
    const from = currencySelectFrom.value;

    if (from === "dereal") {
        fromName.innerHTML = "Real Brasileiro";
        fromImg.src = "./img/bandeira do brasil.jpg";
    }
    if (from === "dedolar") {
        fromName.innerHTML = "Dólar Americano";
        fromImg.src = "./img/Bandeira dos USA.jpg";
    }
    if (from === "deeuro") {
        fromName.innerHTML = "Euro";
        fromImg.src = "./img/bandeira do €uro.jpg";
    }
    if (from === "debtc") {
        fromName.innerHTML = "Bitcoin";
        fromImg.src = "./img/bitcoin.jpg";
    }
    
    // >>> CORREÇÃO: Chama a função de resetar em vez de converter <<<
    resetValues();
}

// Atualiza a interface do bloco "PARA" quando o select muda
function changeCurrencyTo() {
    const to = currencySelectTo.value;

    if (to === "real") {
        toName.innerHTML = "Real Brasileiro";
        toImg.src = "./img/bandeira do brasil.jpg";
    }
    if (to === "dolar") {
        toName.innerHTML = "Dólar Americano";
        toImg.src = "./img/Bandeira dos USA.jpg";
    }
    if (to === "euro") {
        toName.innerHTML = "Euro";
        toImg.src = "./img/bandeira do €uro.jpg";
    }
    if (to === "btc") {
        toName.innerHTML = "Bitcoin";
        toImg.src = "./img/bitcoin.jpg";
    }

    // >>> CORREÇÃO: Chama a função de resetar em vez de converter <<<
    resetValues();
}

// Adiciona os "ouvintes" de eventos
convertButton.addEventListener("click", convertValues);
currencySelectFrom.addEventListener("change", changeCurrencyFrom);
currencySelectTo.addEventListener("change", changeCurrencyTo);
