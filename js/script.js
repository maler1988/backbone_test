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

//console.log(nick);
//console.log(nick.walk());




//Теперь то же самое в backbone

var PersonBackbone = Backbone.Model.extend({
	defaults: {
		name: "UserName",
		age: 0,
		job: "User job"
	},
	
	walk: function() {
		return this.get('name') + ' is walking.';
	}

});

//Не указали никаких данных в конструкторе, создался пользователь со значениями из default
var bPerson = new PersonBackbone;

//Устанавливаем атрибуты объекта
bPerson.set({"name":"Sasha", "age":26, "job":"Ruformat programmer"});

//Получаем значение атрибутов объекта
var Job = bPerson.get("job");

console.log(bPerson);
console.log("Job is: "+Job);
console.log(bPerson.walk());
