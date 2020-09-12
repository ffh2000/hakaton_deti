function showModal(title, message) {
    $('.modal .modal-content .modal-title').html(title);
    $('.modal .modal-content .modal-body').html(message);
    $('.modal').modal({
        keyboard: true
    })
}

function onTestEnd() {
    $(".prof1,.prof").hide();
    $(".result").show();
}

function loadMenu1() {
    $(".menu").fadeIn(function () {
    });
    showModal("Шаг выбора профессии",
        "В данном меню ученику необходимо выбрать к какой профессии он желает двигаться в учебе.");
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

    loadMenu1();
});
