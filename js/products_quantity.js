$(function(){
    $('.quantity-dec').click(function(){
        const target = document.querySelector($(this).data('target'));
        let currentPrice = $(this).data('product-price');
        const price = document.querySelector($(this).data('price'));
        if(parseInt(target.value) > 1){
            target.value = parseInt(target.value) - 1;
            let priceValue = parseFloat(currentPrice) * parseFloat(target.value);
            price.innerHTML = priceValue.toFixed(2) + ' $';
        }
    });
    $('.quantity-inc').click(function(){
        const target = document.querySelector($(this).data('target'));
        let currentPrice = $(this).data('product-price');
        const price = document.querySelector($(this).data('price'));
        target.value = parseFloat(target.value) + 1;
        let priceValue = parseFloat(currentPrice) * parseFloat(target.value);
        price.innerHTML = priceValue.toFixed(2) + ' $';
    });
})

