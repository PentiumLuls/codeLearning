const cow = {milk:10}

function makeCheese(cow,n){
    const newcow = {...cow};
    const cheeses = [];
    return makeCheeseHelper(newcow,cheeses,0.4,n)
    
}

function makeCheeseHelper(cow,cheeses,e,n){
    if(cow.milk == 0 || n == 0) return cheeses;
    else{
        
        cheeses.push((e).toFixed(1))
        cow.milk -= 1;
        return makeCheeseHelper(cow,cheeses,e*1.1,n-1);
    }
}
console.log(makeCheese(cow,5))