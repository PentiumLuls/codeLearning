export const quest2 =
    {
        title: "Масштабная дискриминация",
        text: `it’s relieving to see that you are actually able to code.
                 It seems to me that the reason you were sent here lies in the lack of proper education,
                  which is a totally fixable issue.Now you have the opportunity to optimize the code you wrote before.
                   Remember how you sorted these people by their gender to send them to war with Mephisto? 
                   That was extremely sexist of you, but now you can sort all of them at once using filter.
                    Efficient, right?`,
        regexps: [/(filter)/g],
        regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
        code: `//Return the array with only males.

const persons = [{name:'Aadhi',gender:'male',},{name:'Anvi',gender:'female',}
,{name:'Kashvi',gender:'female',},{name:'Shaan',gender:'male',}
,{name:'Mahika',gender:'female',}];                    

function isMale(hindu) {
    return hindu.gender === 'male';
}

const men = //YOUR CODE
terminal.log(men);`,
        hints: [
            'Иcпользуй isMale в filter чтобы найти только мужчин'
        ],
        test: {
            code: `describe("2", function() {

               it("should return new array of men",function() {
                  expect(men).toEqual(persons.filter(isMale));
               });

            });
                  const report = runSpecs();
                        for (var i = 0; i < report.passed.length; i++) {
                          reporterLog(report.descriptions[i], report.passed[i])
                        }
                        if (report.passed.indexOf(false) === -1) { true } else false;`,

            answer: `//Return the array with only males.

const persons = [{name:'Aadhi',gender:'male',},{name:'Anvi',gender:'female',}
,{name:'Kashvi',gender:'female',},{name:'Shaan',gender:'male',}
,{name:'Mahika',gender:'female',}];                    

function isMale(hindu) {
    return hindu.gender === 'male';
}

const men = persons.filter(isMale);
terminal.log(men);`
        }
    };