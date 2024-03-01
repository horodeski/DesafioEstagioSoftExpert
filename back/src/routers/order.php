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
            $total = $_POST["total"];
            $tax = $_POST["tax"];
            echo postOrder($total, $tax);
            break;
    }
}

runRequestMethod();
