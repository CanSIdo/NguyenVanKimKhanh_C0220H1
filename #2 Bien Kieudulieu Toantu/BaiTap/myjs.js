function Convert() {
    let money = document.getElementById('money');
    let fromCurrency = document.getElementById('fromCurrency');
    let toCurrency = document.getElementById('toCurrency');
    let result = document.getElementById('result');

    let convert;

    if (fromCurrency.value === "VND" && toCurrency.value === "USD"){
        convert = (money.value*1)/23000;
    }else if (fromCurrency.value === "USD" && toCurrency.value === "VND"){
        convert = (money.value*1)*23000;
    }

    result.innerText = convert;
}