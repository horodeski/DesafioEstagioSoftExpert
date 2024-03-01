<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST, DELETE, PUT");
include ('../index.php');

    function getProducts(){
        $products = myPDO->query('SELECT products.*, categories.tax as tax, categories.name as category FROM products JOIN categories ON products.category_code = categories.code');
        $products = $products->fetchALL();
        return json_encode($products);
    };

    function postProduct($name, $price, $category_code, $amount) {
        $addPRoduct = myPDO->prepare("INSERT INTO products(NAME, PRICE, CATEGORY_CODE, AMOUNT) VALUES ('{$name}', {$price}, {$category_code}, {$amount})");
        $addPRoduct->execute();
    };

    function deleteProduct() {
        $deleteProduct = myPDO->prepare("DELETE from products WHERE code=1");
        $deleteProduct->execute();
    };

?>