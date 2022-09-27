async function getResponse(){
    let response = await fetch('https://owen.ru/export/catalog.json?host=test.kipaso.ru&key=Tl3RqJTP1X9UZXjNYELQQ3dgNfqjDksl');
    let content = await response.json();
    //content = content.categories;
    
    let data = document.querySelector('.wrapper-container');
 
    for(let key in content) {

        data.innerHTML += `
            <div>
                <div>
                    <h2>${content.categories[0].name}</h2>
                    <span>${content.categories[0].items[key].name}</span>
                </div>
            </div>
        `
        console.log(content)
    }
}
getResponse()