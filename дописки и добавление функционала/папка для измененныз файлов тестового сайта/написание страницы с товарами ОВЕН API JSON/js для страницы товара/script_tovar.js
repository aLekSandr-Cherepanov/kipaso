async function getResponse(){
    let response = await fetch('https://owen.ru/export/catalog.json?host=test.kipaso.ru&key=Tl3RqJTP1X9UZXjNYELQQ3dgNfqjDksl');
    let content = await response.json();
    content = content.categories;

    let data = document.querySelector('.wrapper-tovar');


    data.innerHTML += `
        <div>
            <p>${content[0].items[0].products[0].desc}</p>
            <div>${content[0].items[0].products[0].docs}</div>
            <div>${content[0].items[0].products[0].image}</div>
            <div>${content[0].items[0].products[0].images}</div>
            <div>${content[0].items[0].products[0].prices}</div>
            <div>${content[0].items[0].products[0].sku}</div>
            <div>${content[0].items[0].products[0].specs}</div>
            <div>${content[0].items[0].products[0].thumb}</div>

            
        </div>
    `






    console.log(content);
}
getResponse();