import React from 'react';

export const notes = [[
    {
        title: "Добро пожаловать, герой",
        text: [
            {
                title: "Пролог",
                text: `Мир ООП - грязный и жестокий. Напротив же, мир функционального программирования предлагает 
                невиданные ранее возможности.
                Этот квест поможет тебе освоить функциональное программирование. 
                Тебе предстоит спасти жителей этого мира от грязных лап демона Мефисто, поработившего нагрешивших бедолаг.
                Место действий - "Функционилище" - последнее пристанище ООПешников. Прошу проходить, для тебя мы подготовили
                особый котел, десу~`
            },
            {
                title: "Окно приветствия",
                text: <div><p>В начале некоторых уровней ты сможешь просмотреть полезную информацию по этому уровню:
                    например, туториал к нему. Желаешь посмотреть еще раз? Не беда! Всю эту информацию ты сможешь найти
                    в своём журнале</p>
                    <img className="image-flex" src={require("../img/tutorialImg/popup.jpeg")}/></div>
            },
            {
                title: "Левая панель",
                text: <div><p>На левой панели находится список квестов и переключатели между журналом и редактором кода.
                    Ты можешь свободно переключаться между квестами, которые тебе доступны"</p>
                    <img className="image-flex" src={require("../img/tutorialImg/leftpanel.png")}/></div>
            },
            {
                title: "Квесты",
                text: <div><p>В редакторе кода ты можешь писать свой код. Чтобы запустить его, нажми кнопку 'Run code'
                    или комбинацию ctrl+shift+x. Если задание выполнено правильно, разблокируется следующий квест.
                    Запутался в коде? Нажми кнопку 'Reset'. После прохождения квеста появится кнопка NEXT LEVEL, как
                    думаешь, что она делает?</p>
                    <img className="image-flex" src={require("../img/tutorialImg/codeEditor.png")}/></div>
            },
            {
                title: "Терминал",
                text: <div><p>Результат запуска твоего кода будет отображаться здесь. Также ты можешь очистить его с
                    помощью нажатия кнопки 'Clear terminal'</p>
                    <img className="image-flex" src={require("../img/tutorialImg/terminal.png")}/></div>
            },
            {
                title: "Чат",
                text: <div><p key={0}>В чате к тебе будут обращаться сюжетные персонажи. Если возле чата появляется
                    надпись
                    "Новое сообщение", значит ты все еще кому-то интересен, десу~</p>
                    <img className="image-flex" src={require("../img/tutorialImg/chatNewMessage.png")}/>
                    <p key={1}>Также ты можешь запросить здесь подсказку. В режиме журнала чат недоступен.</p>
                    <img className="image-flex" src={require("../img/tutorialImg/chat.png")}/></div>
            },
            {
                title: "Оповещения",
                text: <div><p>Время от времени, ты будешь получать уведомления: награда за прохождение уровня, получение
                    достижения,
                    и тому подобное...</p>
                    <img className="image-flex" src={require("../img/tutorialImg/alertMessage.png")}/></div>
            },
            {
                title: "Журнал",
                text: <div><p>Если будет нужна помощь, заглядывай в журнал. Здесь ты сможешь найти различные руководства
                    и туториалы к уровням</p>
                    <img className="image-flex" src={require("../img/tutorialImg/journal.png")}/></div>
            },
        ]
    },
    {
        title: "6 функциональных законов",
        text: [
            {
                title: "Не загрязняй функцию свою",
                text: `Функции, как и вы люди, хотят быть чистыми. И если функция чувствует что она стала грязной,
            она обязательно закидает тебя ошибками. Что же далает функцию грязной? Представьте,
            что вы - функция, и вокруг вас коробка (область видимости), а вокруг нее куча грязи.
            Если вы хотите взять что-то извне, вам нужно сходить за ним через грязь, и тоже самое,
            если вы хотите что-то снаружи изменить. И ведь все, чего вы хотите в этой жизне,
            это просто жить в коробке и никого не трогать. Когда вы кому-то нужны, они закинули вам какие то вещи,
            вы что-то с ними сделали и выкинули другой результат (новые вещи)`,
            },
            {
                title: "Делай функцию свою или первокласной или высшей",
                text: `Запомни раз и навсегда, есть 2 типа функций : одни хотят править,
            а другие хотят что бы правили ими.`,
            },
            {
                title: "Весь мир это функция, а мы в ней константы",
                text: `Все вокруг константы: ты, твои друзья, родственники. Представь если бы
            все твои друзья постоянно меняли имена и место жительства,
            смог бы ты запомнить все изменения? Нужен друг с другим именем?
            Не проблема, создай нового.`,
            },
            {
                title: "Лямбда всему голова",
                text: `Как я и говорил ранее, весь мир это функция, так вот, я не шутил. Функции везде,
            и они могут передавать друг другу значения - это операция карирования. Так вот, карирование -
            это как конвейер. По конвейеру едут данные, и в каждой функции (чем дальше едет конвейер)
            мы добавляем новые данные.`,
            },
            {
                title: "Рекурсия - лучшый друг программиста",
                text: `Забудь о циклах, вроде for и while!!! Зачем они тебе, если можно все заменить на рекурсию,
            и возможностей больше, и побочных еффектов можно избежать`,
            },
            {
                title: "Артефакты спасут мир",
                text: `Только истинный последователь сможет овладеть артефактом, который поможет ему
            в выполнении тысяч вселенских задач и спасении от нарушения функциональных грехов.
            А за легендой, однажды прийдет герой, который соберет все 3 артефакта и разобьет оковы
            с вечных рабов преисподней и подарит миру свободу`,
            },
        ]
    },
    {
        title: "Чистые функции",
        text: [
            {
                title: "Чистее некуда",
                text: `Чистой называют функцию которая является детерминированой и не имеет побочных еффектов.`,
            },
            {
                title: "Детерминированая?",
                text: `Детерминированой называеться функция, которая при одинаковом наборе входных данных,
                вернет одно и то же значение. Детерминированой является функция slice, в отличие от splice,
                ведь slice возвращает новое значение, а splice мутирует изначальный массив.`,
            },
            {
                title: "Побочные эффекты?",
                text: `Побочными эффектами функции называют взаимодействие функции с окружающим миром. 
                Функция без побочных эффектов может обращаться и изменять данные только внутри себя.`,
            },
            {
                title: "И еще обучение",
                text: <div><p>Вау, ты только-что получил достижение! А теперь живо забери свою награду. Просто кликни
                    на картинку в левой панели</p>
                    <img className="image-flex" src={require("../img/tutorialImg/avatar.png")}/></div>
            },
            {
                title: "Профиль",
                text: <div><p>Это твой профиль, здесь ты сможешь увидеть свою статистику, которая будет влиять на твой
                    игровой процес, и достижения, получение которых, разблокирует новые аватары или просто дает денег</p>
                    <img className="image-flex" src={require("../img/tutorialImg/profile.png")}/></div>
            },
            {
                title: "Смена аватара",
                text: <div><p>Ах да, аватары. За некоторые достижения ты получишь новые аватары, также, некоторые можно
                    купить за сыр. Кто знает, какие секреты скрывают некоторые аватары...</p>
                    <img className="image-flex" src={require("../img/tutorialImg/changeAvatarPopup.png")}/></div>
            },
        ]
    },
    {
        title: "Иммутабельность",
        text: [
            {
                title: "Иммутабельность",
                text: `Неизменяемым (Иммутабельным) называется объект, состояние которого не может быть изменено после 
                создания. Результатом любой модификации такого объекта всегда будет новый объект, при этом старый объект не изменится. `,
            },
            {
                title: "Иммутабельность в JS",
                text: `В JS для клонирования елементов предусмотрено несколько способов, например использовать const newObject = Object.assign({}, object), 
                или использовать spread оператор const newMass = [...mass]. Что-бы обезопасить себя от мутации, обьявляйте переменные при помощи const.`,
            },
            {
                title: "Лучшие методы",
                text: `Так же плохой практикой считается использование методов вроде splice, которые изменяют начальный массив. 
                Вместо них стоит использовать методы вроде filter, map, reduce, которые возращают новый обьект.`,
            },
        ]
    },

    {
        title: "Объединение в отряды",
        text: [
            {
                title: "Что-то про отряды",
                text: `Для большей эффективности, в плане боевой силы, индусы любят объединятся в отряды. В чём заключается эффективность,
                кажется, не знают даже сами индусы. Однако, они так лучше себя чувствуют на поле боя, так как при разбитии
                на отряды складывается иллюзия существования какой-то тактики или стратегии. На деле же вся стратегия заключается
                в том, что ты хардкодишь всех до смерти. Совет да смерть.`,
            },

        ]
    }

],
    [
        {
            title: "Filter. Что и как?",
            text: [
                {
                    title: "Причина использовать filter",
                    text: `Представте что у вас есть массив цифр, и вам нужно оставить в нем только четные.
                           Конечно можно перебирать масив в цыкле, смотреть на то какое число передано и добавлять в новый массив если оно четное(
                           Грустно, не правда ли? Но бородатые дядьки постарались, и придумали filter.`,
                },
                {
                    title: "На что способен filter",
                    text: `Всякий раз когда вам надо отфильтровать массив в JavaScript — встроенный метод для отфильтровки вашего массива это хороший выбор. 
                    filter() даёт вам сделать callback для каждого элемента и вернуть отфильтрованный массив.
                    filter() выполняет callback и проверяет возвращаемое значение. Если значение верное,
                     то оно будет положено в новый массив, если же нет, то оно будет из него исключено.`,
                },
                {
                    title: "Что засунуть в callback",
                    text: `В первой главе вы писали чистые функции, которые принимают значение и возращают true или false, например isBlack.
                            Именно такие ЧИСТЫЕ функции нужно пихать в filter.
                            Также обратите внимание на то, что filter() не трогает существующий массив, он будет возвращать только новый отфильтрованный массив каждый раз.`,
                }
            ]
        },
        {
            title: "Map. Просто и со вкусом",
            text: [
                {
                    title: "Причина использовать map",
                    text: `Когда мы учили filter, мы создали массив с четными числами, а теперь представте что вам их нужно сделать нечетными, прибавить 1.
                           Так, ну мы можем в цыкле for пройтись по старому массиву и к каждому елементу добавить 1. В принципе, мы можем это сделать,
                            но это будет смотреться некрасиво и громостко. Намного проще и понятнее написать 1 строчку с методом map.`,
                },
                {
                    title: "На что способен map",
                    text: `map() берет callback и применяет его на всех элементах массива, но то, что делает его уникальным — это то
                         что он генерирует новый массив, основываясь на существующем массиве. В новый массив попадут значения которые возращает callback
                         принимая каждый елемент массива.`,
                },
                {
                    title: "Что засунуть в callback",
                    text: `В первой главе вы писали чистые функции, которые принимают значение и возращают другое, новое значение, например perimeter.
                            Именно такие ЧИСТЫЕ функции нужно пихать в map.
                            Как и filter(), map() возвращает массив. Указанный callback для map() изменит элементы массива и сохранит их в новый массив
                             по завершении того, как массив будет возвращен как отmapенный массив.`,
                }
            ]
        },
        {
            title: "Reduce, да это жестко",
            text: [
                {
                    title: "Причина использовать reduce",
                    text: `Давайте возьмем самую банальную задачу: получить сумму всех чисел в массиве. Ну тут все просто, делаем
                           цикл for и прибавляем каждый елемент массива в переменную sum. Казалось-бы, куда проще,
                           но тут в игру вступает reduce.`,
                },
                {
                    title: "На что способен reduce",
                    text: `Как можно уже предположить по названию, этот метод используется для того, чтобы сократить массив в одно простое значение.
                    reduce() берет callback, как и любая функция о которой мы говорили. Внутри этого callback мы берем два аргумента sum и elem.
                     sum это последнее вернувшееся значение функции reduce(). Для примера, изначально значение sum будет равно 0, 
                     затем когда запустится callback на первом элементе, он прибавит elem к sum и возвратит значение. 
                     На второй итерации sum значение будет — первый elem + 0, на второй итерации 0 + первый elem + второй elem.`,
                },
                {
                    title: "Что засунуть в callback",
                    text: `В первой главе вы писали чистые функции, которые принимают два значения и возращают одно, например add.
                            Таких функций можно придумать множество.`,
                }
            ]
        },
    ],

    [
        {
            title: "Чейнинг методов",
            text: [
                {
                    title: "БОЛЬШЕ БОЛЬШЕ",
                    text: `Методы map, filter и reduce очень удобны и мощные даже по отдельности, но приставте какие возможности можно получить
                    если использовать их все вместе...`,
                },
                {
                    title: "Цепочка вызовов",
                    text: `Как вы уже знаете map, filter и reduce возвращают новое значение, а значит мы можем использовать их друг за другом, комбинируя как нашей душе угодно. obj.filter(f).map(f) - такой способ называеться чейнинг методов. Это хороший объектно-ориентированный подход к проектированию. Теперь, если вы посмотрите внимательней, вы заметите, как он работает, и чего ему не хватает.

                    Данные Hello передаются по цепочке совместимых методов, и мы можем использовать сколько угодно методов, пока возвращаемый объект совместим с ними.`,
                },
                {
                    title: "Проблема и её решение",
                    text: `Вышеупомянутая конструкция возможна из-за объекта obj: все методы в цепочке бесполезны без объекта,
                     предоставляющего их. Это грустно. Проблема конкретно здесь и с каждым объектно-ориентированным подходом к
                      проектированию, что все крутится вокруг объектов, все зависит от данных.
                      Но не волнуйтесь, позже мы решим эту проблему, с помощь карирования и частичного применения, но покачто научитесь правильно использовать чейнинг.`,
                }
            ]
        }
    ],

    [
        {
            title: "Частичное применение",
            text: [
                {
                    title: "Шо там частичное?",
                    text: `Предоставление функции с меньшим количеством аргументов, чем она ожидает, называется частичным применением функций.

                    Хотя концепция проста, ее можно использовать для подготовки более сильных функциональных конструкций в нашем повседневном JavaScript.`,
                },
                {
                    title: "Причина использовать",
                    text: `Давайте представим простую задачу з цифрами, там нужно додать 2 числа, такую функцию вы уже писали.
                    Но что если нам нужно несколько раз додавать число, при этом меняеться только второе значение. В нашей старой реализации мы бы писали: add(2, 6); add(2, 5) ... Как видите цыфра 2 постоянно повторяеться. Используя частичное применение мы могли "замкнуть" цыфру 2, и просто писать:
                    add2(6); add2(5) ... Удобно, не правда ли?`,
                },
                {
                    title: "Реализация ЧП",
                    text: `Этот стиль частичного применения не является функционально верным, но я хочу, чтобы вы знали о нем. Пример частичного применения функций с помощью bind():
                    let add = (a, b) => a+b;
                    let incrementBy2 = add.bind(null,2);
                    incrementBy2(6)
                    incrementBy2(5)
                    Вдаваться в подробности не буду, так как такой метод никто не использует, и позже я вас познакомлю с намного лучшем способом.`,
                }
            ]
        },

        {
            title: "Каррирование",
            text: [
                {
                    title: "Карри? Карри я люблю",
                    text: `Это потрясающая техника функционального программирования, которая может быть достигнута в JavaScript
                     из-за его способности создавать функции высшего порядка. Каррирование не является частичным применением функции,
                      но помогает в достижении той же цели более функционально. 
                
                      Предсказуемо: каррированная функция сделана так, что она всегда возвращает другую функцию, 
                      принимающую только один аргумент.
                      
                      Потрясающе: каррированная функция всегда запоминает применяемые аргументы из-за замыкания.
                       И все это выглядит круто, когда написано как лямбда-выражение. 😎
                      
                      Чисто: каррированная функция всегда чиста, так как она генерирует одну и ту же функцию для 
                      одних и тех же входных данных.`,
                },

                {
                    title: "Реализация каррирования",
                    text: `Каррированная версия нашей функции add():
                    
                    let add = x => y => x+y;
                    let incrementBy2 = add(2);
                    increment(5);
                    increment(6);
                    
                    Красиво... В примере используется стрелочные функции, использовать их мы советуем и вам.
                     Но олды могут реализовать это на обычных функциях, выглядить это будет не очень)`,
                }
            ]
        }
    ],

    [
        {
            title: "РЕКУРСИЯ!!!",
            text: [
                {
                    title: "Сам себя не вызовешь, никто не вызовет",
                    text: `Рекурсивной называют функцию которая вызывает сама себя.
                     Многие задачи, которые решаются при помощи рекурсивных функций
                      можно решить и при помощи циклов. Однако есть и задачи, которые решаются 
                      только при помощи рекурсии или их решение иным способом значительно сложнее. 
                      Классическими примерами задач, решаемых при помощи рекурсии, является нахождение чисел Фибоначчи и факториала.`,
                },
                {
                    title: "Пример",
                    text: `Припустим нам нужно вывести числа от n до 0. Для этого нам необходимо вызывать функцию write саму из себя, 
                    выводя перед каждым таким вызовом её аргумент и отнимая от него единицу, пока он не станет равным 
                    нулю и рекурсивные вызовы прекратятся. (exp2.js):
                    
                    function write(n) {
                      if(n >= 0) {
                        console.log(n);
                        write(n - 1);
                      }
                    }`,
                }

            ]
        },

        {
            title: "Сложно и с хвостом",
            text: [
                {
                    title: "Хвостовая рекурсия",
                    text: `Хвостовая рекурсия — специальный случай рекурсии, при котором рекурсивный вызов 
                    функцией самой себя является её последней операцией. Подобный вид рекурсии примечателен тем, 
                    что может быть легко заменён на итерацию, что реализовано во многих оптимизирующих компиляторах.`,
                },

                {
                    title: "Сложная рекурсия",
                    text: `Возможна чуть более сложная схема: функция A вызывает функцию B, 
                    а та в свою очередь вызывает A. Это называется сложной рекурсией. 
                    Она используеться не столь часто, но незаменима в сложных задачах.`,
                }
            ]
        }
    ],
    [{
        title: "Композия",
        text: [
            {
                title: "Композиция",
                text: `Композиция - это последовательное применение функций ,
                результат предыдущей используеться в следующей функции.
                С помощью композиции сложную функцию можно превратить в последовательное применение нескольких.
                Это существенно упрощает модификацию и читаемость кода.`,
            },
            {
                title: "Сompose",
                text: `Функция compose принимает произвольное количество функций  и аргумент который будут 
                обрабатывать эти функции в качетве параметра.`,
            },
            {
                title: "Функциональные варианты filter,map,reduce",
                text: `Они возвращают такие же результаты что и одноименные методы массива ,только они работают
                через каррирование (принимают сначала функцию,а потом массив).`,
            },

        ]
    },
        {
            title: "Использование своих функций",
            text: [
                {
                    title: "",
                    text: `В compose можно использовать не только функции для filter,map,reduce но и свои.
                    Например функция showName которая возвращает поле name 
                    обьекта который передаеться в параметр функции.`,
                },
            ]
        }
    ]


];