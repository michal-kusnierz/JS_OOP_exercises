//day0 - we use ES5 today (so e.g. without const and let)

//issue#1 - create two Objects containing data about students

var Object1 = {
    name: 'Kaj',
    address: 'Poznan',
    studentId: 1,
    profile:'student',
    displayFullInfo: function(){
        // console.log(this.name, this.address, this.studentId, this.profile);       //first try
        // console.log('Imię: ' + this.name + ' Adres: ' + this.address + ' id: ' + this.studentId + ' profil: ' + this.profile)    //drzewiej... :);
        console.log(`Imię: ${this.name} Adres: ${this.address} Id: ${this.studentId} profil: ${this.profile}`);
    },
    // changeId: function(){console.log(this.studentId=11);}
    changeId: function(newId) {
        this.studentId = newId;
    }
};

var Object2 = {
    name: 'Rafal',
    address: 'Gdynia',
    studentId: 2,
    profile:'student',
    displayFullInfo: function(){
        console.log(`Imię: ${this.name} Adres: ${this.address} Id: ${this.studentId} profil: ${this.profile}`);
    },
    changeId: function(newId){
        this.studentId = newId;
    }
};

//issue#2 //*********// Object.create() //************/

var studentList = [];

var Person ={
    name: '',
    // setName: function(name){this.name=name}, 
    address: '',
    studentId:'',
    setData: function(name, address, studentId){
        this.name = name,
        this.address = address,
        this.studentId = studentId
    },
    displayPerson: function(){
        console.log(setData)
    }
};

