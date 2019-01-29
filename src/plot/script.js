const rectangles = [{color: 'red',width:4,height:4,},
{color: 'black',width:2, height:2,},{color: 'white',width:6,height:9,},
{color: 'black',width:3,height:3,},{color: 'black',width:4,height:4, },
{color: 'black',width:5,height:5,},{color: 'white',width:4,height:2,},{color: 'red',width:5,height:5,}];

function isBlack(rectangle) {
    return rectangle.color == 'black';
    };

function perimeter(rectangle) {
        return rectangle.width*2 + rectangle.height*2;
    }  
function max(a, b) {
        return a < b ? b : a;
    } 

const maxNumber = rectangles.filter(isBlack).map(perimeter).reduce(max, 0);      
   

console.log(maxNumber)