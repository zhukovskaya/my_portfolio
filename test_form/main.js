window.onload = function () {
	document.getElementById("password1").onchange = validatePassword;
	document.getElementById("password2").onchange = validatePassword;

	document.getElementById("registration").onsubmit = submitRegistration;
}

function validatePassword () {
	var pass2 = document.getElementById("password2").value;
	var pass1 = document.getElementById("password1").value;
	if(pass1 != pass2) {
		document.getElementById("password2").setCustomValidity("Введите повторно верный пароль");
	}
	else {
		document.getElementById("password2").setCustomValidity('');	 
	}
}

function submitRegistration() {
	event.preventDefault();
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var pass = document.getElementById("password2").value;
	var regForm = document.getElementById("registration");
	var content = document.getElementById("content");
	
	regForm.parentNode.removeChild(regForm);
	var success = document.createElement("div");
	success.id = "success";
	var template = '<h2>Добрый день, <span>' + name + '</span>!</h2><h3><i class="fa fa-check-circle" aria-hidden="true"></i>\
	Регистрация прошла успешно.</h3><div class="left">Ваши данные для доступа на сайт:\
	 <ul><li><span>Имя</span> - ' + name + '.</li><li><span>Email</span> - ' + email + '.</li>\
	<li><span>Пароль</span> - ' + pass + '.</li></ul></div>\
	<p><i class="fa fa-exclamation-circle" aria-hidden="true"></i>Не разглашайте персональные данные пользователя во избежание доступа к вашему аккаунту со стороны третьих лиц!</p>'
	success.innerHTML = template;
	content.appendChild(success);
}