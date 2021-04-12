<!-- Db File -->
<?php include('./db.php')?>
<!-- Page Variables -->
<?php
    $page_title = "Product";
?>
<!-- Header -->
<?php include('./includes/header.php') ?>
      <?php
        $id = isset($_REQUEST['id']) ? $_REQUEST['id'] : -1;
        if($id < 0) {
            header('Location: ./search.php');
            exit;
        }else{
          $product = get_product($id);
        }
      ?>
      <div class="product-show">
        <div id="message"></div>
        <img src="<?=$product['image']?>" />
        <h1>
          <?=$product['name']?>
        </h1>
        <h2>$<span id="price">
            <?=$product['price']?>
        </span></h2>
        <div id="product-quantity">
          <button id="quantity-dec">-</button>
          <input id="quantity" type="text" disabled />
          <button id="quantity-inc">+</button>
        </div>
        <?php if($id < 0) : ?>
          <div id="push-product">
            <button>Add to cart</button>
          </div>
        <?php else : ?>
          <div id="push-product">
            <input type="text" name="id" value="<?=$id?>" hidden>
            <button onclick="push_product_cart(<?=$id?>)">Add to cart</button>
          </div>
        <?php endif; ?>
        <div>
          <?php
            switch($product['rating']){
                case 0:
                    echo '<i class="fa fa-star"></i>';
                    echo '<i class="fa fa-star"></i>';
                    echo '<i class="fa fa-star"></i>';
                    echo '<i class="fa fa-star"></i>';
                    echo '<i class="fa fa-star"></i>';
                    break;
                case 1:
                    echo '<i class="fa fa-star fa-orange"></i>';
                    echo '<i class="fa fa-star"></i>';
                    echo '<i class="fa fa-star"></i>';
                    echo '<i class="fa fa-star"></i>';
                    echo '<i class="fa fa-star"></i>';
                    break;
                case 2:
                    echo '<i class="fa fa-star fa-orange"></i>';
                    echo '<i class="fa fa-star fa-orange"></i>';
                    echo '<i class="fa fa-star"></i>';
                    echo '<i class="fa fa-star"></i>';
                    echo '<i class="fa fa-star"></i>';
                    break;
                case 3:
                    echo '<i class="fa fa-star fa-orange"></i>';
                    echo '<i class="fa fa-star fa-orange"></i>';
                    echo '<i class="fa fa-star fa-orange"></i>';
                    echo '<i class="fa fa-star"></i>';
                    echo '<i class="fa fa-star"></i>';
                    break;
                case 4:
                    echo '<i class="fa fa-star fa-orange"></i>';
                    echo '<i class="fa fa-star fa-orange"></i>';
                    echo '<i class="fa fa-star fa-orange"></i>';
                    echo '<i class="fa fa-star fa-orange"></i>';
                    echo '<i class="fa fa-star"></i>';
                    break;
                case 5:
                    echo '<i class="fa fa-star fa-orange"></i>';
                    echo '<i class="fa fa-star fa-orange"></i>';
                    echo '<i class="fa fa-star fa-orange"></i>';
                    echo '<i class="fa fa-star fa-orange"></i>';
                    echo '<i class="fa fa-star fa-orange"></i>';
                    break;
            }
          ?>
        </div>
        <h3>Product details</h3>
        <article>
          <?=$product['description']?>
        </article>
      </div>
<!-- Footer -->
<?php include('./includes/footer.php')?>