(function(){



	var container = $("#container");


	$.ajax({
		url:'data.json'
	}).done(function(data){
		console.log(data);
		var source   = $("#template").html(),
			template = Handlebars.compile(source),
			html    = template(data);

		container.html(html);

		container.masonry({
			gutter:20,
			itemSelector:'.block',
			columnWidth: 450
		});

	});





})()