//Пространства имён
(function() {

	window.App = { //Глобальный объект App
		Models: {},
		Views: {},
		Collections: {}

	}; 
 
	//хэлпер шаблона (вынесен как глобальная функция, хотя это не очень правильно)
	window.template = function(id) {
		return _.template( $('#' + id).html() );
	};

	//Модель человека
	App.Models.Person = Backbone.Model.extend({
		defaults: {
				name: 'Name',
				age: 1,
				job: 'Job'
			}
	});
 
 
	//Список людей
	App.Collections.People = Backbone.Collection.extend({
		model: App.Models.Person
	});
 
 
	//Вид списка людей
	App.Views.People = Backbone.View.extend({
		tagName: 'ul',
 
		initialize: function() {
		},
 
		render: function() {
			this.collection.each(function(person) {
				var personView = new App.Views.Person({model: person});
 
				this.$el.append(personView.render().el);
			}, this);
 
			return this;
		}
 
	});
 
 
	//Вид одного человека
	App.Views.Person = Backbone.View.extend({
		tagName: 'li',
 
		template:  template('personTemplate'),
 
 
		initialize: function() {
			this.render();
		},
 
		render: function() {
			//замечательный шаблон
			this.$el.html( this.template( this.model.toJSON() ) );
 
			return this;
		}
	});


var peopleCollection = new App.Collections.People([
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
 
 
	var peopleView = new App.Views.People({collection: peopleCollection});
 
	$(document.body).append(peopleView.render().el);
 
	console.log(App.Models);







}());


