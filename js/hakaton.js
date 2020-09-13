var curChild;
var
    peoples = [
        ["test", "Вася", "Петров", ["Доктор", 25, 90, 0]],
        ["test1", "Илья", "М", ["Парикмахер", 33, 0]],
    ];

var
    profsList = [
        ["Милиционер", [
            ["Бег", "Поможет задержать преступника"],
            ["Юриспруденця", "Научит как правильно бить преступника"],
            ["Взяточничество", "Приятное дополнение к зарплате"],
        ]],
        ["Доктор", [
            ["Анатомия", "Для лечения"],
            ["Математика", "Поможет считать трупы в морге"],
            ["Тема3", "Описание 3"],
        ]],
        ["Парикмахер", [
            ["Ножи", "Описание цумаывалопрвдлпор"],
            ["Скальпы", "Сдирать скальпы с бледнолицых"],
        ]],
        ["Повар", [
            ["Людоедство", "Ням-ням"],
            ["Кипячение", "чая"],
        ]],
        ["Домохозяйка", [
            ["Сериалы", "Рабыня Изаура, Богатые тоже плачут"],
            ["Сплетни", "Под землею горд строють, так говорят на случай ядерной войны..."]
        ]],
        ["Пожарный", [
            ["Поджигание", "описание"],
            ["Плавание", "Стиль 'топор в проруби'"],
        ]],
        ["Учитель", [
            ["Порка", "Как Алешу Пешкова, по субботам"],
            ["Обучение", "Это не обязательно"]
        ]],
        ["Рабочий", [
            ["Устройство лопаты", "Черенок"],
            ["Ремонт сантехники", "Прочистка труб разного диаметра и назначения..."],
            ["Немецкие домохозяйки", "Врачиха + сантехник = к/ф \"Афоня\""]
        ]]
    ];


function showAlert(message) {
    $('.alert')
        .html(title)
        .alert();
}

function hideJombotrone() {
    $('.jumbotron').slideUp();
}

function showJombotrone(title, message) {
    $('.jumbotron .title').html(title)
    $('.jumbotron p.message').html(message)
    $('.jumbotron').slideDown();
}

function showModal(title, message) {
    $('.modal .modal-content .modal-title').html(title);
    $('.modal .modal-content .modal-body').html(message);
    $('.modal').modal({
        keyboard: true
    });
}

function onTestEnd() {
    $(".prof1,.prof").hide();
    $(".result").show();
}

function loadMenu1() {
    $(".board").show();
    $(".menu.menu1").fadeIn();
    $(".menu.menu1 .item")
        .unbind()
        .on('click', function (ev) {
            menu1ItemClick(this, ev)
        });

    showJombotrone("Шаг выбора профессии",
        "В данном меню ученику необходимо выбрать к какой профессии он желает двигаться в учебе.");
}

function showLogin() {
    $(".login-button").unbind();
    $(".login").fadeIn(function () {
        $(".login-input").focus();
    });
    $(".login-button").on("click", function (ev) {
        ev.preventDefault();
        var name = $(".login .login-input").val();
        var i = 0;
        while (peoples[i][0] != name && i < peoples.length - 1) {
            i++;
        }
        if (peoples[i][0] == name) {
            curChild = peoples[i];
            $(".login").fadeOut(function () {
                loadMenu1();
            });
        } else
            showModal("Ошибка входа", "Данный логин не найден");
    });
}

function menu1ItemClick(item, ev) {
    $(".menu.menu1").fadeOut(function () {
        hideJombotrone();
        $(".menu.menu1").unbind();
        showMenu2(item);
    });
}

function showMenu2(clickedItem) {
    var board = $(".menu.menu2");
    var it = $(".menu.menu2 div");
    it.append("<div>Навыки, которые необходимо изучить для получения профессии</div><br>")
    var id = $(clickedItem).attr("itemid");
    var img = $(clickedItem).children("img").attr("src");
    var navyki = profsList[id];
    console.log("navyki", navyki);
    var n = navyki[1].length;
    var html = "<div style=\"font-size: 30pt;display: inline-block;\"><img src=\"" + img + "\"><br>" + navyki[0] + "</div>"+
       "<div style='display: inline-block;vertical-align: top;'>";

    for (let i = 0; i < n; i++) {
        console.log("navyki[1][i]", navyki[1][i]);
        html += "<div style='font-size: 25pt;vertical-align: top;margin: 16px 10px 16px 30px;'>" + navyki[1][i][0] + "<br><div style='font-size: 12pt;color: #9acfea;'>" + navyki[1][i][1] + "</div></div>";
    }
    html += "</div>";
    board.append(html);
    board.fadeIn(function () {
        showJombotrone("Выбранная профессия/цель", "Здесь отображается выбранная профессия, " +
            "какие навыки надо изучить и степень готовности<br>" +
            "изучения навыка, выстваляемая преподавателем");
    });
}

var prof = [
    'инженер-техник',
    'инженер-контролер',
    'вязальщик',
    'санитарный врач',
    'повар',
    'наборщик',
    'фотограф',
    'заведующий магазином',
    'чертежник',
    'дизайнер',
    'философ',
    'психиатр',
    'ученый-химик',
    'бухгалтер',
    'редактор научного журнала',
    'адвокат',
    'лингвист',
    'переводчик художественной литературы',
    'педиатр',
    'статистик',
    'организатор воспитательной работы',
    'председатель профсоюза',
    'спортивный врач',
    'фельетонист',
    'нотариус',
    'снабженец',
    'перфоратор',
    'карикатурист',
    'политический деятель',
    'писатель',
    'садовник',
    'метеоролог',
    'водитель троллейбуса',
    'медсестра (фельдшер)',
    'инженер-электрик',
    'секретарь-машинистка',
    'маляр',
    'художник по металлу',
    'биолог',
    'главный врач',
    'телеоператор',
    'режиссер',
    'гидролог',
    'ревизор',
    'зоолог',
    'зоотехник',
    'математик',
    'архитектор',
    'работник ИДН',
    'счетовод',
    'учитель',
    'командир общественных дружинников',
    'воспитатель',
    'художник по керамике',
    'экономист',
    'заведующий отделом',
    'корректор',
    'критик',
    'завхоз',
    'директор',
    'радиоинженер',
    'специалист по ядерной физике',
    'наладчик',
    'механик',
    'агроном',
    'редседатель совхоза',
    'модельер-закройщик',
    'декоратор',
    'археолог',
    'эксперт',
    'работник музея',
    'консультант',
    'ученый',
    'актер',
    'логопед',
    'стенографист',
    'врач',
    'дипломат',
    'главный бухгалтер',
    'директор',
    'поэт',
    'психолог',
    'архивариус',
    'скульптор',
];
let one1 = [
    prof[0],
    prof[2],
    prof[4],
    prof[6],
    prof[8],
    prof[30],
    prof[32],
    prof[34],
    prof[36],
    prof[30],
    prof[60],
    prof[62],
    prof[64],
    prof[66],
    prof[82],
];
let two1 = [
    prof[1],
    prof[10],
    prof[12],
    prof[14],
    prof[16],
    prof[31],
    prof[38],
    prof[42],
    prof[44],
    prof[46],
    prof[61],
    prof[68],
    prof[70],
    prof[72],
];
let three1 = [
    prof[3],
    prof[11],
    prof[18],
    prof[20],
    prof[22],
    prof[33],
    prof[39],
    prof[44],
    prof[46],
    prof[48],
    prof[71],
    prof[74],
    prof[78],
    prof[81],
];
let four1 = [
    prof[5],
    prof[13],
    prof[14],
    prof[16],
    prof[35],
    prof[43],
    prof[49],
    prof[54],
    prof[56],
    prof[61],
    prof[67],
    prof[69],
    prof[75],
    prof[76],
];
let five1 = [
    prof[7],
    prof[15],
    prof[21],
    prof[25],
    prof[28],
    prof[40],
    prof[45],
    prof[51],
    prof[55],
    prof[58],
    prof[65],
    prof[77],
    prof[79],
    prof[83],
];
let six1 = [
    prof[9],
    prof[19],
    prof[23],
    prof[27],
    prof[29],
    prof[37],
    prof[41],
    prof[47],
    prof[53],
    prof[57],
    prof[59],
    prof[73],
    prof[80],
];
counter = 0;
click = [];

$(document).ready(function () {

    $(".prof").on('click', function (ev) {
        $(".test-title,.prof1").show();
        $(".prof1,.prof")
            .removeClass("btn-success")
            .addClass("btn-primary")

        Array.from(document.querySelectorAll('#prof')).map(it => {
            it.textContent = `${prof[counter]}`;
        });

        Array.from(document.querySelectorAll('#prof1')).map(it => {
            it.textContent = `${prof[counter + 1]}`;
        });
        counter += 2;
        one1.filter(it => {
            if (it === prof[counter]) {
                Array.from(document.querySelectorAll('#far')).map(it => {
                    it.textContent = it.textContent + '+'
                })
            }
        })
        two1.filter(it => {
            if (it === prof[counter]) {
                Array.from(document.querySelectorAll('#faar')).map(it => {
                    it.textContent = it.textContent + '+'
                })
            }
        })
        three1.filter(it => {
            if (it === prof[counter]) {
                Array.from(document.querySelectorAll('#faaar')).map(it => {
                    it.textContent = it.textContent + '+'
                })
            }
        })
        four1.filter(it => {
            if (it === prof[counter]) {
                Array.from(document.querySelectorAll('#faaaar')).map(it => {
                    it.textContent = it.textContent + '+'
                })
            }
        })
        five1.filter(it => {
            if (it === prof[counter]) {
                Array.from(document.querySelectorAll('#faaaaar')).map(it => {
                    it.textContent = it.textContent + '+'
                })
            }
        })
        six1.filter(it => {
            if (it === prof[counter]) {
                Array.from(document.querySelectorAll('#faaaaaar')).map(it => {
                    it.textContent = it.textContent + '+'
                })
            }
        })
        if (counter > prof.length)
            onTestEnd()
    });

    $(".prof1").on('click', function (ev) {
        Array.from(document.querySelectorAll('#prof')).map(it => {
            it.textContent = `${prof[counter]}`;
        });
        Array.from(document.querySelectorAll('#prof1')).map(it => {
            it.textContent = `${prof[counter + 1]}`;
        });
        counter += 2;
        one1.filter(it => {
            if (it === prof[counter + 1]) {
                Array.from(document.querySelectorAll('#far')).map(it => {
                    it.textContent = it.textContent + '+'
                })
            }
        })
        two1.filter(it => {
            if (it === prof[counter + 1]) {
                Array.from(document.querySelectorAll('#faar')).map(it => {
                    it.textContent = it.textContent + '+'
                })
            }
        })
        three1.filter(it => {
            if (it === prof[counter + 1]) {
                Array.from(document.querySelectorAll('#faaar')).map(it => {
                    it.textContent = it.textContent + '+'
                })
            }
        })
        four1.filter(it => {
            if (it === prof[counter + 1]) {
                Array.from(document.querySelectorAll('#faaaar')).map(it => {
                    it.textContent = it.textContent + '+'
                })
            }
        })
        five1.filter(it => {
            if (it === prof[counter + 1]) {
                Array.from(document.querySelectorAll('#faaaaar')).map(it => {
                    it.textContent = it.textContent + '+'
                })
            }
        })
        six1.filter(it => {
            if (it === prof[counter + 1]) {
                Array.from(document.querySelectorAll('#faaaaaar')).map(it => {
                    it.textContent = it.textContent + '+'
                })
            }
        })
        if (counter > prof.length)
            onTestEnd()
    });

    showLogin();
    // loadMenu1();
});
