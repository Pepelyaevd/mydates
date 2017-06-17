$('.button-collapse').sideNav();

$('.collapsible').collapsible();

$('select1').material_select();
$('.modaltrigger').leanModal();



function clearPage () {
	var container=$('#main');
	container.empty();
}

function createMainPage () {
	var container=$('#main');
	var row=$('<div>').addClass('row').appendTo(container);
	

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
					function randomNumber(m, n) {
						  m = parseInt(m);
						  n = parseInt(n);
						  return Math.floor( Math.random() * (n - m + 1) ) + m;
					}
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
	
	$('<h1>').addClass('header').text("Все даты").appendTo(container);
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
	$('<h1>').addClass('header').text("Уведомления").appendTo(container);
	var undercontainer=$('<div>').addClass('undermain').appendTo(container);	

	$('<h2>').text("E-mail").appendTo(undercontainer);
	var mailCheckboxButtons=$('<p>').appendTo(undercontainer);
	$('<input>').attr("type","checkbox").attr("id","mail1").attr("disabled","disabled").appendTo(mailCheckboxButtons);
	$('<label>').attr("for","mail1").text("За неделю").appendTo(mailCheckboxButtons);
	$('<input>').attr("type","checkbox").attr("id","mail2").attr("disabled","disabled").appendTo(mailCheckboxButtons);
	$('<label>').attr("for","mail2").text("За день").appendTo(mailCheckboxButtons);
	$('<input>').attr("type","checkbox").attr("id","mail3").appendTo(mailCheckboxButtons);
	$('<label>').attr("for","mail3").text("В день события").appendTo(mailCheckboxButtons);
	
	$('<h2>').text("SMS").appendTo(undercontainer);
	var smsCheckboxButtons=$('<p>').appendTo(undercontainer);
	$('<input>').attr("type","checkbox").attr("id","sms1").attr("disabled","disabled").appendTo(smsCheckboxButtons);
	$('<label>').attr("for","sms1").text("За неделю").appendTo(smsCheckboxButtons);
	$('<input>').attr("type","checkbox").attr("id","sms2").attr("disabled","disabled").appendTo(smsCheckboxButtons);
	$('<label>').attr("for","sms2").text("За день").appendTo(smsCheckboxButtons);
	$('<input>').attr("type","checkbox").attr("id","sms3").attr("disabled","disabled").appendTo(smsCheckboxButtons);
	$('<label>').attr("for","sms3").text("В день события").appendTo(smsCheckboxButtons);
		
	var row=$('<div>').addClass('row').appendTo(undercontainer);	
	row.text("asdasdasssdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd 	asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasasdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd");
	
	var centered = $('<div>').addClass('centered').appendTo(container);
	$('<a>').addClass('waves-effect green btn-large').text("Сохранить изменения").appendTo(centered);
}
function createSettingsPage () {
	var container=$('#main');
	$('<h1>').addClass('header').text("Настройки").appendTo(container);
	var collection=$('<ul>').addClass('collection').appendTo(container);
	var lineName=$('<li>').addClass('collection-item line row').appendTo(collection);
		$('<div>').addClass('col s5 grey-text darken-1').text("Имя").appendTo(lineName);
		$('<div>').addClass('col s7').text("Иннокентий").appendTo(lineName);
	var lineCity=$('<li>').addClass('collection-item line row').appendTo(collection);
		$('<div>').addClass('col s5 grey-text darken-1').text("Город").appendTo(lineCity);
		$('<div>').addClass('col s7').text("Москва").appendTo(lineCity);
	var lineMail=$('<li>').addClass('collection-item line row').appendTo(collection);
		$('<div>').addClass('col s5 grey-text darken-1').text("E-mail").appendTo(lineMail);
		$('<div>').addClass('col s7').text("dima123123123@asd.ru").appendTo(lineMail);	
	var lineTel=$('<li>').addClass('collection-item line row').appendTo(collection);
		$('<div>').addClass('col s5 grey-text darken-1').text("Телефон").appendTo(lineTel);
		$('<div>').addClass('col s7').text("+7-123-00-00-00").appendTo(lineTel);	
	var lineBirthday=$('<li>').addClass('collection-item line row').appendTo(collection);
		$('<div>').addClass('col s5 grey-text darken-1').text("День рождения").appendTo(lineBirthday);
		$('<div>').addClass('col s7').text("28 декабря 1980").appendTo(lineBirthday);
	var lineTimezone=$('<li>').addClass('collection-item line row').appendTo(collection);
		$('<div>').addClass('col s5 grey-text darken-1').text("Часовой пояс").appendTo(lineTimezone);
		$('<div>').addClass('col s7').text("Москва (+3.00)").appendTo(lineTimezone);

		
	var row=$('<div>').addClass('row').appendTo(container);	
	row.text("asdasdasssdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd 	asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasasdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasdasd");
	
	var centered = $('<div>').addClass('centered').appendTo(container);
	$('<a>').addClass('waves-effect green btn-large').text("Сохранить изменения").appendTo(centered);
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
$('#settingsPageButton').on("click",function(){
	$('.button-collapse').sideNav('hide');
	$('#slide-out').find("li.active").removeClass('active');
	$(this).addClass('active');
	clearPage();
	createSettingsPage();
});


