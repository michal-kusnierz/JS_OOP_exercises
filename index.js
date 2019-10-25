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

const Array =[
new Account('Adam', 10222233334444555566667777),
new Account('Beata', 11222233334444555566667777)
]
