var user={
		name:"Добрыня Никитич",
		city:"Москва",
		mail:"dobrinya9999999@qweqwe.com",
		tel:"+79009998877",
		birthdayYear:1958,
		birthdayMonth:08,
		birthdayDay:26,
		timeZone:3,		
		};
		
		
var allDates=[
		{
			id:1,
			name:"Vasya Smirnov",
			type:"День Рождения",
			day:22,
			month:12,
			year:1955
		},
		{
			id:2, 
			name:"Alvin Eclair", 
			type:"День Рождения", 
			day:2, 
			month:8, 
			year:1993
		},			
			{id:3, name:"Vasya Smirnov", type:"День Рождения", day:27,month:12,year:1957},
			{id:4, name:"Alvin Eclair", type:"День Рождения", day:3,month:10,year:1958},
			{id:5, name:"Vasya Smirnov", type:"День Рождения", day:17,month:2,year:1959},
			{id:6, name:"Alvin Eclair", type:"День Рождения", day:3,month:10,year:1958},
			{id:712, name:"Vasya Smirnov", type:"День Рождения", day:17,month:2,year:1959},
			{id:8, name:"Alvin Eclair", type:"День Рождения", day:3,month:10,year:1958},
			{id:9, name:"Vasya Smirnov", type:"День Рождения", day:17,month:2,year:1959},
			{id:610, name:"Alvin Eclair", type:"День Рождения", day:30,month:1,year:1980}];

		
		
		



function createAppPage () {
	
	var container = $('body');
	//header	
	var header=$('<header>').appendTo(container);
	var nav=$('<nav>').addClass('green').attr("role","navigation").appendTo(header);
	var navDiv=$('<div>').addClass('nav-wrapper page').appendTo(nav);
	$('<span>').attr("id","pageHeader").appendTo(navDiv);
	var navDivSpan=$('<a>').addClass('button-collapse').attr("data-activates","slide-out").attr("href","#!").appendTo(navDiv);
	$('<i>').addClass('material-icons').text('menu').appendTo(navDivSpan);
	//page
	var page = $('<div>').addClass('page').attr("id","page").appendTo(container);
	var sideNav = $('<ul>').addClass('side-nav fixed').attr("id","slide-out").appendTo(page);
		$('<li>').addClass('logo').text("MyDates.pro").appendTo(sideNav);
		$('<li>').addClass('username bluefont').text(user.name).appendTo(sideNav);
		$('<li>').addClass('divider divider1').appendTo(sideNav);
		var mainItem=$('<li>').attr("id","mainPageButton").appendTo(sideNav);
			var mainItemA=$('<a>').addClass('waves-effect').attr("href","#!").text('Главная').appendTo(mainItem);
				$('<i>').addClass('material-icons').text('dashboard').appendTo(mainItemA);
		var tableItem=$('<li>').attr("id","tablePageButton").appendTo(sideNav);
			var tableItemA=$('<a>').addClass('waves-effect').attr("href","#!").text('Все даты').appendTo(tableItem);
				$('<i>').addClass('material-icons').text('contacts').appendTo(tableItemA);
		var notifyItem=$('<li>').attr("id","notifyPageButton").appendTo(sideNav);
			var notifyItemA=$('<a>').addClass('waves-effect').attr("href","#!").text('Уведомления').appendTo(notifyItem);
				$('<i>').addClass('material-icons').text('forum').appendTo(notifyItemA);
		var settingsItem=$('<li>').attr("id","settingsPageButton").appendTo(sideNav);
			var settingsItemA=$('<a>').addClass('waves-effect').attr("href","#!").text('Настройки').appendTo(settingsItem);
				$('<i>').addClass('material-icons').text('settings').appendTo(settingsItemA);
		$('<li>').addClass('divider divider2').appendTo(sideNav);		
		var logoutItem=$('<li>').attr("id","dash_dashboard3").appendTo(sideNav);
			var logoutItemA=$('<a>').addClass('waves-effect').attr("href","#!").text('Выйти').appendTo(logoutItem);
				$('<i>').addClass('material-icons rotate-180').text('input').appendTo(logoutItemA);	
		//main
		var main = $('<main>').attr("id","main").appendTo(page);
	//footer
	var footer=$('<footer>').addClass('green page-footer').appendTo(container);	
		$('<div>').addClass('container').text("Mydates.pro @2017").appendTo(footer);
	//open mainPage
		$('.button-collapse').sideNav('hide');		
		$("#mainPageButton").addClass('active');
		preLoader();
		setTimeout(createMainPage, 1000);
		currentPage="MainPage";
	
	$('.button-collapse').sideNav();
	$('.collapsible').collapsible();
	$('select1').material_select();
	$('.modaltrigger').leanModal();
		
	$('#mainPageButton').on("click",function(){
		if (currentPage != "MainPage") {
			$('.button-collapse').sideNav('hide');
			$('#slide-out').find("li.active").removeClass('active');
			$(this).addClass('active');
			clearPage();
			preLoader();
			setTimeout(createMainPage, 1000);
			currentPage="MainPage";
		} else {
			$('.button-collapse').sideNav('hide');
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
		} else {
			$('.button-collapse').sideNav('hide');
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
		} else {
			$('.button-collapse').sideNav('hide');
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
		} else {
			$('.button-collapse').sideNav('hide');
		}

	});
}	
function createLandingPage () {
	
	var container = $('body').addClass('landing');
	//header	
	var header=$('<header>').appendTo(container);
	var nav=$('<nav>').addClass('color').attr("role","navigation").appendTo(header);
	var navDiv=$('<div>').addClass('nav-wrapper page').appendTo(nav);
	$('<span>').text('MyDates.pro').appendTo(navDiv);
	
	//page
	var mainBanner = $('<div>').addClass('container').appendTo(container);
		$('<br>').appendTo(mainBanner); 
		$('<br>').appendTo(mainBanner); 
		$('<h1>').addClass('header center orange-text').text('Добро пожаловать на myDates.pro').appendTo(mainBanner); 
		$('<br>').appendTo(mainBanner); 
		var h5div = $('<div>').addClass('row center').appendTo(mainBanner);
			$('<h5>').addClass('header col s12 light').text('С нами вы больше никогда не забудете поздравить своих близких!').appendTo(h5div); 
		var actiondiv = $('<div>').addClass('row center').appendTo(mainBanner);
			$('<a>').addClass('btn-large waves-effect waves-light orange').attr("href","./register.html").text("Поехали!").appendTo(actiondiv);
			var tolog=$('<p>').addClass('').text("Уже используете Dates? ").appendTo(actiondiv);
				$('<a>').addClass('light-blue-text').attr("href","./login.html").text("Войти").appendTo(tolog);
		$('<br>').appendTo(mainBanner); 
		$('<br>').appendTo(mainBanner); 
	var infoBlock = $('<div>').addClass('container').appendTo(container);
		var section = $('<div>').addClass('section').appendTo(infoBlock);
		var sectionRow = $('<div>').addClass('row').appendTo(section);
			var c1 = $('<div>').addClass('col s12 m3').appendTo(sectionRow);
				var c1div = $('<div>').addClass('icon-block').appendTo(c1);
					var c1divh2 = $('<h2>').addClass('center light-blue-text').appendTo(c1div);
						$('<i>').addClass('material-icons').text('flash_on').appendTo(c1divh2);
					$('<h5>').addClass('center').text('Удобное добавление важных дат').appendTo(c1div);
					$('<p>').addClass('light').text('Добавляйте важные даты: дни рождения, годовщины, профессиональные праздники.').appendTo(c1div);
			var c2 = $('<div>').addClass('col s12 m3').appendTo(sectionRow);
				var c2div = $('<div>').addClass('icon-block').appendTo(c2);
					var c1divh2 = $('<h2>').addClass('center light-blue-text').appendTo(c2div);
						$('<i>').addClass('material-icons').text('https').appendTo(c1divh2);
					$('<h5>').addClass('center').text('Надежное хранение').appendTo(c2div);
					$('<p>').addClass('light').text('Dates будет надежно хранить все Ваши даты. Только Вы сможете их просматривать').appendTo(c2div);
			var c3 = $('<div>').addClass('col s12 m3').appendTo(sectionRow);
				var c3div = $('<div>').addClass('icon-block').appendTo(c3);
					var c1divh3 = $('<h2>').addClass('center light-blue-text').appendTo(c3div);
						$('<i>').addClass('material-icons').text('verified_user').appendTo(c1divh3);
					$('<h5>').addClass('center').text('Все в одном месте').appendTo(c3div);
					$('<p>').addClass('light').text('Сохраняйте все важные даты в одном месте и моментально получайте к ним доступ').appendTo(c3div);
			var c4 = $('<div>').addClass('col s12 m3').appendTo(sectionRow);
				var c4div = $('<div>').addClass('icon-block').appendTo(c4);
					var c1divh4 = $('<h2>').addClass('center light-blue-text').appendTo(c4div);
						$('<i>').addClass('material-icons').text('stay_primary_portrait').appendTo(c1divh4);
					$('<h5>').addClass('center').text('Заходите на Dates с любого устройства').appendTo(c4div);
					$('<p>').addClass('light').text('Dates оптимизирован для работы со всеми размерами экранов.').appendTo(c4div);
		
	
	
	//footer
	var footer=$('<footer>').addClass('color page-footer').appendTo(container);	
		$('<div>').addClass('container').text("Mydates.pro @2017").appendTo(footer);
	
}	

$(createAppPage);
//$(createLandingPage);		
		




var currentPage;
function clearPage () {
	var container=$('#main');
	$('#pageHeader').text("");
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
	$('#pageHeader').text('Главная');	
	
	var row1=$('<div>').addClass('row').appendTo(container);
	var col1=$('<div>').addClass('col s12 m12 par').appendTo(row1);
		var card1=$('<div>').addClass('card').appendTo(col1);
		var cardContent1=$('<div>').addClass('card-content').appendTo(card1);
		
		var cardBody1=$('<div>').addClass('card-body').appendTo(cardContent1);
				var cardText1=$('<div>').addClass('card-text').appendTo(cardBody1);
					$('<p>').addClass('bluefont').text("В ближайшее время нет праздников").appendTo(cardText1);
				var cardimg1=$('<div>').appendTo(cardBody1);					
					$('<img>').attr("src",'icons/sad.png').appendTo(cardimg1);
			
	
	var row=$('<div>').addClass('row').appendTo(container);
	
	function createCard (container) {
		var col=$('<div>').addClass('col s12 m6').appendTo(container);
		var card=$('<div>').addClass('card').appendTo(col);
		var cardContent=$('<div>').addClass('card-content').appendTo(card);
			
			var cardBody=$('<div>').addClass('card-body').appendTo(cardContent);
				var cardText=$('<div>').addClass('card-text').appendTo(cardBody);
					$('<p>').addClass('bluefont').text("Иван Иванович Иванов").appendTo(cardText);
					$('<p>').addClass('card-day').text("Сегодня").appendTo(cardText);
					var years=$('<p>').appendTo(cardText);	
						$('<span>').addClass('card-year-number greenfont').text("22").appendTo(years);
						$('<span>').addClass('card-year').text("года").appendTo(years);
						
				var cardimg=$('<div>').addClass('for-img').appendTo(cardBody);					
					$('<img>').attr("src",'icons/birthday-cake-piece.png').appendTo(cardimg);		
	}
	
	createCard(row);
	createCard(row);
	createCard(row);
	createCard(row);
	//calendar
	var caldivrow=$('<div>').addClass('row cal-div-row').appendTo(container);
	var caldiv=$('<div>').addClass('col s12 m6').appendTo(caldivrow);
	var caldivshadow=$('<div>').addClass('shadow').appendTo(caldiv);
	var cal=$('<div>').attr("id","datepicker").addClass('calendar').appendTo(caldivshadow);
	 jQuery(function ($) {
        $.datepicker.regional['ru'] = {
            closeText: 'Закрыть',
            prevText: 'keyboard_arrow_up',
            nextText: 'keyboard_arrow_down',
            currentText: 'Сегодня',
            monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            
            
            dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            dateFormat: 'dd.mm.yy',
            firstDay: 1,
            
        };
        $.datepicker.setDefaults($.datepicker.regional['ru']);
    });
	cal.datepicker();
	
	var calDates=$('<div>').addClass('cal-dates-div').appendTo(caldivshadow);
	
	function createCalendarCard (name,years) {
		var calCard=$('<div>').addClass('cal-card').appendTo(calDates);
		var calContent=$('<div>').addClass('cal-card-content').appendTo(calCard);
		
		var calBody=$('<div>').addClass('card-body').appendTo(calContent);
				var calText=$('<div>').addClass('card-text-name').appendTo(calBody);
					$('<p>').addClass('bluefont').text(name).appendTo(calText);
					var yearsn=$('<p>').appendTo(calText);	
						$('<span>').addClass('card-year-number greenfont').text(years).appendTo(yearsn);
						$('<span>').addClass('card-year').text("года").appendTo(yearsn);
	};
	
	createCalendarCard ("Иван",33);
	createCalendarCard ("Иван Иванов",28);
	
	
	
}
function createTablePage () {
	clearPage();
	var container=$('#main');
	
	$('#pageHeader').text("Все даты");
	var table=$('<table>').appendTo(container);
	var thead=$('<thead>').appendTo(table);
	var theadtr=$('<tr>').appendTo(thead);
	$('<td>').text('Имя').appendTo(theadtr);
	$('<td>').text('Тип').appendTo(theadtr);
	$('<td>').text('Дата').appendTo(theadtr);
	$('<td>').appendTo(theadtr);
	var tbody=$('<tbody>').appendTo(table);
	
	$.each(allDates, function(){
		var tbodytr=$('<tr>').addClass('table-row-id').attr("data-id",this.id).appendTo(tbody);
		$('<td>').text(this.name).addClass('bluefont table-name').appendTo(tbodytr);
		$('<td>').text(this.type).appendTo(tbodytr);
		$('<td>').text(this.day+"."+this.month+"."+this.year).appendTo(tbodytr);
		var tableEditIcon=$('<td>').addClass('tableEdit').attr("href","#tableRowModal").appendTo(tbodytr);
		$('<i>').addClass('material-icons edit-column').text("mode_edit").appendTo(tableEditIcon);		
	});
	
	

	function findObjectById(id) {
			var a;
			for (var item in allDates) 
				{
					if (allDates[item].id==id) {
						a=allDates[item];
						break;
					}
				}
			return a;
		}

	//event
	$(".tableEdit").click(function(){
				var tableObjectId=$(this).parent().attr("data-id");
				var tableObject = findObjectById(tableObjectId);
				var indexOfTableObject = allDates.indexOf(tableObject);
				
				$('#tableRowModal').remove();
				var tableModalDiv=$('<div>').addClass('modal').attr("id","tableRowModal").appendTo(container);
				
				var modalDivHeader=$('<div>').addClass('modal-header').appendTo(tableModalDiv);
						$('<h4>').text("Изменить событие").appendTo(modalDivHeader);
				var modalDivcontent=$('<div>').addClass('modal-content').appendTo(tableModalDiv);
			
				
				var modalDivNameInputRow=$('<div>').addClass('row').appendTo(modalDivcontent);		
					var modalDivNameInput=$('<div>').addClass('input-field col s12').appendTo(modalDivNameInputRow);							
					var modalDivNameValue=$('<input>').addClass('input').attr("id","name_field").attr("type","text").attr("value",tableObject.name).appendTo(modalDivNameInput);
					$('<label>').addClass('input-label active').attr("for","name_field").text("Имя").appendTo(modalDivNameInput);	
				var modalDivTypeInputRow=$('<div>').addClass('row').appendTo(modalDivcontent);			
					var modalDivTypeInput=$('<div>').addClass('input-field col s12').appendTo(modalDivTypeInputRow);							
					var modalDivTypeValue=$('<input>').addClass('input').attr("id","type_field").attr("type","text").attr("value",tableObject.type).appendTo(modalDivTypeInput);
					$('<label>').addClass('input-label active').attr("for","type_field").text("Тип").appendTo(modalDivTypeInput);
							
				var modalDivDateInput=$('<div>').addClass('row').appendTo(modalDivcontent);	
					var modalDivDayInput=$('<div>').addClass('input-field col s4').appendTo(modalDivDateInput);							
					var modalDivDayValue=$('<input>').addClass('input').attr({min:1,max:31}).attr("id","day_field").attr("type","number").attr("value",tableObject.day).appendTo(modalDivDayInput);
					$('<label>').addClass('input-label active').attr("for","day_field").text("Число").appendTo(modalDivDayInput);
						
					var modalDivMonthInput=$('<div>').addClass('input-field col s4').appendTo(modalDivDateInput);							
					var modalDivMonthValue=$('<input>').addClass('input').attr({min:1,max:12}).attr("id","month_field").attr("type","number").attr("value",tableObject.month).appendTo(modalDivMonthInput);
					$('<label>').addClass('input-label active').attr("for","month_field").text("Месяц").appendTo(modalDivMonthInput);
				
					var modalDivYearInput=$('<div>').addClass('input-field col s4').appendTo(modalDivDateInput);							
					var modalDivYearValue=$('<input>').addClass('input').attr({min:1920,max:2020}).attr("id","year_field").attr("type","number").attr("value",tableObject.year).appendTo(modalDivYearInput);
					$('<label>').addClass('input-label active').attr("for","year_field").text("Год").appendTo(modalDivYearInput);
						
				var modalDivFooter=$('<div>').addClass('modal-footer').appendTo(tableModalDiv);
					var modalno=$('<a>').addClass("modal-action modal-close waves-effect waves-green btn-flat").text("Cancel").appendTo(modalDivFooter);
					var modalyes=$('<a>').addClass("modal-action waves-effect waves-green btn-flat").text("OK").appendTo(modalDivFooter);
					
			modalyes.click(function(){
				//validate
								
				if (modalDivNameValue.val()<1) {
					Materialize.toast('Введите корректное имя', 3000);
				}	
				else if (modalDivTypeValue.val()<1) {
					Materialize.toast('Введите корректный тип', 3000);
				}
				else if (modalDivDayValue.val()<1 ||modalDivDayValue.val()>31) {
					Materialize.toast('Введите корректную дату', 3000);
				}
				else if (modalDivMonthValue.val()<1 ||modalDivMonthValue.val()>12) {
					Materialize.toast('Введите корректный месяц', 3000);
				}
				else if (modalDivYearValue.val()<1900 ||modalDivYearValue.val()>2018) {
					Materialize.toast('Введите корректный год', 3000);
				}
				
				else {
					var changedRow={
						id:tableObjectId,
						name:modalDivNameValue.val(),
						type:modalDivTypeValue.val(),
						day:modalDivDayValue.val(),
						month:modalDivMonthValue.val(),
						year:modalDivYearValue.val()
					};
					
					//update row
					var a=$('[data-id='+tableObjectId+']');
					a.children('td').eq(0).text(changedRow.name);
					a.children('td').eq(1).text(changedRow.type);
					a.children('td').eq(2).text(changedRow.day+"."+changedRow.month+"."+changedRow.year);	
					
					allDates[indexOfTableObject]=changedRow;//toserver 
					Materialize.toast('Изменения сохранены.', 3000)
					$("#tableRowModal").closeModal();
				}
				return;
				});
		});
	
	$(".tableEdit").leanModal();
	
}
function createNotifyPage () {
	clearPage();
	$('#pageHeader').text("Уведомления");
	var container=$('#main');	
	var undercontainer=$('<div>').addClass('undermain').appendTo(container);	

	$('<h2>').text("E-mail").appendTo(undercontainer);
	var mailCheckboxButtons=$('<p>').appendTo(undercontainer);
	$('<input>').attr("type","checkbox").attr("id","mail1").attr("disabled","disabled").appendTo(mailCheckboxButtons);
	$('<label>').attr("for","mail1").text("За неделю").appendTo(mailCheckboxButtons);
	$('<input>').attr("type","checkbox").attr("id","mail2").attr("disabled","disabled").appendTo(mailCheckboxButtons);
	$('<label>').attr("for","mail2").text("За день").appendTo(mailCheckboxButtons);
	var label33=$('<input>').attr("type","checkbox").attr("id","mail3").appendTo(mailCheckboxButtons);
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
	
	var notifyToday=true;
		//events
		$("#mail3").click(function(){
			//toserver -> callback
			Materialize.toast('Изменения сохранены.', 3000)
		});
		
		
		
}
function createSettingsPage () {
	
		clearPage();
		$('#pageHeader').text("Настройки");
		var container=$('#main');		
		var collection=$('<ul>').addClass('collection').appendTo(container);
		var lineName=$('<li>').addClass('collection-item line row').appendTo(collection);
			$('<div>').addClass('col s5 grey-text darken-1').text("Имя").appendTo(lineName);
			var lineNameDiv=$('<div>').addClass('col s7').attr("href","#nameModal").appendTo(lineName);
				var lineNameValue=$('<div>').text(user.name).appendTo(lineNameDiv);
				$('<i>').addClass('material-icons').text("mode_edit").appendTo(lineNameDiv);
		var lineCity=$('<li>').addClass('collection-item line row').appendTo(collection);
			$('<div>').addClass('col s5 grey-text darken-1').text("Город").appendTo(lineCity);
			var lineCityDiv=$('<div>').addClass('col s7').attr("href","#cityModal").appendTo(lineCity);
				var lineCityValue=$('<div>').text(user.city).appendTo(lineCityDiv);
				$('<i>').addClass('material-icons').text("mode_edit").appendTo(lineCityDiv);
		var lineMail=$('<li>').addClass('collection-item line row').appendTo(collection);
			$('<div>').addClass('col s5 grey-text darken-1').text("E-mail").appendTo(lineMail);
			var lineMailDiv=$('<div>').addClass('col s7').attr("href","#mailModal").appendTo(lineMail);
				var lineMailValue=$('<div>').text(user.mail).appendTo(lineMailDiv);
				$('<i>').addClass('material-icons').text("mode_edit").appendTo(lineMailDiv);
		var lineTel=$('<li>').addClass('collection-item line row').appendTo(collection);
			$('<div>').addClass('col s5 grey-text darken-1').text("Телефон").appendTo(lineTel);
			var lineTelDiv=$('<div>').addClass('col s7').attr("href","#telModal").appendTo(lineTel);	
				var lineTelValue=$('<div>').text(user.tel).appendTo(lineTelDiv);
				$('<i>').addClass('material-icons').text("mode_edit").appendTo(lineTelDiv);
		var lineBirthday=$('<li>').addClass('collection-item line row').appendTo(collection);
			$('<div>').addClass('col s5 grey-text darken-1').text("День рождения").appendTo(lineBirthday);
			var lineBirthdayDiv=$('<div>').addClass('col s7').text(user.birthdayDay+'.'+user.birthdayMonth+'.'+user.birthdayYear).appendTo(lineBirthday);
			$('<i>').addClass('material-icons').text("mode_edit").appendTo(lineBirthdayDiv);
		var lineTimezone=$('<li>').addClass('collection-item line row').appendTo(collection);
			$('<div>').addClass('col s5 grey-text darken-1').text("Часовой пояс").appendTo(lineTimezone);
			var lineTimezoneDiv=$('<div>').addClass('col s7').text("Москва ("+user.birthdayMonth+")").appendTo(lineTimezone);
			$('<i>').addClass('material-icons').text("mode_edit").appendTo(lineTimezoneDiv);
						
		
		//events
		lineNameDiv.click(function(){
				var nameModalDiv=$('<div>').addClass('modal').attr("id","nameModal").appendTo(container);
					var modalDivHeader=$('<div>').addClass('modal-header').appendTo(nameModalDiv);
						$('<h4>').text("Изменить имя").appendTo(modalDivHeader);
					var modalDivcontent=$('<div>').addClass('modal-content').appendTo(nameModalDiv);
						var modalDivRow=$('<div>').addClass('row').appendTo(modalDivcontent);
						var modalDivcontentInput=$('<div>').addClass('input-field col s12').appendTo(modalDivRow);
						var modalDivcontentValue=$('<input>').addClass('input').attr("type","text").attr("value",user.name).appendTo(modalDivcontentInput);
					var modalDivFooter=$('<div>').addClass('modal-footer').appendTo(nameModalDiv);
						var modalno=$('<a>').addClass("modal-action modal-close waves-effect waves-green btn-flat").text("Cancel").appendTo(modalDivFooter);
						var modalyes=$('<a>').addClass("modal-action waves-effect waves-green btn-flat").text("OK").appendTo(modalDivFooter);
					
					
					
					
				modalyes.click(function(){
					//validate								
					if (modalDivcontentValue.val()<1) {
						Materialize.toast('Введите корректное имя', 3000);
					}
					else {
						user.name=modalDivcontentValue.val();//toserver 
						lineNameValue.text(user.name);
						$('.username').text(user.name);
						Materialize.toast('Изменения сохранены.', 3000)
						$("#nameModal").closeModal();
					}
				});
				
				
		});
		
		lineCityDiv.click(function(){
						var cityModalDiv=$('<div>').addClass('modal').attr("id","cityModal").appendTo(container);
							var modalDivHeader=$('<div>').addClass('modal-header').appendTo(cityModalDiv);
								$('<h4>').text("Изменить город").appendTo(modalDivHeader);
						var modalDivcontent=$('<div>').addClass('modal-content').appendTo(cityModalDiv);
							var modalDivRow=$('<div>').addClass('row').appendTo(modalDivcontent);
							var modalDivcontentInput=$('<div>').addClass('input-field col s12').appendTo(modalDivRow);
							var modalDivcontentValue=$('<input>').addClass('input').attr("type","text").attr("value",user.city).appendTo(modalDivcontentInput);
						var modalDivFooter=$('<div>').addClass('modal-footer').appendTo(cityModalDiv);
							var modalno=$('<a>').addClass("modal-action modal-close waves-effect waves-green btn-flat").text("Cancel").appendTo(modalDivFooter);
							var modalyes=$('<a>').addClass("modal-action waves-effect waves-green btn-flat").text("OK").appendTo(modalDivFooter);
					
					modalyes.click(function(){
						//validate								
						if (modalDivcontentValue.val()<1) {
							Materialize.toast('Введите корректный город', 3000);
						}
						else{
						user.city=modalDivcontentValue.val();//toserver 
						lineCityValue.text(user.city);						
						Materialize.toast('Изменения сохранены.', 3000)
						$("#cityModal").closeModal();
						}
					});
		});
		
		lineMailDiv.click(function(){
						var mailModalDiv=$('<div>').addClass('modal').attr("id","mailModal").appendTo(container);
							var modalDivHeader=$('<div>').addClass('modal-header').appendTo(mailModalDiv);
							$('<h4>').text("Изменить E-mail").appendTo(modalDivHeader);
						var modalDivcontent=$('<div>').addClass('modal-content').appendTo(mailModalDiv);
							var modalDivRow=$('<div>').addClass('row').appendTo(modalDivcontent);
							var modalDivcontentInput=$('<div>').addClass('input-field col s12').appendTo(modalDivRow);
							var modalDivcontentValue=$('<input>').addClass('input validate').attr("type","email").attr("value",user.mail).appendTo(modalDivcontentInput);
						var modalDivFooter=$('<div>').addClass('modal-footer').appendTo(mailModalDiv);
							var modalno=$('<a>').addClass("modal-action modal-close waves-effect waves-green btn-flat").text("Cancel").appendTo(modalDivFooter);
							var modalyes=$('<a>').addClass("modal-action waves-effect waves-green btn-flat").text("OK").appendTo(modalDivFooter);
					
					modalyes.click(function(){
						function isValidEmailAddress(emailAddress) {
							var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
							return pattern.test(emailAddress);
						}
						var emailStr=modalDivcontentValue.val();
						//validate								
						if (!isValidEmailAddress(emailStr)) {
							Materialize.toast('Введите корректный E-mail', 3000);
						}
						else {
							user.mail=modalDivcontentValue.val();//toserver 
							lineMailValue.text(user.mail);						
							Materialize.toast('Изменения сохранены.', 3000)
							$("#mailModal").closeModal();
						}
					});	
							
				
		});
		
		lineTelDiv.click(function(){
						var mailModalDiv=$('<div>').addClass('modal').attr("id","telModal").appendTo(container);
							var modalDivHeader=$('<div>').addClass('modal-header').appendTo(mailModalDiv);
								$('<h4>').text("Изменить телефон").appendTo(modalDivHeader);
						var modalDivcontent=$('<div>').addClass('modal-content').appendTo(mailModalDiv);
							var modalDivRow=$('<div>').addClass('row').appendTo(modalDivcontent);
							var modalDivcontentInput=$('<div>').addClass('input-field col s12').appendTo(modalDivRow);
							var modalDivcontentValue=$('<input>').addClass('input').attr("type","text").attr("value",user.tel).appendTo(modalDivcontent);
						var modalDivFooter=$('<div>').addClass('modal-footer').appendTo(mailModalDiv);
							var modalno=$('<a>').addClass("modal-action modal-close waves-effect waves-green btn-flat").text("Cancel").appendTo(modalDivFooter);
							var modalyes=$('<a>').addClass("modal-action waves-effect waves-green btn-flat").text("OK").appendTo(modalDivFooter);
					
					modalyes.click(function(){
						//validate								
						if (modalDivcontentValue.val()<1) {
							Materialize.toast('Введите корректный телефон', 3000);
						}
						else{
							user.tel=modalDivcontentValue.val();//toserver 
							lineTelValue.text(user.tel);						
							Materialize.toast('Изменения сохранены.', 3000)
							$("#telModal").closeModal();
						}
					});	
							
				
		});
		
		lineNameDiv.leanModal();
		lineCityDiv.leanModal();
		lineMailDiv.leanModal();
		lineTelDiv.leanModal();
		
}





