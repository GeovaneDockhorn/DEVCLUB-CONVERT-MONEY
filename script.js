const selectConvertCurrency = document.querySelector("#select-convert-currency");
const selectConvertedCurrency = document.querySelector("#select-converted-currency");
const input = document.querySelector("#input-value");
const button = document.querySelector("#button-convert");
const pConvertCurrencyValue = document.querySelector("#p-convert-currency-value");
const pConvertedCurrencyValue = document.querySelector("#p-converted-currency-value");

function convertCurrency() {
    const valueSelectedConvertCurrency = selectConvertCurrency.value;
    const valueSelectedConvertedCurrency = selectConvertedCurrency.value;
    const valueInput = input.value;

    if (valueSelectedConvertCurrency === "real"
        && valueSelectedConvertedCurrency == "dolar") {
        const valueInputConverted = valueInput / 5.5;

        pConvertCurrencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valueInput)

        pConvertedCurrencyValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valueInputConverted)
    }
    if (valueSelectedConvertCurrency == "real"
        && valueSelectedConvertedCurrency === "euro") {
        const valueInputConverted = valueInput / 6.14;

        pConvertCurrencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valueInput)

        pConvertedCurrencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valueInputConverted)
    }
}

const imgCurrency = document.querySelector("#img-currency");
const pCurrency = document.querySelector("#p-currency");

function changeCurrency() {
    convertCurrency();
    if (selectConvertedCurrency.value == "dolar"){
        imgCurrency.src = "./assets/dolar.png";
        pCurrency.innerHTML = "Dólar";
    }
    if (selectConvertedCurrency.value == "euro"){
        imgCurrency.src = "./assets/euro.png";
        pCurrency.innerHTML = "Euro";
    }

}


selectConvertedCurrency.addEventListener("change", changeCurrency);
button.addEventListener("click", convertCurrency);
