<?php
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, DELETE");
header("Access-Control-Allow-Origin: *");
include('../index.php');

    function getCategories(){
        $categories = myPDO->query('SELECT * FROM categories');
        $categories = $categories->fetchALL();
        return json_encode($categories);
    };

    function postCategory() {
        $addCategory = myPDO->prepare("INSERT INTO categories(NAME, TAX, CODE) VALUES ('shgeovana', 5, 999)");
        $addCategory->execute();
    };

    function deleteCategory() {
        $deleteCategory = myPDO->prepare("DELETE from categories WHERE code=1");
        $deleteCategory->execute();
    };

?>