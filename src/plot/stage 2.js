////// quest 1/////// 
const rectangles = [{color: 'red',width:4,height:4,},
{color: 'black',width:3, height:2,},{color: 'white',width:6,height:9,},
{color: 'black',width:3,height:3,},{color: 'green',width:4,height:7, },
{color: 'black',width:3,height:5,},{color: 'black',width:4,height:2,},];
                    
function isBlack(rectangle) {
    return rectangle.color == 'black';
    };
                                     
const newArr=rectangles.filter(isBlack);






////// quest 2///////  
const persons = [{name:'Aadhi',gender:'male',},{name:'Anvi',gender:'female',},{name:'Kashvi',gender:'female',},
{name:'Shaan',gender:'male',},{name:'Mahika',gender:'female',}]
                    
function isMale(hinduCard) {
        return hinduCard.gender == 'male';
   };
const newArr=persons.filter(isMale); 






////// quest 3///////  
const rectangles = [{color: 'red',width:4,height:4,},
{color: 'black',width:3, height:2,},{color: 'white',width:6,height:9,},
{color: 'black',width:3,height:3,},{color: 'green',width:4,height:7, },
{color: 'black',width:3,height:5,},{color: 'black',width:4,height:2,},];

function perimeter(rectangle) {
    return rectangle.width*2 + rectangle.height*2;
}
const perimeters=rectangles.map(perimeter);





////// quest 4 //////
const persons = [{gender: 'female',armor: false},{gender: 'male',armor: true},{gender: 'male',armor: false},
{gender: 'male',armor: false},]

function equipArmor(hindu) {
    return {
        ...hindu,
        armor: true
    };
}


const armoredHindu=persons.map(equipArmor)




////// quest 5 max /////// 
const numbers = [10,25,18,133,36,100]

function max(a, b) {
    return a < b ? b : a;
}

const maxNumber = numbers.reduce(max, 0);

/// reduce sum
////// quest 6 reduce tutorial 2 /////// 
const numbers = [10,25,18,133,36,100]

function sum(a, b) {
    return a + b ;
}

const total = numbers.reduce(sum, 0);




/// reduce counter ['name1', 'name2', 'name2', 'name4'] => {'name1': 1, 'name2': 2, 'name4': 1}
////// quest 7 сюжет reduce /////// 
const  names = ['Anbu','Chetan', 'Farid', 'Chetan','Farid','Chetan','Chetan'] 
function counter(names,name) {

    if(! (name in names) ){
        names[name]= 1;
      }

    else{
        names[name] += 1;
      }
    return namesAmount; 
}

const result = names.reduce(counter,{})



