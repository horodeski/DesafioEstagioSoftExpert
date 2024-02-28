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
            echo postProduct();
            break;
        case "DELETE":
            echo deleteProduct();
            break;
    }
}

runRequestMethod();
