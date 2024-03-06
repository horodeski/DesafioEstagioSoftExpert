<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST, DELETE, PUT");
include('../index.php');

class Orders
{
    public function getOrderItem()
    {
        $order_item = myPDO->query('SELECT * FROM order_item');
        $order_item = $order_item->fetchALL();
        return json_encode($order_item);
    }

    public function postOrderItem($order_code, $product_code, $amount, $price, $tax)
    {
        $addPRoduct = myPDO->prepare("INSERT INTO order_item(order_code, product_code, amount, price, tax) VALUES ('$order_code', $product_code, $amount, $price, $tax)");
        $addPRoduct->execute();
    }
}
