async function getResponse(){
    let response = await fetch('https://owen.ru/export/catalog.json?host=test.kipaso.ru&key=Tl3RqJTP1X9UZXjNYELQQ3dgNfqjDksl');
    let content = await response.json();
    content = content.categories;
    
    let data = document.getElementById('2ТРМ0');
    let test = document.getElementById('testId').src="${content[0].items[0].products[0].name}";
    let data1 = document.getElementById('2ТРМ01');
    let data2 = document.getElementById('ИТП');
    let data3 = document.getElementById('ИДЦ1');
    let data4 = document.getElementById('ТРМ200');
    let data5 = document.getElementById('УТК38');
    let data6 = document.getElementById('ТРМ502');
    let data7 = document.getElementById('ТРМ501');

    data.innerHTML += `
        ${content[0].items[0].products[0].name}
    `
    data1.innerHTML += `
        ${content[0].items[0].products[1].name}
    `
    data2.innerHTML += `
        ${content[0].items[0].products[2].name}
    `
    data3.innerHTML += `
        ${content[0].items[0].products[3].name}
    `
    data4.innerHTML += `
        ${content[0].items[0].products[4].name}
    `
    data5.innerHTML += `
        ${content[0].items[0].products[5].name}
    `
    data6.innerHTML += `
        ${content[0].items[0].products[6].name}
    `
    data7.innerHTML += `
        ${content[0].items[0].products[7].name}
    `

    console.log(content)
}
getResponse()