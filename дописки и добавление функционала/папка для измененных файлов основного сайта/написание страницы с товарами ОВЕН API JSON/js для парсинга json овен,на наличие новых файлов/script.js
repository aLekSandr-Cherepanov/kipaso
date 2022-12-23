async function getResponse(){
    let response = await fetch('https://owen.ru/export/catalog.json?host=kipaso.ru&key=BsDMyRHv2MEm811nMiI-iF8QN7H_e_QA');
    let content = await response.json();
    content = content.categories;

    let test = Object.keys(content[0].items[0].products[key]);

    function testFunction(){ 
        for(let key in test ) {
        
        let tets = content[0].items[0].products[key]
        console.log(tets)
    
    }}

    testFunction();

    console.log(testFunction());


}

