function converterFromEuro(amount, currency) {
    const exchangeRates = {
        'USD': 1.11,
        'JPY': 0.0063,
        'GBP': 1.15,
        'AUD': 0.62,
        'CAD': 0.68,
        'CHF': 1.07,
        'CNY': 0.13,
        'SEK': 0.091,
        'NZD': 0.57,
        'MXN': 0.053,
        'SGD': 0.68,
        'HKD': 0.12,
        'NOK': 0.089,
        'KRW': 0.00070,
        'TRY': 0.031,
        'INR': 0.011,
        'BRL': 0.19,
        'ZAR': 0.049,
        'RUB': 0.0098,
        // Add more exchange rates as needed
    };

    if (exchangeRates[currency]) {
        return amount * exchangeRates[currency];
    } else {
        return null;
    }
}

function converterToEuro(amount, currency) {
    const exchangeRates = {
        'USD': 0.9,
        'JPY': 0.0063,
        'GBP': 1.15,
        'AUD': 0.62,
        'CAD': 0.68,
        'CHF': 1.07,
        'CNY': 0.13,
        'SEK': 0.091,
        'NZD': 0.57,
        'MXN': 0.053,
        'SGD': 0.68,
        'HKD': 0.12,
        'NOK': 0.089,
        'KRW': 0.00070,
        'TRY': 0.031,
        'INR': 0.011,
        'BRL': 0.19,
        'ZAR': 0.049,
        'RUB': 0.0098,
        // Add more exchange rates as needed
    };

    if (exchangeRates[currency]) {
        return amount * exchangeRates[currency];
    } else {
        return null;
    }
}

// Example usage:
const amountToEuro = converterToEuro(100, 'USD');
if (amountToEuro !== null) {
    console.log(`€ ${amountToEuro.toFixed(2)}`);
} else {
    console.log("Unsupported currency");
}

const amountFromEuro = converterFromEuro(90, 'GBP');
if (amountFromEuro !== null) {
    console.log(`£ ${amountFromEuro.toFixed(2)}`);
} else {
    console.log("Unsupported currency");
}