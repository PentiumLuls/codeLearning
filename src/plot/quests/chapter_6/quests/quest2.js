export const quest2 =
    {
        title: "2",
        text: `LEFT PANEL TEXT`,
        regexps: [],
        regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
        code: `//Cделай мечи для солдат 
//Пять единиц железа = один меч
//Верни количество сделанных мечей

const materials  = [{type:'iron',amount:20},{type:'wood',amount:13},{type:'iron',amount:40}] ;
        
function isIron(material) {
    ////YOUR CODE
}
        
function sumIron(total,iron){
    //YOUR CODE
} 
        
function makeSwords(amount){
    //YOUR CODE
} 
        
const swordFactory = //YOUR CODE
        
terminal.log(swordFactory(materials));`,
        hints: [
            "используй функциональные версии Filter,Reduce в compose",
            "функция isIron должна возвращать true  если это железо ",
            "sumIron возвращает количество железа(прибавляет значение поля amount )",
            "формула расчета количества мечей amount/5",
            "makeSword возвращает количество мечей"

            //выбери только железо
//подсчитай количество железа
        ],
        test: {
            code: ``,


            answer: `//сделай мечи для солдат 
// пять единиц железа = один меч
// верни количество сделанных мечей

const materials  = [{type:'iron',amount:20},{type:'wood',amount:13},{type:'iron',amount:40}] ;
        
function isIron(material) {
    return material.type == 'iron';
}
            
function sumIron(total,iron){
    return total + iron.amount;
} 
            
function makeSwords(amount){
    return amount / 5;
} 
            
const swordFactory = compose(
                             Filter(isIron),
                             Reduce(sumIron,0),
                             makeSwords);
            
terminal.log(swordFactory(materials));`
        }
    };