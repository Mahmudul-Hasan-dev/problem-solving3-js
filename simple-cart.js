const shoppingCart = [
    { name: 'shoe', price: 1200, quantity: 1 },
    { name: 'bag', price: 2400, quantity: 2 },
    { name: 'watch', price: 1400, quantity: 3 },
    { name: 'belt', price: 1000, quantity: 4 },
    { name: 'pant', price: 1100, quantity: 1 }
]

function total(bought) {
    let sum = 0;
    for (i = 0; i < bought.length; i++) {
        var item = bought[i];
        sum = sum + item.price * item.quantity;
        // var priceitem = bought[i].price;
        // console.log(priceitem);
    }
    return sum;
}

const expense = total(shoppingCart);
console.log(expense);