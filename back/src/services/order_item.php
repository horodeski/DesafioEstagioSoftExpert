<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST, DELETE, PUT");
include('../index.php');

function getOrderItem()
{
    $order_item = myPDO->query('SELECT order_item.*, products.name as product from order_item join products on order_item.product_code = products.code ORDER by code');    
    
    $order_item = $order_item->fetchALL();
    return json_encode($order_item);
};

function postOrderItem($order_code, $product_code, $amount, $price, $tax)
{
    $addPRoduct = myPDO->prepare("INSERT INTO order_item(order_code, product_code, amount, price, tax) VALUES ('$order_code', $product_code, $amount, $price, $tax)");
    $addPRoduct->execute();
};
