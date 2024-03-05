<?php
include('../services/categories.php');

function runRequestMethod()
{
    $method = $_SERVER['REQUEST_METHOD'];

    switch ($_GET["op"]) {
        case "GET":
            echo getCategories();
            break;
        case "POST":
            $name = $_POST["name"];
            $tax = $_POST["tax"];
            echo postCategory($name, $tax);
            break;
        case "PUT":
            $name = $_POST["name"];
            $tax = $_POST["tax"];
            $code = $_POST["code"];
            echo updateCategories($name, $code, $tax);
            break;
    }
}

runRequestMethod();
