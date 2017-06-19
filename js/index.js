$('.button-collapse').sideNav();

$('.collapsible').collapsible();

$('select1').material_select();
$('.modaltrigger').leanModal();


var currentPage;
function clearPage () {
	var container=$('#main');
	container.empty();
}

function preLoader () {
	var container=$('#main');
	var loader=$('<div>').addClass('preloader-wrapper big active').appendTo(container);
	var spinner=$('<div>').addClass('spinner-layer spinner-blue-only').appendTo(loader);
		var clipperLeft=$('<div>').addClass('circle-clipper left').appendTo(spinner);
			$('<div>').addClass('circle').appendTo(clipperLeft);
		var gapPatch=$('<div>').addClass('gap-patch').appendTo(spinner);
			$('<div>').addClass('circle').appendTo(gapPatch);
		var clipperRight=$('<div>').addClass('circle-clipper right').appendTo(spinner);
			$('<div>').addClass('circle').appendTo(clipperRight);		
}

function createMainPage () {
	clearPage();
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
	clearPage();
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
	clearPage();
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
	clearPage();
	var container=$('#main');
	$('<h1>').addClass('header').text("Настройки").appendTo(container);
	var collection=$('<ul>').addClass('collection').appendTo(container);
	var lineName=$('<li>').addClass('collection-item line row').appendTo(collection);
		$('<div>').addClass('col s5 grey-text darken-1').text("Имя").appendTo(lineName);
		var lineNameDiv=$('<div>').addClass('col s7').text("Иннокентий").appendTo(lineName);		
		$('<i>').addClass('material-icons').text("mode_edit").appendTo(lineNameDiv);
	var lineCity=$('<li>').addClass('collection-item line row').appendTo(collection);
		$('<div>').addClass('col s5 grey-text darken-1').text("Город").appendTo(lineCity);
		var lineCityDiv=$('<div>').addClass('col s7').text("Москва").appendTo(lineCity);
		$('<i>').addClass('material-icons').text("mode_edit").appendTo(lineCityDiv);
	var lineMail=$('<li>').addClass('collection-item line row').appendTo(collection);
		$('<div>').addClass('col s5 grey-text darken-1').text("E-mail").appendTo(lineMail);
		var lineMailDiv=$('<div>').addClass('col s7').text("dima123123123@asd.ru").appendTo(lineMail);
		$('<i>').addClass('material-icons').text("mode_edit").appendTo(lineMailDiv);
	var lineTel=$('<li>').addClass('collection-item line row').appendTo(collection);
		$('<div>').addClass('col s5 grey-text darken-1').text("Телефон").appendTo(lineTel);
		var lineTelDiv=$('<div>').addClass('col s7').text("+7-123-00-00-00").appendTo(lineTel);	
		$('<i>').addClass('material-icons').text("mode_edit").appendTo(lineTelDiv);
	var lineBirthday=$('<li>').addClass('collection-item line row').appendTo(collection);
		$('<div>').addClass('col s5 grey-text darken-1').text("День рождения").appendTo(lineBirthday);
		var lineBirthdayDiv=$('<div>').addClass('col s7').text("28 декабря 1980").appendTo(lineBirthday);
		$('<i>').addClass('material-icons').text("mode_edit").appendTo(lineBirthdayDiv);
	var lineTimezone=$('<li>').addClass('collection-item line row').appendTo(collection);
		$('<div>').addClass('col s5 grey-text darken-1').text("Часовой пояс").appendTo(lineTimezone);
		var lineTimezoneDiv=$('<div>').addClass('col s7').text("Москва (+3.00)").appendTo(lineTimezone);
		$('<i>').addClass('material-icons').text("mode_edit").appendTo(lineTimezoneDiv);

	
	}

$('#mainPageButton').on("click",function(){
	if (currentPage != "MainPage") {
		$('.button-collapse').sideNav('hide');
		$('#slide-out').find("li.active").removeClass('active');
		$(this).addClass('active');
		clearPage();
		preLoader();
		setTimeout(createMainPage, 1000);
		currentPage="MainPage";
	}
});
$('#tablePageButton').on("click",function(){
	if (currentPage != "TablePage") {
		$('.button-collapse').sideNav('hide');
		$('#slide-out').find("li.active").removeClass('active');
		$(this).addClass('active');
		clearPage();
		preLoader();
		setTimeout(createTablePage, 1000);
		currentPage="TablePage";
	}
});
$('#notifyPageButton').on("click",function(){
	if (currentPage != "NotifyPage") {
		$('.button-collapse').sideNav('hide');
		$('#slide-out').find("li.active").removeClass('active');
		$(this).addClass('active');
		clearPage();
		preLoader();
		setTimeout(createNotifyPage, 1000);
		currentPage="NotifyPage";
	}
});
$('#settingsPageButton').on("click",function(){
	if (currentPage != "SettingsPage") {
		$('.button-collapse').sideNav('hide');
		$('#slide-out').find("li.active").removeClass('active');
		$(this).addClass('active');
		clearPage();
		preLoader();
		setTimeout(createSettingsPage, 1000);
		currentPage="SettingsPage";
	}
});


