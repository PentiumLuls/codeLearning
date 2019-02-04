export const quest5 =
    {
        title: "Девушка функционального поведения",
        text: `Нет ничего важнее для функционирующей общины чем институт семьи. 
                Но твои воины-индусы достойны только лучшего.
                Всем известно, что лучших индусских девушек зовут Анви и ни одна порядочная девушка не будет слушать буржуйскую музыку.
                Отбери девушек по этим параметрам, а потом верни самую молодую из них.`,
        regexps: [/(filter)/g, /(reduce)/g],
        regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
        code: `//Найди девушку с подходящими параметрами: Имя - Anvi,
//Любимая музыка - indian, с минимальным возрастом

const persons = [
    {name:'Anvi', music:'Indian', age:56},
    {name:'Kiara',music:'Indian', age:40},
    {name:'Anvi', music:'American', age:14},
    {name:'Anvi', music:'Indian', age:21},
    {name:'Ghuihad', music:'Indian', age:8},
    {name:'Anvi', music:'American',age:29}
];

function isAnvi(hindu) {
   return  hindu.name == 'Anvi';
}

function isLikesIndianMusic(hindu) {
    //YOUR CODE
}

function minAge(hinduA, hinduB) {
    //Должен возвратить индуску с меньшим возрастом
}
const recommendedWife = //YOUR CODE
terminal.log(recommendedWife);`,
        hints: [
            "Try using reduce to find person with min age"
        ],
        test: {
            code: `function isAnviTEST(hindu) {
   return  hindu.name == 'Anvi';
}

function isLikesIndianMusicTEST(hindu) {
    return hindu.music == 'Indian';
}

function minAgeTEST(hinduA, hinduB) {
    return hinduA.age < hinduB.age ? hinduA : hinduB;
}
                    describe("5", function() {

               it("should return person with said parameters",function() {
                  expect(recommendedWife).toEqual(persons.filter(isAnviTEST).filter(isLikesIndianMusicTEST).reduce(minAgeTEST));
               });

            });
                  const report = runSpecs();
                        for (var i = 0; i < report.passed.length; i++) {
                          reporterLog(report.descriptions[i], report.passed[i])
                        }
                        if (report.passed.indexOf(false) === -1) { true } else false;`,


            answer: `//Найди девушку с подходящими параметрами: Имя - Anvi,
//Любимая музыка - indian, с минимальным возрастом

const persons = [
    {name:'Anvi', music:'Indian', age:56},
    {name:'Kiara',music:'Indian', age:40},
    {name:'Anvi', music:'American', age:14},
    {name:'Anvi', music:'Indian', age:21},
    {name:'Ghuihad', music:'Indian', age:8},
    {name:'Anvi', music:'American',age:29}
];

function isAnvi(hindu) {
   return  hindu.name == 'Anvi';
}

function isLikesIndianMusic(hindu) {
    return hindu.music == 'Indian';
}

function minAge(hinduA, hinduB) {
    return hinduA.age < hinduB.age ? hinduA : hinduB;
}
const recommendedWife = persons
               .filter(isAnvi)
               .filter(isLikesIndianMusic)
               .reduce(minAge);
terminal.log(recommendedWife);`
        }
    };