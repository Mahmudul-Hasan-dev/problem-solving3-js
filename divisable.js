//for loop
for (i = 0; i < 50; i++) {
    //if any number have to fullfill double condition then we have to put the double condition in top priority list
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('foobar');
    }
    else if (i % 3 == 0) {
        console.log('foo');
    }
    else if (i % 5 == 0) {
        console.log('bar');
    }
    else {
        console.log(i);
    }
}