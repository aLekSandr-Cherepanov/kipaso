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
    let keys = Object.keys(content[0].items[0].products);
    
    for(let key in keys) {

        subcategory.innerHTML += `
            <p>
                <a href="#">${content[0].items[0].products[key].name}</a>
            </p>
        `
    }
    
    //Для ГВС, отопления, вентиляции и котельных

    subcategory.innerHTML += `
                <span class="style-subcategory">${content[0].items[1].name}</span><br>
            <div>
                <span>Приборы:</span>
            </div>
        `

    let keysGVS = Object.keys(content[0].items[1].products);

    for(let key in keysGVS) {

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

    let keysFood = Object.keys(content[0].items[2].products);

    for(let key in keysFood) {

        subcategory.innerHTML += `
            <p>
                <a href="#">${content[0].items[2].products[key].name}</a>
            </p>
        `
    }

    //Счетчики, таймеры, тахометры

    subcategory.innerHTML += `
                <span class="style-subcategory">${content[0].items[3].name}</span><br>
            <div>
                <span>Приборы:</span>
            </div>
        `

    let keysCounters = Object.keys(content[0].items[3].products);

    for(let key in keysCounters) {

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

    let keysPumps = Object.keys(content[0].items[4].products);

    for(let key in keysPumps) {

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


    let keysNetworks = Object.keys(content[0].items[5].products);

    for(let key in keysNetworks) {
        subcategory.innerHTML += `
            <p>
                <a href="#">${content[0].items[5].products[key].name}</a>
            </p>
        `
    }

    //Архиваторы

    subcategory.innerHTML += `
                <span class="style-subcategory">${content[0].items[6].name}</span><br>
            <div>
                <span>Приборы:</span>
            </div>
        `


    let keysArchivers = Object.keys(content[0].items[6].products);

    for(let key in keysArchivers) {
        subcategory.innerHTML += `
            <p>
                <a href="#">${content[0].items[6].products[key].name}</a>
            </p>
        `
    }        

    //Ручные задатчики сигналов

    subcategory.innerHTML += `
                <span class="style-subcategory">${content[0].items[7].name}</span><br>
            <div>
                <span>Приборы:</span>
            </div>
        `

    let keysSetters = Object.keys(content[0].items[7].products);

    for(let key in keysSetters) {
        subcategory.innerHTML += `
            <p>
                <a href="#">${content[0].items[7].products[key].name}</a>
            </p>
        `
    }

    //Дополнительные устройства

    subcategory.innerHTML += `
        <span class="style-subcategory">${content[0].items[8].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    let keysAdditionalDevices = Object.keys(content[0].items[8].products);

    for(let key in keysAdditionalDevices) {

        subcategory.innerHTML += `
            <p>
                <a href="#">${content[0].items[8].products[key].name}</a>
            </p>
        `
    }



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

    let keysRelay = Object.keys(content[1].items[0].products);

    for(let key in keysRelay) {

        subcategory2.innerHTML += `
            <p>
                <a href="#">${content[1].items[0].products[key].name}</a>
            </p>
        `
    }
    //Программируемые логические контроллеры

    subcategory2.innerHTML += `
        <span class="style-subcategory">${content[1].items[1].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    let keysLogicControllers = Object.keys(content[1].items[1].products);

    for(let key in keysLogicControllers) {

        subcategory2.innerHTML += `
            <p>
                <a href="#">${content[1].items[1].products[key].name}</a>
            </p>
        `
    }

    //Сенсорные панельные контроллеры

    subcategory2.innerHTML += `
        <span class="style-subcategory">${content[1].items[2].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    let keysTouchPanel = Object.keys(content[1].items[2].products);

    for(let key in keysTouchPanel) {
        subcategory2.innerHTML += `
            <p>
                <a href="#">${content[1].items[2].products[key].name}</a>
            </p>
        `
    }

    //Панели оператора

    subcategory2.innerHTML += `
        <span class="style-subcategory">${content[1].items[3].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    let keysOperatorPanels = Object.keys(content[1].items[3].products);

    for(let key in keysOperatorPanels) {

        subcategory2.innerHTML += `
            <p>
                <a href="#">${content[1].items[3].products[key].name}</a>
            </p>
        `
    }

    //Модули ввода/вывода

    subcategory2.innerHTML += `
        <span class="style-subcategory">${content[1].items[4].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    let keysModules = Object.keys(content[1].items[4].products);

    for(let key in keysModules) {

        subcategory2.innerHTML += `
            <p>
                <a href="#">${content[1].items[4].products[key].name}</a>
            </p>
        `
    }

    //Контроллеры для диспетчеризации, телемеханики и учета ресурсов

    subcategory2.innerHTML += `
        <span class="style-subcategory">${content[1].items[5].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    let keysControllers = Object.keys(content[1].items[5].products);

    for(let key in keysControllers) {
        subcategory2.innerHTML += `
            <p>
                <a href="#">${content[1].items[5].products[key].name}</a>
            </p>

        `
    }

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

    let keysConverters = Object.keys(content[2].items[0].products);

    for(let key in keysConverters) {

        subcategory3.innerHTML += `
            <p>
                <a href="#">${content[2].items[0].products[key].name}</a>
            </p>
        `
    }

    //Дроссели

    subcategory3.innerHTML += `
        <span class="style-subcategory">${content[2].items[1].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    let keysThrottles = Object.keys(content[2].items[1].products);

    for(let key in keysThrottles) {
        subcategory3.innerHTML += `
            <p>
                <a href="#">${content[2].items[1].products[key].name}</a>
            </p>
        `
    }

    //Тормозные резисторы

    subcategory3.innerHTML += `
        <span class="style-subcategory">${content[2].items[2].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `
    let keysBrakeResistors = Object.keys(content[2].items[2].products);

    for(let key in keysBrakeResistors) {
        subcategory3.innerHTML += `
            <p>
                <a href="#">${content[2].items[2].products[key].name}</a>
            </p>
        `
    }
    

    //Блоки питания

    subcategory3.innerHTML += `
        <span class="style-subcategory">${content[2].items[3].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    let keysPowerSupplies = Object.keys(content[2].items[3].products);

    for(let key in keysPowerSupplies) {

        subcategory3.innerHTML += `
            <p>
                <a href="#">${content[2].items[3].products[key].name}</a>
            </p>
        `
    }

    //Устройства коммутации

    subcategory3.innerHTML += `
        <span class="style-subcategory">${content[2].items[4].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    let keysSwitchingDevices = Object.keys(content[2].items[4].products);

    for(let key in keysSwitchingDevices) {

        subcategory3.innerHTML += `
            <p>
                <a href="#">${content[2].items[4].products[key].name}</a>
            </p>
        `
    }

    //Устройства контроля и защиты

    subcategory3.innerHTML += `
        <span class="style-subcategory">${content[2].items[5].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `
    let keysMonitoringDevices = Object.keys(content[2].items[5].products);

    for(let key in keysMonitoringDevices) {

        subcategory3.innerHTML += `
            <p>
                <a href="#">${content[2].items[5].products[key].name}</a>
            </p>
        `
    }

    //Регуляторы мощности

    subcategory3.innerHTML += `
        <span class="style-subcategory">${content[2].items[6].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `
    let keysPowerRegulators = Object.keys(content[2].items[6].products);

    for(let key in keysPowerRegulators) {

        subcategory3.innerHTML += `
            <p>
                <a href="#">${content[2].items[6].products[key].name}</a>
            </p>
        `
    }

    //Твердотельные реле

    subcategory3.innerHTML += `
        <span class="style-subcategory">${content[2].items[7].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    let keysSolidRelay = Object.keys(content[2].items[7].products);

    for(let key in keysSolidRelay) {

        subcategory3.innerHTML += `
            <p>
                <a href="#">${content[2].items[7].products[key].name}</a>
            </p>
        `
    }

    //Промежуточные реле

    subcategory3.innerHTML += `
        <span class="style-subcategory">${content[2].items[8].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    let keysIntermediateRelays = Object.keys(content[2].items[8].products);

    for(let key in keysIntermediateRelays) {

        subcategory3.innerHTML += `
            <p>
                <a href="#">${content[2].items[8].products[key].name}</a>
            </p>
        `
    }

    //Запорно-регулирующая арматура

    subcategory3.innerHTML += `
        <span class="style-subcategory">${content[2].items[9].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    let keysFittings = Object.keys(content[2].items[9].products);

    for(let key in keysFittings) {

        subcategory3.innerHTML += `
            <p>
                <a href="#">${content[2].items[9].products[key].name}</a>
            </p>
        `
    }

    //Приборы для индикации и управления задвижками

    subcategory3.innerHTML += `
        <span class="style-subcategory">${content[2].items[10].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    let keysValveControl = Object.keys(content[2].items[10].products);

    for(let key in keysValveControl) {

        subcategory3.innerHTML += `
            <p>
                <a href="#">${content[2].items[10].products[key].name}</a>
            </p>
        `
    }


    //Микроклимат для шкафов управления

    subcategory3.innerHTML += `
        <span class="style-subcategory">${content[2].items[11].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    let keysMicroclimate = Object.keys(content[2].items[11].products);

    for(let key in keysMicroclimate) {

        subcategory3.innerHTML += `
            <p>
                <a href="#">${content[2].items[11].products[key].name}</a>
            </p>
        `
    }

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

    let keysTemperatureSensors = Object.keys(content[3].items[0].products);

    for(let key in keysTemperatureSensors) {

        subcategory4.innerHTML += `
            <p>
                <a href="#">${content[3].items[0].products[key].name}</a>
            </p>
        `
    }

    //Датчики влажности и температуры воздуха

    subcategory4.innerHTML += `
        <span class="style-subcategory">${content[3].items[1].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    let keysHumiditySensors = Object.keys(content[3].items[1].products);

    for(let key in keysHumiditySensors) {

        subcategory4.innerHTML += `
            <p>
                <a href="#">${content[3].items[1].products[key].name}</a>
            </p>
        `
    }

    //Преобразователи давления

    subcategory4.innerHTML += `
        <span class="style-subcategory">${content[3].items[2].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    let keysPressureTransducers = Object.keys(content[3].items[2].products);

    for(let key in keysPressureTransducers) {

        subcategory4.innerHTML += `
            <p>
                <a href="#">${content[3].items[2].products[key].name}</a>
            </p>
        `
    }

    //Датчики уровня

    subcategory4.innerHTML += `
        <span class="style-subcategory">${content[3].items[3].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `
    let keysLevelSensors = Object.keys(content[3].items[3].products);

    for(let key in keysLevelSensors) {

        subcategory4.innerHTML += `
            <p>
                <a href="#">${content[3].items[3].products[key].name}</a>
            </p>
        `
    }

    //Датчики газа

    subcategory4.innerHTML += `
        <span class="style-subcategory">${content[3].items[4].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    let keysGasSensors = Object.keys(content[3].items[4].products);

    for(let key in keysGasSensors) {

        subcategory4.innerHTML += `
            <p>
                <a href="#">${content[3].items[4].products[key].name}</a>
            </p>
        `
    }

    //Бесконтактные датчики

    subcategory4.innerHTML += `
        <span class="style-subcategory">${content[3].items[5].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    let keysContactlessSensors = Object.keys(content[3].items[5].products);

    for(let key in keysContactlessSensors) {

        subcategory4.innerHTML += `
            <p>
                <a href="#">${content[3].items[5].products[key].name}</a>
            </p>
        `
    }

    //Барьеры искрозащиты

    subcategory4.innerHTML += `
        <span class="style-subcategory">${content[3].items[6].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    let keysBarriers = Object.keys(content[3].items[6].products);

    for(let key in keysBarriers) {

        subcategory4.innerHTML += `
            <p>
                <a href="#">${content[3].items[6].products[key].name}</a>
            </p>
        `
    }

    //Нормирующие преобразователи

    subcategory4.innerHTML += `
        <span class="style-subcategory">${content[3].items[7].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    let keysNormalizingConverters = Object.keys(content[3].items[7].products);

    for(let key in keysNormalizingConverters) {

        subcategory4.innerHTML += `
            <p>
                <a href="#">${content[3].items[7].products[key].name}</a>
            </p>
        `
    }

    //Аксессуары для датчиков давления

    subcategory4.innerHTML += `
        <span class="style-subcategory">${content[3].items[8].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    let keysAccessories = Object.keys(content[3].items[8].products);

    for(let key in keysAccessories) {

        subcategory4.innerHTML += `
            <p>
                <a href="#">${content[3].items[8].products[key].name}</a>
            </p>
        `
    }

    //Аксессуары для датчиков температуры

    subcategory4.innerHTML += `
        <span class="style-subcategory">${content[3].items[9].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    let keysTemperatureAccessories = Object.keys(content[3].items[9].products);

    for(let key in keysTemperatureAccessories) {

        subcategory4.innerHTML += `
            <p>
                <a href="#">${content[3].items[9].products[key].name}</a>
            </p>
        `
    }

    //Аксессуары для датчиков уровня

    subcategory4.innerHTML += `
        <span class="style-subcategory">${content[3].items[10].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    let keysLevelAccessories = Object.keys(content[3].items[10].products);

    for(let key in keysLevelAccessories) {

        subcategory4.innerHTML += `
            <p>
                <a href="#">${content[3].items[10].products[key].name}</a>
            </p>
        `
    }

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

    let keysOwenCloud = Object.keys(content[4].items[0].products);

    for(let key in keysOwenCloud) {

        subcategory5.innerHTML += `
            <p>
                <a href="#">${content[4].items[0].products[key].name}</a>
            </p>
        `
    }

    //SCADA системы

    subcategory5.innerHTML += `
        <span class="style-subcategory">${content[4].items[1].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `
    let keysSCADA = Object.keys(content[4].items[1].products);

    for(let key in keysSCADA) {

        subcategory5.innerHTML += `
            <p>
                <a href="#">${content[4].items[1].products[key].name}</a>
            </p>
        `
    }
    
    //OPC-серверы

    subcategory5.innerHTML += `
        <span class="style-subcategory">${content[4].items[2].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `
    let keysOPC = Object.keys(content[4].items[2].products);

    for(let key in keysOPC) {

        subcategory5.innerHTML += `
            <p>
                <a href="#">${content[4].items[2].products[key].name}</a>
            </p>
        `
    }

    //Конфигураторы

    subcategory5.innerHTML += `
        <span class="style-subcategory">${content[4].items[3].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    let keysConfigurators = Object.keys(content[4].items[3].products);

    for(let key in keysConfigurators) {

        subcategory5.innerHTML += `
            <p>
                <a href="#">${content[4].items[3].products[key].name}</a>
            </p>
        `
    }

    //Среда программирования CODESYS

    subcategory5.innerHTML += `
        <span class="style-subcategory">${content[4].items[4].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    let keysCODESYS = Object.keys(content[4].items[4].products);

    for(let key in keysCODESYS) {

        subcategory5.innerHTML += `
            <p>
                <a href="#">${content[4].items[4].products[key].name}</a>
            </p>
        `
    }

    //Программное обеспечение OwenLogic

    subcategory5.innerHTML += `
        <span class="style-subcategory">${content[4].items[5].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    let keysOwenLogic = Object.keys(content[4].items[5].products);

    for(let key in keysOwenLogic) {

        subcategory5.innerHTML += `
            <p>
                <a href="#">${content[4].items[5].products[key].name}</a>
            </p>
        `
    }

    //Драйверы и библиотеки ОВЕН

    subcategory5.innerHTML += `
        <span class="style-subcategory">${content[4].items[6].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    let keysDrivers = Object.keys(content[4].items[6].products);

    for(let key in keysDrivers) {

        subcategory5.innerHTML += `
            <p>
                <a href="#">${content[4].items[6].products[key].name}</a>
            </p>
        `
    }

    //Коммутаторы

    subcategory5.innerHTML += `
        <span class="style-subcategory">${content[4].items[7].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `
    let keysSwitches = Object.keys(content[4].items[7].products);

    for(let key in keysSwitches) {

        subcategory5.innerHTML += `
            <p>
                <a href="#">${content[4].items[7].products[key].name}</a>
            </p>
        `
    }

    //Преобразователи интерфейсов и повторители

    subcategory5.innerHTML += `
        <span class="style-subcategory">${content[4].items[8].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    let keysConvertersInterface = Object.keys(content[4].items[8].products);

    for(let key in keysConvertersInterface) {

        subcategory5.innerHTML += `
            <p>
                <a href="#">${content[4].items[8].products[key].name}</a>
            </p>
        `
    }

    //Модемы

    subcategory5.innerHTML += `
        <span class="style-subcategory">${content[4].items[9].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    let keysModems = Object.keys(content[4].items[9].products);

    for(let key in keysModems) {

        subcategory5.innerHTML += `
            <p>
                <a href="#">${content[4].items[9].products[key].name}</a>
            </p>
        `
    }
    

    //PLC-модемы

    subcategory5.innerHTML += `
        <span class="style-subcategory">${content[4].items[10].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `

    let keysPLC = Object.keys(content[4].items[10].products);

    for(let key in keysPLC) {

        subcategory5.innerHTML += `
            <p>
                <a href="#">${content[4].items[10].products[key].name}</a>
            </p>
        `
    }

    //Аксессуары

    subcategory5.innerHTML += `
        <span class="style-subcategory">${content[4].items[11].name}</span><br>
        <div>
            <span>Приборы:</span>
        </div>
    `
    let keysAccessoriesFooter = Object.keys(content[4].items[11].products);

    for(let key in keysAccessoriesFooter) {

        subcategory5.innerHTML += `
            <p>
                <a href="#">${content[4].items[11].products[key].name}</a>
            </p>
        `
    }
    
    console.log(content)
}
getResponse()