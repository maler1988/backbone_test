<!DOCTYPE unspecified PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="ru-RU">
<head>
	<meta charset="utf-8" />
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<title>Учимся работать с Handlebars.js</title>
	<link href="/css/style.css" type="text/css" rel="stylesheet" />
	
</head>
<body>
<img alt="Backbone.js" src="/images/handlebars.png" >
<p>Работа с Handlebars.js, офф.сайт: <a target="_blank" href="http://handlebarsjs.com/" >Handlebars.js</a></p>
<p><a href="index.php" >Назад</a></p>


<script id="template" type="text/x-handlebars-template" >
{{#each blocks}}
  <div class="block" >
    <h3>{{blockName}}</h3>
    <ol>
    	{{#each links}}
    		<li><a href="{{href}}" >{{title}}</a> - {{descritpion}}</li>
    	{{/each}} 
    </ol>
  </div>
 {{/each}} 
</script>

<div id="container" >
<!--Контейнур для подгрузки данных-->
</div>


<script src="http://yastatic.net/jquery/1.10.1/jquery.min.js" type="text/javascript" ></script>
<script src="/js/handlebars.js" type="text/javascript" ></script>
<script src="/js/masonry.js" type="text/javascript" ></script>
<script src="/js/script2.js" type="text/javascript" ></script>
</body>
</html>
