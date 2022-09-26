/*fetch("https://owen.ru/export/catalog.json?host=test.kipaso.ru&key=Tl3RqJTP1X9UZXjNYELQQ3dgNfqjDksl")
.then(function(response){
    return response.json();
})
.then(function(products){
    let placeholder = document.querySelector(".wrapper-container");
    let out = "";
    for(let product of products){
        out += `
            <div>
                ${product.name}
            </div>
        
        `;
    }

    placeholder.innerHTML = out;
});*/

// написание кода для вывода товаров

let response = fetch('https://owen.ru/export/catalog.json?host=test.kipaso.ru&key=Tl3RqJTP1X9UZXjNYELQQ3dgNfqjDksl')

console.log(response)