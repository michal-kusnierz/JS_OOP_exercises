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

// const x = '10111011101110111011101110'

// protect_accountNo = function (x) {
//     var part1, hidden, part2;
//     part1 = x.slice(0,2)
//     hidden = x.slice(2,22);
//     part2 = x.slice(22,25)
//     return part1 + '**** **** **** **** ****' + part2;
// };

// console.log(protect_accountNo(x));

const Array =[
new Account('Adam', 10222233334444555566667777),
new Account('Beata', 11222233334444555566667777)
]

///*******************  Kaj's example */

class Person{
    constructor(fullName, accountNumber){
        this._fullName = fullName;
        this._accountNumber = accountNumber;
    }
    get fullName(){
        return this._fullName;
    }
    get accountNumber(){
        return this._accountNumber.replace(
            this._accountNumber.slice(2,22),
            ' **** **** **** **** **** '
        );
    };

    set accountNumber(newParam) {
        this._accountNumber = newParam;
    }
}

// console.log(peopleList[0].accountNumber)
// into console: peopleList[0].fullName


class Render {
    static renderList(listToRender, elementToRender){
     const element = document.getElementById(elementToRender);
     
     listToRender.map((currentElement) => {
        element.innerHTML += 
        `<div>Imię i nazwisko: ${currentElement.fullName} || Numer konta: ${currentElement.accountNumber}</div>`
     })
    }
}

const peopleList =[
    new Person('Kaj Białas', '87114020040000123456789012'),
    new Person('Jan Nowak', '87114020040000123456789013'),
    new Person('Adam Małysz', '87114020040000123456789014')    
]

Render.renderList(peopleList, 'list');