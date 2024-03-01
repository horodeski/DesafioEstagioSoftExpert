<?php
include('../services/order.php');

function runRequestMethod()
{
    $method = $_SERVER['REQUEST_METHOD'];

    switch ($method) {
        case "GET":
            echo getOrderItem();
            break;
        case "POST":
            $order_code = $_POST["order_code"];
            $product_code = $_POST["product_code"];
            $amount = $_POST["amount"];
            $price = $_POST["price"];
            $tax = $_POST["tax"];
            echo postOrderItem($order_code, $product_code, $amount, $price, $tax);
            break;
    }
}

runRequestMethod();
