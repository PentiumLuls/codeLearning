const compose = (...fns) => (arg) => 
  fns.reduce((composed, f) => f(composed),arg)


function Filter(callback) {
    return (mass) => mass.filter(callback)
}
function Reduce(callback,...arg) {
    return (mass) => mass.reduce(callback,...arg)
}
function Map(callback) {
      return (mass) => mass.map(callback)
}


const persons = [{legion: 26, weapons: ['stick', 'bow']},{legion: 1, weapons: ['sword', 'bow']},
 {legion: 26, weapons: ['stick',]},{legion: 1, weapons: ['spear']}];

const weapons2 = ['sword', 'spear'];

function equipWeapons(weapons) {
    return (hindu) => {

        const newHindu = {...hindu};
        newHindu.weapons = newHindu.weapons.concat(weapons);


        return newHindu;
    }
}

function disEquipWeapons(hindu) {
    newHindu = {...hindu}
    newHindu.weapons = []
    return newHindu
}

function isLegion(legionNum) {
    return (hindu) => {
        return hindu.legion == legionNum;
    }
}


const equipWeaponLeg26 = equipWeapons(weapons2);
const isLegion26 = isLegion(26);

const createLegion26 = compose(
    Filter(isLegion26),
    Map(disEquipWeapons),
    Map(equipWeaponLeg26)
)

console.log(createLegion26(persons))


