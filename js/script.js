//Очень похоже на ООП php 
/*

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

*/


//Теперь то же самое но на Backbone


//Класс модели Person
var Person = Backbone.Model.extend({
	defaults: {
			name: 'Name',
			age: 0,
			job: 'Job'
		},

	//Валидация входных параметров
	validate: function(attrs, options) {

			console.log(attrs);

			if ( attrs.age <= 0 ) {
				return 'Возраст должен быть положительным!';
			}

			if (!attrs.name) {
						return 'Чувак, ты же не думаешь, что у персоны не может быть имени?';
			}
	 
		},

	walk: function(){
		return this.get("name") + " is walking.";
	}
});


//Класс представления  PersonView
var PersonView = Backbone.View.extend({	
	//Привязываем this.el к конкретному элементу DOM структуры
	tagName:"script",
	template: _.template($("#employer").html()),

	//При создании вида всегда срабатывает функйия initialize
	initialize: function() {
		this.render();
	},

	//Отрисовка вида
	render: function() {
		this.$el.html( this.template( this.model.toJSON() ) );
	}

});


//Создание экземпляров моделей с представлениями

var person = new Person();
person.set({name:"Александр", age:26, job:"Программист"});
var personView = new PersonView({model:person});

var person2 = new Person();
person2.set({name:"Лиза", age:23, job:"Верстальщик"});
var personView2 = new PersonView({model:person2});





//Прослушиваем ошибку
person.on('invalid', function(model, error){
   alert("Invalid: " + error);
});

person2.on('invalid', function(model, error){
   alert("Invalid: " + error);
});



//Класс коллкеции PeopleCollection

var PeopleCollection = Backbone.Collection.extend({
	model: Person
});


var peopleCollection = new PeopleCollection();

//Добавляем ранее созданные модели в коллекцию
peopleCollection.add(person);
peopleCollection.add(person2);


//Добавляем модели в коллекцию в виде массива
var peopleCollection2 = new PeopleCollection([
	{
		name: 'Петр',
		age: 20,
		job: 'Таксист'
	},
	{
		name: 'Олег',
		age: 24,
		job: 'Менеджер'
	},
	{
		name: 'Анна',
		age: 18,
		job: 'Студентка'
	}
 
]);
