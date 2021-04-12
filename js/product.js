// Product Data [ Array Database ]
let products = [];
/*
**** Filter Products
*/
// Filter Products Function
const btn_filter = document.querySelector('#btn-filter');
btn_filter.addEventListener('click',function() {
    search_products('');
    /*
    **  Price Products
    */
    const prices = document.querySelectorAll("input[name='price']:checked");
    /*
    **  Rating
    */
    const rating = document.querySelectorAll("input[name='rating']:checked");
    // Filter Products
    products = products.filter(product => {
        const price = parseInt(prices[0].value);
        switch(price){
            case 1 : 
                return (product.price >= 0 && product.price <= 250)
                && product.rating <= parseInt(rating[0].value);
                break;
            case 2 : 
                return (product.price > 250 && product.price <= 500)
                && product.rating <= parseInt(rating[0].value);
                break;
            case 3 : 
                return (product.price >= 500 && product.price <= 750)
                && product.rating <= parseInt(rating[0].value);
                break;
            case 4 : 
                return (product.price >= 750 && product.price <= 1000)
                && product.rating <= parseInt(rating[0].value);
                break;
            case 5 : 
                return (product.price > 1000)
                && product.rating <= parseInt(rating[0].value);
                break;
        }
    });
    init_products(products);
});
/*
**** Sorting Products
*/
const btn_sort = document.querySelector("select[name='sort-products']");
btn_sort.addEventListener('change',function(){
    if(this.value != ''){
        switch(this.value){
            // Filter By Name
            case 'name-asc' :
                products = products.sort((a,b) => {
                    let nameA = a.name.toUpperCase();
                    let nameB = b.name.toUpperCase();
                    if(nameA < nameB) {
                        return -1;
                    }
                    if(nameA > nameB) {
                        return 1;
                    }
                    return 0;
                } );
                init_products(products);
                break;
            case 'name-desc' :
                products = products.sort((a,b) => {
                    let nameA = a.name.toUpperCase();
                    let nameB = b.name.toUpperCase();
                    if(nameA > nameB) {
                        return -1;
                    }
                    if(nameA < nameB) {
                        return 1;
                    }
                    return 0;
                } );
                init_products(products);
                break;
            // Filter By Price
            case 'price-asc' :
                products = products.sort((a,b) => {
                    if(parseInt(a.price) < parseInt(b.price) ) {
                        return -1;
                    }
                    if(parseInt(a.price) > parseInt(b.price) ) {
                        return 1;
                    }
                    return 0;
                } );
                init_products(products);
                break;
            case 'price-desc' :
                products = products.sort((a,b) => {
                    if(parseInt(a.price) > parseInt(b.price)) {
                        return -1;
                    }
                    if(parseInt(a.price) < parseInt(b.price)) {
                        return 1;
                    }
                    return 0;
                } );
                init_products(products);
                break;
            // Filter By Rating
            case 'rating-asc' :
                products = products.sort((a,b) => {
                    if(parseInt(a.rating) < parseInt(b.rating)) {
                        return -1;
                    }
                    if(parseInt(a.rating) > parseInt(b.rating)) {
                        return 1;
                    }
                    return 0;
                } );
                init_products(products);
                break;
            case 'rating-desc' :
                products = products.sort((a,b) => {
                    if(parseInt(a.rating) > parseInt(b.rating)) {
                        return -1;
                    }
                    if(parseInt(a.rating) < parseInt(b.rating)) {
                        return 1;
                    }
                    return 0;
                } );
                init_products(products);
                break;
        }
    }
});

/*
**** Search Products Function
*/
function search_products(keyword){
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200){
            products = JSON.parse(this.responseText);
        }
    }
    xhr.open('GET',`./search-get.php?keyword=${keyword}`,false);
    xhr.send();
    init_products(products);
}
/*
****
*************** Helper Functions ***************
****
*/
// Initialize HTML - With Products Data
const products_list = document.querySelector('#products-list');
search_products('');
function init_products(products){
    let content = '';
    if(products.length > 0){
        products.forEach(product => {
            content += `<div class='product'>`;
            content += `<a href='./product.php?id=${product.id}'>`;
            content += `<img src='${product.image}'/>`;
            content += `</a>`;
            content += `<h2>${product.name}</h2>`;
            content += `<p id="price-${product.id}">${product.price} $</p>`;
            content += `<article>${product.description}</article>`;
            content += `<div style="display : flex" class="product-quantity">`;
            content += `<button style="width : 25px" class="quantity-dec" data-target="#quantity-${product.id}" data-price="#price-${product.id}" data-product-price="${product.price}">-</button>`;
            content += `<input  id="quantity-${product.id}" type="number" value="1"  disabled />`;
            content += `<button style="width : 25px" class="quantity-inc" data-target="#quantity-${product.id}" data-price="#price-${product.id}" data-product-price="${product.price}">+</button>`;
            content += `</div>`;
            switch(parseInt(product.rating)){
                case 0 : 
                    content += '<div>';
                    content += `<i class='fa fa-star'></i>`;
                    content += `<i class='fa fa-star'></i>`;
                    content += `<i class='fa fa-star'></i>`;
                    content += `<i class='fa fa-star'></i>`;
                    content += `<i class='fa fa-star'></i>`;
                    content += '</div>';
                    break;
                case 1 : 
                    content += '<div>';
                    content += `<i class='fa fa-star fa-orange'></i>`;
                    content += `<i class='fa fa-star'></i>`;
                    content += `<i class='fa fa-star'></i>`;
                    content += `<i class='fa fa-star'></i>`;
                    content += `<i class='fa fa-star'></i>`;
                    content += '</div>';
                    break;
                case 2 :
                    content += '<div>';
                    content += `<i class='fa fa-star fa-orange'></i>`;
                    content += `<i class='fa fa-star fa-orange'></i>`;
                    content += `<i class='fa fa-star'></i>`;
                    content += `<i class='fa fa-star'></i>`;
                    content += `<i class='fa fa-star'></i>`;
                    content += '</div>'; 
                    break;
                case 3 : 
                    content += '<div>';
                    content += `<i class='fa fa-star fa-orange'></i>`;
                    content += `<i class='fa fa-star fa-orange'></i>`;
                    content += `<i class='fa fa-star fa-orange'></i>`;
                    content += `<i class='fa fa-star'></i>`;
                    content += `<i class='fa fa-star'></i>`;
                    content += '</div>';
                    break;
                case 4 :
                    content += '<div>';
                    content += `<i class='fa fa-star fa-orange'></i>`;
                    content += `<i class='fa fa-star fa-orange'></i>`;
                    content += `<i class='fa fa-star fa-orange'></i>`;
                    content += `<i class='fa fa-star fa-orange'></i>`;
                    content += `<i class='fa fa-star'></i>`;
                    content += '</div>'; 
                    break;
                case 5 :
                    content += '<div>';
                    content += `<i class='fa fa-star fa-orange'></i>`;
                    content += `<i class='fa fa-star fa-orange'></i>`;
                    content += `<i class='fa fa-star fa-orange'></i>`;
                    content += `<i class='fa fa-star fa-orange'></i>`;
                    content += `<i class='fa fa-star fa-orange'></i>`;
                    content += '</div>'; 
                    break;
            }
            content += `<button onclick="push_product_cart(${product.id})">Add to cart</button>`;
            content += `</div>`;
        });
    }else{
        content = 'No Product Founded !!';
    }
    products_list.innerHTML = content;
}
// Call The Function When First Load Page With Default Data
init_products(products);
/*
**** Reset To Default Product Data After [Sorting - Searching - Filtering]
*/
// Reset Data
const reset_products = document.querySelector("#brand-all");
reset_products.addEventListener('click',function(){
    search_products('');
});

/*
**** Add Product To Cart
*/

function push_product_cart(id){
    // console.dir(JSON.parse(localStorage.getItem('products')));
    const product     = products.find(product => parseInt(product.id) == parseInt(id));
    const tempProduct =  product.price;
    product.quantity  = parseInt(document.querySelector(`#quantity-${id}`).value);
    product.price     = parseFloat(product.price) * product.quantity; 
    let cart_products = [];
    if(localStorage.getItem('products') != null){
        cart_products = JSON.parse(localStorage.getItem('products'));
        if(cart_products.length > 0)
        if(foo(cart_products,id)){
            cart_products.forEach(function(item){
                if(item.id == id){
                    item.quantity += parseInt(product.quantity);
                    item.price     = parseFloat(tempProduct) * parseInt(item.quantity);
                }
            });
        }else{
            cart_products = [...cart_products,product];
        }
    }else{
        cart_products = [...cart_products,product];
    }
    localStorage.setItem('products',JSON.stringify(cart_products));
    const message = document.querySelector('#message');
    message.innerHTML = `Product ${product.name} added to cart successfuly !`;
    message.style.backgroundColor = '#8BC34A';
    message.style.padding = ".5em";
    setTimeout(function(){
        message.innerHTML = '';
        message.style.backgroundColor = '#8BC34A';
        message.style.padding = "0px";
    },3000);
}

function foo(array , id){
    const arr = array.find(arr => parseInt(arr.id) == parseInt(id));
    if(arr === undefined){
        return false;
    }
    return true;
}





