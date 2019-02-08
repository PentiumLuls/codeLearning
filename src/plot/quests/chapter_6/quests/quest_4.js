export const quest4 =
{
    title: "4",
    text: `Кузнецы наконец-то выковали высококачественное оружие и тебе нужно заменить старье, 
имеющееся у индусов, на новую экипировку.
Ты со всех сил пытаешься повысить свои шансы.`,
    regexps: [],
    regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
    code: `class ToolBox {
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

//выбери только солдат из 26 легиона
//сними с них все оружие
//экипируй их оружием из weapons2
//возврати массив экипированных солдат

const persons = [{legion: 26, weapons: ['stick', 'bow']},{legion: 1, weapons: ['sword', 'bow']}, 
{legion: 26, weapons: ['stick',]},{legion: 1, weapons: ['spear']}];

const weapons2 = ['sword', 'spear'];
function isLegion(legionNum) {
    return (hindu) => {
        return hindu.legion == legionNum;
    };
}

function disEquipWeapons(hindu) {
    //YOUR CODE;
}

function equipWeapons(newWeapons) {
    //YOUR CODE;
}

function disEquipWeapons(hindu) {
    //YOUR CODE;
}



const equipWeaponLeg26 = equipWeapons(weapons2);
const isLegion26 = isLegion(26);

const createLegion26 = //YOUR CODE;

terminal.log(createLegion26(persons));`,
    hints: [
        "функция disEquipWeapons возвращает нового индуса с пустым массивом оружия",
        "функция equipWeapons принимает через карирование сначала массив оружия потом индуса.Создает нового ииндуса и добавляет в его поле weapons аргумент newWeapons с помощью concat"
    ],
    test: {
        code: ``,


        answer: `class ToolBox {
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
                    
//выбери только солдат из 26 легиона
//сними с них все оружие
//экипируй их оружием из weapons2
//возврати массив экипированных солдат

const persons = [{legion: 26, weapons: ['stick', 'bow']},{legion: 1, weapons: ['sword', 'bow']}, 
{legion: 26, weapons: ['stick',]},{legion: 1, weapons: ['spear']}];
        
const weapons2 = ['sword', 'spear'];
function disEquipWeapons(hindu) {
    newHindu = {...hindu}
    newHindu.weapons = []ж
    return newHindu
}       
function equipWeapons(newWeapons) {
    return (hindu) => {       
        const newHindu = {...hindu};
            newHindu.weapons = newHindu.weapons.concat(newWeapons)   
            return newHindu;
            }
        }
                
function isLegion(legionNum) {
    return (hindu) => {
        return hindu.legion == legionNum;
    }
}
        
        
const equipWeaponLeg26 = equipWeapons(weapons2);

const isLegion26 = isLegion(26);
        
const createLegion26 = ToolBox.compose(
            ToolBox.Filter(isLegion26),
            ToolBox.Map(disEquipWeapons),
            ToolBox.Map(equipWeaponLeg26)
            )
        
terminal.log(createLegion26(persons));`
    }
}