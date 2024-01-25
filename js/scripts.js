// Em breve haverão modificações como APIs para buscar a cotação do dia
// e conversão de valores entre todas as moedas disponíveis

// API COTAÇÕES
//
// https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,GBP-BRL,JPY-BRL,ARS-BRL,BTC-BRL

const convertButton = document.querySelector(".convert-button");

async function convertValues() {
    
    const valueToConvert = document.querySelector(".input-value-to-convert").value;
    const currencyToConvert = document.querySelector(".currency-to-convert").value;
    document.querySelector(".value-to-convert-label").innerHTML = (valueToConvert);

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL,JPY-BRL,ARS-BRL,BTC-BRL").then(response => response.json());

    const dolarToday = data.USDBRL.high;
    const euroToday = data.EURBRL.high;
    const libraToday = data.GBPBRL.high;
    const ieneToday = data.JPYBRL.high;
    const pesoArgToday = data.ARSBRL.high;
    const bitcoinToday = data.BTCBRL.high;

    document.querySelector(".value-to-convert-label").innerHTML = (new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(valueToConvert));
    
    if (currencyToConvert == "usd") {
        const valueConverted = valueToConvert / dolarToday;
        console.log(valueConverted);
        const imgUsd = document.querySelector(".img-converted");
        imgUsd.setAttribute("src", "./img/estados-unidos.png");
        document.querySelector(".currency-converted-label").innerHTML = ("dólar americano");
        document.querySelector(".value-converted-label").innerHTML = (new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valueConverted));
    }
    if (currencyToConvert == "eur") {
        const valueConverted = valueToConvert / euroToday;
        console.log(valueConverted);
        const imgUsd = document.querySelector(".img-converted");
        imgUsd.setAttribute("src", "./img/uniao-europeia.png");
        document.querySelector(".currency-converted-label").innerHTML = ("euro");
        document.querySelector(".value-converted-label").innerHTML = (new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valueConverted));
    }
    if (currencyToConvert == "gbp") {
        const valueConverted = valueToConvert / libraToday;
        console.log(valueConverted);
        const imgUsd = document.querySelector(".img-converted");
        imgUsd.setAttribute("src", "./img/reino-unido.png");
        document.querySelector(".currency-converted-label").innerHTML = ("libra esterlina");
        document.querySelector(".value-converted-label").innerHTML = (new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(valueConverted));
    }
    if (currencyToConvert == "jpy") {
        const valueConverted = valueToConvert / ieneToday;
        console.log(valueConverted);
        const imgUsd = document.querySelector(".img-converted");
        imgUsd.setAttribute("src", "./img/japao.png");
        document.querySelector(".currency-converted-label").innerHTML = ("Iene");
        document.querySelector(".value-converted-label").innerHTML = (new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(valueConverted));
    }
    if (currencyToConvert == "ars") {
        const valueConverted = valueToConvert / pesoArgToday;
        console.log(valueConverted);
        const imgUsd = document.querySelector(".img-converted");
        imgUsd.setAttribute("src", "./img/argentina.png");
        document.querySelector(".currency-converted-label").innerHTML = ("Peso Argentino");
        document.querySelector(".value-converted-label").innerHTML = (new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(valueConverted));
    }
    if (currencyToConvert == "btc") {
        const valueConverted = valueToConvert / bitcoinToday;
        console.log(valueConverted);
        const imgUsd = document.querySelector(".img-converted");
        imgUsd.setAttribute("src", "./img/bitcoin.png");
        document.querySelector(".currency-converted-label").innerHTML = ("Bitcoin");
        document.querySelector(".value-converted-label").innerHTML = (new Intl.NumberFormat("bt-BT", {
            style: "currency",
            currency: "BTC"
        }).format(valueConverted));
    }
    

}

convertButton.addEventListener("click", convertValues);
