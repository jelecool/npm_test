var year = ["2017", "2016","2015"]
const fetch = require('node-fetch');
var intrinio_options = {
    key: "Bearer OmE2MGExOWU5NjNiMjM2MDlhOTlhMWViOTY1ODE5ZTkw",
    sheet: {
      balance_sheet: 'balance_sheet',
      income_statement: 'income_statement',
      cash_flow_statement: 'cash_flow_statement',
      calculations: 'calculations'
    },
    base : "https://api.intrinio.com/financials/standardized?identifier="
}

function createUrl(base, symbol, statement, year) {
    var chose = base + symbol + "&statement=" + statement + "&fiscal_year=" + year + "&fiscal_period=FY";
    return fetch(chose,{headers: {'Authorization': intrinio_options.key}});
}
function mapArray(json) {
    var mapped = json.data.map(item => ({ [item.tag]: item.value }) );
    return Object.assign({}, ...mapped );
}



const asynchronous = async (ticker) => {
    try {
        var inc_request = createUrl(intrinio_options.base, ticker, intrinio_options.sheet.income_statement, year[0]);
        var bal_request = createUrl(intrinio_options.base, ticker, intrinio_options.sheet.balance_sheet,year[0]);
        var cash_request = createUrl(intrinio_options.base, ticker, intrinio_options.sheet.cash_flow_statement,year[0]);
        var calc_request = createUrl(intrinio_options.base, ticker, intrinio_options.sheet.calculations,year[0]);
        const income = await inc_request;
        const bal = await bal_request;
        const cash = await cash_request;
        const calc = await calc_request;
        const income_json = await income.json();
        const bal_json = await bal.json();
        const cash_json = await cash.json();
        const calc_json = await calc.json();

        var inc_obj = mapArray(income_json);
        var bal_obj = mapArray(bal_json);
        var cash_obj = mapArray(cash_json); 
        var calc_obj = mapArray(calc_json); 

        return {inc: inc_obj,bal: bal_obj, cash: cash_obj, calc: calc_obj};
        

    } catch(err) {
        console.error(err);
    }
}


module.exports = async (ticker) => {
    return asynchronous(ticker);
}