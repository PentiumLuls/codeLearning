export const quest4 =
    {
        title: "QUEST TITLE",
        text: `LEFT PANEL TEXT`,
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
        `,
        hints: [
            "HINT 1"
        ],
        test: {
            code: `describe("", function() {

               it("should ",function() {
                  expect().toEqual();
               });

            });
                  const report = runSpecs();
                        for (var i = 0; i < report.passed.length; i++) {
                          reporterLog(report.descriptions[i], report.passed[i])
                        }
                        if (report.passed.indexOf(false) === -1) { true } else false;`,


            answer: `RIGHT CODE`
        }
    }