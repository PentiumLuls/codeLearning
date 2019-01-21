var cow = {
    milk: 10
}

function milkACow(cow) {
    let newcow = Object.assign({}, cow);
    return function(int) {
        if (int >= newcow.milk) {
            newcow.milk = 0
            return newcow;
        }
        newcow.milk -= int   
    }
}




let milcthisCOW = milkACow(cow)

console.log(milcthisCOW(4));
console.log(milcthisCOW(4));
console.log(milcthisCOW(4));
