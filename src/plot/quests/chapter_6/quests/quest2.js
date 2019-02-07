export const quest2 =
    {
        title: "2",
        text: `LEFT PANEL TEXT`,
        regexps: [],
        regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
        code: `//Cделай мечи для солдат
//Пять единиц железа = один меч
//Верни количество сделанных мечей

const materials  = [
    {type:'iron',amount:20},
    {type:'wood',amount:13},
    {type:'iron',amount:40}
];

class ToolBox { 
    static compose(...fns) { 
        return (arg) =>
            fns.reduce((composed, f) => f(composed), arg);
    }

    static Filter(callback) {
        return (mass) => mass.filter(callback);
    }

    static Reduce(callback, ...arg) {
        return (mass) => mass.reduce(callback, ...arg);
    }

    static Map(callback) {
        return (mass) => mass.map(callback);
    }
}

function isIron(material) {
    return material.type == 'iron';
}

function sumIron(total, iron) {
    return total + iron.amount;
}

function makeSwords(amount) {
    return amount / 5;
}

const swordFactory = ToolBox.//YOUR CODE
terminal.log(swordFactory(materials))`,
        hints: [
            "используй функциональные версии Filter,Reduce в compose",
        ],
        test: {
            code: ``,


            answer: `//Cделай мечи для солдат
//Пять единиц железа = один меч
//Верни количество сделанных мечей

const materials  = [
    {type:'iron',amount:20},
    {type:'wood',amount:13},
    {type:'iron',amount:40}
];

class ToolBox { 
    static compose(...fns) { 
        return (arg) =>
            fns.reduce((composed, f) => f(composed), arg);
    }

    static Filter(callback) {
        return (mass) => mass.filter(callback);
    }

    static Reduce(callback, ...arg) {
        return (mass) => mass.reduce(callback, ...arg);
    }

    static Map(callback) {
        return (mass) => mass.map(callback);
    }
}

function isIron(material) {
    return material.type == 'iron';
}

function sumIron(total, iron) {
    return total + iron.amount;
}

function makeSwords(amount) {
    return amount / 5;
}

const swordFactory = ToolBox.compose(
                            ToolBox.Filter(isIron),
                            ToolBox.Reduce(sumIron,0),
                            makeSwords);
terminal.log(swordFactory(materials))`
        }
    };