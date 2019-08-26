export const quest6 =
    {
        title: "QUEST TITLE",
        text: `LEFT PANEL TEXT`,
        regexps: [],
        regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
        code: `CODE IN EDITOR`,
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