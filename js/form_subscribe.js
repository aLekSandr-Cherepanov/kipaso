$(document).ready(function() {

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

});

/*function validate(form_subscribe,form_control) {
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	var address = document.forms[form_subscribe].elements[form_control].value;
	if(reg.test(address) == false) {
	   alert('Введите корректный e-mail');
	   return false;
	}
 }*/


/*unction formValidate(form) {
	let error = 0;
	let formReq = document.querySelectorAll('._req');

	for (let index = 0; index < formReq.length; index++) {
		const input = formReq[index];
		formRemoveError(input);

		if (input.classList.contains('.form_control')){
			if(emailTest(input)){
				formAddError(input);
				error++;
			}
		}

	}
}

function formAddError(input) {
	input.parentElement.classList.add('_error');
	input.classList.remove('_error');
}
function formRemoveError(input) {
	input.parentElement.classList.remove('_error');
	input.classList.remove('_error');
}

function emailTest(input) {
	return !/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(input.value);
}*/