</main>
    <footer>
        <div class="container">
            <ul>
                <p>Designd by Bacheer, Salih, Dorsa</p>
                <p>Copyright &copy; 2021 - IT4PPL</p>
            </ul>
        </div>
    </footer>
    <?php 
        switch($page_title){
            case "Search" :
                $search_term = ($_SERVER['REQUEST_METHOD'] === 'POST') ? $_POST['search-term'] : '';
                echo '<script src="./js/main.js"></script>';
                echo '<script src="./js/jquery.js"></script>';
                echo '<script src="./js/products_quantity.js"></script>';
                echo "<script>search_products('$search_term');</script>";
                break;
                case "Product" :
                echo '<script src="./js/quantity.js"></script>';
                echo '<script src="./js/functions.js"></script>';
                break;
                case "Products" :
                echo '<script src="./js/jquery.js"></script>';
                echo '<script src="./js/products_quantity.js"></script>';
                echo '<script src="./js/product.js"></script>';
                break;
            case "Viewcart" :
                echo '<script src="./js/viewcart.js"></script>';
                break;
        }
    ?>
</body>

</html>