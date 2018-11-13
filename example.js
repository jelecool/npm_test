const test = require('./');

const async = async (ticker) => {
    const r = await test(ticker);
    //console.log("POS: ", r);
    console.log(r);
    console.log(r.vti)
    return r;
}

//console.log(process.argv[2]);

async("GOOGL");


