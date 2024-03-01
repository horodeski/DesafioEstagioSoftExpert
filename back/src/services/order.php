<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST, DELETE, PUT");
include ('../index.php');

    function getOrder(){
        $order = myPDO->query('SELECT * FROM orders');
        $order = $order->fetchALL();
        return json_encode($order);
    };

    function postOrder($total, $tax) {
        $addPRoduct = myPDO->prepare("INSERT INTO orders(total, tax) VALUES ($total, $tax)");
        $addPRoduct->execute();
    };

?>