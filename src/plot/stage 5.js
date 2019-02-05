/////  quest 1 //////
function pow(a,n){
    if(n === 1) return a;
    return a * pow(a,n-1);
}


function factorial(a){
   if(a === 1) return 1;
   return a * factorial(a-1);
}



////  quest 2  ////
////fib
function MilkCow(n){
   
        return n <= 1 ? n : MilkCow(n - 1) + MilkCow(n - 2);
    
}

///function Milk(milk){
///   return(milk == 0) ? 0 : 5 + Milk(milk-1)
///}



//// quest 3 ///



const cows = [{milk:10},{milk:5},{milk:0}]

function milkCows(cows,n){
    if(n === cows.length ) return 0;
    return Milk(cows[n].milk) + milkCows(cows,n+1);
}

/*function Milk(milk){
    return(milk == 0) ? 0 : 5 + Milk(milk-1)
}*/

function Milk(milk){
   return 5 * milk
}




//// quest 4 ////
function powHelper(total,n,a){
    if(n === 0) return total;
    return powHelper(total*a,n-1,a);
}

function factorialHelper(a,total){
    if(a === 1) return total;
    return factorialHelper(a-1,total*a)
}

function pow(a,n){
   return powHelper(1,n,a);
}

function factorial(a){
   return factorialHelper(a,1)
}
//// quest 5 ///
const cow = {milk:10}

function makeCheese(cow){
    const newcow = {...cow};
    const cheeses = [];
    return makeCheeseHelper(newcow,cheeses,1)
    
}

function makeCheeseHelper(cow,cheeses,e){
    if(cow.milk == 0) return cheeses;
    else{
        
        cheeses.push((2*e).toFixed(1))
        cow.milk -= 2;
        return makeCheeseHelper(cow,cheeses,e-0.20);
    }
}
console.log(makeCheese(cow))


//// quest 6 ///
const firms = [{name:'name1',cheeseWeight:5},{name:'name2',cheeseWeight:45},{name:'name3',cheeseWeight:19}]

function maxWeight(firms,n,maxobj){
    if(n ==  firms.length) return maxobj;
    return maxWeight(firms,n+1,maxWeightHelper(firms[n],maxobj))
}

function maxWeightHelper(A, B) {
    return A.cheeseWeight < B.cheeseWeight ? B : A;
}

function findWinner(firms){
    return maxWeight(firms,0,firms[0]).name;
}
console.log(findWinner(firms))

////  quest 7 ////
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




