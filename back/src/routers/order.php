<?php
include('../services/order.php');

function runRequestMethod()
{
    $method = $_SERVER['REQUEST_METHOD'];

    switch ($method) {
        case "GET":
            echo getOrder();
            break;
        case "POST":
            $code = $_POST["code"];
            $total = $_POST["total"];
            $tax = $_POST["tax"];
            echo postOrder($code, $total, $tax);
            break;
    }
}

runRequestMethod();
