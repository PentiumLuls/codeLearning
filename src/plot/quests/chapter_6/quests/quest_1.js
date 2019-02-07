export const quest1 =
    {
        title: "QUEST TITLE 1",
        text: `LEFT PANEL TEXT`,
        regexps: [],
        regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
        code: `
        
// найди максимальный периметр черного прямоугольника;
const rectangles = [{color: 'red',width:4,height:4,},
{color: 'black',width:2, height:2,},{color: 'white',width:6,height:9,},
{color: 'black',width:3,height:3,},{color: 'black',width:4,height:4, },
{color: 'black',width:5,height:5,},{color: 'white',width:4,height:2,},{color: 'red',width:5,height:5,}];
const compose = (...fns) => (arg) => 
  fns.reduce((composed, f) => f(composed),arg)


function Filter(callback) {
    return (mass) => mass.filter(callback);
}

function Reduce(callback,...arg) {
    return (mass) => mass.reduce(callback,...arg);
}

function Map(callback) {
      return (mass) => mass.map(callback);
}

function isBlack(rectangle) {
    return rectangle.color == 'black';
};
        
function perimeter(rectangle) {
    return rectangle.width*2 + rectangle.height*2;
}  
const result        `,
        hints: [
            "используй функцию compose",
             "используй функциональные версии Filter,Map,Reduce в compose"
        ],
        test: {
            code: ``,


            answer: `const rectangles = [{color: 'red',width:4,height:4,},
            {color: 'black',width:2, height:2,},{color: 'white',width:6,height:9,},
            {color: 'black',width:3,height:3,},{color: 'black',width:4,height:4, },
            {color: 'black',width:5,height:5,},{color: 'white',width:4,height:2,},{color: 'red',width:5,height:5,}];
            
            function isBlack(rectangle) {
                return rectangle.color == 'black';
                };
            
            function perimeter(rectangle) {
                    return rectangle.width*2 + rectangle.height*2;
            }  
            
            const result = compose (
                           Filter(isBlack),
                           Map(perimeter),
                           Reduce(Math.max)
                           )(rectangles)`
        }
    };