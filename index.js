//day2

class Account {
    constructor(name, accountNo) {
    this._name = name;
    this._accountNo = accountNo;
    }

    get name (){
        return this._name;
    }
    get accountNo (){
        return this.accountNo;
    }

    set name(newName){
        this._name = newName;
    }
    set accountNo(newAccountNo){
        this._accountNo = newAccountNo;
    }
}

//jak ukryć część numeru accountNo?
// 1. sposób
// const x = 'string',
// x[1] => x
// for (2->22)
// x[i]='*';

// 2. sposób:
// funkcją slice

const x = '10111011101110111011101110'


const Array =[
new Account('Adam', 10222233334444555566667777),
new Account('Beata', 11222233334444555566667777)
]
