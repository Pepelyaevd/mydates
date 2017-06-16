$('.button-collapse').sideNav();

$('.collapsible').collapsible();

$('select1').material_select();




function clearPage () {
	var container=$('#main');
	container.empty();
}

function createMainPage () {
	var container=$('#main');
	var row=$('<div>').addClass('row').appendTo(container);
	function randomNumber(m, n) {
		  m = parseInt(m);
		  n = parseInt(n);
		  return Math.floor( Math.random() * (n - m + 1) ) + m;
	}

	function createCard (container) {
		var col=$('<div>').addClass('col s12 m6').appendTo(container);
		var card=$('<div>').addClass('card').appendTo(col);
		var cardContent=$('<div>').addClass('card-content').appendTo(card);
			$('<p>').addClass('card-title').text("Сегодня").appendTo(cardContent);
			var cardBody=$('<div>').addClass('card-body').appendTo(cardContent);
				var cardText=$('<div>').addClass('card-text').appendTo(cardBody);
					$('<p>').text("Иван Иванович Иванов").appendTo(cardText);
					$('<p>').text("34 года").appendTo(cardText);	
				var cardimg=$('<div>').appendTo(cardBody);
					var img = "icons/" + randomNumber(1, 8) + ".png";
					$('<img>').addClass('responsive-img').attr("src",img).appendTo(cardimg);		
	}
	
	createCard(row);
	createCard(row);
	createCard(row);
	createCard(row);
	createCard(row);
	createCard(row);
}
function createTablePage () {
	var container=$('#main');
	var table=$('<table>').appendTo(container);
	var thead=$('<thead>').appendTo(table);
	var theadtr=$('<tr>').appendTo(thead);
	$('<td>').text('Имя').appendTo(theadtr);
	$('<td>').text('Тип').appendTo(theadtr);
	$('<td>').text('Дата').appendTo(theadtr);
	var tbody=$('<thead>').appendTo(table);
	
	function addTableRow (){
		var tbodytr=$('<tr>').appendTo(tbody);
		$('<td>').text('Alvin Eclair').appendTo(tbodytr);
		$('<td>').text('День рождения').appendTo(tbodytr);
		$('<td>').text('1 января 1991').appendTo(tbodytr);
	}
	addTableRow();
	addTableRow();
	addTableRow();
	addTableRow();
	addTableRow();
	addTableRow();
	addTableRow();
	addTableRow();
	addTableRow();
	addTableRow();
	
}
function createNotifyPage () {
	var container=$('#main');
	var row=$('<div>').addClass('row').appendTo(container);
	row.text("asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd 	asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasasdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd");
	
}

$('#mainPageButton').on("click",function(){
	$('.button-collapse').sideNav('hide');
	$('#slide-out').find("li.active").removeClass('active');
	$(this).addClass('active');
	clearPage();
	createMainPage();
});
$('#tablePageButton').on("click",function(){
	$('.button-collapse').sideNav('hide');
	$('#slide-out').find("li.active").removeClass('active');
	$(this).addClass('active');
	clearPage();
	createTablePage();
});
$('#notifyPageButton').on("click",function(){
	$('.button-collapse').sideNav('hide');
	$('#slide-out').find("li.active").removeClass('active');
	$(this).addClass('active');
	clearPage();
	createNotifyPage();
});

