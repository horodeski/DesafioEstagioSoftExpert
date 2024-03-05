<?php
include('../services/products.php');

function runRequestMethod()
{
    $method = $_SERVER['REQUEST_METHOD'];
    // getop
    switch ($_GET["op"]) {

        case "GET":
            echo getProducts();
            break;
        case "POST":
            $name = $_POST["name"];
            $price = $_POST["price"];
            $category_code = $_POST["category_code"];
            $amount = $_POST["amount"];
            echo $_GET["op"];
            echo postProduct($name, $price, $category_code, $amount);

            break;
        case "PUT":
            $code = $_POST["code"];
            $amount = $_POST["amount"];
            echo $_POST["code"];
            echo $_POST["amount"];
            echo updateAmountProduct($amount, $code);
            break;
    }
}

runRequestMethod();
