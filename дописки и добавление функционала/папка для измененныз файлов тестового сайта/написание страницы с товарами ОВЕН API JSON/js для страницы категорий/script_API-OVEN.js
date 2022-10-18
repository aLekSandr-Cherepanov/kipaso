async function getResponse(){
    let response = await fetch('https://owen.ru/export/catalog.json?host=test.kipaso.ru&key=Tl3RqJTP1X9UZXjNYELQQ3dgNfqjDksl');
    let content = await response.json();
    content = content.categories;
    
    let data = document.querySelector('.wrapper-container');
    let subcategory = document.querySelector('.subcategory');
    let data2 = document.querySelector('.wrapper-container2');
    let subcategory2 = document.querySelector('.subcategory2');
    let data3 = document.querySelector('.wrapper-container3');
    let subcategory3 = document.querySelector('.subcategory3');
    let data4 = document.querySelector('.wrapper-container4');
    let subcategory4 = document.querySelector('.subcategory4');
    let data5 = document.querySelector('.wrapper-container5');
    let subcategory5 = document.querySelector('.subcategory5');
    

    //КОНТРОЛЬНО-ИЗМЕРИТЕЛЬНЫЕ ПРИБОРЫ
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

    subcategory.innerHTML += `
        <p>
            <a href="https://test.kipaso.ru/katalog-tovarov-oven(api)/kontrolno-izmeritelnyie-priboryi/izmeriteli-regulyatoryi/2trm0-obnovlennyij-dvuxkanalnyij-izmeritel-s-interfejsom-rs-485.html">${content[0].items[0].products[0].name}</a>
        </p>
        <p>
            <a href="https://test.kipaso.ru/katalog-tovarov-oven(api)/kontrolno-izmeritelnyie-priboryi/izmeriteli-regulyatoryi/2trm0-dvuxkanalnyij-izmeritel-s-universalnyim-vxodom.html">${content[0].items[0].products[1].name}</a>
        </p>
        <p>
            <a href="https://test.kipaso.ru/katalog-tovarov-oven(api)/kontrolno-izmeritelnyie-priboryi/izmeriteli-regulyatoryi/itp-kompaktnyij-izmeritel.html">${content[0].items[0].products[2].name}</a>
        </p>
        <p>
            <a href="https://test.kipaso.ru/katalog-tovarov-oven(api)/kontrolno-izmeritelnyie-priboryi/izmeriteli-regulyatoryi/idcz1-izmeritel-s-krupnyim-czifrovyim-indikatorom.html">${content[0].items[0].products[3].name}</a>
        </p>
        <p>
            <a href="https://test.kipaso.ru/katalog-tovarov-oven(api)/kontrolno-izmeritelnyie-priboryi/izmeriteli-regulyatoryi/trm200-dvuxkanalnyij-izmeritel-s-universalnyim-vxodom-i-rs-485.html">${content[0].items[0].products[4].name}</a>
        </p>
        <p>
            <a href="https://test.kipaso.ru/katalog-tovarov-oven(api)/kontrolno-izmeritelnyie-priboryi/izmeriteli-regulyatoryi/trm501-regulyator-s-czifrovyim-tajmerom.html">${content[0].items[0].products[5].name}</a>
        </p>
        <p>
            <a href="https://test.kipaso.ru/katalog-tovarov-oven(api)/kontrolno-izmeritelnyie-priboryi/izmeriteli-regulyatoryi/trm502-termoregulyator-s-ruchnyim-zadaniem-ustavki.html">${content[0].items[0].products[6].name}</a>
        </p>
        <p>
            <a href="https://test.kipaso.ru/katalog-tovarov-oven(api)/kontrolno-izmeritelnyie-priboryi/izmeriteli-regulyatoryi/regulator-zifrovoy.html">${content[0].items[0].products[7].name}</a>
        </p>
        <p>
            <a href="https://test.kipaso.ru/katalog-tovarov-oven(api)/kontrolno-izmeritelnyie-priboryi/izmeriteli-regulyatoryi/trm500-termoregulyator-s-moshhnyim-rele,-krupnyim-indikatorom-i-pryamyim-dostupom-k-owencloud.html">${content[0].items[0].products[8].name}</a>
        </p>
        <p>
            <a href="https://test.kipaso.ru/katalog-tovarov-oven(api)/kontrolno-izmeritelnyie-priboryi/izmeriteli-regulyatoryi/trm1-obnovlennyij-odnokanalnyij-izmeritel-regulyator-s-rs-485.html">${content[0].items[0].products[9].name}</a>
        </p>
        <p>
            <a href="https://test.kipaso.ru/katalog-tovarov-oven(api)/kontrolno-izmeritelnyie-priboryi/izmeriteli-regulyatoryi/trm1-regulyator-s-universalnyim-vxodom.html">${content[0].items[0].products[10].name}</a>
        </p>
        <p>
            <a href="https://test.kipaso.ru/katalog-tovarov-oven(api)/kontrolno-izmeritelnyie-priboryi/izmeriteli-regulyatoryi/trm201-regulyator-s-universalnyim-vxodom-i-rs-485.html">${content[0].items[0].products[11].name}</a>
        </p>
        <p>
            <a href="https://test.kipaso.ru/katalog-tovarov-oven(api)/kontrolno-izmeritelnyie-priboryi/izmeriteli-regulyatoryi/2trm1-obnovlennyij-pogodozavisimyij-dvuxkanalnyij-regulyator-s-rs-485.html">${content[0].items[0].products[12].name}</a>
        </p>
        <p>
            <a href="https://test.kipaso.ru/katalog-tovarov-oven(api)/kontrolno-izmeritelnyie-priboryi/izmeriteli-regulyatoryi/2trm1-dvuxkanalnyij-regulyator-s-universalnyim-vxodom.html">${content[0].items[0].products[13].name}</a>
        </p>
        <p>
            <a href="https://test.kipaso.ru/katalog-tovarov-oven(api)/kontrolno-izmeritelnyie-priboryi/izmeriteli-regulyatoryi/trm202-dvuxkanalnyij-regulyator-s-universalnyim-vxodom-i-rs-485.html">${content[0].items[0].products[14].name}</a>
        </p>
        <p>
            <a href="https://test.kipaso.ru/katalog-tovarov-oven(api)/kontrolno-izmeritelnyie-priboryi/izmeriteli-regulyatoryi/trm10-obnovlennyij-pid-regulyator-s-rs-485.html">${content[0].items[0].products[15].name}</a>
        </p>
        <p>
            <a href="https://test.kipaso.ru/katalog-tovarov-oven(api)/kontrolno-izmeritelnyie-priboryi/izmeriteli-regulyatoryi/trm10-pid-regulyator-s-universalnyim-vxodom.html">${content[0].items[0].products[16].name}</a>
        </p>
        <p>
            <a href="https://test.kipaso.ru/katalog-tovarov-oven(api)/kontrolno-izmeritelnyie-priboryi/izmeriteli-regulyatoryi/trm101-pid-regulyator-s-universalnyim-vxodom-v-korpuse-48×48-mm.html">${content[0].items[0].products[17].name}</a>
        </p>
        <p>
            <a href="https://test.kipaso.ru/katalog-tovarov-oven(api)/kontrolno-izmeritelnyie-priboryi/izmeriteli-regulyatoryi/trm210-pid-regulyator-s-universalnyim-vxodom-i-rs-485.html">${content[0].items[0].products[18].name}</a>
        </p>
        <p>
            <a href="https://test.kipaso.ru/katalog-tovarov-oven(api)/kontrolno-izmeritelnyie-priboryi/izmeriteli-regulyatoryi/trm12-obnovlennyij-pid-regulyator-dlya-zadvizhek-s-rs-485.html">${content[0].items[0].products[19].name}</a>
        </p>
        <p>
            <a href="https://test.kipaso.ru/katalog-tovarov-oven(api)/kontrolno-izmeritelnyie-priboryi/izmeriteli-regulyatoryi/trm12-pid-regulyator-s-universalnyim-vxodom-dlya-zadvizhek.html">${content[0].items[0].products[20].name}</a>
        </p>
        <p>
            <a href="https://test.kipaso.ru/katalog-tovarov-oven(api)/kontrolno-izmeritelnyie-priboryi/izmeriteli-regulyatoryi/trm212-pid-regulyator-s-universalnyim-vxodom-dlya-zadvizhek-s-rs-485.html">${content[0].items[0].products[21].name}</a>
        </p>
        <p>
            <a href="https://test.kipaso.ru/katalog-tovarov-oven(api)/kontrolno-izmeritelnyie-priboryi/izmeriteli-regulyatoryi/trm136-shestikanalnyij-regulyator-s-rs-485.html">${content[0].items[0].products[22].name}</a>
        </p>
        <p>
            <a href="https://test.kipaso.ru/katalog-tovarov-oven(api)/kontrolno-izmeritelnyie-priboryi/izmeriteli-regulyatoryi/trm138-vosmikanalnyij-regulyator-s-rs-485.html">${content[0].items[0].products[23].name}</a>
        </p>
        <p>
            <a href="https://test.kipaso.ru/katalog-tovarov-oven(api)/kontrolno-izmeritelnyie-priboryi/izmeriteli-regulyatoryi/trm138v-vosmikanalnyij-regulyator-dlya-vzryivoopasnyix-zon-s-rs-485.html">${content[0].items[0].products[24].name}</a>
        </p>
        <p>
            <a href="https://test.kipaso.ru/katalog-tovarov-oven(api)/kontrolno-izmeritelnyie-priboryi/izmeriteli-regulyatoryi/trm148-vosmikanalnyij-pid-regulyator-s-rs-485.html">${content[0].items[0].products[25].name}</a>
        </p>
        <p>
            <a href="https://test.kipaso.ru/katalog-tovarov-oven(api)/kontrolno-izmeritelnyie-priboryi/izmeriteli-regulyatoryi/trm251-pid-regulyator-s-poshagovyimi-programmami-i-rs-485.html">${content[0].items[0].products[26].name}</a>
        </p>
        <p>
            <a href="https://test.kipaso.ru/katalog-tovarov-oven(api)/kontrolno-izmeritelnyie-priboryi/izmeriteli-regulyatoryi/trm151-dvuxkanalnyij-pid-regulyator-s-poshagovyimi-programmami-i-rs-485.html">${content[0].items[0].products[27].name}</a>
        </p>
        <p>
            <a href="https://test.kipaso.ru/katalog-tovarov-oven(api)/kontrolno-izmeritelnyie-priboryi/izmeriteli-regulyatoryi/mpr51-regulyator-temperaturyi-i-vlazhnosti,-programmiruemyij-po-vremeni.html">${content[0].items[0].products[28].name}</a>
        </p>
    `
    //Для ГВС, отопления, вентиляции и котельных

    subcategory.innerHTML += `
                <span class="style-subcategory">${content[0].items[1].name}</span><br>
            <div>
                <span>Приборы:</span>
            </div>
        `

    subcategory.innerHTML += `
            <p>
                <a href="#">${content[0].items[1].products[0].name}</a>
            </p>
        `
        subcategory.innerHTML += `
            <p>
                <a href="#">${content[0].items[1].products[1].name}</a>
            </p>
        `
        subcategory.innerHTML += `
            <p>
                <a href="#">${content[0].items[1].products[2].name}</a>
            </p>
        `
        subcategory.innerHTML += `
            <p>
                <a href="#">${content[0].items[1].products[3].name}</a>
            </p>
        `
        subcategory.innerHTML += `
            <p>
                <a href="#">${content[0].items[1].products[4].name}</a>
            </p>
        `
        subcategory.innerHTML += `
            <p>
                <a href="#">${content[0].items[1].products[5].name}</a>
            </p>
        `
        subcategory.innerHTML += `
            <p>
                <a href="#">${content[0].items[1].products[6].name}</a>
            </p>
        `

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

    subcategory.innerHTML += `
            <p>
                <a href="#">${content[0].items[3].products[0].name}</a>
            </p>
        `
        subcategory.innerHTML += `
            <p>
                <a href="#">${content[0].items[3].products[1].name}</a>
            </p>
        `
        subcategory.innerHTML += `
            <p>
                <a href="#">${content[0].items[3].products[2].name}</a>
            </p>
        `
        subcategory.innerHTML += `
            <p>
                <a href="#">${content[0].items[3].products[3].name}</a>
            </p>
        `
        subcategory.innerHTML += `
            <p>
                <a href="#">${content[0].items[3].products[4].name}</a>
            </p>
        `
        subcategory.innerHTML += `
            <p>
                <a href="#">${content[0].items[3].products[5].name}</a>
            </p>
        `
        subcategory.innerHTML += `
            <p>
                <a href="#">${content[0].items[3].products[6].name}</a>
            </p>
        `
        subcategory.innerHTML += `
            <p>
                <a href="#">${content[0].items[3].products[7].name}</a>
            </p>
        `

    //Для управления насосами

    subcategory.innerHTML += `
                <span class="style-subcategory">${content[0].items[4].name}</span><br>
            <div>
                <span>Приборы:</span>
            </div>
        `
    subcategory.innerHTML += `
            <p>
                <a href="#">${content[0].items[4].products[0].name}</a>
            </p>
        `
        subcategory.innerHTML += `
            <p>
                <a href="#">${content[0].items[4].products[1].name}</a>
            </p>
        `
        subcategory.innerHTML += `
            <p>
                <a href="#">${content[0].items[4].products[2].name}</a>
            </p>
        `
        subcategory.innerHTML += `
            <p>
                <a href="#">${content[0].items[4].products[3].name}</a>
            </p>
        `
        subcategory.innerHTML += `
            <p>
                <a href="#">${content[0].items[4].products[4].name}</a>
            </p>
        `
        subcategory.innerHTML += `
            <p>
                <a href="#">${content[0].items[4].products[5].name}</a>
            </p>
        `
        subcategory.innerHTML += `
            <p>
                <a href="#">${content[0].items[4].products[6].name}</a>
            </p>
        `
        subcategory.innerHTML += `
            <p>
                <a href="#">${content[0].items[4].products[7].name}</a>
            </p>
        `

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

    subcategory.innerHTML += `
        <p>
            <a href="#">${content[0].items[8].products[0].name}</a>
        </p>
    `
    subcategory.innerHTML += `
        <p>
            <a href="#">${content[0].items[8].products[1].name}</a>
        </p>
    `
    subcategory.innerHTML += `
        <p>
            <a href="#">${content[0].items[8].products[2].name}</a>
        </p>
    `
    subcategory.innerHTML += `
        <p>
            <a href="#">${content[0].items[8].products[3].name}</a>
        </p>
    `
    subcategory.innerHTML += `
        <p>
            <a href="#">${content[0].items[8].products[4].name}</a>
        </p>
    `

    //ПРОГРАММИРУЕМЫЕ УСТРОЙСТВА
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

    subcategory2.innerHTML += `
        <p>
            <a href="#">${content[1].items[0].products[0].name}</a>
        </p>
    `
    subcategory2.innerHTML += `
        <p>
            <a href="#">${content[1].items[0].products[1].name}</a>
        </p>
    `
    subcategory2.innerHTML += `
        <p>
            <a href="#">${content[1].items[0].products[2].name}</a>
        </p>
    `
    subcategory2.innerHTML += `
        <p>
            <a href="#">${content[1].items[0].products[3].name}</a>
        </p>
    `
    subcategory2.innerHTML += `
        <p>
            <a href="#">${content[1].items[0].products[4].name}</a>
        </p>
    `

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
    //Программируемые логические контроллеры

    subcategory2.innerHTML += `
        <span class="style-subcategory">${content[1].items[1].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    subcategory2.innerHTML += `
        <p>
            <a href="#">${content[1].items[1].products[0].name}</a>
        </p>
        <p>
            <a href="#">${content[1].items[1].products[1].name}</a>
        </p>
        <p>
            <a href="#">${content[1].items[1].products[2].name}</a>
        </p>
        <p>
            <a href="#">${content[1].items[1].products[3].name}</a>
        </p>
        <p>
            <a href="#">${content[1].items[1].products[4].name}</a>
        </p>
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
    //Сенсорные панельные контроллеры

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

    //Панели оператора

    subcategory2.innerHTML += `
        <span class="style-subcategory">${content[1].items[3].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    subcategory2.innerHTML += `
        <p>
            <a href="#">${content[1].items[3].products[0].name}</a>
        </p>
        <p>
            <a href="#">${content[1].items[3].products[1].name}</a>
        </p>
        <p>
            <a href="#">${content[1].items[3].products[2].name}</a>
        </p>
        <p>
            <a href="#">${content[1].items[3].products[3].name}</a>
        </p>
        <p>
            <a href="#">${content[1].items[3].products[4].name}</a>
        </p>
        <p>
            <a href="#">${content[1].items[3].products[5].name}</a>
        </p>
    `

    //Модули ввода/вывода

    subcategory2.innerHTML += `
        <span class="style-subcategory">${content[1].items[4].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    subcategory2.innerHTML += `
        <p>
            <a href="#">${content[1].items[4].products[0].name}</a>
        </p>
        <p>
            <a href="#">${content[1].items[4].products[1].name}</a>
        </p>
        <p>
            <a href="#">${content[1].items[4].products[2].name}</a>
        </p>
        <p>
            <a href="#">${content[1].items[4].products[3].name}</a>
        </p>
        <p>
            <a href="#">${content[1].items[4].products[4].name}</a>
        </p>
        <p>
            <a href="#">${content[1].items[4].products[5].name}</a>
        </p>
        <p>
            <a href="#">${content[1].items[4].products[6].name}</a>
        </p>
        <p>
            <a href="#">${content[1].items[4].products[7].name}</a>
        </p>
        <p>
            <a href="#">${content[1].items[4].products[8].name}</a>
        </p>
        <p>
            <a href="#">${content[1].items[4].products[9].name}</a>
        </p>
        <p>
            <a href="#">${content[1].items[4].products[10].name}</a>
        </p>
        <p>
            <a href="#">${content[1].items[4].products[11].name}</a>
        </p>
        <p>
            <a href="#">${content[1].items[4].products[12].name}</a>
        </p>
        <p>
            <a href="#">${content[1].items[4].products[13].name}</a>
        </p>
        
    `
    //Контроллеры для диспетчеризации, телемеханики и учета ресурсов

    subcategory2.innerHTML += `
        <span class="style-subcategory">${content[1].items[5].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    subcategory2.innerHTML += `
        <p>
            <a href="#">${content[1].items[5].products[0].name}</a>
        </p>
        <p>
            <a href="#">${content[1].items[5].products[1].name}</a>
        </p>
        
    `

    //СИЛОВЫЕ И КОММУТАЦИОННЫЕ УСТРОЙСТВА
    //Преобразователи частоты

    data3.innerHTML += `
        <div>
            <h2>${content[2].name}</h2>
        </div>
    `
    subcategory3.innerHTML += `
        <span class="style-subcategory">${content[2].items[0].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `
    subcategory3.innerHTML += `
        <p>
            <a href="#">${content[2].items[0].products[0].name}</a>
        </p>
    `
    subcategory3.innerHTML += `
        <p>
            <a href="#">${content[2].items[0].products[1].name}</a>
        </p>
    `
    subcategory3.innerHTML += `
        <p>
            <a href="#">${content[2].items[0].products[2].name}</a>
        </p>
    `
    subcategory3.innerHTML += `
        <p>
            <a href="#">${content[2].items[0].products[3].name}</a>
        </p>
    `
    subcategory3.innerHTML += `
        <p>
            <a href="#">${content[2].items[0].products[4].name}</a>
        </p>
    `

    //Дроссели

    subcategory3.innerHTML += `
        <span class="style-subcategory">${content[2].items[1].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    subcategory3.innerHTML += `
        <p>
            <a href="#">${content[2].items[1].products[0].name}</a>
        </p>
    `
    subcategory3.innerHTML += `
        <p>
            <a href="#">${content[2].items[1].products[1].name}</a>
        </p>
    `

    //Тормозные резисторы

    subcategory3.innerHTML += `
        <span class="style-subcategory">${content[2].items[2].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `
    subcategory3.innerHTML += `
        <p>
            <a href="#">${content[2].items[2].products[0].name}</a>
        </p>
    `

    //Блоки питания

    subcategory3.innerHTML += `
        <span class="style-subcategory">${content[2].items[3].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    subcategory3.innerHTML += `
        <p>
            <a href="#">${content[2].items[3].products[0].name}</a>
        </p>
    `
    subcategory3.innerHTML += `
        <p>
            <a href="#">${content[2].items[3].products[1].name}</a>
        </p>
    `
    subcategory3.innerHTML += `
        <p>
            <a href="#">${content[2].items[3].products[2].name}</a>
        </p>
    `
    subcategory3.innerHTML += `
        <p>
            <a href="#">${content[2].items[3].products[3].name}</a>
        </p>
    `
    subcategory3.innerHTML += `
        <p>
            <a href="#">${content[2].items[3].products[4].name}</a>
        </p>
    `

    subcategory3.innerHTML += `
        <p>
            <a href="#">${content[2].items[3].products[5].name}</a>
        </p>
    `
    subcategory3.innerHTML += `
        <p>
            <a href="#">${content[2].items[3].products[6].name}</a>
        </p>
    `
    subcategory3.innerHTML += `
        <p>
            <a href="#">${content[2].items[3].products[7].name}</a>
        </p>
    `
    subcategory3.innerHTML += `
        <p>
            <a href="#">${content[2].items[3].products[8].name}</a>
        </p>
    `
    subcategory3.innerHTML += `
        <p>
            <a href="#">${content[2].items[3].products[9].name}</a>
        </p>
    `
    subcategory3.innerHTML += `
        <p>
            <a href="#">${content[2].items[3].products[10].name}</a>
        </p>
    `

    //Устройства коммутации

    subcategory3.innerHTML += `
        <span class="style-subcategory">${content[2].items[4].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `
    subcategory3.innerHTML += `
        <p>
            <a href="#">${content[2].items[4].products[0].name}</a>
        </p>
    `

    //Устройства контроля и защиты

    subcategory3.innerHTML += `
        <span class="style-subcategory">${content[2].items[5].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `
    subcategory3.innerHTML += `
        <p>
            <a href="#">${content[2].items[5].products[0].name}</a>
        </p>
    `
    subcategory3.innerHTML += `
        <p>
            <a href="#">${content[2].items[5].products[1].name}</a>
        </p>
    `

    //Регуляторы мощности

    subcategory3.innerHTML += `
        <span class="style-subcategory">${content[2].items[6].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `
    subcategory3.innerHTML += `
        <p>
            <a href="#">${content[2].items[6].products[0].name}</a>
        </p>
    `

    //Твердотельные реле

    subcategory3.innerHTML += `
        <span class="style-subcategory">${content[2].items[7].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    subcategory3.innerHTML += `
        <p>
            <a href="#">${content[2].items[7].products[0].name}</a>
        </p>
    `
    subcategory3.innerHTML += `
        <p>
            <a href="#">${content[2].items[7].products[1].name}</a>
        </p>
    `
    subcategory3.innerHTML += `
        <p>
            <a href="#">${content[2].items[7].products[2].name}</a>
        </p>
    `
    subcategory3.innerHTML += `
        <p>
            <a href="#">${content[2].items[7].products[3].name}</a>
        </p>
    `
    subcategory3.innerHTML += `
        <p>
            <a href="#">${content[2].items[7].products[4].name}</a>
        </p>
    `

    subcategory3.innerHTML += `
        <p>
            <a href="#">${content[2].items[7].products[5].name}</a>
        </p>
    `
    subcategory3.innerHTML += `
        <p>
            <a href="#">${content[2].items[7].products[6].name}</a>
        </p>
    `
    subcategory3.innerHTML += `
        <p>
            <a href="#">${content[2].items[7].products[7].name}</a>
        </p>
    `
    subcategory3.innerHTML += `
        <p>
            <a href="#">${content[2].items[7].products[8].name}</a>
        </p>
    `

    //Промежуточные реле

    subcategory3.innerHTML += `
        <span class="style-subcategory">${content[2].items[8].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    subcategory3.innerHTML += `
        <p>
            <a href="#">${content[2].items[8].products[0].name}</a>
        </p>
    `
    subcategory3.innerHTML += `
        <p>
            <a href="#">${content[2].items[8].products[1].name}</a>
        </p>
    `
    subcategory3.innerHTML += `
        <p>
            <a href="#">${content[2].items[8].products[2].name}</a>
        </p>
    `
    subcategory3.innerHTML += `
        <p>
            <a href="#">${content[2].items[8].products[3].name}</a>
        </p>
    `
    subcategory3.innerHTML += `
        <p>
            <a href="#">${content[2].items[8].products[4].name}</a>
        </p>
    `

    subcategory3.innerHTML += `
        <p>
            <a href="#">${content[2].items[8].products[5].name}</a>
        </p>
    `
    subcategory3.innerHTML += `
        <p>
            <a href="#">${content[2].items[8].products[6].name}</a>
        </p>
    `
    subcategory3.innerHTML += `
        <p>
            <a href="#">${content[2].items[8].products[7].name}</a>
        </p>
    `
    subcategory3.innerHTML += `
        <p>
            <a href="#">${content[2].items[8].products[8].name}</a>
        </p>
    `
    subcategory3.innerHTML += `
        <p>
            <a href="#">${content[2].items[8].products[9].name}</a>
        </p>
    `
    subcategory3.innerHTML += `
        <p>
            <a href="#">${content[2].items[8].products[10].name}</a>
        </p>
    `
    subcategory3.innerHTML += `
        <p>
            <a href="#">${content[2].items[8].products[11].name}</a>
        </p>
    `

    //Запорно-регулирующая арматура

    subcategory3.innerHTML += `
        <span class="style-subcategory">${content[2].items[9].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    subcategory3.innerHTML += `
        <p>
            <a href="#">${content[2].items[9].products[0].name}</a>
        </p>
    `
    subcategory3.innerHTML += `
        <p>
            <a href="#">${content[2].items[9].products[1].name}</a>
        </p>
    `

    //Приборы для индикации и управления задвижками

    subcategory3.innerHTML += `
        <span class="style-subcategory">${content[2].items[10].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    subcategory3.innerHTML += `
        <p>
            <a href="#">${content[2].items[10].products[0].name}</a>
        </p>
    `

    subcategory3.innerHTML += `
        <p>
            <a href="#">${content[2].items[10].products[1].name}</a>
        </p>
    `

    //Микроклимат для шкафов управления

    subcategory3.innerHTML += `
        <span class="style-subcategory">${content[2].items[11].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    subcategory3.innerHTML += `
        <p>
            <a href="#">${content[2].items[11].products[0].name}</a>
        </p>
    `
        subcategory3.innerHTML += `
        <p>
            <a href="#">${content[2].items[11].products[1].name}</a>
        </p>
    `
    subcategory3.innerHTML += `
        <p>
            <a href="#">${content[2].items[11].products[2].name}</a>
        </p>
    `
        subcategory3.innerHTML += `
        <p>
            <a href="#">${content[2].items[11].products[3].name}</a>
        </p>
    `
        subcategory3.innerHTML += `
        <p>
            <a href="#">${content[2].items[11].products[4].name}</a>
        </p>
    `
    subcategory3.innerHTML += `
        <p>
            <a href="#">${content[2].items[11].products[5].name}</a>
        </p>
    `

    subcategory3.innerHTML += `
        <p>
            <a href="#">${content[2].items[11].products[6].name}</a>
        </p>
    `

    //ДАТЧИКИ

    //Датчики температуры

    data4.innerHTML += `
        <div>
            <h2>${content[3].name}</h2>
        </div>
    `

    subcategory4.innerHTML += `
        <span class="style-subcategory">${content[3].items[0].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[0].products[0].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[0].products[1].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[0].products[2].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[0].products[3].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[0].products[4].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[0].products[5].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[0].products[6].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[0].products[7].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[0].products[8].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[0].products[9].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[0].products[10].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[0].products[11].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[0].products[12].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[0].products[13].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[0].products[14].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[0].products[15].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[0].products[16].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[0].products[17].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[0].products[18].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[0].products[19].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[0].products[20].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[0].products[21].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[0].products[22].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[0].products[23].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[0].products[24].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[0].products[25].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[0].products[26].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[0].products[27].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[0].products[28].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[0].products[29].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[0].products[30].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[0].products[31].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[0].products[32].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[0].products[33].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[0].products[34].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[0].products[35].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[0].products[36].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[0].products[37].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[0].products[38].name}</a>
        </p>
    `

    //Датчики влажности и температуры воздуха

    subcategory4.innerHTML += `
        <span class="style-subcategory">${content[3].items[1].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[1].products[0].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[1].products[1].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[1].products[2].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[1].products[3].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[1].products[4].name}</a>
        </p>
    `

    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[1].products[5].name}</a>
        </p>
    `

    //Преобразователи давления

    subcategory4.innerHTML += `
        <span class="style-subcategory">${content[3].items[2].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[2].products[0].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[2].products[1].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[2].products[2].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[2].products[3].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[2].products[4].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[2].products[5].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[2].products[6].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[2].products[7].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[2].products[8].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[2].products[9].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[2].products[10].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[2].products[11].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[2].products[12].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[2].products[13].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[2].products[14].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[2].products[15].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[2].products[16].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[2].products[17].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[2].products[18].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[2].products[19].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[2].products[20].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[2].products[21].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[2].products[22].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[2].products[23].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[2].products[24].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[2].products[25].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[2].products[26].name}</a>
        </p>
    `

    //Датчики уровня

    subcategory4.innerHTML += `
        <span class="style-subcategory">${content[3].items[3].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[3].products[0].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[3].products[1].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[3].products[2].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[3].products[3].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[3].products[4].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[3].products[5].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[3].products[6].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[3].products[7].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[3].products[8].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[3].products[9].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[3].products[10].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[3].products[11].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[3].products[12].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[3].products[13].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[3].products[14].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[3].products[15].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[3].products[16].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[3].products[17].name}</a>
        </p>
    `

    //Датчики газа

    subcategory4.innerHTML += `
        <span class="style-subcategory">${content[3].items[4].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[4].products[0].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[4].products[1].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[4].products[2].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[4].products[3].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[4].products[4].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[4].products[5].name}</a>
        </p>
    `

    //Бесконтактные датчики

    subcategory4.innerHTML += `
        <span class="style-subcategory">${content[3].items[5].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[5].products[0].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[5].products[1].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[5].products[2].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[5].products[3].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[5].products[4].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[5].products[5].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[5].products[6].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[5].products[7].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[5].products[8].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[5].products[9].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[5].products[10].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[5].products[11].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[5].products[12].name}</a>
        </p>
    `

    //Барьеры искрозащиты

    subcategory4.innerHTML += `
        <span class="style-subcategory">${content[3].items[6].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[6].products[0].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[6].products[1].name}</a>
        </p>
    `

    //Нормирующие преобразователи

    subcategory4.innerHTML += `
        <span class="style-subcategory">${content[3].items[7].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[7].products[0].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[7].products[1].name}</a>
        </p>
    `

    //Аксессуары для датчиков давления

    subcategory4.innerHTML += `
        <span class="style-subcategory">${content[3].items[8].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[8].products[0].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[8].products[1].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[8].products[2].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[8].products[3].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[8].products[4].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[8].products[5].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[8].products[6].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[8].products[7].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[8].products[8].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[8].products[9].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[8].products[10].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[8].products[11].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[8].products[12].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[8].products[13].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[8].products[14].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[8].products[15].name}</a>
        </p>
    `

    //Аксессуары для датчиков температуры

    subcategory4.innerHTML += `
        <span class="style-subcategory">${content[3].items[9].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[9].products[0].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[9].products[1].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[9].products[2].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[9].products[3].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[9].products[4].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[9].products[5].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[9].products[6].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[9].products[7].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[9].products[8].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[9].products[9].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[9].products[10].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[9].products[11].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[9].products[12].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[9].products[13].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[9].products[14].name}</a>
        </p>
    `

    //Аксессуары для датчиков уровня

    subcategory4.innerHTML += `
        <span class="style-subcategory">${content[3].items[10].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[10].products[0].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[10].products[1].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[10].products[2].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[10].products[3].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[10].products[4].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[10].products[5].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[10].products[6].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[10].products[7].name}</a>
        </p>
    `
    subcategory4.innerHTML += `
        <p>
            <a href="#">${content[3].items[10].products[8].name}</a>
        </p>
    `

    //ПРОГРАММНОЕ ОБЕСПЕЧЕНИЕ ,УСТРОЙСТВА СВЯЗИ
    //OwenCloud

    data5.innerHTML += `
        <div>
            <h2>${content[4].name}</h2>
        </div>
    `

    subcategory5.innerHTML += `
        <span class="style-subcategory">${content[4].items[0].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    subcategory5.innerHTML += `
        <p>
            <a href="#">${content[4].items[0].products[0].name}</a>
        </p>
    `
    subcategory5.innerHTML += `
        <p>
            <a href="#">${content[4].items[0].products[1].name}</a>
        </p>
    `

    //SCADA системы

    subcategory5.innerHTML += `
        <span class="style-subcategory">${content[4].items[1].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `
    subcategory5.innerHTML += `
        <p>
            <a href="#">${content[4].items[1].products[0].name}</a>
        </p>
    `
    subcategory5.innerHTML += `
        <p>
            <a href="#">${content[4].items[1].products[1].name}</a>
        </p>
    `
    subcategory5.innerHTML += `
        <p>
            <a href="#">${content[4].items[1].products[2].name}</a>
        </p>
    `
    subcategory5.innerHTML += `
        <p>
            <a href="#">${content[4].items[1].products[3].name}</a>
        </p>
    `
    
    //OPC-серверы

    subcategory5.innerHTML += `
        <span class="style-subcategory">${content[4].items[2].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `
    
    subcategory5.innerHTML += `
        <p>
            <a href="#">${content[4].items[2].products[0].name}</a>
        </p>
    `
    subcategory5.innerHTML += `
        <p>
            <a href="#">${content[4].items[2].products[1].name}</a>
        </p>
    `
    subcategory5.innerHTML += `
        <p>
            <a href="#">${content[4].items[2].products[2].name}</a>
        </p>
    `
    subcategory5.innerHTML += `
        <p>
            <a href="#">${content[4].items[2].products[3].name}</a>
        </p>
    `

    //Конфигураторы

    subcategory5.innerHTML += `
        <span class="style-subcategory">${content[4].items[3].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    subcategory5.innerHTML += `
        <p>
            <a href="#">${content[4].items[3].products[0].name}</a>
        </p>
    `
    subcategory5.innerHTML += `
        <p>
            <a href="#">${content[4].items[3].products[1].name}</a>
        </p>
    `

    //Среда программирования CODESYS

    subcategory5.innerHTML += `
        <span class="style-subcategory">${content[4].items[4].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    subcategory5.innerHTML += `
        <p>
            <a href="#">${content[4].items[4].products[0].name}</a>
        </p>
    `
    subcategory5.innerHTML += `
        <p>
            <a href="#">${content[4].items[4].products[1].name}</a>
        </p>
    `

    //Программное обеспечение OwenLogic

    subcategory5.innerHTML += `
        <span class="style-subcategory">${content[4].items[5].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    subcategory5.innerHTML += `
        <p>
            <a href="#">${content[4].items[5].products[0].name}</a>
        </p>
    `

    //Драйверы и библиотеки ОВЕН

    subcategory5.innerHTML += `
        <span class="style-subcategory">${content[4].items[6].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    subcategory5.innerHTML += `
        <p>
            <a href="#">${content[4].items[6].products[0].name}</a>
        </p>
    `

    //Коммутаторы

    subcategory5.innerHTML += `
        <span class="style-subcategory">${content[4].items[7].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    subcategory5.innerHTML += `
        <p>
            <a href="#">${content[4].items[7].products[0].name}</a>
        </p>
    `

    //Преобразователи интерфейсов и повторители

    subcategory5.innerHTML += `
        <span class="style-subcategory">${content[4].items[8].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    subcategory5.innerHTML += `
        <p>
            <a href="#">${content[4].items[8].products[0].name}</a>
        </p>
    `
        subcategory5.innerHTML += `
        <p>
            <a href="#">${content[4].items[8].products[1].name}</a>
        </p>
    `
        subcategory5.innerHTML += `
        <p>
            <a href="#">${content[4].items[8].products[2].name}</a>
        </p>
    `
        subcategory5.innerHTML += `
        <p>
            <a href="#">${content[4].items[8].products[3].name}</a>
        </p>
    `
        subcategory5.innerHTML += `
        <p>
            <a href="#">${content[4].items[8].products[4].name}</a>
        </p>
    `

    //Модемы

    subcategory5.innerHTML += `
        <span class="style-subcategory">${content[4].items[9].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    subcategory5.innerHTML += `
        <p>
            <a href="#">${content[4].items[9].products[0].name}</a>
        </p>
    `

    //PLC-модемы

    subcategory5.innerHTML += `
        <span class="style-subcategory">${content[4].items[10].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    subcategory5.innerHTML += `
        <p>
            <a href="#">${content[4].items[10].products[0].name}</a>
        </p>
    `

    //Аксессуары

    subcategory5.innerHTML += `
        <span class="style-subcategory">${content[4].items[11].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    subcategory5.innerHTML += `
        <p>
            <a href="#">${content[4].items[11].products[0].name}</a>
        </p>
    `



    console.log(content)
}
getResponse()