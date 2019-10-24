// Class DB
function PersonDB() {
  this.database = [];
};

PersonDB.prototype.addPerson = function(person) {
  this.database.push(person);
};

PersonDB.prototype.removePerson = function(removeIndex) {
  this.database.splice(removeIndex, 1);
  renderInstance.setHtml(dbInstance.database);
};

PersonDB.prototype.displayPeople = function() {
  console.log(this.database);
};


// Class People
function Person(attributes) {
  this.name = attributes.name;
  this.surname = attributes.surname;
  this.age = attributes.age;
  this.role = attributes.role;
};


// Class for render methods
function Render(container, button, inputName, inputSurname, inputAge, inputRole) {
  this.container = document.getElementById(container);
  this.button = document.getElementById(button);
  this.inputName = document.getElementById(inputName);
  this.inputSurname = document.getElementById(inputSurname);
  this.inputAge = document.getElementById(inputAge);
  this.inputRole = document.getElementById(inputRole);
};

Render.prototype.renderRow = function(name, surname, age, role, index) {
  return '<div><div>' + name + '</div><div>' + surname + '</div><div>' + age + '</div><div>' + role + '</div><button onclick="dbInstance.removePerson('+index+')">Jednak lubię tą osobę</button></div>';
};

Render.prototype.setHtml = function(database) {
  this.container.innerHTML = '';
  var self = this;
  database.map(function(person, index){
    self.container.innerHTML += self.renderRow(person.name, person.surname, person.age, person.role, index);
  });
};

Render.prototype.getValuesFromInput = function() {
  return {
    name: this.inputName.value,
    surname: this.inputSurname.value,
    age: this.inputAge.value,
    role: this.inputRole.value,
  }
};

Render.prototype.addClick = function() {
  var self = this;
  this.button.addEventListener('click', function(){
    var person = self.getValuesFromInput();

    dbInstance.addPerson(person);
    renderInstance.setHtml(dbInstance.database);
  });
};



// Create object of PersonDB
var dbInstance = new PersonDB();

// Create object of Render
var renderInstance = new Render('records', 'addButton', 'inputName', 'inputSurname', 'inputAge', 'inputRole');
renderInstance.addClick();
renderInstance.setHtml(dbInstance.database);
