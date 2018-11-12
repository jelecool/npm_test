const test = require('./');

const async = async (ticker) => {
    const r = await test(ticker);
    console.log("POS: ", r);
    console.log("VTI: ", r.vti);
    return r;
}

//console.log(process.argv[2]);

async(process.argv[2]);


