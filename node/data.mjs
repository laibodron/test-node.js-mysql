import CyrillicToTranslit from 'cyrillic-to-translit-js';

const cyrillicToTranslit = new CyrillicToTranslit();

cyrillicToTranslit.transform('Какая-то строка', '_').toLowerCase();

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
 
const firstNames = [
    "Абрам",
    "Аввакум",
    "Аввакуум",
    "Август",
    "Августин",
    "Аверкий",
    "Аверьян",
    "Авраам",
    "Адам",
    "Адриан",
    "Азарий",
    "Аким",
    "Алан",
    "Александр",
    "Алексей",
    "Альберт",
    "Альфред",
    "Анатолий",
    "Андрей",
    "Антон",
    "Антоний",
    "Аполлон",
    "Аристарх",
    "Аркадий",
    "Арнольд",
    "Арсен",
    "Арсений",
    "Артем",
    "Артур",
    "Архип",
    "Аскольд",
    "Афанасий",
    "Азамат",
    "Ахмед",
    "Акакий",
    "Азат",
    "Аарон",
    "Алим",
    "Аифал",
    "Авдей",
    "Арис",
    "Ахмет",
    "Андроник",
    "Антип",
    "Артемий",
    "Авдий",
    "Богдан",
    "Борис",
    "Бронислав",
    "Вадим",
    "Валентин",
    "Валерий",
    "Варлаам",
    "Варлам",
    "Василий",
    "Венедикт",
    "Вениамин",
    "Виктор",
    "Вилен",
    "Виссарион",
    "Виталий",
    "Владимир",
    "Владислав",
    "Владлен",
    "Влас",
    "Власий",
    "Всеволод",
    "Вячеслав",
    "Вольдемар",
    "Варфоломей",
    "Валериан",
    "Викентий",
    "Виталиан",
    "Вахтанг",
    "Гавриил",
    "Гарри",
    "Геннадий",
    "Георгий",
    "Герасим",
    "Герман",
    "Глеб",
    "Гордей",
    "Гордий",
    "Григорий",
    "Генрих",
    "Гурам",
    "Галактион",
    "Гурий",
    "Гедеон",
    "Гай",
    "Давид",
    "Даниил",
    "Демьян",
    "Денис",
    "Дмитрий",
    "Дементий",
    "Демид",
    "Дорофей",
    "Донат",
    "Далмат",
    "Евгений",
    "Евдоким",
    "Егор",
    "Емельян",
    "Ермак",
    "Ермолай",
    "Ефим",
    "Ефрем",
    "Еремей",
    "Елизар",
    "Елисей",
    "Евстафий",
    "Елеазар",
    "Евлампий",
    "Ерофей",
    "Епифан",
    "Евграф",
    "Захар",
    "Зиновий",
    "Зосим",
    "Завулон",
    "Ибрагим",
    "Иван",
    "Игнат",
    "Игнатий",
    "Игорь",
    "Изяслав",
    "Илларион",
    "Илья",
    "Иннокентий",
    "Иосиф",
    "Ипполит",
    "Ираклий",
    "Исаак",
    "Исак",
    "Исмаил",
    "Иисус",
    "Ипат",
    "Исай",
    "Иероним",
    "Иона",
    "Иуда",
    "Казимир",
    "Кассиан",
    "Касьян",
    "Ким",
    "Кирилл",
    "Клим",
    "Климент",
    "Козьма",
    "Кондрат",
    "Кондратий",
    "Константин",
    "Корней",
    "Корнелий",
    "Корнилий",
    "Кузьма",
    "Карп",
    "Киприан",
    "Клавдий",
    "Кир",
    "Косма",
    "Кифа",
    "Капитон",
    "Кукша",
    "Лавр",
    "Лаврентий",
    "Лазарь",
    "Лев",
    "Леонид",
    "Лука",
    "Лукьян",
    "Леонтий",
    "Леон",
    "Лукиан",
    "Макар",
    "Максим",
    "Максимилиан",
    "Марк",
    "Матвей",
    "Мирон",
    "Митрофан",
    "Михаил",
    "Модест",
    "Моисей",
    "Мстислав",
    "Мирослав",
    "Мартин",
    "Михей",
    "Мефодий",
    "Марин",
    "Марьян",
    "Натан",
    "Наум",
    "Нестор",
    "Никита",
    "Никифор",
    "Николай",
    "Нил",
    "Назар",
    "Нифонт",
    "Никодим",
    "Никанор",
    "Наркисс",
    "Никандр",
    "Никон",
    "Олег",
    "Осип",
    "Остап",
    "Океан",
    "Павел",
    "Панкрат",
    "Панкратий",
    "Пантелей",
    "Пантелеймон",
    "Петр",
    "Платон",
    "Прохор",
    "Потап",
    "Пров",
    "Прокоп",
    "Пахом",
    "Пантелеимон",
    "Пафнутий",
    "Прокл",
    "Порфирий",
    "Поликарп",
    "Пимен",
    "Парамон",
    "Павлин",
    "Рем",
    "Роберт",
    "Родион",
    "Роман",
    "Ростислав",
    "Руслан",
    "Рафаэль",
    "Рустик",
    "Разумник",
    "Савва",
    "Савелий",
    "Самуил",
    "Святослав",
    "Себастьян",
    "Севастьян",
    "Семен",
    "Сергей",
    "Соломон",
    "Спартак",
    "Станислав",
    "Степан",
    "Симон",
    "Серафим",
    "Самсон",
    "Сидор",
    "Сильвестр",
    "Софрон",
    "Спиридон",
    "Сармат",
    "Тарас",
    "Терентий",
    "Тимофей",
    "Тимур",
    "Тихон",
    "Трофим",
    "Теодор",
    "Трифон",
    "Тимон",
    "Тит",
    "Устин",
    "Фаддей",
    "Федор",
    "Феликс",
    "Филипп",
    "Флор",
    "Фома",
    "Фрол",
    "Феофан",
    "Филарет",
    "Феоктист",
    "Феодосий",
    "Феодот",
    "Филимон",
    "Фортунат",
    "Фока",
    "Харитон",
    "Христофор",
    "Харалампий",
    "Эдуард",
    "Эльдар",
    "Эрик",
    "Эрнест",
    "Эраст",
    "Эмиль",
    "Эммануил",
    "Юлиан",
    "Юлий",
    "Юрий",
    "Юстин",
    "Юстиниан",
    "Яков",
    "Ян",
    "Ярослав",
    "Ярополк",
    "Ясон"
];

const lastNames = [
    "Иванов",
    "Смирнов",
    "Кузнецов",
    "Попов",
    "Васильев",
    "Петров",
    "Соколов",
    "Михайлов",
    "Новиков",
    "Федоров",
    "Морозов",
    "Волков",
    "Алексеев",
    "Лебедев",
    "Семенов",
    "Егоров",
    "Павлов",
    "Козлов",
    "Степанов",
    "Николаев",
    "Орлов",
    "Андреев",
    "Макаров",
    "Никитин",
    "Захаров",
    "Зайцев",
    "Соловьев",
    "Борисов",
    "Яковлев",
    "Григорьев",
    "Романов",
    "Воробьев",
    "Сергеев",
    "Кузьмин",
    "Фролов",
    "Александров",
    "Дмитриев",
    "Королев",
    "Гусев",
    "Киселев",
    "Ильин",
    "Максимов",
    "Поляков",
    "Сорокин",
    "Виноградов",
    "Ковалев",
    "Белов",
    "Медведев",
    "Антонов",
    "Тарасов",
    "Жуков",
    "Баранов",
    "Филиппов",
    "Комаров",
    "Давыдов",
    "Беляев",
    "Герасимов",
    "Богданов",
    "Осипов",
    "Сидоров",
    "Матвеев",
    "Титов",
    "Марков",
    "Миронов",
    "Крылов",
    "Куликов",
    "Карпов",
    "Власов",
    "Мельников",
    "Денисов",
    "Гаврилов",
    "Тихонов",
    "Казаков",
    "Афанасьев",
    "Данилов",
    "Савельев",
    "Тимофеев",
    "Фомин",
    "Чернов",
    "Абрамов",
    "Мартынов",
    "Ефимов",
    "Федотов",
    "Щербаков",
    "Назаров",
    "Калинин",
    "Исаев",
    "Чернышев",
    "Быков",
    "Маслов",
    "Родионов",
    "Коновалов",
    "Лазарев",
    "Воронин",
    "Климов",
    "Филатов",
    "Пономарев",
    "Голубев",
    "Кудрявцев",
    "Прохоров",
    "Наумов",
    "Потапов",
    "Журавлев",
    "Овчинников",
    "Трофимов",
    "Леонов",
    "Соболев",
    "Ермаков",
    "Колесников",
    "Гончаров",
    "Емельянов",
    "Никифоров",
    "Грачев",
    "Котов",
    "Гришин",
    "Ефремов",
    "Архипов",
    "Громов",
    "Кириллов",
    "Малышев",
    "Панов",
    "Моисеев",
    "Румянцев",
    "Акимов",
    "Кондратьев",
    "Бирюков",
    "Горбунов",
    "Анисимов",
    "Еремин",
    "Тихомиров",
    "Галкин",
    "Лукьянов",
    "Михеев",
    "Скворцов",
    "Юдин",
    "Белоусов",
    "Нестеров",
    "Симонов",
    "Прокофьев",
    "Харитонов",
    "Князев",
    "Цветков",
    "Левин",
    "Митрофанов",
    "Воронов",
    "Аксенов",
    "Софронов",
    "Мальцев",
    "Логинов",
    "Горшков",
    "Савин",
    "Краснов",
    "Майоров",
    "Демидов",
    "Елисеев",
    "Рыбаков",
    "Сафонов",
    "Плотников",
    "Демин",
    "",
    "Фадеев",
    "Молчанов",
    "Игнатов",
    "Литвинов",
    "Ершов",
    "Ушаков",
    "Дементьев",
    "Рябов",
    "Мухин",
    "Калашников",
    "Леонтьев",
    "Лобанов",
    "Кузин",
    "Корнеев",
    "Евдокимов",
    "Бородин",
    "Платонов",
    "Некрасов",
    "Балашов",
    "Бобров",
    "Жданов",
    "Блинов",
    "Игнатьев",
    "Коротков",
    "Муравьев",
    "Крюков",
    "Беляков",
    "Богомолов",
    "Дроздов",
    "Лавров",
    "Зуев",
    "Петухов",
    "Ларин",
    "Никулин",
    "Серов",
    "Терентьев",
    "Зотов",
    "Устинов",
    "Фокин",
    "Самойлов",
    "Константинов",
    "Сахаров",
    "Шишкин",
    "Самсонов",
    "Черкасов",
    "Чистяков",
    "Носов",
    "Спиридонов",
    "Карасев",
    "Авдеев",
    "Воронцов",
    "Зверев",
    "Владимиров",
    "Селезнев",
    "Нечаев",
    "Кудряшов",
    "Седов",
    "Фирсов",
    "Андрианов",
    "Панин",
    "Головин",
    "Терехов",
    "Ульянов",
    "Шестаков",
    "Агеев",
    "Никонов",
    "Селиванов",
    "Баженов",
    "Гордеев",
    "Кожевников",
    "Пахомов",
    "Зимин",
    "Костин",
    "Широков",
    "Филимонов",
    "Ларионов",
    "Овсянников",
    "Сазонов",
    "Суворов",
    "Нефедов",
    "Корнилов",
    "Любимов",
    "Львов",
    "Горбачев",
    "Копылов",
    "Лукин",
    "Токарев",
    "Кулешов",
    "Шилов",
    "Большаков",
    "Панкратов",
    "Родин",
    "Шаповалов",
    "Покровский",
    "Бочаров",
    "Никольский",
    "Маркин",
    "Горелов",
    "Агафонов",
    "Березин",
    "Ермолаев",
    "Зубков",
    "Куприянов",
    "Трифонов",
    "Масленников",
    "Круглов",
    "Третьяков",
    "Колосов",
    "Рожков",
    "Артамонов",
    "Шмелев",
    "Лаптев",
    "Лапшин",
    "Федосеев",
    "Зиновьев",
    "Зорин",
    "Уткин",
    "Столяров",
    "Зубов",
    "Ткачев",
    "Дорофеев",
    "Антипов",
    "Завьялов",
    "Свиридов",
    "Золотарев",
    "Кулаков",
    "Мещеряков",
    "Макеев",
    "Дьяконов",
    "Гуляев",
    "Петровский",
    "Бондарев",
    "Поздняков",
    "Панфилов",
    "Кочетков",
    "Суханов",
    "Рыжов",
    "Старостин",
    "Калмыков",
    "Колесов",
    "Золотов",
    "Кравцов",
    "Субботин",
    "Шубин",
    "Щукин",
    "Лосев",
    "Винокуров",
    "Лапин",
    "Парфенов",
    "Исаков",
    "Голованов",
    "Коровин",
    "Розанов",
    "Артемов",
    "Козырев",
    "Русаков",
    "Алешин",
    "Крючков",
    "Булгаков",
    "Кошелев",
    "Сычев",
    "Синицын",
    "Черных",
    "Рогов",
    "Кононов",
    "Лаврентьев",
    "Евсеев",
    "Пименов",
    "Пантелеев",
    "Горячев",
    "Аникин",
    "Лопатин",
    "Рудаков",
    "Одинцов",
    "Серебряков",
    "Панков",
    "Дегтярев",
    "Орехов",
    "Царев",
    "Шувалов",
    "Кондрашов",
    "Горюнов",
    "Дубровин",
    "Голиков",
    "Курочкин",
    "Латышев",
    "Севастьянов",
    "Вавилов",
    "Ерофеев",
    "Сальников",
    "Клюев",
    "Носков",
    "Озеров",
    "Кольцов",
    "Комиссаров",
    "Меркулов",
    "Киреев",
    "Хомяков",
    "Булатов",
    "Ананьев",
    "Буров",
    "Шапошников",
    "Дружинин",
    "Островский",
    "Шевелев",
    "Долгов",
    "Суслов",
    "Шевцов",
    "Пастухов",
    "Рубцов",
    "Бычков",
    "Глебов",
    "Ильинский",
    "Успенский",
    "Дьяков",
    "Кочетов",
    "Вишневский",
    "Высоцкий",
    "Глухов",
    "Дубов",
    "Бессонов",
    "Ситников",
    "Астафьев",
    "Мешков",
    "Шаров",
    "Яшин",
    "Козловский",
    "Туманов",
    "Басов",
    "Корчагин",
    "Болдырев",
    "Олейников",
    "Чумаков",
    "Фомичев",
    "Губанов",
    "Дубинин",
    "Шульгин",
    "Касаткин",
    "Пирогов",
    "Семин",
    "Трошин",
    "Горохов",
    "Стариков",
    "Щеглов",
    "Фетисов",
    "Колпаков",
    "Чесноков",
    "Зыков",
    "Верещагин",
    "Минаев",
    "Руднев",
    "Троицкий",
    "Окулов",
    "Ширяев",
    "Малинин",
    "Черепанов",
    "Измайлов",
    "Алехин",
    "Зеленин",
    "Касьянов",
    "Пугачев",
    "Павловский",
    "Чижов",
    "Кондратов",
    "Воронков",
    "Капустин",
    "Сотников",
    "Демьянов",
    "Косарев",
    "Беликов",
    "Сухарев",
    "Белкин",
    "Беспалов",
    "Кулагин",
    "Савицкий",
    "Жаров",
    "Хромов",
    "Еремеев",
    "Карташов",
    "Астахов",
    "Русанов",
    "Сухов",
    "Вешняков",
    "Волошин",
    "Козин",
    "Худяков",
    "Жилин",
    "Малахов",
    "Сизов",
    "Ежов",
    "Толкачев",
    "Анохин",
    "Вдовин",
    "Бабушкин",
    "Усов",
    "Лыков",
    "Горлов",
    "Коршунов",
    "Маркелов",
    "Постников",
    "Черный",
    "Дорохов",
    "Свешников",
    "Гущин",
    "Калугин",
    "Блохин",
    "Сурков",
    "Кочергин",
    "Греков",
    "Казанцев",
    "Швецов",
    "Ермилов",
    "Парамонов",
    "Агапов",
    "Минин",
    "Корнев",
    "Черняев",
    "Гуров",
    "Ермолов",
    "Сомов",
    "Добрынин",
    "Барсуков",
    "Глушков",
    "Чеботарев",
    "Москвин",
    "Уваров",
    "Безруков",
    "Муратов",
    "Раков",
    "Снегирев",
    "Гладков",
    "Злобин",
    "Моргунов",
    "Поликарпов",
    "Рябинин",
    "Судаков",
    "Кукушкин",
    "Калачев",
    "Грибов",
    "Елизаров",
    "Звягинцев",
    "Корольков",
    "Федосов"
];

const domainsOfEmail = [
    "mail.com",
    "email.com",
    "usa.com",
    "myself.com",
    "consultant.com",
    "post.com",
    "europe.com",
    "asia.com",
    "iname.com",
    "writeme.com",
    "dr.com",
    "engineer.com",
    "cheerful.com",
    "accountant.com",
    "techie.com",
    "uymail.com",
    "activist.com",
    "adexec.com",
    "allergist.com",
    "alumni.com",
    "alumnidirector.com",
    "angelic.com",
    "archaeologist.com",
    "arcticmail.com",
    "artlover.com",
    "bikerider.com",
    "birdlover.com",
    "brew-meister.com",
    "cash4u.com",
    "chemist.com",
    "clerk.com",
    "columnist.com",
    "comic.com",
    "computer4u.com",
    "counsellor.com",
    "cyberservices.com",
    "deliveryman.com",
    "diplomats.com",
    "disposable.com",
    "execs.com",
    "fastservice.com",
    "financier.com",
    "gardener.com",
    "geologist.com",
    "graphic-designer.com",
    "groupmail.com",
    "homemail.com",
    "hot-shot.com",
    "instruction.com",
    "insurer.com",
    "job4u.com",
    "journalist.com",
    "legislator.com",
    "lobbyist.com",
    "minister.com",
    "net-shopping.com",
    "optician.com",
    "pediatrician.com",
    "planetmail.com",
    "politician.com",
    "presidency.com",
    "priest.com",
    "publicist.com",
    "qualityservice.com",
    "realtyagent.com",
    "registerednurses.com",
    "repairman.com",
    "representative.com",
    "rescueteam.com",
    "sociologist.com",
    "solution4u.com",
    "tech-center.com",
    "technologist.com",
    "theplate.com",
    "toothfairy.com",
    "tvstar.com",
    "umpire.com",
    "webname.com",
    "worker.com",
    "workmail.com",
    "2trom.com",
    "aircraftmail.com",
    "atheist.com",
    "blader.com",
    "boardermail.com",
    "brew-master.com",
    "bsdmail.com",
    "catlover.com",
    "cutey.com",
    "dbzmail.com",
    "doglover.com",
    "doramail.com",
    "galaxyhit.com",
    "hackermail.com",
    "hilarious.com",
    "keromail.com",
    "kittymail.com",
    "lovecat.com",
    "marchmail.com",
    "nonpartisan.com",
    "petlover.com",
    "snakebite.com",
    "toke.com",
    "cyberdude.com",
    "cybergal.com",
    "cyber-wizard.com",
    "housemail.com",
    "inorbit.com",
    "mail-me.com",
    "rocketship.com",
    "acdcfan.com",
    "discofan.com",
    "elvisfan.com",
    "hiphopfan.com",
    "kissfans.com",
    "madonnafan.com",
    "metalfan.com",
    "ninfan.com",
    "ravemail.com",
    "reborn.com",
    "reggaefan.com",
    "californiamail.com",
    "dallasmail.com",
    "nycmail.com",
    "pacific-ocean.com",
    "pacificwest.com",
    "sanfranmail.com",
    "africamail.com",
    "asia-mail.com",
    "australiamail.com",
    "berlin.com",
    "brazilmail.com",
    "chinamail.com",
    "dublin.com",
    "dutchmail.com",
    "englandmail.com",
    "europemail.com",
    "germanymail.com",
    "irelandmail.com",
    "israelmail.com",
    "italymail.com",
    "koreamail.com",
    "mexicomail.com",
    "moscowmail.com",
    "munich.com",
    "polandmail.com",
    "safrica.com",
    "samerica.com",
    "scotlandmail.com",
    "spainmail.com",
    "swedenmail.com",
    "swissmail.com",
    "torontomail.com",
    "disciples.com",
    "innocent.com",
    "muslim.com",
    "protestant.com",
    "reincarnate.com",
    "religious.com",
    "saintly.com"
]


function getRandFirstName() {
    return firstNames[getRandomInt(0, firstNames.length-1)];
}

function getRandLastName() {
    return lastNames[getRandomInt(0, lastNames.length-1)];
}


export function getRandomRecord() {
    let fName = getRandFirstName();
    let lName = getRandLastName();

    let fathName = getRandFirstName() + "ович";

    let phone = "+79" + String(getRandomInt(100000000, 999999999));

    let login = cyrillicToTranslit.transform(fName + "_" + lName, '_');

    let password = Math.random().toString(36).slice(-getRandomInt(6, 16));

    let email = login + "@" + domainsOfEmail[getRandomInt(0, domainsOfEmail.length - 1)];

    return {fName, lName, fathName, phone, login, password, email};
}


// for (let i = 0; i < 10; i++){console.log(getRandomRecord());}