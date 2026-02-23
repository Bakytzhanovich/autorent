export type Language = "ru" | "kk" | "en";

export const translations = {
  ru: {
    // Header
    header: {
      favorites: "Избранное",
      profile: "Профиль",
      menu: "Меню",
    },
    // Hero
    hero: {
      title: "Найди идеальный автомобиль",
      subtitle: "Арендуй автомобиль быстро и удобно. Более 1000 машин в наличии",
      daily: "Посуточно",
      monthly: "Помесячно",
      city: "Город",
      locationPlaceholder: "Город, аэропорт или адрес",
      from: "От",
      to: "До",
      time: "Время",
      search: "Поиск",
      startDateAria: "Дата начала",
      endDateAria: "Дата окончания",
      monthsShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
      vehicleTypes: {
        passengerCar: "Легковое авто",
        truck: "Грузовое авто",
        specialEquipment: "Спецтехника",
        scooters: "Самокаты",
      },
    },
    // Footer
    footer: {
      description: "Сервис аренды автомобилей в Казахстане. Более 1000 автомобилей в наличии. Быстро, удобно и надежно.",
      quickLinks: "Быстрые ссылки",
      home: "Главная",
      cars: "Автомобили",
      about: "О нас",
      conditions: "Условия аренды",
      faq: "FAQ",
      services: "Услуги",
      dailyRental: "Аренда по дням",
      monthlyRental: "Аренда по месяцам",
      corporateRental: "Корпоративная аренда",
      delivery: "Доставка автомобиля",
      insurance: "Страхование",
      contacts: "Контакты",
      phone: "Телефон",
      email: "Email",
      address: "Адрес",
      addressValue: "г. Алматы, пр. Абая 150",
      copyright: "© {year} AutoRent. Все права защищены.",
      privacy: "Политика конфиденциальности",
      terms: "Условия использования",
      homeDesc: "На главную страницу",
      carsDesc: "Каталог автомобилей для аренды",
      aboutDesc: "О компании и команде AutoRent",
      conditionsDesc: "Правила и условия аренды",
      faqDesc: "Частые вопросы и ответы",
      dailyRentalDesc: "Аренда от 1 дня, гибкие тарифы",
      monthlyRentalDesc: "Аренда от месяца — выгодные цены",
      corporateRentalDesc: "Для компаний и организаций",
      deliveryDesc: "Доставка авто к вам в удобное место",
      insuranceDesc: "Страхование при аренде",
      privacyDesc: "Обработка персональных данных",
      termsDesc: "Правила использования сервиса",
      phoneDesc: "Позвонить в AutoRent",
      emailDesc: "Написать на почту",
      addressDesc: "Открыть адрес на карте",
      socialFacebook: "Мы в Facebook",
      socialInstagram: "Мы в Instagram",
      socialTwitter: "Мы в Twitter",
      socialYoutube: "Наш канал на YouTube",
    },
    // Common
    common: {
      viewDeal: "Просмотр сделки",
      seats: "Мест",
      transmission: "Коробка передач",
      consumption: "Расход",
      engineVolume: "Объем двигателя",
      byTariff: "По тарифу",
      days: "дней",
      day: "день",
      from: "от",
      perDay: "/день",
      pageUnderConstruction: "Страница в разработке",
    },
    // Exclusive Offers
    exclusiveOffers: {
      title: "Эксклюзивные предложения",
      subtitle: "Специальные условия аренды для вашего комфорта",
      noDeposit: "Без залога",
      noDepositDesc: "Арендуйте без залога и депозита",
      specialOffers: "Специальные предложения",
      specialOffersDesc: "Выгодные цены для вас",
      unlimitedMileage: "Безлимитный пробег",
      unlimitedMileageDesc: "Ездите без ограничений",
    },
    // Car Categories
    carCategories: {
      title: "Автомобили по классам",
      subtitle: "Выберите подходящий класс для вашей поездки",
      economy: "Эконом",
      standard: "Стандарт",
      luxury: "Люкс",
      business: "Бизнес",
      electric: "Электромобили",
    },
    // Partner Cars
    partnerCars: {
      title: "Автомобили от наших партнеров",
      subtitle: "Широкий выбор автомобилей для аренды",
      noResults: "По вашему запросу машин не найдено. Измените город или даты.",
      foundCount: "Найдено машин: {count}",
      editFilter: "Изменить поиск",
      showOnMap: "На карту",
      openInGoogleMaps: "Открыть в Google Картах",
      locations: "Локации",
      carsAtLocation: "Машины",
    },
    // Auth
    auth: {
      register: "Регистрация",
      login: "Вход",
      name: "Имя",
      email: "Email",
      phone: "Телефон",
      password: "Пароль",
      confirmPassword: "Подтвердите пароль",
      alreadyHaveAccount: "Уже есть аккаунт?",
      noAccount: "Нет аккаунта?",
      signIn: "Войти",
      signUp: "Зарегистрироваться",
      forgotPassword: "Забыли пароль?",
      forgotPasswordTitle: "Восстановление пароля",
      forgotPasswordDesc: "Введите email вашего аккаунта — мы отправим ссылку для сброса пароля.",
      sendResetLink: "Отправить ссылку",
      forgotPasswordSuccess: "Если аккаунт с таким email существует, на него отправлена ссылка для сброса пароля. Проверьте почту.",
      forgotPasswordError: "Не удалось отправить ссылку. Попробуйте позже.",
      backToLogin: "Вернуться ко входу",
      sendingLink: "Отправка...",
      backToHome: "Назад на главную",
      createAccount: "Создайте аккаунт для аренды автомобилей",
      loginToAccount: "Войдите в свой аккаунт для аренды автомобилей",
      nameRequired: "Имя обязательно",
      emailRequired: "Email обязателен",
      invalidEmail: "Некорректный email",
      phoneRequired: "Телефон обязателен",
      invalidPhone: "Некорректный номер телефона",
      passwordRequired: "Пароль обязателен",
      passwordMinLength: "Пароль должен быть не менее 6 символов",
      passwordsNotMatch: "Пароли не совпадают",
      registrationSuccess: "Регистрация успешна! Войдите в свой аккаунт.",
      registrationError: "Ошибка при регистрации",
      loginError: "Неверный email или пароль",
      connectionError: "Ошибка подключения к серверу",
      registering: "Регистрация...",
      loggingIn: "Вход...",
    },
    // Favorites
    favorites: {
      empty: "Нет избранных автомобилей",
      emptyTitle: "Избранное пусто",
      emptyDescription: "Добавьте автомобили в избранное, чтобы вернуться к ним позже",
      browseCars: "Просмотреть автомобили",
      count: "автомобилей в избранном",
    },
    // Info pages content
    pages: {
      about: {
        title: "О нас",
        paragraphs: [
          "AutoRent — сервис аренды автомобилей в Казахстане. Мы работаем с 2020 года и предлагаем широкий выбор авто от эконома до премиум-класса.",
          "Наша цель — сделать аренду простой и прозрачной: фиксированные цены, без скрытых платежей, круглосуточная поддержка.",
          "Свыше 1000 автомобилей по всей стране. Бронируйте онлайн и забирайте авто в офисе или закажите доставку.",
        ],
      },
      cars: {
        title: "Автомобили",
        paragraphs: [
          "В каталоге AutoRent — автомобили разных классов: эконом, стандарт, бизнес, люкс и электромобили.",
          "Указаны характеристики, фото и актуальная цена за сутки. Фильтры по классу, трансмиссии и количеству мест помогут подобрать подходящий вариант.",
          "Все машины проходят техобслуживание и готовы к поездке. При необходимости доступна доставка до вашего адреса.",
        ],
      },
      conditions: {
        title: "Условия аренды",
        paragraphs: [
          "Арендатор должен быть не младше 21 года и иметь водительское удостоверение не менее 1 года. Для аренды понадобится паспорт и права.",
          "Оплата: наличные или банковская карта. Залог фиксируется на карте и возвращается после осмотра авто.",
          "Запрещено передавать авто третьим лицам, участвовать в гонках и перевозить запрещённые грузы. Тарифы и ограничения указаны в договоре.",
        ],
      },
      faq: {
        title: "Частые вопросы",
        items: [
          { q: "Как забронировать авто?", a: "Выберите авто и даты на сайте, оформите заявку. Мы подтвердим бронь и сообщим время получения." },
          { q: "Какие документы нужны?", a: "Паспорт и водительское удостоверение. Для аренды от 30 дней может понадобиться дополнительный пакет документов." },
          { q: "Можно ли вернуть авто в другом городе?", a: "Да, доступна межгородская аренда. Условия и доплата уточняются при бронировании." },
          { q: "Что входит в цену?", a: "В базовый тариф входят аренда, КАСКО и ограниченный пробег. Доплата за превышение пробега и опции по прайсу." },
        ],
      },
      dailyRental: {
        title: "Аренда по дням",
        paragraphs: [
          "Аренда от 1 дня с гибкими датами. Идеально для поездок по городу, в аэропорт или коротких путешествий.",
          "Цена за сутки фиксирована и указана на сайте. При аренде от 3–7 дней действуют скидки. Круглосуточная поддержка.",
        ],
      },
      monthlyRental: {
        title: "Аренда по месяцам",
        paragraphs: [
          "Долгосрочная аренда от 1 месяца по выгодным тарифам. Подходит для командировок, переездов и временной замены личного авто.",
          "Оплата помесячно. Техобслуживание и замена резины по сезону включены в программу долгосрочной аренды.",
        ],
      },
      corporateRental: {
        title: "Корпоративная аренда",
        paragraphs: [
          "Специальные условия для компаний: счёт, договор, отчётность. Аренда парка авто для сотрудников и гостей.",
          "Персональный менеджер и гибкий график. Скидки при объёме. Оставьте заявку — мы подготовим коммерческое предложение.",
        ],
      },
      delivery: {
        title: "Доставка автомобиля",
        paragraphs: [
          "Доставка авто к вам: в офис, домой, в аэропорт или на вокзал. Удобное время и место согласуются при бронировании.",
          "Услуга платная, стоимость зависит от расстояния. В пределах города — от 3000 ₸. Заказ оформляется вместе с арендой.",
        ],
      },
      insurance: {
        title: "Страхование",
        paragraphs: [
          "Все автомобили застрахованы по КАСКО и ОСАГО. В базовый тариф входит стандартное покрытие.",
          "При желании можно оформить расширенную страховку без франшизы или с пониженной франшизой. Подробности у менеджера.",
        ],
      },
      privacy: {
        title: "Политика конфиденциальности",
        paragraphs: [
          "AutoRent собирает и хранит только те данные, которые нужны для оформления аренды: ФИО, контакты, данные прав и паспорта.",
          "Мы не передаём персональные данные третьим лицам без согласия, кроме случаев, предусмотренных законом. Данные защищены и используются только для работы сервиса.",
          "Вы можете запросить копию данных или их удаление. Обращайтесь по email info@autorent.kz.",
        ],
      },
      terms: {
        title: "Условия использования",
        paragraphs: [
          "Использование сайта AutoRent означает согласие с этими условиями. Сервис предоставляет информацию и приём заявок на аренду.",
          "Цены и наличие авто носят информационный характер. Окончательные условия определяются договором аренды. Контакты для вопросов: info@autorent.kz.",
        ],
      },
    },
  },
  kk: {
    // Header
    header: {
      favorites: "Таңдаулылар",
      profile: "Профиль",
      menu: "Мәзір",
    },
    // Hero
    hero: {
      title: "Мінсіз автомобильді тап",
      subtitle: "Автомобильді жылдам және ыңғайлы жалдаңыз. Қолда 1000-нан астам машина бар",
      daily: "Күндік",
      monthly: "Айлық",
      city: "Қала",
      locationPlaceholder: "Қала, әуежай немесе мекен-жай",
      from: "Бастап",
      to: "Дейін",
      time: "Уақыт",
      search: "Іздеу",
      startDateAria: "Басталу күні",
      endDateAria: "Аяқталу күні",
      monthsShort: ["Қаң", "Ақп", "Нау", "Сәу", "Мам", "Мау", "Шіл", "Там", "Қыр", "Қаз", "Қар", "Жел"],
      vehicleTypes: {
        passengerCar: "Жеңіл көлік",
        truck: "Жүк көлігі",
        specialEquipment: "Арнайы техника",
        scooters: "Скутерлер",
      },
    },
    // Footer
    footer: {
      description: "Қазақстандағы автомобиль жалдау сервисі. Қолда 1000-нан астам автомобиль бар. Жылдам, ыңғайлы және сенімді.",
      quickLinks: "Жылдам сілтемелер",
      home: "Басты бет",
      cars: "Автомобильдер",
      about: "Біз туралы",
      conditions: "Жалдау шарттары",
      faq: "Жиі қойылатын сұрақтар",
      services: "Қызметтер",
      dailyRental: "Күндер бойынша жалдау",
      monthlyRental: "Айлар бойынша жалдау",
      corporateRental: "Корпоративтік жалдау",
      delivery: "Автомобиль жеткізу",
      insurance: "Сақтандыру",
      contacts: "Байланыстар",
      phone: "Телефон",
      email: "Email",
      address: "Мекен-жай",
      addressValue: "Алматы қ., Абай даңғылы 150",
      copyright: "© {year} AutoRent. Барлық құқықтар қорғалған.",
      privacy: "Құпиялылық саясаты",
      terms: "Пайдалану шарттары",
      homeDesc: "Басты бетке",
      carsDesc: "Жалдауға арналған автомобильдер каталогы",
      aboutDesc: "AutoRent компаниясы және командасы туралы",
      conditionsDesc: "Жалдау ережелері мен шарттары",
      faqDesc: "Жиі қойылатын сұрақтар мен жауаптар",
      dailyRentalDesc: "1 күннен бастап жалдау, икемді тарифтер",
      monthlyRentalDesc: "Айдан бастап жалдау — тиімді бағалар",
      corporateRentalDesc: "Компаниялар мен ұйымдар үшін",
      deliveryDesc: "Автомобильді ыңғайлы жерге жеткізу",
      insuranceDesc: "Жалдау кезінде сақтандыру",
      privacyDesc: "Жеке деректерді өңдеу",
      termsDesc: "Сервисті пайдалану ережелері",
      phoneDesc: "AutoRent-ке қоңырау шалыңыз",
      emailDesc: "Электронды поштаға жазыңыз",
      addressDesc: "Картада мекенжайды ашу",
      socialFacebook: "Біз Facebook-та",
      socialInstagram: "Біз Instagram-да",
      socialTwitter: "Біз Twitter-да",
      socialYoutube: "Біздің YouTube арнасы",
    },
    // Common
    common: {
      viewDeal: "Мәмілені қарау",
      seats: "Орын",
      transmission: "Беріліс қорабы",
      consumption: "Шығын",
      engineVolume: "Қозғалтқыш көлемі",
      byTariff: "Тариф бойынша",
      days: "күн",
      day: "күн",
      from: "бастап",
      perDay: "/күн",
      pageUnderConstruction: "Бет әзірленуде",
    },
    // Exclusive Offers
    exclusiveOffers: {
      title: "Эксклюзивті ұсыныстар",
      subtitle: "Сіздің ыңғайлылығыңызға арналған арнайы жалдау шарттары",
      noDeposit: "Залогсыз",
      noDepositDesc: "Залог және депозитсіз жалдаңыз",
      specialOffers: "Арнайы ұсыныстар",
      specialOffersDesc: "Сізге тиімді бағалар",
      unlimitedMileage: "Шексіз жүру",
      unlimitedMileageDesc: "Шектеусіз жүріңіз",
    },
    // Car Categories
    carCategories: {
      title: "Сынып бойынша автомобильдер",
      subtitle: "Саяхатыңызға сәйкес сыныпты таңдаңыз",
      economy: "Эконом",
      standard: "Стандарт",
      luxury: "Люкс",
      business: "Бизнес",
      electric: "Электромобильдер",
    },
    // Partner Cars
    partnerCars: {
      title: "Біздің серіктестердің автомобильдері",
      subtitle: "Жалдауға кең автомобиль таңдауы",
      noResults: "Сұранысыңыз бойынша автомобильдер табылмады. Қаланы немесе күндерді өзгертіңіз.",
      foundCount: "Табылған автомобильдер: {count}",
      editFilter: "Іздеуді өзгерту",
      showOnMap: "Картада",
      openInGoogleMaps: "Google картада ашу",
      locations: "Мекенжайлар",
      carsAtLocation: "Автомобильдер",
    },
    // Auth
    auth: {
      register: "Тіркелу",
      login: "Кіру",
      name: "Аты",
      email: "Email",
      phone: "Телефон",
      password: "Құпия сөз",
      confirmPassword: "Құпия сөзді растаңыз",
      alreadyHaveAccount: "Аккаунт бар ма?",
      noAccount: "Аккаунт жоқ па?",
      signIn: "Кіру",
      signUp: "Тіркелу",
      forgotPassword: "Құпия сөзді ұмыттыңыз ба?",
      forgotPasswordTitle: "Құпия сөзді қалпына келтіру",
      forgotPasswordDesc: "Аккаунтыңыздың emailін енгізіңіз — құпия сөзді қалпына келтіру сілтемесін жібереміз.",
      sendResetLink: "Сілтемені жіберу",
      forgotPasswordSuccess: "Егер осындай email бар аккаунт болса, оған құпия сөзді қалпына келтіру сілтемесі жіберілді. Поштаны тексеріңіз.",
      forgotPasswordError: "Сілтемені жіберу сәтсіз аяқталды. Кейінірек қайталаңыз.",
      backToLogin: "Кіруге оралу",
      sendingLink: "Жіберілуде...",
      backToHome: "Басты бетке оралу",
      createAccount: "Автомобиль жалдау үшін аккаунт жасаңыз",
      loginToAccount: "Автомобиль жалдау үшін аккаунтыңызға кіріңіз",
      nameRequired: "Аты міндетті",
      emailRequired: "Email міндетті",
      invalidEmail: "Дұрыс емес email",
      phoneRequired: "Телефон міндетті",
      invalidPhone: "Дұрыс емес телефон нөмірі",
      passwordRequired: "Құпия сөз міндетті",
      passwordMinLength: "Құпия сөз кемінде 6 таңбадан тұруы керек",
      passwordsNotMatch: "Құпия сөздер сәйкес келмейді",
      registrationSuccess: "Тіркелу сәтті! Аккаунтыңызға кіріңіз.",
      registrationError: "Тіркелу кезінде қате",
      loginError: "Дұрыс емес email немесе құпия сөз",
      connectionError: "Серверге қосылу қатесі",
      registering: "Тіркелу...",
      loggingIn: "Кіру...",
    },
    // Favorites
    favorites: {
      empty: "Таңдаулы автомобильдер жоқ",
      emptyTitle: "Таңдаулылар бос",
      emptyDescription: "Кейінірек оралу үшін автомобильдерді таңдаулыларға қосыңыз",
      browseCars: "Автомобильдерді қарау",
      count: "автомобиль таңдаулыларда",
    },
    pages: {
      about: {
        title: "Біз туралы",
        paragraphs: [
          "AutoRent — Қазақстандағы автомобиль жалдау сервисі. 2020 жылдан бері жұмыс істейміз, экономдан премиум-классқа дейін көптеген авто ұсынамыз.",
          "Мақсатымыз — жалдауды қарапайым және ашық ету: бекітілген бағалар, жасырын төлемдерсіз, тәулік бойы қолдау.",
          "Ел бойынша 1000-нан астам автомобиль. Онлайн брондаңыз, кеңседен алыңыз немесе жеткізуді тапсырыңыз.",
        ],
      },
      cars: {
        title: "Автомобильдер",
        paragraphs: [
          "AutoRent каталогында әр кластағы автомобильдер: эконом, стандарт, бизнес, люкс және электромобильдер.",
          "Сипаттамалар, фото және күндік баға көрсетілген. Класс, беріліс және орын саны бойынша сүзгілер сәйкес нұсқаны таңдауға көмектеседі.",
          "Барлық көліктер техникалық қызметтен өтеді. Қажет болса мекенжайыңызға жеткізу қол жетімді.",
        ],
      },
      conditions: {
        title: "Жалдау шарттары",
        paragraphs: [
          "Жалдаушы кем дегенде 21 жаста болуы және кем дегенде 1 жыл жүргізу куәлігі болуы керек. Жалдау үшін паспорт пен куәлік қажет.",
          "Төлем: қолма-қол немесе банк картасы. Залог картада бекітіліп, көлікті тексергеннен кейін қайтарылады.",
          "Көлікті үшінші тұлғаларға беру, жарыстарға қатысу және тыйым салынған жүк тасу тыйым салынады. Тарифтер келісімде көрсетілген.",
        ],
      },
      faq: {
        title: "Жиі қойылатын сұрақтар",
        items: [
          { q: "Автомобильді қалай брондауға болады?", a: "Сайтта авто мен күндерді таңдап, өтінім толтырыңыз. Бронды растап, алу уақытын хабарлаймыз." },
          { q: "Қандай құжаттар қажет?", a: "Паспорт және жүргізу куәлігі. 30 күннен аса жалдау үшін қосымша құжаттар талап етуі мүмкін." },
          { q: "Көлікті басқа қалада қайтаруға бола ма?", a: "Иә, қалааралық жалдау қол жетімді. Шарттар брондау кезінде нақтыланады." },
          { q: "Бағаға не кіреді?", a: "Негізгі тарифке жалдау, КАСКО және шектеулі жүру кіреді. Артық жүру үшін қосымша төлем және опциялар прайс бойынша." },
        ],
      },
      dailyRental: {
        title: "Күндер бойынша жалдау",
        paragraphs: [
          "1 күннен бастап икемді күндермен жалдау. Қала ішінде, әуежайға немесе қысқа саяхаттар үшін идеалды.",
          "Күндік баға сайтта көрсетілген. 3–7 күннен жалдағанда жеңілдіктер бар. Тәулік бойы қолдау.",
        ],
      },
      monthlyRental: {
        title: "Айлар бойынша жалдау",
        paragraphs: [
          "1 айдан бастап ұзақ мерзімді жалдау тиімді тарифтер бойынша. Командировкалар, көшу және уақытша жеке автоның орнын толықтыру үшін.",
          "Айлық төлем. Техникалық қызмет және маусым бойынша шиналарды ауыстыру ұзақ мерзімді бағдарламаға кіреді.",
        ],
      },
      corporateRental: {
        title: "Корпоративтік жалдау",
        paragraphs: [
          "Компаниялар үшін арнайы шарттар: шот-фактура, келісім, есептілік. Қызметкерлер мен қонақтар үшін автопарк жалдау.",
          "Жеке менеджер және икемді кесте. Көлем бойынша жеңілдіктер. Өтінім қалдырыңыз — коммерциялық ұсыныс дайындаймыз.",
        ],
      },
      delivery: {
        title: "Автомобиль жеткізу",
        paragraphs: [
          "Автомобильді сізге жеткізу: кеңсеге, үйге, әуежайға немесе вокзалға. Ыңғайлы уақыт брондау кезінде келісіледі.",
          "Қызмет ақылы, құны қашықтыққа байланысты. Қала шегінде — 3000 ₸-дан. Тапсырыс жалдаумен бірге ресімделеді.",
        ],
      },
      insurance: {
        title: "Сақтандыру",
        paragraphs: [
          "Барлық автомобильдер КАСКО және ОСАГО бойынша сақтандырылған. Негізгі тарифке стандартты қамту кіреді.",
          "Қалағанда франшизасыз немесе төмен франшизалы кеңейтілген сақтандыру ресімдеуге болады. Толығы менеджерден.",
        ],
      },
      privacy: {
        title: "Құпиялылық саясаты",
        paragraphs: [
          "AutoRent жалдауды ресімдеу үшін қажетті деректерді жинайды және сақтайды: аты-жөні, байланыс, куәлік пен паспорт деректері.",
          "Жеке деректерді келісімсіз үшінші тұлғаларға бермейміз, заңда көзделген жағдайлардан басқа. Деректер қорғалған және тек сервис үшін пайдаланылады.",
          "Деректердің көшірмесін сұрауға немесе жоюға болады. Email: info@autorent.kz.",
        ],
      },
      terms: {
        title: "Пайдалану шарттары",
        paragraphs: [
          "AutoRent сайтын пайдалану осы шарттармен келісу болып табылады. Сервис ақпарат пен жалдау өтінімдерін қабылдайды.",
          "Бағалар мен автоның болуы ақпараттық сипаттаға ие. Түпкілікті шарттар жалдау келісімімен анықталады. Сұрақтар: info@autorent.kz.",
        ],
      },
    },
  },
  en: {
    // Header
    header: {
      favorites: "Favorites",
      profile: "Profile",
      menu: "Menu",
    },
    // Hero
    hero: {
      title: "Find the perfect car",
      subtitle: "Rent a car quickly and conveniently. More than 1000 cars available",
      daily: "Per day",
      monthly: "Per month",
      city: "City",
      locationPlaceholder: "City, airport, or address",
      vehicleTypes: {
        passengerCar: "Passenger car",
        truck: "Truck",
        specialEquipment: "Special equipment",
        scooters: "Scooters",
      },
      from: "From",
      to: "To",
      time: "Time",
      search: "Search",
      startDateAria: "Start date",
      endDateAria: "End date",
      monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    },
    // Footer
    footer: {
      description: "Car rental service in Kazakhstan. More than 1000 cars available. Fast, convenient and reliable.",
      quickLinks: "Quick Links",
      home: "Home",
      cars: "Cars",
      about: "About",
      conditions: "Rental Conditions",
      faq: "FAQ",
      services: "Services",
      dailyRental: "Daily Rental",
      monthlyRental: "Monthly Rental",
      corporateRental: "Corporate Rental",
      delivery: "Car Delivery",
      insurance: "Insurance",
      contacts: "Contacts",
      phone: "Phone",
      email: "Email",
      address: "Address",
      addressValue: "Almaty, Abay Ave. 150",
      copyright: "© {year} AutoRent. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      homeDesc: "Back to home page",
      carsDesc: "Car rental catalog",
      aboutDesc: "About AutoRent company and team",
      conditionsDesc: "Rental rules and conditions",
      faqDesc: "Frequently asked questions",
      dailyRentalDesc: "Rental from 1 day, flexible rates",
      monthlyRentalDesc: "Monthly rental — great prices",
      corporateRentalDesc: "For companies and organizations",
      deliveryDesc: "Car delivery to your location",
      insuranceDesc: "Insurance with rental",
      privacyDesc: "Personal data processing",
      termsDesc: "Terms of service",
      phoneDesc: "Call AutoRent",
      emailDesc: "Send an email",
      addressDesc: "Open address on map",
      socialFacebook: "We are on Facebook",
      socialInstagram: "We are on Instagram",
      socialTwitter: "We are on Twitter",
      socialYoutube: "Our YouTube channel",
    },
    // Common
    common: {
      viewDeal: "View deal",
      seats: "Seats",
      transmission: "Transmission",
      consumption: "Consumption",
      engineVolume: "Engine volume",
      byTariff: "By tariff",
      days: "days",
      day: "day",
      from: "from",
      perDay: "/day",
      pageUnderConstruction: "Page under construction",
    },
    // Exclusive Offers
    exclusiveOffers: {
      title: "Exclusive Offers",
      subtitle: "Special rental conditions for your comfort",
      noDeposit: "No Deposit",
      noDepositDesc: "Rent without deposit and collateral",
      specialOffers: "Special Offers",
      specialOffersDesc: "Favorable prices for you",
      unlimitedMileage: "Unlimited Mileage",
      unlimitedMileageDesc: "Drive without restrictions",
    },
    // Car Categories
    carCategories: {
      title: "Cars by Class",
      subtitle: "Choose the right class for your trip",
      economy: "Economy",
      standard: "Standard",
      luxury: "Luxury",
      business: "Business",
      electric: "Electric",
    },
    // Partner Cars
    partnerCars: {
      title: "Cars from our Partners",
      subtitle: "Wide selection of cars for rent",
      noResults: "No cars found for your search. Try a different city or dates.",
      foundCount: "Cars found: {count}",
      editFilter: "Edit search",
      showOnMap: "On map",
      openInGoogleMaps: "Open in Google Maps",
      locations: "Locations",
      carsAtLocation: "Cars",
    },
    // Auth
    auth: {
      register: "Register",
      login: "Login",
      name: "Name",
      email: "Email",
      phone: "Phone",
      password: "Password",
      confirmPassword: "Confirm Password",
      alreadyHaveAccount: "Already have an account?",
      noAccount: "No account?",
      signIn: "Sign In",
      signUp: "Sign Up",
      forgotPassword: "Forgot password?",
      forgotPasswordTitle: "Reset password",
      forgotPasswordDesc: "Enter your account email and we'll send you a link to reset your password.",
      sendResetLink: "Send reset link",
      forgotPasswordSuccess: "If an account with this email exists, we've sent a reset link. Check your inbox.",
      forgotPasswordError: "Failed to send reset link. Please try again later.",
      backToLogin: "Back to login",
      sendingLink: "Sending...",
      backToHome: "Back to Home",
      createAccount: "Create an account for car rental",
      loginToAccount: "Login to your account for car rental",
      nameRequired: "Name is required",
      emailRequired: "Email is required",
      invalidEmail: "Invalid email",
      phoneRequired: "Phone is required",
      invalidPhone: "Invalid phone number",
      passwordRequired: "Password is required",
      passwordMinLength: "Password must be at least 6 characters",
      passwordsNotMatch: "Passwords do not match",
      registrationSuccess: "Registration successful! Login to your account.",
      registrationError: "Registration error",
      loginError: "Invalid email or password",
      connectionError: "Connection error",
      registering: "Registering...",
      loggingIn: "Logging in...",
    },
    // Favorites
    favorites: {
      empty: "No favorite cars",
      emptyTitle: "Favorites is empty",
      emptyDescription: "Add cars to favorites to return to them later",
      browseCars: "Browse Cars",
      count: "cars in favorites",
    },
    pages: {
      about: {
        title: "About Us",
        paragraphs: [
          "AutoRent is a car rental service in Kazakhstan. We have been operating since 2020 and offer a wide range of cars from economy to premium.",
          "Our goal is to make rental simple and transparent: fixed prices, no hidden fees, 24/7 support.",
          "Over 1000 cars across the country. Book online and pick up at the office or request delivery.",
        ],
      },
      cars: {
        title: "Cars",
        paragraphs: [
          "The AutoRent catalog includes cars of all classes: economy, standard, business, luxury, and electric.",
          "Specs, photos, and current daily rates are shown. Filters by class, transmission, and seats help you find the right option.",
          "All vehicles are serviced and road-ready. Delivery to your address is available on request.",
        ],
      },
      conditions: {
        title: "Rental Conditions",
        paragraphs: [
          "Renter must be at least 21 years old with a valid driver's license held for at least 1 year. Passport and license required.",
          "Payment: cash or card. A deposit is held on the card and released after the vehicle inspection.",
          "Subletting, racing, and carrying prohibited goods are not allowed. Rates and limits are set out in the rental agreement.",
        ],
      },
      faq: {
        title: "Frequently Asked Questions",
        items: [
          { q: "How do I book a car?", a: "Choose a car and dates on the website, submit a request. We will confirm the booking and tell you the pickup time." },
          { q: "What documents do I need?", a: "Passport and driver's license. For rentals over 30 days, additional documents may be required." },
          { q: "Can I return the car in another city?", a: "Yes, intercity rental is available. Terms and extra fees are confirmed at booking." },
          { q: "What is included in the price?", a: "The base rate includes rental, CASCO, and limited mileage. Extra mileage and options are charged per the price list." },
        ],
      },
      dailyRental: {
        title: "Daily Rental",
        paragraphs: [
          "Rental from 1 day with flexible dates. Ideal for city trips, airport transfers, or short getaways.",
          "Daily rate is fixed and shown on the website. Discounts apply for 3–7 day rentals. 24/7 support.",
        ],
      },
      monthlyRental: {
        title: "Monthly Rental",
        paragraphs: [
          "Long-term rental from 1 month at competitive rates. Suitable for business trips, relocations, or as a temporary replacement for your own car.",
          "Monthly payment. Maintenance and seasonal tire changes are included in the long-term program.",
        ],
      },
      corporateRental: {
        title: "Corporate Rental",
        paragraphs: [
          "Special terms for companies: invoicing, contract, reporting. Fleet rental for employees and guests.",
          "Dedicated manager and flexible schedule. Volume discounts. Submit a request and we will send a commercial offer.",
        ],
      },
      delivery: {
        title: "Car Delivery",
        paragraphs: [
          "We deliver the car to you: office, home, airport, or station. Time and place are agreed at booking.",
          "Delivery is a paid add-on; cost depends on distance. Within the city from 3000 ₸. Ordered together with the rental.",
        ],
      },
      insurance: {
        title: "Insurance",
        paragraphs: [
          "All cars are insured under CASCO and OSAGO. The base rate includes standard coverage.",
          "You can add extended insurance with no or reduced deductible. Details from your manager.",
        ],
      },
      privacy: {
        title: "Privacy Policy",
        paragraphs: [
          "AutoRent collects and stores only the data needed for rental: name, contacts, license and passport details.",
          "We do not share personal data with third parties without consent, except where required by law. Data is protected and used only to run the service.",
          "You can request a copy of your data or its deletion. Contact us at info@autorent.kz.",
        ],
      },
      terms: {
        title: "Terms of Use",
        paragraphs: [
          "Using the AutoRent website means you agree to these terms. The service provides information and accepts rental requests.",
          "Prices and availability are indicative. Final terms are set in the rental agreement. For questions: info@autorent.kz.",
        ],
      },
    },
  },
};

export const getTranslation = (lang: Language, key: string): string => {
  const keys = key.split(".");
  let value: any = translations[lang];
  
  for (const k of keys) {
    value = value?.[k];
    if (value === undefined) {
      // Fallback to Russian if translation not found
      value = translations.ru;
      for (const k2 of keys) {
        value = value?.[k2];
      }
      break;
    }
  }
  
  return typeof value === "string" ? value : key;
};

const defaultMonthsShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export const getMonthsShort = (lang: Language): string[] => {
  const arr = (translations[lang] as any)?.hero?.monthsShort;
  return Array.isArray(arr) ? arr : (translations.ru as any).hero?.monthsShort ?? defaultMonthsShort;
};
