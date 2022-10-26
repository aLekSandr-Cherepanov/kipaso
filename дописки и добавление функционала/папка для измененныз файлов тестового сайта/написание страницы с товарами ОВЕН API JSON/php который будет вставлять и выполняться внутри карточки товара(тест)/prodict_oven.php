<?php
    function get(){
    $get_data = file_get_contents('https://owen.ru/export/catalog.json?host=test.kipaso.ru&key=Tl3RqJTP1X9UZXjNYELQQ3dgNfqjDksl');
    $get_data = json_decode($get_data);

    //foreach($get_data as $g): 
    
    $test = ;
    
    print($test);
}
get()
?>