# sameers-currency-converter
 

# **@everapi/freecurrencyapi-js**

A simple wrapper for FreeCurrencyAPI to perform real-time currency conversions. This package allows you to fetch the latest exchange rates and calculate currency conversions with ease.

## **Installation**

Install the package via npm:

```bash
npm install @everapi/freecurrencyapi-js
```

## **Usage**

### **Initialization**

Start by importing the package and initializing it with your FreeCurrencyAPI key:

```javascript
const Freecurrencyapi = require('@everapi/freecurrencyapi-js');

// Replace with your API key
const freecurrencyapi = new Freecurrencyapi('YOUR_API_KEY');
```

### **Currency Conversion**

Use the `getCurrencyConversion` function to convert an amount from one currency to another.

#### **Function: getCurrencyConversion**

Converts an amount from the `baseCurrency` to the `targetCurrency`.

##### **Parameters**
- `baseCurrency` (string): The currency you want to convert from (e.g., `'USD'`).
- `targetCurrency` (string): The currency you want to convert to (e.g., `'EUR'`).
- `unit` (number): The amount to be converted.

##### **Returns**
- A `Promise` that resolves to the converted amount as a `number`.

##### **Example**

```javascript
async function convertCurrency() {
    try {
        const convertedAmount = await getCurrencyConversion('USD', 'EUR', 1);
        console.log(`Converted amount: ${convertedAmount}`);
    } catch (error) {
        console.error('Conversion failed:', error);
    }
}

convertCurrency();
```

#### **Implementation**

```javascript
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
```

### **Error Handling**

If there’s an issue with the API call (e.g., invalid API key, unsupported currencies, or network issues), the function will throw an error. Ensure proper error handling using `try...catch` blocks.

#### Example:

```javascript
getCurrencyConversion('USD', 'XYZ', 100)
    .then(result => console.log(`Converted amount: ${result}`))
    .catch(error => console.error('Error during conversion:', error));
```

## **API Key**
You can obtain a FreeCurrencyAPI key by signing up at [FreeCurrencyAPI](https://freecurrencyapi.com/).

## **Dependencies**
This package depends on:
- `@everapi/freecurrencyapi-js`

Ensure this dependency is installed alongside your project.

## **Contributing**

Feel free to contribute to this package. Submit an issue or a pull request via the [GitHub repository](https://github.com/your-repo-link).

## **License**

This package is available under the MIT License.

