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
})*/

function load_data() {
    fetch("https://owen.ru/export/catalog.json?host=test.kipaso.ru&key=Tl3RqJTP1X9UZXjNYELQQ3dgNfqjDksl").then(res => res.json())
    .then(res => {
        str_body = ""

        res.forEach(r => {
            str_body += `
            <div>
                ${r["categories"]}
            </div>
            `
        });
        $(".wrapper-container").html(str_body)
    })
}
load_data();