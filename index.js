import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_BX33Bo7F3yAMuJLfaWbrRJvWrMo9Slf4M0G65ZZe');


async function getCurrencyConversion(baseCurrency, targetCurrency, unit) {
    try {
        const response = await freecurrencyapi.latest({
            base_currency: baseCurrency,
            currencies: [targetCurrency]
        });
        
        const rate = response.data[targetCurrency];
        const convertedAmount = rate * unit;
        return convertedAmount;
        
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

// Example usage
getCurrencyConversion('USD', 'EUR', 1)
    .then(result => console.log(`Converted amount: ${result}`))
    .catch(error => console.error('Conversion failed:', error));