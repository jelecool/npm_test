const prices = require('./stockprices');
const fundamentals = require('./fundamentals');
const Position = require('./Position');

const js = async (ticker) => {
  try {
    const prix = await prices(ticker);
    const funda = await fundamentals(ticker);
    const position = new Position(funda, prix);
    return position;
  } catch(err) {
    console.error(err);
  }
    
}

module.exports = async (ticker) => {
    if (typeof ticker == "string") {
    var result = await js(ticker);
    return result;
    } else {
      return "I need a string!";
    }
};




