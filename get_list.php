<?php

require_once('./dao/productDAO.php');

$keyword = $_GET['keyword'];
$keyword = $keyword?$keyword:'';

$productDAO = new productDAO();
$products = $productDAO->getProducts($keyword);

echo json_encode($products);

?>