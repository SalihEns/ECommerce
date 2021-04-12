<!DOCTYPE html>
<html lang="en">

<head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title><?=$page_title?> | Page</title>
      <link rel="stylesheet" href="./css/main.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>

<body>
      <header>
            <div class="container">
                  <nav>
                        <a href="./index.php">Home</a>
                        <a href="./search.php">Search</a>
                        <a href="./signup.php">Signup</a>
                        <a href="./products.php">Product</a>
                        <a href="./upload.php">New product</a>
                        <a href="./viewcart.php">
                              Cart
                              <i class="fa fa-shopping-cart fa-fx"></i>
                        </a>
                  </nav>
                  <div>
                        <a href="./index.php">IT4PPL
                            <i class="logo"></i>
                        </a>
                  </div>
            </div>
      </header>
      <main>
            <!-- Search Bar -->
            <section id="search-bar">
                  <form action="./search.php" method="post">
                        <input name="search-term" type="text" placeholder="what are you looking for?">
                        <button id='btn-search'>
                              <i class="fa fa-search"></i>
                        </button>
                  </form>
            </section>