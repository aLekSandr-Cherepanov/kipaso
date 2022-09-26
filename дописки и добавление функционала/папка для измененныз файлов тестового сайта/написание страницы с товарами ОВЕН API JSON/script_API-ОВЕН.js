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

async function getResponse(){
    let response = await fetch('https://owen.ru/export/catalog.json?host=test.kipaso.ru&key=Tl3RqJTP1X9UZXjNYELQQ3dgNfqjDksl');
    let content = await response.json();
    content = content.categories;
    let data = document.querySelector('.wrapper-container');
    
    let key;
    
    for(key in content) {

        data.innerHTML += `
            <div>
                <div>
                    <h2>${content[key].name}</h2>
                </div>
            </div>
        `
        console.log(content)
    }
}
getResponse()