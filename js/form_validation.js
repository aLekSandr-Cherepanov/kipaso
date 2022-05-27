/*function validate(form_subscribe,form_control) {
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	var address = document.forms[form_subscribe].elements[form_control].value;
	if(reg.test(address) == false) {
	   alert('Введите корректный e-mail');
	   return false;
	}
 }*/




function validate() {
	let a = document.forms["myForm"]["E-mail"].value;
	if (a == "/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/") {
	  alert("Не правильно указан e-mail");
	  return false;
}};






/*function ValidateEmail(uemail) {
	var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
	if(uemail.value.match(mailformat)) {
		return true;
	}
	else {
		alert("Вы ввели не правильный email");
		uemail.focus();
		return false;
	}
}

function formValidation() {
	var uemail = document.registration.E-mail;
		if(ValidateEmail(uemail)) {
			return false;
		} 
} */