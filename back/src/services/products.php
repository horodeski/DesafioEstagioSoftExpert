<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST, DELETE, PUT");
include ('../index.php');

    function getProducts(){
        $products = myPDO->query('SELECT * FROM products');
        $products = $products->fetchALL();
        return json_encode($products);
    };

    function postProduct() {
        $addPRoduct = myPDO->prepare("INSERT INTO products(NAME, TAX, CODE) VALUES ('shgeovana', 5, 999)");
        $addPRoduct->execute();
    };

    function deleteProduct() {
        $deleteProduct = myPDO->prepare("DELETE from products WHERE code=1");
        $deleteProduct->execute();
    };

?>