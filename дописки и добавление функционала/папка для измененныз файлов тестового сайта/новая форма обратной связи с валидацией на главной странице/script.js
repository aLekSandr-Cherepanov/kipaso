/*$(document).ready(function() {
    $('#form_test').submit(function(){
        // убираем класс ошибок с инпутов
        $('input').each(function(){
            $(this).removeClass('error_input');
        });
        // прячем текст ошибок
        $('.error').hide();
         
        // получение данных из полей
        var name_user = $('#name_user').val();
        var email_user = $('#email_user').val();
        var password_user = $('#password_user').val();
        var password_2_user = $('#password_2_user').val();
         
        $.ajax({
            // метод отправки 
            type: "POST",
            // путь до скрипта-обработчика
            url: "/ajax_index.php",
            // какие данные будут переданы
            data: {
                'name_user': name_user, 
                'email_user': email_user,
                'password_user': password_user,
                'password_2_user': password_2_user
            },
            // тип передачи данных
            dataType: "json",
            // действие, при ответе с сервера
            success: function(data){
                // в случае, когда пришло success. Отработало без ошибок
                if(data.result == 'success'){   
                    alert('форма корректно заполнена');
                // в случае ошибок в форме
                }else{
                    // перебираем массив с ошибками
                    for(var errorField in data.text_error){
                        // выводим текст ошибок 
                        $('#'+errorField+'_error').html(data.text_error[errorField]);
                        // показываем текст ошибок
                        $('#'+errorField+'_error').show();
                        // обводим инпуты красным цветом
                        $('#'+errorField).addClass('error_input');                      
                    }
                }
            }
        });
        // останавливаем сабмит, чтоб не перезагружалась страница
        return false;
    });
});*/




/* один из вариантов js кода */ 
$( document ).ready(function() {
	$('button[type="submit"]').click(function(){
	
	/*Валидация полей формы*/
	$('#feedback').validate({
	//Правила валидации
	rules: {
        name: {
            required: true,
        },
		    email: {
            required: true,
			email: true
        },
		 phone: {
            required: true,
        },

    },
	//Сообщения об ошибках
    messages: {
		name: {
            required: "Обязательно укажите имя",
        },
		email: {
            required: "Обязательно укажите Email",
        },
		phone: {
			required: "Укажите номер телефона",
		},
    },
	
	/*Отправка формы в случае успеха валидации*/
    submitHandler: function(){
         sendAjaxForm('feedback', 'ajax-form.php'); //Вызываем функцию отправки формы
		 return false; 
    }
	});
});

	function sendAjaxForm(feedback, url) {
		$.ajax({
			url:     url, //url страницы (ajax-form.php)
			type:     "POST", //метод отправки
			dataType: "html", //формат данных
			data: $("#"+feedback).serialize(),  // Сеарилизуем объекты формы
			success: function(response) { //Данные отправлены успешно
				
				//Ваш код если успешно отправлено
				alert('Успешно отправлено!');
			},
			error: function(response) { // Данные не отправлены
				
				//Ваш код если ошибка
				alert('Ошибка отправления');
			}
		});

}
});