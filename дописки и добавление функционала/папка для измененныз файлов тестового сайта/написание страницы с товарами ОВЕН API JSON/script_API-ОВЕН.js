async function getResponse(){
    let response = await fetch('https://owen.ru/export/catalog.json?host=test.kipaso.ru&key=Tl3RqJTP1X9UZXjNYELQQ3dgNfqjDksl');
    let content = await response.json();
    content = content.categories;
    
    let data = document.querySelector('.wrapper-container');
    let subcategory = document.querySelector('.subcategory');
    let data2 = document.querySelector('.wrapper-container2');
    let subcategory2 = document.querySelector('.subcategory2');

    //Контрольно-измерительные приборы

    //Измерители-регуляторы

    data.innerHTML += `
        <div>
            <h2>${content[0].name}</h2>
        </div>
    `
    subcategory.innerHTML += `
        <span class="style-subcategory">${content[0].items[0].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    /*for (let i = 0; i < content.length; i++) {
        let c = content[i];
        for (let k = 0; k < c.length; k++) {
            console.log(c[k]);
        }
    }*/

    /*for(let i = 0; i < content.length; i++) {
        subcategory.innerHTML += `
            <p>
                <a href="#">${content[0].items[0].products[i].name}</a>
            </p>
        `
    }*/
    
    /*content.forEach(({name}) => {
        subcategory.innerHTML += `
            <p>
                <a href="#">${content[0].items[name]}</a>
            </p>
        `
    });*/
    
    for(let key in content) {

        subcategory.innerHTML += `
            <p>
                <a href="#">${content[0].items[0].products[key].name}</a>
            </p>
        `
    }



    subcategory.innerHTML += `
            <p>
                <a href="#">${content[0].items[0].products[0].name}</a>
            </p>
            <p>
                <a href="#">${content[0].items[0].products[1].name}</a>
            </p>
            <p>
                <a href="#">${content[0].items[0].products[2].name}</a>
            </p>
            <p>
                <a href="#">${content[0].items[0].products[3].name}</a>
            </p>
            <p>
                <a href="#">${content[0].items[0].products[4].name}</a>
            </p>
            <p>
                <a href="#">${content[0].items[0].products[5].name}</a>
            </p>
            <p>
                <a href="#">${content[0].items[0].products[6].name}</a>
            </p>
            <p>
                <a href="#">${content[0].items[0].products[7].name}</a>
            </p>
            <p>
                <a href="#">${content[0].items[0].products[8].name}</a>
            </p>
            <p>
                <a href="#">${content[0].items[0].products[9].name}</a>
            </p>
            <p>
                <a href="#">${content[0].items[0].products[10].name}</a>
            </p>
            <p>
                <a href="#">${content[0].items[0].products[12].name}</a>
            </p>
            <p>
                <a href="#">${content[0].items[0].products[13].name}</a>
            </p>
            <p>
                <a href="#">${content[0].items[0].products[14].name}</a>
            </p>
            <p>
                <a href="#">${content[0].items[0].products[15].name}</a>
            </p>
            <p>
                <a href="#">${content[0].items[0].products[16].name}</a>
            </p>
            <p>
                <a href="#">${content[0].items[0].products[17].name}</a>
            </p>
            <p>
                <a href="#">${content[0].items[0].products[18].name}</a>
            </p>
            <p>
                <a href="#">${content[0].items[0].products[19].name}</a>
            </p>
            <p>
                <a href="#">${content[0].items[0].products[20].name}</a>
            </p>
            <p>
                <a href="#">${content[0].items[0].products[21].name}</a>
            </p>
            <p>
                <a href="#">${content[0].items[0].products[22].name}</a>
            </p>
            <p>
                <a href="#">${content[0].items[0].products[23].name}</a>
            </p>
            <p>
                <a href="#">${content[0].items[0].products[24].name}</a>
            </p>
            <p>
                <a href="#">${content[0].items[0].products[25].name}</a>
            </p>
            <p>
                <a href="#">${content[0].items[0].products[26].name}</a>
            </p>
            <p>
                <a href="#">${content[0].items[0].products[27].name}</a>
            </p>
            <p>
                <a href="#">${content[0].items[0].products[28].name}</a>
            </p>
        `
    //Для ГВС, отопления, вентиляции и котельных

    subcategory.innerHTML += `
                <span class="style-subcategory">${content[0].items[1].name}</span><br>
            <div>
                <span>Приборы:</span>
            </div>
        `

    for(let key in content) {

        subcategory.innerHTML += `
            <p>
                <a href="#">${content[0].items[1].products[key].name}</a>
            </p>
        `
    }

    //Для пищевых производств

    subcategory.innerHTML += `
                <span class="style-subcategory">${content[0].items[2].name}</span><br>
            <div>
                <span>Приборы:</span>
            </div>
        `


    subcategory.innerHTML += `
        <p>
            <a href="#">${content[0].items[2].products[0].name}</a>
        </p>
        <p>
            <a href="#">${content[0].items[2].products[1].name}</a>
        </p>
    `

    //Счетчики, таймеры, тахометры

    subcategory.innerHTML += `
                <span class="style-subcategory">${content[0].items[3].name}</span><br>
            <div>
                <span>Приборы:</span>
            </div>
        `

    for(let key in content) {

        subcategory.innerHTML += `
            <p>
                <a href="#">${content[0].items[3].products[key].name}</a>
            </p>
        `
    }

    //Для управления насосами

    subcategory.innerHTML += `
                <span class="style-subcategory">${content[0].items[4].name}</span><br>
            <div>
                <span>Приборы:</span>
            </div>
        `

    for(let key in content) {

        subcategory.innerHTML += `
            <p>
                <a href="#">${content[0].items[4].products[key].name}</a>
            </p>
        `
    }

    //Для электрических сетей

    subcategory.innerHTML += `
                <span class="style-subcategory">${content[0].items[5].name}</span><br>
            <div>
                <span>Приборы:</span>
            </div>
        `


    subcategory.innerHTML += `
        <p>
            <a href="#">${content[0].items[5].products[0].name}</a>
        </p>
        <p>
            <a href="#">${content[0].items[5].products[1].name}</a>
        </p>
        <p>
            <a href="#">${content[0].items[5].products[2].name}</a>
        </p>
        <p>
            <a href="#">${content[0].items[5].products[3].name}</a>
        </p>
    `

    //Архиваторы

    subcategory.innerHTML += `
                <span class="style-subcategory">${content[0].items[6].name}</span><br>
            <div>
                <span>Приборы:</span>
            </div>
        `


    subcategory.innerHTML += `
        <p>
            <a href="#">${content[0].items[6].products[0].name}</a>
        </p>
        <p>
            <a href="#">${content[0].items[6].products[1].name}</a>
        </p>
        <p>
            <a href="#">${content[0].items[6].products[2].name}</a>
        </p>
    `

    //Ручные задатчики сигналов

    subcategory.innerHTML += `
                <span class="style-subcategory">${content[0].items[7].name}</span><br>
            <div>
                <span>Приборы:</span>
            </div>
        `

    subcategory.innerHTML += `
        <p>
            <a href="#">${content[0].items[7].products[0].name}</a>
        </p>
        <p>
            <a href="#">${content[0].items[7].products[1].name}</a>
        </p>
    `

    //Дополнительные устройства

    subcategory.innerHTML += `
        <span class="style-subcategory">${content[0].items[8].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    for(let key in content) {

        subcategory.innerHTML += `
            <p>
                <a href="#">${content[0].items[8].products[key].name}</a>
            </p>
        `
    }






    //Программируемые устройства

    //Программируемые реле

    data2.innerHTML += `
        <div>
            <h2>${content[1].name}</h2>
        </div>
    `
    subcategory2.innerHTML += `
        <span class="style-subcategory">${content[1].items[0].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    for(let key in content) {

        subcategory2.innerHTML += `
            <p>
                <a href="#">${content[1].items[0].products[key].name}</a>
            </p>
        `
    }
    subcategory2.innerHTML += `
        <p>
            <a href="#">${content[1].items[0].products[5].name}</a>
        </p>
        <p>
            <a href="#">${content[1].items[0].products[6].name}</a>
        </p>
        <p>
            <a href="#">${content[1].items[0].products[7].name}</a>
        </p>
        <p>
            <a href="#">${content[1].items[0].products[8].name}</a>
        </p>
        <p>
            <a href="#">${content[1].items[0].products[9].name}</a>
        </p>
        <p>
            <a href="#">${content[1].items[0].products[10].name}</a>
        </p>
        <p>
            <a href="#">${content[1].items[0].products[11].name}</a>
        </p>
    `

    subcategory2.innerHTML += `
        <span class="style-subcategory">${content[1].items[1].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    for(let key in content) {

        subcategory2.innerHTML += `
            <p>
                <a href="#">${content[1].items[1].products[key].name}</a>
            </p>
        `
    }

    subcategory2.innerHTML += `
        <p>
            <a href="#">${content[1].items[1].products[5].name}</a>
        </p>
        <p>
            <a href="#">${content[1].items[1].products[6].name}</a>
        </p>
        <p>
            <a href="#">${content[1].items[1].products[7].name}</a>
        </p>
        <p>
            <a href="#">${content[1].items[1].products[8].name}</a>
        </p>
        <p>
            <a href="#">${content[1].items[1].products[9].name}</a>
        </p>
        <p>
            <a href="#">${content[1].items[1].products[10].name}</a>
        </p>
        <p>
            <a href="#">${content[1].items[1].products[11].name}</a>
        </p>
    `

    subcategory2.innerHTML += `
        <span class="style-subcategory">${content[1].items[2].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    subcategory2.innerHTML += `
        <p>
            <a href="#">${content[1].items[2].products[0].name}</a>
        </p>
    `

    subcategory2.innerHTML += `
        <span class="style-subcategory">${content[1].items[3].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    for(let key in content) {

        subcategory2.innerHTML += `
            <p>
                <a href="#">${content[1].items[3].products[key].name}</a>
            </p>
        `
    }
    subcategory2.innerHTML += `
        <p>
            <a href="#">${content[1].items[3].products[5].name}</a>
        </p>
    `




    console.log(content)
}
getResponse()