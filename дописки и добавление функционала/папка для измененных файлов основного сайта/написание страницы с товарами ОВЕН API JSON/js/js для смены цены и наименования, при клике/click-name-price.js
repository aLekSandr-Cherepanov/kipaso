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
function testFunction() {
    let productName = document.querySelector('.string-price').innerText;
    let productPrice = document.querySelector('.name-modification').innerText;

    //вставляем собранные данные в верстку
    document.querySelector('.final-price').innerHTML = productName;
    document.querySelector('.general-wrapper__name').innerHTML = productPrice;
    document.querySelector('.general-name').innerHTML = productPrice;

}
//запускаем код через 2 сек после загрузки страницы
window.setTimeout(testFunction, 2000);



