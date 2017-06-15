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
	
	function createCard (container) {
		var col=$('<div>').addClass('col s6 m4').appendTo(container);
		var card=$('<div>').addClass('card').appendTo(col);
		var cardContent=$('<div>').addClass('card-content').appendTo(card);
		$('<img>').addClass('responsive-img').attr("src","icons/cake.png").appendTo(cardContent);
		$('<br>').appendTo(cardContent);
		$('<p>').addClass('card-title').text("Сегодня").appendTo(cardContent);
		$('<p>').text("Иван Иванович Иванов").appendTo(cardContent);
		$('<p>').text("34 года").appendTo(cardContent);	
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

