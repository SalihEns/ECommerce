<?php

    // Database Configuration
    const CONFIG = [
        "db_name" => "mysql:dbname=IT4PPL;host=localhost:3306",
        "db_user" => "root",
        "db_pwd"  => ""
    ];

    // Connect To Database Method
    function connect() {
        try{
            $pdo = new PDO(CONFIG['db_name'],CONFIG['db_user'],CONFIG['db_pwd']);
        }catch(PDOException $e){
            return null;
        }
        return $pdo;
    }

    // Add Product
    function upload($product) {
        $pdo   = connect();
        $query = "INSERT INTO Products(name,rating,price,image,description,caption) VALUES (?,?,?,?,?,?)";
        $stmt  = $pdo->prepare($query);
        $stmt->execute(
            [
                $product['name'],
                $product['rating'],
                $product['price'],
                $product['image'],
                $product['description'],
                $product['caption']
            ]
        );
    }

    // Get Produts
    function get_products($keyword){
        $pdo   = connect();
        $query = "SELECT * FROM Products WHERE 1 = 1";
        if($keyword != '') {
            $query .= " AND name LIKE '%$keyword%'";
        }
        $products = $pdo->query($query);
        $products = $products->fetchAll(PDO::FETCH_ASSOC);
        return json_encode($products);
    }
  
    // Get Product
    function get_product($id){
        $pdo   = connect();
        $query = "SELECT * FROM Products WHERE id = $id";
        $product = $pdo->query($query);
        $product = $product->fetchAll(PDO::FETCH_ASSOC);
        return $product[0];
    }