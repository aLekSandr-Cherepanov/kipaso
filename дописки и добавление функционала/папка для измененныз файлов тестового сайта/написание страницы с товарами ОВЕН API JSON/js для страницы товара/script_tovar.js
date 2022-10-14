async function getResponse(){
    let response = await fetch('https://owen.ru/export/catalog.json?host=test.kipaso.ru&key=Tl3RqJTP1X9UZXjNYELQQ3dgNfqjDksl');
    let content = await response.json();
    content = content.categories;
    //поиск нужных элементов
    let title = document.querySelector('.title-product');
    let product = document.querySelector('.link-photo');
    let secondary = document.querySelector('.block-secondary-photo');
    let price = document.querySelector('.price');
    let desc = document.querySelector('.block-desc');
    let specs = document.querySelector('.block-specs');
    let headerDocumentation = document.querySelector('.header-documentation');
    let contentDocumentation = document.querySelector('.content-documentation');
    let headerCertificates = document.querySelector('.header-certificates');
    let contentCertificates = document.querySelector('.content-certificates');
    let headerPo = document.querySelector('.header-po');
    let contentPo = document.querySelector('.content-po');
    /*let titlePrice = document.querySelector('.title-price');*/
    let wrapperPrice = document.querySelector('.wrapper-price');

    //название товара
    title.innerHTML += `

        ${content[0].items[0].products[0].name} 

    `
    //вывод главного,большого,фото товара
    product.innerHTML += `
        <img class="hero-photo" src="${content[0].items[0].products[0].image}" alt="2ТРМ0">
    `

    //вывод маленьгих фото
    let keys = Object.keys(content[0].items[0].products[0].images);
    for(let key in keys) {
        secondary.innerHTML += `
        <div class="wrapper-link-photo">
            <a class="link-photo" href="${content[0].items[0].products[0].images[key].src}">
                <img class="secondary-photo" src="${content[0].items[0].products[0].images[key].src}" alt="2ТРМ0">
            </a>
        </div>
    `
    }

    //вывод цены
    price.innerHTML += `
        ${content[0].items[0].products[0].prices[0].price}
    `

    //блок с инфой из desc(json)
    desc.innerHTML += `
        ${content[0].items[0].products[0].desc}
    `
    //блок с инфой из specs(json)
    specs.innerHTML += `
        ${content[0].items[0].products[0].specs}
    `
    //блок с инфой из docs-заголовок документация
    headerDocumentation.innerHTML += `
        ${content[0].items[0].products[0].docs[0].name}
    `

    //содержание блока документация
    let doc = Object.keys(content[0].items[0].products[0].docs[0].items);
    for(let key in doc) {

        contentDocumentation.innerHTML += `
        <div class="block-name-doc">
            <a class="link-documentation" href="${content[0].items[0].products[0].docs[0].items[key].link}">
                <span class="name-documentation">${content[0].items[0].products[0].docs[0].items[key].name}</span>
            </a><br>
        <div>
    `
    }

    //блок с инфой из docs-заголовок сертификаты
    headerCertificates.innerHTML += `
        <div>
            ${content[0].items[0].products[0].docs[1].name}
        </div>
    `

    //содержание блока сертификаты
    let certificates = Object.keys(content[0].items[0].products[0].docs[1].items);
    for(let key in certificates) {

        contentCertificates.innerHTML += `
        <a href="${content[0].items[0].products[0].docs[1].items[key].link}">
            <span>${content[0].items[0].products[0].docs[1].items[key].name}</span>
        </a><br>
    `
    }
    //функция нужна чтобы код шел дальше если блока не будет на других товарах
    function blockPo(){
        //блок с инфой из docs-заголовок ПО
        headerPo.innerHTML += `
            <div>
                ${content[0].items[0].products[0].docs[2].name}
            </div>
        `

        //содержание блока ПО
        let keysPo = Object.keys(content[0].items[0].products[0].docs[2].items);
        for(let key in keysPo) {

            contentPo.innerHTML += `
            <a href="${content[0].items[0].products[0].docs[2].items[key].link}">
                <span>${content[0].items[0].products[0].docs[2].items[key].name}</span>
            </a><br>
        `
        }
    }

    if (blockPo===false){
        return true;
    }

    //содержание блока prices 
    let keysPrice = Object.keys(content[0].items[0].products[0].prices);
    for(let key in keysPrice) {

        wrapperPrice.innerHTML += `
        <div class="wrapper-price_block">
            <div>${content[0].items[0].products[0].prices[key].name}</div>
            <div>${content[0].items[0].products[0].prices[key].price}</div>
        </div>
    `
    }

    //добавил класс блоку,для того чтобы его скрыть из верстки
    document.querySelector('.table-base').classList.add('block-none');

    


    console.log(content);
}
getResponse();