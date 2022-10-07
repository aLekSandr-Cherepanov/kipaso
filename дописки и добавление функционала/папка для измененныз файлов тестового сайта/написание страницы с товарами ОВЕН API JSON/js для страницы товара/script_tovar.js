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
    let docs = document.querySelector('.block-docs');
    let headerDocumentation = document.querySelector('.header-documentation');

    //название товара
    header.innerHTML += `

        <h2>${content[0].items[0].products[0].name}</h2>    

    `


    //вывод главного,большого,фото товара
    product.innerHTML += `
        <div>
            <img class="style-photo" src="${content[0].items[0].products[0].image}">
        </div>
    `

    //вывод маленьгих фото
    let keys = Object.keys(content[0].items[0].products[0].images);
    for(let key in keys) {

        secondary.innerHTML += `
        <div>
            <img src="${content[0].items[0].products[0].images[key].src}">
        </div>
    `
    }

    //вывод цены
    price.innerHTML += `
            <span> Цена:${content[0].items[0].products[0].prices[1].price}</span>
    `

    //блок с инфой из desc(json)
    desc.innerHTML += `
        <div>
            <p>${content[0].items[0].products[0].desc}</p>
        </div>
    `
    //блок с инфой из specs(json)
    specs.innerHTML += `
        <div>
            ${content[0].items[0].products[0].specs}
        </div>
    `
    //блок с инфой из docs(json)
    docs.innerHTML += `
        <div>
            ${content[0].items[0].products[0].docs}
        </div>
    `

    //блок с инфой из docs-заголовок документация
    headerDocumentation.innerHTML += `
        <div>
            ${content[0].items[0].products[0].docs[0].name}
        </div>
    `


    console.log(content);
}
getResponse();