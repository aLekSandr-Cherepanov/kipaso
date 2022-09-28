async function getResponse(){
    let response = await fetch('https://owen.ru/export/catalog.json?host=test.kipaso.ru&key=Tl3RqJTP1X9UZXjNYELQQ3dgNfqjDksl');
    let content = await response.json();
    content = content.categories;
    
    let data = document.querySelector('.wrapper-container');
    let subcategory = document.querySelector('.subcategory');
    let products = document.querySelector('.block-link-product');

    data.innerHTML += `
        <div>
            <h2>${content[0].name}</h2>
        </div>
    `
    subcategory.innerHTML += `
            <p>
                <span>${content[0].items[0].name}</span><br>
            </p>
            <div>
                <span>Продукты:</span>
            </div>
        `
    for(let key in content) {

        subcategory.innerHTML += `
            <p>
                <span>${content[0].items[0].products[key].name}</span>
            </p>
        `
        /*products.innerHTML += `
            <a href="">${content[0].items[0].products[key].name}</a>
        `*/
    }

    console.log(content)
}
getResponse()