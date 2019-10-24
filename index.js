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

// var Person ={
//     name: '',
//     // setName: function(name){this.name=name}, 
//     address: '',
//     studentId:'',
//     setData: function(name, address, studentId){
//         this.name = name,
//         this.address = address,
//         this.studentId = studentId
//     },
//     displayPerson: function(){
//         console.log(setData)
//     }
// };

// var student1 = Object.create(Person);
// student1.setData('Adam', 'Gdynia', 1);
// studentList.push(student1);

function Person(name, address, studentId) {
    this.name=name;
    this.address=address;
    this.studentId=studentId;
    this.changeId=function(newId){
        this.studentId=newId;
        }   
    }
// Person.prototype.displayInfo = function() {
//         console.log('Student ' + this.name);
//       }
    
    var studentList = [
        new Person('Adam', 'Gdynia', 1),
        new Person('Monika', 'Gdansk', 2),
        new Person('Eustachy', 'Nowy Targ',3),
        new Person('Dionizy','Olsztyn',4),
        new Person('Pelagia', 'Gdansk', 5),
        new Person('Innocenty', 'Gdansk', 6),
        new Person('Maria', 'Gdansk', 7),
        new Person('Anna', 'Gdansk', 8),
        new Person('Jakub', 'Gdansk', 9),
        new Person('Maciej', 'Gdansk', 10)
    ]

// implement into HTML

var o_cont=document.querySelector('#display');  // 'o_cont = output_container'
var o_html='';
studentList.map((element) => {
    o_html += `<div> ${element.name}</div>`;
    o_html += `<div> ${element.address}</div>`;
    o_html += `<div> ${element.studentId}</div>`;
});

o_cont.innerHTML=o_html;

//********************************** */

function FunnyPerson(name, address, studentId){      //name starting with Capital letter
    this.name=name;
    this.address = address;
    this.studentId=studentId;
    };   
    
//adding a method using prototype: 
FunnyPerson.prototype.displayInfo = function(){
console.log(`Student ${this.name}`);
};


function Student(name, address, studentId) {
    FunnyPerson.call(this, name, studentId);
    this.role = 'student';
};
  
var newStudentList = [
    new FunnyPerson('Johnny', 101),
    new FunnyPerson('Ricky', 102),
    new FunnyPerson('Mick', 103)
]
    
var o_cont2 = document.createElement('div');
o_cont2.classList.add('funny');
document.querySelector('#display').appendChild(o_cont2);
var o_html2='';
newStudentList.map((element) => {
    o_html2 += `<div> ${element.name}</div>`;
    o_html2 += `<div> ${element.studentId}</div>`;
});

o_cont2.innerHTML=o_html2;

//**********************Protytype */

//********the right way to declare new method:
// funnyPerson.prototype.displayInfo = function() {
//     console.log('Student ' + this.name);
//   }

Student.prototype = Object.create(FunnyPerson.prototype);
Student.prototype.constructor = student;

function Teacher(name, studentId) {
    FunnyPerson.call(this, name, studentId);
    this.role = 'teacher';
  }

Teacher.prototype = Object.create(FunnyPerson.prototype);
Teacher.prototype.constructor = teacher;

