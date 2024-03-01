<?php
include('../services/products.php');

function runRequestMethod()
{
    $method = $_SERVER['REQUEST_METHOD'];

    switch ($method) {
        case "GET":
            echo getProducts();
            break;
        case "POST":
            $name = $_POST["name"];
            $price = $_POST["price"];
            $category_code = $_POST["category_code"];
            $amount = $_POST["amount"];
            echo postProduct($name, $price, $category_code, $amount);
            break;
        case "DELETE":
            echo deleteProduct();
            break;
    }
}

runRequestMethod();
