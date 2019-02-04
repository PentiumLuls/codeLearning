export const quest6 =
    {
        title: "Начало легенды",
        text: `Производство процветает, вырученные деньги вы решили вложить в развитие деревни, после чего она смогла гордо называться посёлком городского типа. Вас выбирают главой, однако у вашего индусского брата опять возникла проблема. Ему нужно посчитать общую массу сыра, который дают коровы, дающие больше чем 5 килограммов сыра. Вы в замешательстве, но ваш брат и не думает посвящать вас в детали. Вместо этого он даёт вам какие-то таинственные вещички, намекая, что используя их вы сможете решить эту задачу быстрее и эффективнее. Вы решаетесь использовать эти вещички.`,
        regexps: [/(return)/g, /(reduce)/g],
        code: "//Hello may frend, my boss please me to create functional summ thet will be calculate\n" +
            "//mass of stones. I must to get to number of integer and returne summ.\n" +
            "//boss say thet i must read first lav\n" +
            "let stonesMass = [1, 3, 5]\n" +
            "\n" +
            "function calculateSumm(stones) {\n" +
            "    //???\n" +
            "}",
        hints: [
            "hint sample",
            "hint sample2"
        ],
        test: {
            code: "calculateSumm(stonesMass)",
            answer: "stonesMass.reduce((a,b) => {return a+b})"
        }
    };
