<?php include('./db.php') ?>
<?php
    if($_SERVER['REQUEST_METHOD'] === 'POST') {
        $name          = $_POST['name'];
        $rating        = $_POST['rating'];
        $description   = $_POST['description'];
        $price         = $_POST['price'];
        $caption         = $_POST['caption'];
        $tmp_image     = $_FILES['image']['tmp_name'];
        $image_name    = $_FILES['image']['name'];
        $dest          = './upload/products/' . $image_name;
        move_uploaded_file($tmp_image,$dest);
        $product = [
            'name'          => $name,
            'rating'        => $rating,
            'price'         => $price,
            'image'         => $dest,
            'description'   => $description,
            'caption'       => $caption
        ];
        upload($product);
        header('Location: ./search.php');
        exit;
    }else{
        header('Location: ./index.php');
        exit;
    }
?>