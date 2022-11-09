async function getResponse(){
    let response = await fetch('https://owen.ru/export/catalog.json?host=test.kipaso.ru&key=Tl3RqJTP1X9UZXjNYELQQ3dgNfqjDksl');
    let content = await response.json();
    content = content.categories;
    //поиск нужных элементов
    let title = document.querySelector('.content__header');
    let product = document.querySelector('.block-hero-photo');
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
    let wrapperPrice = document.querySelector('.wrapper-price');
    let modificationBlock = document.querySelector('.wrapper-list-modification');

    //название товара
    title.innerHTML += `

        ${content[0].items[0].products[1].name} 

    `
    //вывод главного,большого,фото товара
    product.innerHTML += `
        <a class="link-photo" href="${content[0].items[0].products[1].image}">
            <img class="hero-photo" src="${content[0].items[0].products[1].image}" alt="ТРМ1">
        </a>
    `

    //вывод маленьких фото
    let keys = Object.keys(content[0].items[0].products[1].images);
    for(let key in keys) {
        secondary.innerHTML += `
        <div class="wrapper-link-photo">
            <a class="link-photo" data-lightbox="image-tovar-group" href="${content[0].items[0].products[1].images[key].src}">
                <img class="photos__img lazy-img" src="${content[0].items[0].products[1].images[key].src}" alt="${content[0].items[0].products[1].images[key].alt}">
            </a>
        </div>
    `
    }

    //вывод цены 
    let listPrice = Object.keys(content[0].items[0].products[1].prices);
    for(let key in listPrice) {

        modificationBlock.innerHTML += `
        <li class="list-modification">
            <span data-name class="name-modification">${content[0].items[0].products[1].prices[key].name}</span>
            <span data price class="string-price" style="display: none;">${content[0].items[0].products[1].prices[key].price}</span>
        </li>
    `
    }

    //блок с инфой из desc(json)
    desc.innerHTML += `
        ${content[0].items[0].products[1].desc}
    `
    //блок с инфой из specs(json)
    specs.innerHTML += `
        ${content[0].items[0].products[1].specs}
    `
    //блок с инфой из docs-заголовок документация
    headerDocumentation.innerHTML += `
        ${content[0].items[0].products[1].docs[0].name}
    `

    //содержание блока документация
    let doc = Object.keys(content[0].items[0].products[1].docs[0].items);
    for(let key in doc) {

        contentDocumentation.innerHTML += `
        <div class="wrapper-block-img-doc">
            <div class="block-img-doc">
                <img class="doc-icon" src="/assets/templates/new/img/doc-oven.png" alt="">
            </div>
            <div class="block-name-certificates">
                <a class="link-doc" href="${content[0].items[0].products[1].docs[0].items[key].link}">
                    ${content[0].items[0].products[1].docs[0].items[key].name}
                </a><br>
            </div>
        </div>
    `
    }

    //блок с инфой из docs-заголовок сертификаты
    headerCertificates.innerHTML += `
        ${content[0].items[0].products[1].docs[1].name}
    `

    //содержание блока сертификаты
    let certificates = Object.keys(content[0].items[0].products[1].docs[1].items);
    for(let key in certificates) {

        contentCertificates.innerHTML += `
        <div class="wrapper-block-img-doc">
            <div class="block-img-doc">
                <img class="doc-icon" src="/assets/templates/new/img/txt-oven.png" alt="">
            </div>
            <div class="block-name-certificates">
                <a class="link-doc" href="${content[0].items[0].products[1].docs[1].items[key].link}">
                    ${content[0].items[0].products[1].docs[1].items[key].name}
                </a><br>
            </div>
        </div>
    `
    }

    //блок с инфой из docs-заголовок ПО
        headerPo.innerHTML += `
                ${content[0].items[0].products[1].docs[2].name}
        `

        //содержание блока ПО
        let keysPo = Object.keys(content[0].items[0].products[1].docs[2].items);
        for(let key in keysPo) {

            contentPo.innerHTML += `
            <div class="wrapper-block-img-doc">
                <div class="block-img-doc">
                    <img class="doc-icon" src="/assets/templates/new/img/app-oven.png" alt="">
                </div>
                <div class="block-name-po">
                  <a class="link-doc" href="${content[0].items[0].products[1].docs[2].items[key].link}">
                    ${content[0].items[0].products[1].docs[2].items[key].name}
                  </a><br>
                </div>
            </div>
        `
        }

    //содержание блока prices 
    let keysPrice = Object.keys(content[0].items[0].products[1].prices);
    for(let key in keysPrice) {

        wrapperPrice.innerHTML += `
        <div class="wrapper-price_block">
            <div class="name-prodict">${content[0].items[0].products[1].prices[key].name}</div>
            <div class="price-prodict">${content[0].items[0].products[1].prices[key].price} ₽</div>
        </div>
    `
    }

    //добавил класс блоку,для того чтобы его скрыть из верстки
    document.querySelector('.table-base').classList.add('block-none');

    // добавляет класс к блоку ПО чтобы его скрыть
    document.querySelector(".po").style.display = "none";   


    console.log(content);
}
getResponse();
    


