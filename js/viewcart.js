// Script Cart view Page
const cart_list = document.querySelector('#cart-list');
let cart_products = JSON.parse(localStorage.getItem('products'));
let html = '';
if(localStorage.getItem('products') != null){
    html += `<div class="container">`;
    html += `<table>`;
    html += `<thead>`;
    html += `<th>Name</th>`;
    html += `<th>Quantity</th>`;
    html += `<th>Price</th>`;
    html += `<th>Image</th>`;
    html += `<th></th>`;
    html += `</thead>`;
    html += `</tbody>`;
    cart_products.forEach(function(product){
        html += `<tr>`;
        html += `<td>${product.name}</td>`;
        html += `<td>x${product.quantity}</td>`;
        html += `<td>${product.price.toFixed(2)} $</td>`;
        html += `<td><img src="${product.image}"></td>`;
        html += `<td><button style="width : 100%" onclick="remove(${product.id})">Remove</button></td>`;
        html += `</td>`;
    })
    html += `</tbody>`;
    html += `</table>`;
    html += `<form>`;
    html += `<div style="padding : .5em" class="container"><button onclick="remove_products()">Chekout</button></div>`;
    html += `</form>`;
    html += `</div>`;
}else{
    html += "<div class='container'>";
    html += "Cart is empty !";
    html += "<a href='./search.php'>Shop now</a>";
    html += "</div>";
}
cart_list.innerHTML = html;

// Reset LocalStorage
function remove_products(){
    localStorage.removeItem('products');
}
// Remove Product From Cart
function remove(id){
    cart_products = JSON.parse(localStorage.getItem('products'));
    let temp = [];
    cart_products.forEach(function(product){
        if(product.id != id){
            temp.push(product);
        }
    });
    localStorage.removeItem('products');
    localStorage.setItem('products',JSON.stringify(temp));
    let html = '';
    if(localStorage.getItem('products') != null){
        if(JSON.parse(localStorage.getItem('products')).length > 0){
            html += `<div class="container">`;
            html += `<table>`;
            html += `<thead>`;
            html += `<th>Name</th>`;
            html += `<th>Quantity</th>`;
            html += `<th>Price</th>`;
            html += `<th>Image</th>`;
            html += `<th></th>`;
            html += `</thead>`;
            html += `</tbody>`;
            cart_products.forEach(function(product){
                html += `<tr>`;
                html += `<td>${product.name}</td>`;
                html += `<td>x${product.quantity}</td>`;
                html += `<td>${product.price} $</td>`;
                html += `<td><img src="${product.image}"></td>`;
                html += `<td><button style="width : 100%" onclick="remove(${product.id})">Remove</button></td>`;
                html += `</td>`;
            })
            html += `</tbody>`;
            html += `</table>`;
            html += `<form>`;
            html += `<div style="padding : .5em" class="container"><button onclick="remove_products()">Chekout</button></div>`;
            html += `</form>`;
            html += `</div>`;

        }else{
            html += "<div class='container'>";
            html += "Cart is empty !";
            html += "<a href='./search.php'>Shop now</a>";
            html += "</div>";
        }
    }else{
        html += "<div class='container'>";
        html += "Cart is empty !";
        html += "<a href='./search.php'>Shop now</a>";
        html += "</div>";
    }
    cart_list.innerHTML = html;
    location.reload();
}