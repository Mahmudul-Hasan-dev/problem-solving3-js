function woodCalculator(chairquantity, tablequantity, bedquantity) {
    const chairwood = 3;
    const tablewood = 10;
    const bedwood = 15;

    var chairprice = chairwood * chairquantity;
    var tablePrice = tablewood * tablequantity;
    var bedprice = bedwood * bedquantity;
    const totalwood = chairprice + tablePrice + bedprice;
    return totalwood;
}

var chairQuantity = 2;
var tableQuantity = 3;
var bedQuantity = 2;

var priceCost = woodCalculator(chairQuantity, tableQuantity, bedQuantity);

console.log(priceCost);