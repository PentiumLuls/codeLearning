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
const cow = {
    milk: 15
}

function MilkCow(cow){
    
    return Milk(cow.milk)
}

function Milk(milk){
    return(milk == 0) ? 0 : 5 + Milk(milk-1)
}


///// quest 3 ////

function pow(a,n){
    if(n === 1) return a;
    return a * pow(a,n-1);
}
function openpowl(a,b){
 return pow(a,2) +(2 * a * b) + pow(b,2)
}
console.log(openpowl(6,-2))

//// quest 4 ///



const cows = [{milk:10},{milk:5},{milk:0}]

function milkCows(cows,n){
    if(n === cows.length ) return 0;
    return Milk(cows[n].milk) + milkCows(cows,n+1);
}

function Milk(milk){
    return(milk == 0) ? 0 : 5 + Milk(milk-1)
}



//// quest 5 ////
function pow(total,n,a){
    if(n === 0) return total;
    return pow(total*a,n-1,a);
}

function factorial(a,total){
    if(a === 1) return total;
    return factorial(a-1,total*a)
}
//// quest 5 ///
