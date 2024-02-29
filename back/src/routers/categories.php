<?php
include('../services/categories.php');

function runRequestMethod()
{
    $method = $_SERVER['REQUEST_METHOD'];

    switch ($method) {
        case "GET":
            echo getCategories();
            break;
        case "POST":
            $name = $_POST["name"];
            $tax = $_POST["tax"];
            echo postCategory($name, $tax);
            break;
        case "DELETE":
            echo deleteCategory();
            break;
    }
}

runRequestMethod();
