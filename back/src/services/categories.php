<?php
include ('../index.php');
 
    function getCategories(){
        $categories = myPDO->query('SELECT * FROM categories');
        $categories = $categories->fetchALL();
        return json_encode($categories);
    };
 
?>