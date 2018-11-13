const fetch = require('node-fetch');
const _ = require('underscore');
const year = "2017";

var alpha_options = {
    key : "XS63V2XY2BP9106A",
    base_url : "https://www.alphavantage.co/query?",
    functions : {
      monthly : "TIME_SERIES_MONTHLY",
      daily : "TIME_SERIES_DAILY",
      weekly : "TIME_SERIES_WEEKLY",
      last: "GLOBAL_QUOTE"
    }
  };

  function finalUrl(base, option, symbol, key) {
    return (base + "function=" + option + '&symbol=' + symbol + "&apikey=" + key) ;
  }
  function getQuarters(quarter, mois) {
    mois[quarter.index].forEach(function(key) {
        if (quarter.low > key.low) {
            quarter.low = key.low;
        }
         if (quarter.high < key.high) {
           quarter.high = key.high;
         }
         if (quarter.close < key.close) {
          quarter.close = key.close;
        }
    })
  }


  const alpha_request = async (ticker) => {
    try {
        var quarters_url = finalUrl(alpha_options.base_url, alpha_options.functions.monthly, ticker, alpha_options.key);
        var last_url = finalUrl(alpha_options.base_url, alpha_options.functions.last, ticker, alpha_options.key)
        const quarts = await fetch(quarters_url);
        const last = await fetch(last_url);

        const quarters_json = await quarts.json();
        const last_json = await last.json();
        const last_parsed = parseFloat(last_json["Global Quote"]["05. price"]);
        const prices_valeurs = await quarters_json["Monthly Time Series"];
        //console.log(prices_valeurs, calc_json, cash_json, bal_json, income_json);
        const keyz = await Object.keys(prices_valeurs);
        var deuxmillesdixsept = [];

        keyz.forEach(function(key){
            if (key.includes(year)) {
            var objet = {
                mois: key,
                open: parseFloat(prices_valeurs[key]["1. open"]), 
                high: parseFloat(prices_valeurs[key]["2. high"]),
                low: parseFloat(prices_valeurs[key]["3. low"]), 
                close: parseFloat(prices_valeurs[key]["4. close"])
            }
            //console.log(objet);
            deuxmillesdixsept.push(objet);
            }
        })
        //console.log(deuxmillesdixsept);
        var mois = _.chunk(deuxmillesdixsept , 3);
        var q4 = {
        high: 0,
        low: 99999,
        close: 0,
        index: 0
        };
        var q3 = {
        high: 0,
        low: 99999,
        close: 0,
        index: 1
        };
        var q2 = {
        high: 0,
        low: 99999,
        close: 0,
        index: 2
        };
        var q1 = {
        high: 0,
        low: 99999,
        close: 0,
        index: 3
        };

        getQuarters(q4, mois);
        getQuarters(q3, mois);
        getQuarters(q2, mois);
        getQuarters(q1, mois);
        var quarters = [q1, q2, q3, q4,last_parsed];
        //console.log(deuxmillesdixsept);
        //console.log("QUARTERS :", quarters);
        return quarters;
    } catch(err) {
        console.error(err);
    }
  }

const stock_price = (ticker) => {
    return alpha_request(ticker);
}

  module.exports = stock_price;