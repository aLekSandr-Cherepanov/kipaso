$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		let search = document.forms["formSubscribe"]["formControl"].value;
		
		if(search === "/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/")
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо за подписку!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		else {
			alert("Проверьте email");
		}
		return false;
	});

});






/*$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо за подписку!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});*/
/*function validate(form_subscribe,form_control) {
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	var address = document.forms[form_subscribe].elements[form_control].value;
	if(reg.test(address) == false) {
	   alert('Введите корректный e-mail');
	   return false;
	}
 }*/




/*function validate() {
	let a = document.forms["myForm"]["E-mail"].value;
    if (a == "") {
      alert("Укажите ваше имя");
      return false;
}
}*/







function formValidation() {

	var uemail = document.registration.E-mail;
		if(ValidateEmail(uemail)) {
			return false;
		} 
		
} 


function ValidateEmail(uemail) {
	var mailformat = '/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/';
	if(uemail.value.match(mailformat)) {
		return true;
	}
	else {
		alert("Вы ввели не правильный email");
		uemail.focus();
		return false;
	}
}
