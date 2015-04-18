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


var PersonView = Backbone.View.extend({	
	//Привязываем this.el к конкретному элементу DOM структуры
	tagName: 'div',
	className: 'employer',
	id: 'employer-id',

	//При создании вида всегда срабатывает функйия initialize
	initialize: function() {
		console.log('initialize!')
	},

	//Отрисовка вида
	render: function() {
		this.$el.html( this.model.get('name') + ' (' + this.model.get('age') + ') - ' + this.model.get('job') );
	}

});

var person = new Person();

var personView = new PersonView({model:person});

person.set({name:"Александр", age:26, job:"Программист"});

console.log(personView.render());
console.log(personView.el);





person.on('invalid', function(model, error){
   alert("Invalid: " + error);
});




