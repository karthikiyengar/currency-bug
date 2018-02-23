const currencyFormatter = require('currency-formatter')

function format() {
    return currencyFormatter.format(500, { code: "EUR" })
}

module.exports = format
