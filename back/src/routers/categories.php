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
            echo postCategory();
            break;
        case "DELETE":
            echo deleteCategory();
            break;
    }
}

runRequestMethod();
