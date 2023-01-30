// блок где будет формироваться информация(цена,наименование)после клика
let infoWrapper = document.querySelector('.general-wrapper__price-block');

//отслеживаем клик на странице
window.addEventListener('click', function(event){

    //проверяем что клик был сделан в нужном месте
    if (event.target.hasAttribute('data-name')) {

        //находим кнопку по которой был совершен клик
        let button = event.target.closest('.list-modification');
        

        //собираем данные внутри кнопки(наименование,цена)
        let nameProduct = button.querySelector('.name-modification').innerText;
        let priceProduct = button.querySelector('.string-price').innerText;

        //вставляем полученные данные в верстку
        document.querySelector('.general-wrapper__name').innerHTML = nameProduct;
        document.querySelector('.final-price').innerHTML = priceProduct;
        document.querySelector('.general-name').innerHTML = nameProduct;
    }

    
})

//собираем данные внутри кнопки(наименование,цена)
function buttonFunction() {
    let productName = document.querySelector('.string-price').innerText;
    let productPrice = document.querySelector('.name-modification').innerText;

    //вставляем собранные данные в верстку
    document.querySelector('.final-price').innerHTML = productName;
    document.querySelector('.general-wrapper__name').innerHTML = productPrice;
    document.querySelector('.general-name').innerHTML = productPrice;

}

//закрашевание кнопки при клике

/*$(".list-modification").click(function () {

    $(".list-modification").removeClass("blue"); // Remove 'blue' CSS Class from all Buttons
      
    $(this).addClass("blue");
  
});*/

//запускаем код через 2 сек после загрузки страницы
window.setTimeout(buttonFunction, 2000);


//код для подсветки активной кнопки

/*
Алгоритм:
    1 Устанавливаем active классы вручную на кнопку и на блок-контента
    2 Скрываем в CSS все блоки контента, кроме активного
    3 в JS обрабатываем клик по кнопкам
    4 При клике:
        - проверяем содержание active класса, чтобы избежать лишних вызовов ф-ций
        - очищаем циклом все active - классы у кнопок и у блок-контента
            для этого напишем функцию очистки классов
        - устанавливаем новый активный класс
            для этого напишем функцию установки активного класса
*/



const button = Array.from(document.querySelectorAll('.list-modification'));

const clearActiveClass = (element, className = 'blue') => {
    element.find(item => item.classList.remove(`${ className }`))
}

const setActiveClass = (element, index, className = 'blue') => {
    element[index].classList.add(`${ className }`)
  }


const checkoutButton = (item, index) => {
    item.addEventListener('click', () => {

        clearActiveClass(button)
        setActiveClass(button, index)
    })
}

button.forEach(checkoutButton);



