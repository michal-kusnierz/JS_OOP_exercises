//day0 - we use ES5 today (so e.g. without const and let)

//issue#1 - create two Objects containing data about students

var Object1 = {
    name: 'Kaj',
    address: 'Poznan',
    studentId: 1,
    profile:'student',
    displayFullInfo: function(){
        console.log(this.name, this.address, this.studentId, this.profile);       //first try
    },
    changeId: function(){console.log(this.studentId=11);
    }
};

var Object2 = {
    name: 'Rafal',
    address: 'Gdynia',
    studentId: 2,
    profile:'student',
    displayFullInfo: function(){
        console.log(this.name, this.address, this.studentId, this.profile);
    },
    changeId: function(){console.log(this.studentId=11);
    }
};
