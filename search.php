<!-- Page Variables -->
<?php
    $page_title = "Search";
?>
<!-- Header -->
<?php include('./includes/header.php') ?>
<div id="search-page">
    <aside>
        <div id="filter-criteria">
            <h2>Price</h2>
            <ul>
                <table>
                    <tr>
                        <td><input type="radio" name="price" value="1"></td>
                        <td>0$ - 250$</td>
                    </tr>
                    <tr>
                        <td><input type="radio" name="price" value="2"></td>
                        <td>250$ - 500$</td>
                    </tr>
                    <tr>
                        <td><input type="radio" name="price" value="3"></td>
                        <td>500$ - 750$</td>
                    </tr>
                    <tr>
                        <td><input type="radio" name="price" value="4"></td>
                        <td>750$ - 1000$</td>
                    </tr>
                    <tr>
                        <td><input type="radio" name="price" value="5" checked></td>
                        <td>more than 1000$</td>
                    </tr>
                </table>
            </ul>
            <h2>Rating</h2>
            <div>
                <input type="radio" name="rating" value="0">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
            </div>
            <div>
                <input type="radio" name="rating" value="1">
                <i class="fa fa-star fa-orange"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
            </div>
            <div>
                <input type="radio" name="rating" value="2">
                <i class="fa fa-star fa-orange"></i>
                <i class="fa fa-star fa-orange"></i>
                <i class="fa fa-star "></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
            </div>
            <div>
                <input type="radio" name="rating" value="3">
                <i class="fa fa-star fa-orange"></i>
                <i class="fa fa-star fa-orange"></i>
                <i class="fa fa-star fa-orange"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
            </div>
            <div>
                <input type="radio" name="rating" value="4">
                <i class="fa fa-star fa-orange"></i>
                <i class="fa fa-star fa-orange"></i>
                <i class="fa fa-star fa-orange"></i>
                <i class="fa fa-star fa-orange"></i>
                <i class="fa fa-star"></i>
            </div>
            <div>
                <input type="radio" name="rating" value="5" checked>
                <i class="fa fa-star fa-orange"></i>
                <i class="fa fa-star fa-orange"></i>
                <i class="fa fa-star fa-orange"></i>
                <i class="fa fa-star fa-orange"></i>
                <i class="fa fa-star fa-orange"></i>
            </div>
            <button id='btn-filter'>Filter</button>
        </div>
    </aside>
    <div id="products">
        <div id="message"></div>
        <div id="sort-bar">
            <input type="button" id="brand-all" value="Reset Products" />
            <select name="sort-products">
                <option value="">-- Sort --</option>
                <option value="name-asc">Name : A - Z</option>
                <option value="name-desc">Name : Z - A</option>
                <option value="price-asc">Price : Low To High</option>
                <option value="price-desc">Price : High To Low</option>
                <option value="rating-asc">Rating : Low To High</option>
                <option value="rating-desc">Rating : High To Low</option>
            </select>
        </div>
        <div id="products-list">

        </div>
    </div>
</div>
<!-- Footer -->
<?php include('./includes/footer.php') ?>