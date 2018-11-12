class Position {
  constructor(funda, prices) {
    this.earnings = funda.inc.netincome,
    this.outstanding = funda.inc.weightedavebasicdilutedsharesos,
    this.revenue = funda.inc.totalrevenue,
    this.cashs = funda.bal.cashandequivalents,
    this.div = funda.cash.paymentofdividends,
    this.liabilities = funda.bal.totalliabilities,
    this.intangibleassets = funda.bal.intangibleassets === undefined ? 0 : funda.bal.intangibleassets;
    this.totalassets = funda.bal.totalassets,
    this.eg = funda.calc.netincomegrowth,
    this.shareprice = prices[0].close
  }
  // Getter
  get eps() {
    return this.perShare();
  }
  get pe() {
    return this.price_earning();
  }
  get ps() {
    return this.price_sales();
  }
  get pb() {
    return this.price_book();
  }
  get pc() {
    return this.price_cash();
  }
  get de() {
    return this.debttoequity();
  }
  get x1() {
    return this.exe1();
  }
  get x2() {
    return this.exe2();
  }
  get x3() {
    return this.exe3();
  }
  get x4() {
    return this.exe4();
  }
  get x5() {
    return this.exe5();
  }
  get x6() {
    return this.exe6();
  }
  get x7() {
    return this.exe7();
  }
  get vti() {
    return this.evtie();
  }
  get dividend() {
    return this.validateDividend();
  }
  get payout() {
    return this.payoutRatio();
  }
  get yield() {
    return this.dividendYield();
  }
  get marketcap() {
    return this.marketcapitalization();
  }
  get bookvalue() {
    return this.book();
  }
  // Method
  perShare() {
    var eps = this.earnings / this.outstanding;
    return eps;
  }
  price_earning() {
    var pe = this.shareprice / this.eps;
    return pe;
  }
  price_sales() {
    var ps = this.marketcap / this.revenue;
    return ps;
  }
  price_book() {
    var pb = this.marketcap / this.bookvalue;
    return pb;
  }
  price_cash() {
    var pc = this.marketcap / this.cashs;
    return pc;
  }
  marketcapitalization() {
    var mc = this.shareprice * this.outstanding;
    return mc;
  }
  dividendYield() {
    var dps = this.dividend / this.outstanding ;
    var y = (dps / this.shareprice);
    return y;
  }
  payoutRatio() {
    if (this.dividend < 0) {
      return 0;
    } else {
      var ratio = (this.dividend / this.earnings);
      return ratio;
    }
  }
  book() {
    if(this.intangibleassets) {
      var tangible = this.totalassets - this.intangibleassets;
      var book = tangible - this.liabilities;
      return book;
      } else {
        return this.totalassets - this.liabilities;
      }
  }
  validateDividend() {
    if (this.div) {
      return this.div * -1;
    } else {
      return 0;
    }
  }
  debttoequity() {
    var de = this.liabilities / this.bookvalue;
    return de;
  }
  exe1() {
    if (this.pb > 0) {
        return this.pb / 1.5;
    } else {
        return 43;
    }
  }
  exe2() {
    var x2 = (this.ps * 0.8)^2;
    //console.log(x2);
    return x2;
  }
  exe3() {
    if (this.pe > 0) {
        return this.pe/15
    } else {
        return 43;
    }
  }
  exe4() {
    var x4 = this.pc /10;
    return x4;
  }
  exe5() {

    if (this.book < 0) {
        return 43;
    } else {
        var x5 = 4 * this.de;
        return x5;
    }
  }
  exe6() {
    if (this.eg < 0.01) {
        var x6 = 0.038/this.eg;
        return x6;
    } else {
        return 4;
    }
  }
  exe7() {
    //console.log("Payout :", this.payout, "Yield :", this.yield);
    if (this.yield == 0) {
        return 17.5;
    } else {
        var x7 = ((1/3) * ((this.yield / 0.03)+(2*(this.payout/0.6))));
        //console.log("X7 :",x7);
        return x7;
    }
  }
  evtie() {
    var vti = 14.286 * (this.x1 + this.x2 + this.x3 + this.x4 + this.x5 + this.x6 + this.x7);
    return vti;
  }
}






module.exports = Position;




