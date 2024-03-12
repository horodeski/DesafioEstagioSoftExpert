<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST, DELETE, PUT");
include('../index.php');

function getProducts()
{
    $products = myPDO->query('SELECT products.*, categories.tax as tax, categories.name as category FROM products  JOIN categories ON products.category_code = categories.code ORDER BY CODE');
    $products = $products->fetchALL();
    return json_encode($products);
};

function postProduct($name, $price, $description, $category_code, $amount,)
{
    $addPRoduct = myPDO->prepare("INSERT INTO products(NAME, PRICE, DESCRIPTION, CATEGORY_CODE, AMOUNT) VALUES ('{$name}', {$price},{$description}, '{$category_code}', {$amount})");
    $addPRoduct->execute();
};

function updateAmountProduct($amount, $code)
{
    $updateProduct = myPDO->prepare("UPDATE products SET amount=$amount WHERE code=$code;");
    $updateProduct->execute();
};
function deleteProduct($code)
{
    $updateProduct = myPDO->prepare("DELETE FROM products where code=$code;");
    $updateProduct->execute();
};
