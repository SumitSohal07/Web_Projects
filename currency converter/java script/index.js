function convertUSDtoCAD(amount) {
    // Conversion rate from USD to CAD
    const rate = 1.27;
    return (amount * rate).toFixed(3);
}

function convertCADtoUSD(amount) {
    // Conversion rate from CAD to USD
    const rate = 0.79;
    return (amount * rate).toFixed(3);
}

function convertCurrency() {
    var amount = parseFloat(document.getElementById('amount').value);
    var currencyFrom = document.getElementById('currencyFrom').value;
    var currencyTo = document.getElementById('currencyTo').value;
    var result;

    // Perform currency conversion based on selected currencies
    if (currencyFrom === 'USD' && currencyTo === 'CAD') {
        result = convertUSDtoCAD(amount);
    } else if (currencyFrom === 'CAD' && currencyTo === 'USD') {
        result = convertCADtoUSD(amount);
    } else {
        result = 'Invalid conversion';
    }

    // Display result in the "Converted Amount" text box
    document.getElementById('result').value = result;
}
