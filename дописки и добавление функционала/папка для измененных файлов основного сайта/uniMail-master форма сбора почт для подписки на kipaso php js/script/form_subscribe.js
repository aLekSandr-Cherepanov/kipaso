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



/*let search = document.querySelector('.form-control');
let reg = "/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/";

document.querySelector('.btn').onclick = function() {
	if(search === reg){
	(document).ready(function() {
		
		//E-mail Ajax Send
		$("form").submit(function() { //Change
			e.preventDefault();
			var th = $(this);
			$.ajax({
				type: "POST",
				url: "mail.php", //ange
				data: th.serialize()
			}).done(function() {
				alert("Спасибо за подписку!");
				setTimeout(function() {
					// Done Functions
					th.trigger("reset");
				}, 1000);
			});
		});
	})}	else {
		alert("Проверьте email");
		return false;
	}

};*/


