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

var student1 = Object.create(Person);
student1.setData('Adam', 'Gdynia', 1);
studentList.push(student1);

var student2 = Object.create(Person);
student2.setData('Monika', 'Gdansk', 2);
studentList.push(student2);

var student3 = Object.create(Person);
student3.setData('Eustachy', 'Nowy Targ',3);
var student4 = Object.create(Person);
student4.setData('Dionizy','Olsztyn',4);
var student5 = Object.create(Person);
student5.setData('Pelagia', 'Gdansk', 5);
var student6 = Object.create(Person);
student6.setData('Innocenty', 'Gdansk', 6);
var student7 = Object.create(Person);
student7.setData('Maria', 'Gdansk', 7);
var student8 = Object.create(Person);
student8.setData('Anna', 'Gdansk', 8);
var student9 = Object.create(Person);
student9.setData('Jakub', 'Gdansk', 9);
var student10 = Object.create(Person);
student10.setData('Maciej', 'Gdansk', 10);
studentList.push(student3);
studentList.push(student4);
studentList.push(student5);
studentList.push(student6);
studentList.push(student7);
studentList.push(student8);
studentList.push(student9);
studentList.push(student10);

// implement into HTML

var o_cont=document.querySelector('#display');  // 'o_cont = output_container'
var o_html='';
studentList.map((element) => {
    o_html += `<div> ${element.name}</div>`;
    o_html += `<div> ${element.address}</div>`;
    o_html += `<div> ${element.studentId}</div>`;
});

o_cont.innerHTML=o_html;

