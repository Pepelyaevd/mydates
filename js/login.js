
$('#onLogin').click(function(){
	function isValidEmailAddress(emailAddress) {
		var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
		return pattern.test(emailAddress);
    }
	var emailStr= $('#email').val();
	
	if (!$('#email').val()) {
		Materialize.toast('Введите емейл', 3000000);
	}	
	else if (!isValidEmailAddress(emailStr)) {
		Materialize.toast('Введите корректный email', 3000);
	}
	else if (!$('#password').val()) {
		Materialize.toast('Введите пароль', 3000);
	}
	else if ($('#password').val().length<6) {
		Materialize.toast('Пароль должен содержать минимум 6 символов', 3000);
	}
	
	else {
		Materialize.toast('Форма заполнена верно', 3000);
	}
	
	
});
$('#onRegister').click(function(){
	function isValidEmailAddress(emailAddress) {
		var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
		return pattern.test(emailAddress);
    }
	var emailStr= $('#email').val();
	
	if (!$('#username').val()) {
		Materialize.toast('Введите имя', 3000);
	}
	else if (!$('#email').val()) {
		Materialize.toast('Введите емейл', 3000);
	}	
	else if (!isValidEmailAddress(emailStr)) {
		Materialize.toast('Введите корректный email', 3000);
	}
	else if (!$('#password').val()) {
		Materialize.toast('Введите пароль', 3000);
	}
	else if ($('#password').val().length<6) {
		Materialize.toast('Пароль должен содержать минимум 6 символов', 3000);
	}
	
	else {
		Materialize.toast('Форма заполнена верно', 3000);
	}
	
	
});

$('#onForgot').click(function(){
	function isValidEmailAddress(emailAddress) {
		var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
		return pattern.test(emailAddress);
    }
	var emailStr= $('#email').val();
	
	if (!$('#email').val()) {
		Materialize.toast('Введите емейл', 3000);
	}	
	else if (!isValidEmailAddress(emailStr)) {
		Materialize.toast('Введите корректный email', 3000);
	}
	
	
	else {
		Materialize.toast('Форма заполнена верно', 3000);
	}
	
	
});