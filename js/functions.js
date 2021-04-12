let products = [];
function search_products(keyword){
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200){
            products = JSON.parse(this.responseText);
        }
    }
    xhr.open('GET',`./search-get.php?keyword=${keyword}`,false);
    xhr.send();
}
search_products('');
/*
**** Add Product To Cart
*/
function push_product_cart(id){
    const product = products.find(product => parseInt(product.id) == parseInt(id));
    const quantity = document.querySelector('#quantity');
    product.quantity = parseInt(quantity.value);
    product.price    = parseFloat(product.price) * product.quantity; 
    if(localStorage.getItem('products') != null){
        let cart_products = JSON.parse(localStorage.getItem('products'));
        cart_products = [...cart_products,product];
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
    }else{
        localStorage.setItem('products',JSON.stringify(''));
    }
}

