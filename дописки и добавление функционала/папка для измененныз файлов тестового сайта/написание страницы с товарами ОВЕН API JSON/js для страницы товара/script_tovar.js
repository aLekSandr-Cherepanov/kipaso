async function getResponse(){
    let response = await fetch('https://owen.ru/export/catalog.json?host=test.kipaso.ru&key=Tl3RqJTP1X9UZXjNYELQQ3dgNfqjDksl');
    let content = await response.json();
    content = content.categories;
    //поиск нужных элементов
    let product = document.querySelector('.hero-photo');
    let secondary = document.querySelector('.secondary-photo');
    let price = document.querySelector('.container-price');
    let desc = document.querySelector('.block-desc');
    let header = document.querySelector('.header-product');
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
    header.innerHTML += `

        <h2>${content[0].items[0].products[10].name}</h2>    

    `


    //вывод главного,большого,фото товара
    product.innerHTML += `
        <div>
            <img class="style-photo" src="${content[0].items[0].products[10].image}">
        </div>
    `

    //вывод маленьгих фото
    let keys = Object.keys(content[0].items[0].products[10].images);
    for(let key in keys) {

        secondary.innerHTML += `
        <div>
            <img src="${content[0].items[0].products[10].images[key].src}">
        </div>
    `
    }

    //вывод цены
    price.innerHTML += `
            <span> Цена:${content[0].items[0].products[10].prices[0].price}</span>
    `

    //блок с инфой из desc(json)
    desc.innerHTML += `
        <div>
            <p>${content[0].items[0].products[10].desc}</p>
        </div>
    `
    //блок с инфой из specs(json)
    specs.innerHTML += `
        <div>
            ${content[0].items[0].products[10].specs}
        </div>
    `

    //блок с инфой из docs-заголовок документация
    headerDocumentation.innerHTML += `
        <div>
            ${content[0].items[0].products[10].docs[0].name}
        </div>
    `

    //содержание блока документация
    let doc = Object.keys(content[0].items[0].products[10].docs[0].items);
    for(let key in doc) {

        contentDocumentation.innerHTML += `
        <a href="${content[0].items[0].products[10].docs[0].items[key].link}">
            <span>${content[0].items[0].products[10].docs[0].items[key].name}</span>
        </a><br>
    `
    }

    //блок с инфой из docs-заголовок сертификаты
    headerCertificates.innerHTML += `
        <div>
            ${content[0].items[0].products[10].docs[1].name}
        </div>
    `

    //содержание блока сертификаты
    let certificates = Object.keys(content[0].items[0].products[10].docs[1].items);
    for(let key in certificates) {

        contentCertificates.innerHTML += `
        <a href="${content[0].items[0].products[10].docs[1].items[key].link}">
            <span>${content[0].items[0].products[10].docs[1].items[key].name}</span>
        </a><br>
    `
    }
    //функция нужна чтобы код шел дальше если блока не будет на других товарах
    function blockPo(){
        //блок с инфой из docs-заголовок ПО
        headerPo.innerHTML += `
            <div>
                ${content[0].items[0].products[10].docs[2].name}
            </div>
        `

        //содержание блока ПО
        let keysPo = Object.keys(content[0].items[0].products[10].docs[2].items);
        for(let key in keysPo) {

            contentPo.innerHTML += `
            <a href="${content[0].items[0].products[10].docs[2].items[key].link}">
                <span>${content[0].items[0].products[10].docs[2].items[key].name}</span>
            </a><br>
        `
        }
    }

    if (blockPo===false){
        return true;
    }

    //блок с инфой из prices загаловок
    /*titlePrice.innerHTML += `
        <div>
            ${content[0].items[0].products[0].docs[2].name}
        </div>
    `*/

    //содержание блока prices 
    let keysPrice = Object.keys(content[0].items[0].products[10].prices);
    for(let key in keysPrice) {

        wrapperPrice.innerHTML += `
        <div class="wrapper-price_block">
            <div>${content[0].items[0].products[10].prices[key].name}</div>
            <div>${content[0].items[0].products[10].prices[key].price}</div>
        </div>
    `
    }

    


    console.log(content);
}
getResponse();
