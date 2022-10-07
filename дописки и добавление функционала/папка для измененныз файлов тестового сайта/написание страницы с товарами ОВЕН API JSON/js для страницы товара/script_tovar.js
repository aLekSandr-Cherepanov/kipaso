async function getResponse(){
    let response = await fetch('https://owen.ru/export/catalog.json?host=test.kipaso.ru&key=Tl3RqJTP1X9UZXjNYELQQ3dgNfqjDksl');
    let content = await response.json();
    content = content.categories;

    let data = document.querySelector('.wrapper-tovar');
    let product = document.querySelector('.hero-photo');
    let secondary = document.querySelector('.secondary-photo');
    let price = document.querySelector('.container-price');


    data.innerHTML += `
        <div>
            <p>${content[0].items[0].products[0].desc}</p>
        </div>
    `
    product.innerHTML += `
        <div>
            <img class="style-photo" src="${content[0].items[0].products[0].image}">
        </div>
    `

    let keys = Object.keys(content[0].items[0].products[0].images);
    for(let key in keys) {

        secondary.innerHTML += `
        <div>
            <img class="style-photo" src="${content[0].items[0].products[0].images[key].src}">
        </div>
    `
    }

    price.innerHTML += `
            <span> Цена:${content[0].items[0].products[0].prices[1].price}</span>
    `



    console.log(content);
}
getResponse();