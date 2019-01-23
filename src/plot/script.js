var cows = {
    milk: 10
}

function milkACow(cow) {
    let newcow = Object.assign({}, cow);
    let cheeses = []
    return function(int) {
        if (int >= newcow.milk) {
            cheeses.push(newcow.milk / 2)
            newcow.milk = 0
            return cheeses;
        }
    newcow.milk -= int
    cheeses.push(int / 2)   
    }
}




let milcthisCOW = milkACow(cows)

console.log(milcthisCOW(4));
console.log(milcthisCOW(4));
console.log(milcthisCOW(4));
