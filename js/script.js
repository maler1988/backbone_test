//Очень похоже на ООП php 


//конструктор объекта Person
var Person = function(config) {
  this.name = config.name;
  this.age = config.age;
  this.job = config.job;
};

//Статичный метод walk, добавлен в прототип "класса" Person
Person.prototype.walk = function() {
	return this.name + " is walking";
}

var nick = new Person({ name: 'Nick', age: 24, job: 'Front-end developer' });

console.log(nick);
console.log(nick.walk());