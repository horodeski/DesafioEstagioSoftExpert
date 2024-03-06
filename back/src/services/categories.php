<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST, DELETE, PUT");
include('../index.php');

function getCategories()
{
    $categories = myPDO->query('SELECT * FROM categories ORDER BY CODE');
    $categories = $categories->fetchALL();
    return json_encode($categories);
};

function postCategory($name, $tax)
{
    $addCategory = myPDO->prepare("INSERT INTO categories(NAME, TAX) VALUES ('{$name}', {$tax})");
    $addCategory->execute();
};

function deleteCategory($code)
{
    $deleteCategory = myPDO->prepare("DELETE from categories WHERE code=$code");
    $deleteCategory->execute();
};


function updateCategories($name, $code) {
    $deleteProduct = myPDO->prepare("UPDATE categories SET name='{$name}' WHERE code={$code};");
    $deleteProduct->execute();
    
};