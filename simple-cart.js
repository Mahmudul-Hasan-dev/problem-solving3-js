const shoppingCart = [
    { name: 'shoe', price: 1200 },
    { name: 'bag', price: 2400 },
    { name: 'watch', price: 1400 },
    { name: 'belt', price: 1000 },
    { name: 'pant', price: 1100 }
]

function total(bought) {
    let sum = 0;
    for (i = 0; i < bought.length; i++) {
        var item = bought[i];
        sum = sum + item.price;
        // var priceitem = bought[i].price;
        // console.log(priceitem);
    }
    return sum;
}

const expense = total(shoppingCart);
console.log(expense);