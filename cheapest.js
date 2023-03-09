const phones = [
    { name: 'samsung', camera: 12, storage: '64gb', price: 36000, color: 'silver' },
    { name: 'walton', camera: 12, storage: '64gb', price: 26000, color: 'silver' },
    { name: 'iphone', camera: 12, storage: '64gb', price: 88000, color: 'silver' },
    { name: 'xiaomi', camera: 12, storage: '64gb', price: 20000, color: 'silver' },
    { name: 'oppo', camera: 12, storage: '64gb', price: 23000, color: 'silver' },
    { name: 'htc', camera: 12, storage: '64gb', price: 16000, color: 'silver' },
]

function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}
const mySelection = cheapestPhone(phones);
console.log(mySelection);