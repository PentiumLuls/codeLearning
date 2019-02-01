function sumMoney(eatCost){
    return (hinduAmount) => {
        return(mouthAmount) => {
             return eatCost * hinduAmount * mouthAmount;
        }
    }
}
const result = sumMoney(50)(100)(3);
console.log(result);
