function calculateTotal(cardNumber) {
    var itemName = document.getElementById('cardModalLabel' + cardNumber).innerText;
    var unitPrice = Number(document.getElementById('product-' + cardNumber).innerText);
    var quantity = Number(document.getElementById('quantityInput' + cardNumber).value);
    var totalPrice = quantity * unitPrice;
    var summaryText = 'Great! Your order of ' + quantity + ' ' + itemName + ' has been received. Your current total price is $' + totalPrice.toFixed(2);
    document.getElementById('summary' + cardNumber).innerText = summaryText;
}