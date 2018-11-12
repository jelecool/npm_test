const test = require('./');

const async = async (ticker) => {
    const r = await test(ticker);
    //console.log("POS: ", r);
    console.log(r);
    return r;
}

//console.log(process.argv[2]);

async(2);


