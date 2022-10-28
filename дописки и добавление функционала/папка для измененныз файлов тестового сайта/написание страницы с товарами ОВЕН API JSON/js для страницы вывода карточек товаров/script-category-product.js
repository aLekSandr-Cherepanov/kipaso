async function getResponse(){
    let response = await fetch('https://owen.ru/export/catalog.json?host=test.kipaso.ru&key=Tl3RqJTP1X9UZXjNYELQQ3dgNfqjDksl');
    let content = await response.json();
    content = content.categories;
    
    let photo = document.getElementById('2ТРМ0_photo');
    let product = document.getElementById('2ТРМ0');

    let photo1 = document.getElementById('2ТРМ01_photo');
    let product1 = document.getElementById('2ТРМ01');

    let photo2 = document.getElementById('ИТП_photo');
    let product2 = document.getElementById('ИТП');

    let photo3 = document.getElementById('ИДЦ1_photo');
    let product3 = document.getElementById('ИДЦ1');

    let photo4 = document.getElementById('ТРМ200_photo');
    let product4 = document.getElementById('ТРМ200');

    let photo5 = document.getElementById('УТК38_photo');
    let product5 = document.getElementById('УТК38');

    let photo6 = document.getElementById('ТРМ502_photo');
    let product6 = document.getElementById('ТРМ502');

    let photo7 = document.getElementById('ТРМ501_photo');
    let product7 = document.getElementById('ТРМ501');

    let photo8 = document.getElementById('ТРМ500_photo');
    let product8 = document.getElementById('ТРМ500');

    let photo9 = document.getElementById('ТРМ1_photo');
    let product9 = document.getElementById('ТРМ1');

    let photo10 = document.getElementById('ТРМ1-1_photo');
    let product10 = document.getElementById('ТРМ1-1');

    let photo11 = document.getElementById('ТРМ201_photo');
    let product11 = document.getElementById('ТРМ201');

    let photo12 = document.getElementById('2ТРМ1_photo');
    let product12 = document.getElementById('2ТРМ1');

    let photo13 = document.getElementById('2ТРМ1-1_photo');
    let product13 = document.getElementById('2ТРМ1-1');

    let photo14 = document.getElementById('ТРМ202_photo');
    let product14 = document.getElementById('ТРМ202');

    let photo15 = document.getElementById('ТРМ10_photo');
    let product15 = document.getElementById('ТРМ10');

    let photo16 = document.getElementById('ТРМ10-1_photo');
    let product16 = document.getElementById('ТРМ10-1');

    let photo17 = document.getElementById('ТРМ101_photo');
    let product17 = document.getElementById('ТРМ101');

    let photo18 = document.getElementById('ТРМ210_photo');
    let product18 = document.getElementById('ТРМ210');

    let photo19 = document.getElementById('ТРМ12_photo');
    let product19 = document.getElementById('ТРМ12');

    let photo20 = document.getElementById('ТРМ12-1_photo');
    let product20 = document.getElementById('ТРМ12-1');

    let photo21 = document.getElementById('ТРМ212_photo');
    let product21 = document.getElementById('ТРМ212');

    let photo22 = document.getElementById('ТРМ136_photo');
    let product22 = document.getElementById('ТРМ136');


    photo.innerHTML += `
        <img class="product-block_image" src="${content[0].items[0].products[0].image}" alt="">
    `
    product.innerHTML += `
        ${content[0].items[0].products[0].name}
    `


    photo1.innerHTML += `
        <img class="product-block_image" src="${content[0].items[0].products[1].image}" alt="">
    `
    product1.innerHTML += `
        ${content[0].items[0].products[1].name}
    `


    photo2.innerHTML += `
        <img class="product-block_image" src="${content[0].items[0].products[2].image}" alt="">
    `
    product2.innerHTML += `
        ${content[0].items[0].products[2].name}
    `


    photo3.innerHTML += `
        <img class="product-block_image" src="${content[0].items[0].products[3].image}" alt="">
    `
    product3.innerHTML += `
        ${content[0].items[0].products[3].name}
    `


    photo4.innerHTML += `
        <img class="product-block_image" src="${content[0].items[0].products[4].image}" alt="">
    `
    product4.innerHTML += `
        ${content[0].items[0].products[4].name}
    `


    photo5.innerHTML += `
        <img class="product-block_image" src="${content[0].items[0].products[5].image}" alt="">
    `
    product5.innerHTML += `
        ${content[0].items[0].products[5].name}
    `


    photo6.innerHTML += `
        <img class="product-block_image" src="${content[0].items[0].products[6].image}" alt="">
    `
    product6.innerHTML += `
        ${content[0].items[0].products[6].name}
    `


    photo7.innerHTML += `
        <img class="product-block_image" src="${content[0].items[0].products[7].image}" alt="">
    `
    product7.innerHTML += `
        ${content[0].items[0].products[7].name}
    `

    photo8.innerHTML += `
        <img class="product-block_image" src="${content[0].items[0].products[8].image}" alt="">
    `
    product8.innerHTML += `
        ${content[0].items[0].products[8].name}
    `

    photo9.innerHTML += `
        <img class="product-block_image" src="${content[0].items[0].products[9].image}" alt="">
    `
    product9.innerHTML += `
        ${content[0].items[0].products[9].name}
    `

    photo10.innerHTML += `
        <img class="product-block_image" src="${content[0].items[0].products[10].image}" alt="">
    `
    product10.innerHTML += `
        ${content[0].items[0].products[10].name}
    `

    photo11.innerHTML += `
        <img class="product-block_image" src="${content[0].items[0].products[11].image}" alt="">
    `
    product11.innerHTML += `
        ${content[0].items[0].products[11].name}
    `

    photo12.innerHTML += `
        <img class="product-block_image" src="${content[0].items[0].products[12].image}" alt="">
    `
    product12.innerHTML += `
        ${content[0].items[0].products[12].name}
    `

    photo13.innerHTML += `
        <img class="product-block_image" src="${content[0].items[0].products[13].image}" alt="">
    `
    product13.innerHTML += `
        ${content[0].items[0].products[13].name}
    `

    photo14.innerHTML += `
        <img class="product-block_image" src="${content[0].items[0].products[14].image}" alt="">
    `
    product14.innerHTML += `
        ${content[0].items[0].products[14].name}
    `

    photo15.innerHTML += `
        <img class="product-block_image" src="${content[0].items[0].products[15].image}" alt="">
    `
    product15.innerHTML += `
        ${content[0].items[0].products[15].name}
    `

    photo16.innerHTML += `
        <img class="product-block_image" src="${content[0].items[0].products[16].image}" alt="">
    `
    product16.innerHTML += `
        ${content[0].items[0].products[16].name}
    `

    photo17.innerHTML += `
        <img class="product-block_image" src="${content[0].items[0].products[17].image}" alt="">
    `
    product17.innerHTML += `
        ${content[0].items[0].products[17].name}
    `

    photo18.innerHTML += `
        <img class="product-block_image" src="${content[0].items[0].products[18].image}" alt="">
    `
    product18.innerHTML += `
        ${content[0].items[0].products[18].name}
    `

    photo19.innerHTML += `
        <img class="product-block_image" src="${content[0].items[0].products[19].image}" alt="">
    `
    product19.innerHTML += `
        ${content[0].items[0].products[19].name}
    `

    photo20.innerHTML += `
        <img class="product-block_image" src="${content[0].items[0].products[20].image}" alt="">
    `
    product20.innerHTML += `
        ${content[0].items[0].products[20].name}
    `

    photo21.innerHTML += `
        <img class="product-block_image" src="${content[0].items[0].products[21].image}" alt="">
    `
    product21.innerHTML += `
        ${content[0].items[0].products[21].name}
    `

    photo22.innerHTML += `
        <img class="product-block_image" src="${content[0].items[0].products[22].image}" alt="">
    `
    product22.innerHTML += `
        ${content[0].items[0].products[22].name}
    `



    console.log(content)
}
getResponse()