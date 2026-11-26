const LANGUAGE_CODES = ["tg", "ru", "en", "zh", "fa"];

const TEXT = {
  tg: {
    search: "Ҷустуҷӯ...",
    noResults: "Чизе ёфт нашуд.",
    area: "Масоҳат",
    bucketPlan: "Вариантҳои харид",
    cheapest: "Арзонтарин",
    addPlan: "Ба сабад илова кардан",
    all: "Ҳама",
    allProducts: "Ҳамаи маҳсулот",
    product: "маҳсулот",
    buy: "Барои харидан пахш кунед",
    price: "Нарх",
    request: "Бо дархост",
    currency: "сомонӣ",
    kg: "кг",
    home: "Асосӣ",
    catalog: "Маҳсулотҳо",
    cart: "Сабад",
    contact: "Профил",
    phone: "Телефон",
    write: "Ба мо нависед",
    company: "ҶДММ «Синои Тоҷир»",
    location: "⌖ ш. Ҳисор, деҳаи Ойбош",
    cartTitle: "Сабади шумо",
    emptyCart: "Сабад холӣ аст.",
    continue: "Идома додан →",
    orderTitle: "Маълумоти фармоиш",
    fullName: "Ному насаб",
    city: "Шаҳр ё ноҳия",
    address: "Суроға",
    comment: "Шарҳ",
    send: "Фиристодан ба WhatsApp",
    paymentMethod: "Тарзи пардохт",
    cash: "Нақдӣ ҳангоми гирифтани мол",
    card: "Ба Dushanbe City",
    firstOrder: "Фармоиши якум: пешпардохт ҳатмист",
    deposit: "Пешпардохт",
    remainder: "Маблағи боқимонда",
    total: "Ҳамагӣ",
    copyNumber: "Нусха гирифтани рақам",
    copied: "Рақам нусха шуд ✓",
    receipt: "Скриншоти чекро интихоб кунед",
    attachReceipt: "Чек интихоб шуд — онро дар WhatsApp замима кунед",
    checkingReceipt: "Чек санҷида шуда истодааст...",
    receiptAccepted: "Чеки дуруст қабул шуд ✓",
    receiptRejected: "Ин чеки дурусти Dushanbe City нест ё маблағаш нодуруст аст.",
    receiptError: "Чек хонда нашуд. Интернет ё сифати суратро санҷед.",
    favorites: "Дӯстдоштаҳо",
    calculator: "Ҳисобкунаки ранг",
    visualizer: "Интихоби ранги девор",
    discount: "Тахфиф",
    details: "Маълумоти пурра",
    width: "Дарозии девор (м)",
    height: "Баландии девор (м)",
    coats: "Шумораи қабат",
    calculate: "Ҳисоб кардан",
    needed: "Ранги лозим",
    chooseProduct: "Маҳсулотро интихоб кунед",
    chooseColor: "Рангро интихоб кунед",
    profileName: "Ному насаб",
    profilePhone: "Рақами телефон",
    profileCity: "Шаҳр ё ноҳия",
    saveProfile: "Нигоҳ доштани профил",
    profileSaved: "Профил нигоҳ дошта шуд ✓",
    editProfile: "Тағйир додани профил",
    logoutProfile: "Баромадан аз профил",
    cancel: "Бекор кардан",
    chooseAvatar: "Расми профилро интихоб кунед",
    gallery: "Аз галерея интихоб кардан",
    guest: "Меҳмон",
    hoverInfo: "Маълумоти маҳсулот",
    before: "Пеш",
    after: "Баъд",
    finish: "Намуди рӯйпӯш",
    matte: "матти ҳамвор",
    facadeFinish: "фасадии тобовар",
    decorativeFinish: "декоративии фактурадор",
    primerFinish: "қабати омодасозӣ",
    glueFinish: "ширеш аст — ранги девор нест",
    professionalFinish: "касбии нимҷилодор",
    compareHint: "Тугмаро кашед: пеш ва баъдро муқоиса кунед",
    nextColor: "Ранги дигар",
    resetWall: "Аз нав",
    dragWall: "Тирчаро кашед ва паҳноии рангро интихоб кунед",
    wallParts: "Қисмҳои девор",
    chooseWallProduct: "Маҳсулотро интихоб кунед",
    primerDemo: "Намоиши воқеӣ: грунтовка пеш аз эмулсия ба девори хом зада мешавад.",
    pvaDemo: "Намоиши воқеӣ: PVA барои часпондани чӯб ва дигар масолеҳ истифода мешавад."
  },
  ru: {
    search: "Поиск...",
    noResults: "Ничего не найдено.",
    area: "Площадь",
    bucketPlan: "Варианты покупки",
    cheapest: "Выгоднее всего",
    addPlan: "Добавить в корзину",
    all: "Все",
    allProducts: "Все товары",
    product: "товаров",
    buy: "Нажмите, чтобы купить",
    price: "Цена",
    request: "По запросу",
    currency: "сомони",
    kg: "кг",
    home: "Главная",
    catalog: "Каталог",
    cart: "Корзина",
    contact: "Профиль",
    phone: "Телефон",
    write: "Напишите нам",
    company: "ООО «Синои Точир»",
    location: "⌖ г. Гиссар, село Ойбош",
    cartTitle: "Ваша корзина",
    emptyCart: "Корзина пуста.",
    continue: "Продолжить →",
    orderTitle: "Данные заказа",
    fullName: "Имя и фамилия",
    city: "Город или район",
    address: "Адрес",
    comment: "Комментарий",
    send: "Отправить в WhatsApp",
    paymentMethod: "Способ оплаты", cash: "Наличными при получении",
    card: "На Dushanbe City", firstOrder: "Первый заказ: предоплата обязательна",
    deposit: "Предоплата", remainder: "Остаток", total: "Итого",
    copyNumber: "Копировать номер", copied: "Номер скопирован ✓",
    receipt: "Выберите скриншот чека", attachReceipt: "Чек выбран — прикрепите его в WhatsApp",
    checkingReceipt: "Проверяем чек...", receiptAccepted: "Правильный чек принят ✓",
    receiptRejected: "Это не чек Dushanbe City или сумма неверна.",
    receiptError: "Не удалось прочитать чек. Проверьте интернет или качество фото.",
    favorites: "Избранное", calculator: "Калькулятор краски",
    visualizer: "Подбор цвета стены", discount: "Скидка",
    details: "Подробнее", width: "Ширина стены (м)",
    height: "Высота стены (м)", coats: "Количество слоев",
    calculate: "Рассчитать", needed: "Необходимо краски",
    chooseProduct: "Выберите товар", chooseColor: "Выберите цвет",
    profileName: "Имя и фамилия", profilePhone: "Номер телефона",
    profileCity: "Город или район", saveProfile: "Сохранить профиль",
    profileSaved: "Профиль сохранён ✓", hoverInfo: "Информация о товаре",
    editProfile: "Изменить профиль", logoutProfile: "Выйти из профиля", cancel: "Отмена",
    chooseAvatar: "Выберите фото профиля", gallery: "Выбрать из галереи", guest: "Гость",
    before: "До", after: "После", finish: "Тип покрытия",
    matte: "ровное матовое", facadeFinish: "стойкое фасадное",
    decorativeFinish: "декоративное фактурное", primerFinish: "подготовительный слой",
    glueFinish: "это клей — не краска для стены", professionalFinish: "профессиональное полуглянцевое",
    compareHint: "Двигайте ползунок: сравните до и после",
    nextColor: "Другой цвет", resetWall: "Сначала",
    dragWall: "Перетащите стрелку и выберите ширину цвета", wallParts: "Части стены",
    chooseWallProduct: "Выберите товар",
    primerDemo: "Реальный пример: грунтовка наносится на сырую стену перед эмульсией.",
    pvaDemo: "Реальный пример: PVA используется для склеивания дерева и других материалов."
  },
  en: {
    search: "Search...",
    noResults: "Nothing found.",
    area: "Area",
    bucketPlan: "Buying options",
    cheapest: "Best value",
    addPlan: "Add to cart",
    all: "All",
    allProducts: "All products",
    product: "products",
    buy: "Tap to buy",
    price: "Price",
    request: "On request",
    currency: "somoni",
    kg: "kg",
    home: "Home",
    catalog: "Catalog",
    cart: "Cart",
    contact: "Profile",
    phone: "Phone",
    write: "Message us",
    company: "Sinoi Tojir LLC",
    location: "⌖ Hisor, Oybosh village",
    cartTitle: "Your cart",
    emptyCart: "Your cart is empty.",
    continue: "Continue →",
    orderTitle: "Order details",
    fullName: "Full name",
    city: "City or district",
    address: "Address",
    comment: "Comment",
    send: "Send via WhatsApp",
    paymentMethod: "Payment method", cash: "Cash on delivery",
    card: "Pay to Dushanbe City", firstOrder: "First order: deposit required",
    deposit: "Deposit", remainder: "Remaining", total: "Total",
    copyNumber: "Copy number", copied: "Number copied ✓",
    receipt: "Choose receipt screenshot", attachReceipt: "Receipt selected — attach it in WhatsApp",
    checkingReceipt: "Checking receipt...", receiptAccepted: "Valid receipt accepted ✓",
    receiptRejected: "This is not a valid Dushanbe City receipt or the amount is incorrect.",
    receiptError: "Could not read the receipt. Check internet or image quality.",
    favorites: "Favorites", calculator: "Paint calculator",
    visualizer: "Wall color visualizer", discount: "Discount",
    details: "View details", width: "Wall width (m)",
    height: "Wall height (m)", coats: "Number of coats",
    calculate: "Calculate", needed: "Paint needed",
    chooseProduct: "Choose a product", chooseColor: "Choose a color",
    profileName: "Full name", profilePhone: "Phone number",
    profileCity: "City or district", saveProfile: "Save profile",
    profileSaved: "Profile saved ✓", hoverInfo: "Product information",
    editProfile: "Edit profile", logoutProfile: "Sign out", cancel: "Cancel",
    chooseAvatar: "Choose a profile picture", gallery: "Choose from gallery", guest: "Guest",
    before: "Before", after: "After", finish: "Surface finish",
    matte: "smooth matte", facadeFinish: "durable exterior",
    decorativeFinish: "decorative textured", primerFinish: "preparation coat",
    glueFinish: "this is adhesive, not wall paint", professionalFinish: "professional satin",
    compareHint: "Drag the slider to compare before and after",
    nextColor: "Another color", resetWall: "Reset",
    dragWall: "Drag the arrow to choose the color width", wallParts: "Wall sections",
    chooseWallProduct: "Choose a product",
    primerDemo: "Real use: primer is applied to a bare wall before emulsion paint.",
    pvaDemo: "Real use: PVA bonds wood and other materials."
  },
  zh: {
    search: "搜索...",
    noResults: "未找到相关产品。",
    area: "面积",
    bucketPlan: "购买方案",
    cheapest: "最划算",
    addPlan: "加入购物车",
    all: "全部",
    allProducts: "所有产品",
    product: "件产品",
    buy: "点击购买",
    price: "价格",
    request: "询价",
    currency: "索莫尼",
    kg: "公斤",
    home: "首页",
    catalog: "目录",
    cart: "购物车",
    contact: "个人资料",
    phone: "电话",
    write: "给我们留言",
    company: "Sinoi Tojir 有限公司",
    location: "⌖ 希萨尔，Oybosh 村",
    cartTitle: "您的购物车",
    emptyCart: "购物车是空的。",
    continue: "继续 →",
    orderTitle: "订单信息",
    fullName: "姓名",
    city: "城市或地区",
    address: "地址",
    comment: "备注",
    send: "发送到 WhatsApp",
    paymentMethod: "付款方式", cash: "货到付款", card: "支付至 Dushanbe City",
    firstOrder: "首次订单：必须预付", deposit: "预付款", remainder: "剩余金额", total: "总计",
    copyNumber: "复制号码", copied: "号码已复制 ✓", receipt: "选择付款凭证截图",
    attachReceipt: "已选择凭证——请在 WhatsApp 中附上",
    checkingReceipt: "正在检查凭证...", receiptAccepted: "有效凭证已接受 ✓",
    receiptRejected: "这不是有效的 Dushanbe City 凭证或金额不正确。",
    receiptError: "无法读取凭证，请检查网络或图片质量。",
    favorites: "收藏", calculator: "油漆计算器",
    visualizer: "墙面颜色预览", discount: "折扣",
    details: "查看详情", width: "墙宽（米）", height: "墙高（米）",
    coats: "涂层数", calculate: "计算", needed: "所需油漆",
    chooseProduct: "选择产品", chooseColor: "选择颜色",
    profileName: "姓名", profilePhone: "电话号码",
    profileCity: "城市或地区", saveProfile: "保存个人资料",
    profileSaved: "个人资料已保存 ✓", hoverInfo: "产品信息",
    editProfile: "编辑个人资料", logoutProfile: "退出登录", cancel: "取消",
    chooseAvatar: "选择头像", gallery: "从相册选择", guest: "访客",
    before: "之前", after: "之后", finish: "表面效果",
    matte: "平滑哑光", facadeFinish: "耐候外墙",
    decorativeFinish: "装饰纹理", primerFinish: "基层处理",
    glueFinish: "这是胶粘剂，不是墙面漆", professionalFinish: "专业丝光",
    compareHint: "拖动滑块对比施工前后",
    nextColor: "另一种颜色", resetWall: "重置", dragWall: "拖动箭头选择颜色宽度",
    wallParts: "墙面分区", chooseWallProduct: "选择产品",
    primerDemo: "真实用途：乳胶漆施工前，先在毛坯墙上涂底漆。",
    pvaDemo: "真实用途：PVA 用于粘合木材和其他材料。"
  },
  fa: {
    search: "جستجو...",
    noResults: "چیزی یافت نشد.",
    area: "مساحت",
    bucketPlan: "گزینه‌های خرید",
    cheapest: "به‌صرفه‌ترین",
    addPlan: "افزودن به سبد",
    all: "همه",
    allProducts: "همه محصولات",
    product: "محصول",
    buy: "برای خرید کلیک کنید",
    price: "قیمت",
    request: "با درخواست",
    currency: "سامانی",
    kg: "کیلوگرم",
    home: "خانه",
    catalog: "فهرست",
    cart: "سبد خرید",
    contact: "پروفایل",
    phone: "تلفن",
    write: "به ما پیام دهید",
    company: "شرکت «سینوی تاجر»",
    location: "⌖ حصار، روستای اویباش",
    cartTitle: "سبد خرید شما",
    emptyCart: "سبد خرید خالی است.",
    continue: "ادامه ←",
    orderTitle: "اطلاعات سفارش",
    fullName: "نام و نام خانوادگی",
    city: "شهر یا منطقه",
    address: "نشانی",
    comment: "توضیحات",
    send: "ارسال به واتساپ",
    paymentMethod: "روش پرداخت", cash: "نقدی هنگام تحویل", card: "پرداخت به Dushanbe City",
    firstOrder: "سفارش اول: پیش‌پرداخت الزامی است", deposit: "پیش‌پرداخت",
    remainder: "مبلغ باقی‌مانده", total: "جمع", copyNumber: "کپی شماره",
    copied: "شماره کپی شد ✓", receipt: "تصویر رسید را انتخاب کنید",
    attachReceipt: "رسید انتخاب شد — آن را در واتساپ پیوست کنید",
    checkingReceipt: "در حال بررسی رسید...", receiptAccepted: "رسید معتبر پذیرفته شد ✓",
    receiptRejected: "این رسید معتبر Dushanbe City نیست یا مبلغ نادرست است.",
    receiptError: "رسید خوانده نشد؛ اینترنت یا کیفیت تصویر را بررسی کنید.",
    favorites: "علاقه‌مندی‌ها", calculator: "محاسبه‌گر رنگ",
    visualizer: "نمایش رنگ دیوار", discount: "تخفیف",
    details: "جزئیات", width: "عرض دیوار (متر)",
    height: "ارتفاع دیوار (متر)", coats: "تعداد لایه",
    calculate: "محاسبه", needed: "رنگ مورد نیاز",
    chooseProduct: "انتخاب محصول", chooseColor: "انتخاب رنگ",
    profileName: "نام و نام خانوادگی", profilePhone: "شماره تلفن",
    profileCity: "شهر یا منطقه", saveProfile: "ذخیره پروفایل",
    profileSaved: "پروفایل ذخیره شد ✓", hoverInfo: "اطلاعات محصول",
    editProfile: "ویرایش پروفایل", logoutProfile: "خروج از حساب", cancel: "لغو",
    chooseAvatar: "انتخاب تصویر پروفایل", gallery: "انتخاب از گالری", guest: "مهمان",
    before: "قبل", after: "بعد", finish: "نوع پوشش",
    matte: "مات صاف", facadeFinish: "نمای مقاوم",
    decorativeFinish: "تزئینی بافت‌دار", primerFinish: "لایه آماده‌سازی",
    glueFinish: "این چسب است، نه رنگ دیوار", professionalFinish: "حرفه‌ای نیمه‌براق",
    compareHint: "نوار را بکشید و قبل و بعد را مقایسه کنید",
    nextColor: "رنگ دیگر", resetWall: "شروع دوباره",
    dragWall: "پیکان را بکشید و پهنای رنگ را انتخاب کنید", wallParts: "بخش‌های دیوار",
    chooseWallProduct: "انتخاب محصول",
    primerDemo: "کاربرد واقعی: آستر پیش از رنگ امولسیون روی دیوار خام اجرا می‌شود.",
    pvaDemo: "کاربرد واقعی: چسب PVA برای اتصال چوب و مواد دیگر استفاده می‌شود."
  }
};

const PLACEHOLDER_PRODUCT_NAMES = new Set([
  "INTERIOR", "FACADE", "DECORATIVE", "PRIMER", "PVA", "PROFESSIONAL"
]);

const DEFAULT_PRODUCTS = [
  {
    id: 1,
    name: {
      tg: "СНЕЖКА",
      ru: "СНЕЖКА",
      en: "SNEZHKA",
      zh: "СНЕЖКА 超白漆",
      fa: "СНЕЖКА"
    },
    description: {
      tg: "Эмулсияи акрилии суперсафед Eco Paint СНЕЖКА барои девор ва шифт. Барои корҳои дарунӣ ва берунӣ.",
      ru: "Супербелая акриловая водоэмульсия Eco Paint СНЕЖКА для стен и потолков. Для внутренних и наружных работ.",
      en: "Eco Paint SNEZHKA super-white acrylic emulsion for walls and ceilings. Interior and exterior.",
      zh: "Eco Paint СНЕЖКА 超白丙烯酸乳胶漆，适用于墙面与天花板，室内外皆可。",
      fa: "امولسیون اکریلیک فوق‌سفید Eco Paint СНЕЖКА برای دیوار و سقف. برای کار داخلی و خارجی."
    },
    category: {
      tg: "Эмулсия",
      ru: "Эмульсия",
      en: "Emulsion",
      zh: "乳胶漆",
      fa: "امولسیون"
    },
    image: "images/sniezhka-sm.jpg",
    variants: [{ weight: 10, price: 75 }, { weight: 20, price: 140 }],
    coverage: 9,
    colors: ["#ffffff", "#f7f4ef", "#e8dfd0", "#d5c4a8"]
  },
  {
    id: 2,
    name: {
      tg: "Eco Facade",
      ru: "Eco Facade",
      en: "Eco Facade",
      zh: "Eco Facade 外墙漆",
      fa: "Eco Facade"
    },
    description: {
      tg: "Ранги фасадӣ барои беруни хона. Ба борон, офтоб ва гармӣ тобовар.",
      ru: "Фасадная краска для наружных работ. Устойчива к дождю, солнцу и жаре.",
      en: "Exterior facade paint. Weather-resistant against rain, sun and heat.",
      zh: "外墙涂料，耐雨、耐晒、耐热。",
      fa: "رنگ نما برای فضای بیرونی. مقاوم در برابر باران، آفتاب و گرما."
    },
    category: { tg: "Эмулсия", ru: "Эмульсия", en: "Emulsion", zh: "乳胶漆", fa: "امولسیون" },
    image: "images/facade.webp",
    variants: [{ weight: 4, price: 58 }, { weight: 10, price: 118 }, { weight: 20, price: 215 }],
    coverage: 7,
    colors: ["#f2efe8", "#d8c8a8", "#a8b59a", "#7d8fa3"]
  },
  {
    id: 3,
    name: {
      tg: "Eco Decorative",
      ru: "Eco Decorative",
      en: "Eco Decorative",
      zh: "Eco Decorative 装饰漆",
      fa: "Eco Decorative"
    },
    description: {
      tg: "Пӯшиши декоративӣ бо фактураи зебо барои ҳуҷраҳои меҳмонӣ ва хобгоҳ.",
      ru: "Декоративное покрытие с красивой фактурой для гостиных и спален.",
      en: "Decorative textured finish for living rooms and bedrooms.",
      zh: "装饰纹理涂料，适合客厅与卧室。",
      fa: "پوشش تزئینی با بافت زیبا برای پذیرایی و اتاق خواب."
    },
    category: { tg: "Декоративӣ", ru: "Декоративные", en: "Decorative", zh: "装饰涂料", fa: "تزئینی" },
    image: "images/decorative.webp",
    variants: [{ weight: 4, price: 85 }, { weight: 10, price: 175 }, { weight: 20, price: 310 }],
    coverage: 5,
    colors: ["#efe6d8", "#c9b29a", "#9caf88", "#76556f"]
  },
  {
    id: 4,
    name: {
      tg: "Eco Primer",
      ru: "Eco Primer",
      en: "Eco Primer",
      zh: "Eco Primer 底漆",
      fa: "Eco Primer"
    },
    description: {
      tg: "Грунтовкаи акрилӣ барои омода кардани девор пеш аз рангкунӣ.",
      ru: "Акриловая грунтовка для подготовки стен перед покраской.",
      en: "Acrylic primer to prepare walls before painting.",
      zh: "丙烯酸底漆，涂装前打底用。",
      fa: "آستر اکریلیک برای آماده‌سازی دیوار قبل از رنگ‌کاری."
    },
    category: { tg: "Грунтовка", ru: "Грунтовка", en: "Primer", zh: "底漆", fa: "آستر" },
    image: "images/primer.webp",
    variants: [{ weight: 4, price: 38 }, { weight: 10, price: 78 }, { weight: 20, price: 135 }],
    coverage: 12,
    colors: ["#ffffff", "#f3f1ec", "#e6e2d8"]
  },
  {
    id: 5,
    name: {
      tg: "Eco PVA",
      ru: "Eco PVA",
      en: "Eco PVA",
      zh: "Eco PVA 胶水",
      fa: "Eco PVA"
    },
    description: {
      tg: "Клейи универсалии ПВА барои чӯб, коғаз ва корҳои сохтмонӣ.",
      ru: "Универсальный клей ПВА для дерева, бумаги и строительных работ.",
      en: "Universal PVA adhesive for wood, paper and construction jobs.",
      zh: "通用 PVA 胶，适用于木材、纸张与施工。",
      fa: "چسب همه‌کاره PVA برای چوب، کاغذ و کارهای ساختمانی."
    },
    category: { tg: "Клей ПВА", ru: "Клей ПВА", en: "PVA glue", zh: "PVA 胶", fa: "چسب PVA" },
    image: "images/pva.webp",
    variants: [{ weight: 4, price: 42 }, { weight: 10, price: 88 }, { weight: 20, price: 155 }],
    coverage: 8,
    colors: ["#ffffff", "#f7f7f5"]
  },
  {
    id: 6,
    name: {
      tg: "Eco Professional",
      ru: "Eco Professional",
      en: "Eco Professional",
      zh: "Eco Professional 专业漆",
      fa: "Eco Professional"
    },
    description: {
      tg: "Серияи касбӣ бо тобоварии баланд барои устоҳо ва корҳои калон.",
      ru: "Профессиональная серия повышенной стойкости для мастеров и крупных работ.",
      en: "Professional high-durability range for trades and large jobs.",
      zh: "专业高耐久系列，适合工匠与大型工程。",
      fa: "سری حرفه‌ای با دوام بالا برای استادکاران و پروژه‌های بزرگ."
    },
    category: { tg: "Касбӣ", ru: "Профессиональные", en: "Professional", zh: "专业系列", fa: "حرفه‌ای" },
    image: "images/professional.webp",
    variants: [{ weight: 4, price: 72 }, { weight: 10, price: 148 }, { weight: 20, price: 265 }],
    coverage: 8,
    colors: ["#f5f2eb", "#e0d4c2", "#88aacc", "#557a58"]
  }
];

function allLanguages(value) {
  return Object.fromEntries(
    LANGUAGE_CODES.map(code => [code, value])
  );
}

function normalizeText(value) {
  if (value && typeof value === "object") {
    return Object.fromEntries(
      LANGUAGE_CODES.map(code => [code, value[code] || value.tg || ""])
    );
  }
  return allLanguages(value || "");
}

function normalizeProductImage(source) {
  if (typeof source !== "string") return "";
  // Saved catalogs are shared by the PNG source and the WebP public build.
  // Resolve bundled photos using this build's defaults; leave uploads untouched.
  const match = source.match(/^(?:(?:\.\.?\/)|\/)?images\/(interior|facade|decorative|primer|pva|professional)\.(?:png|webp)([?#].*)?$/i);
  if (!match) return source;
  const bundled = DEFAULT_PRODUCTS.find(product =>
    product.image.toLowerCase().startsWith(`images/${match[1].toLowerCase()}.`)
  );
  return bundled ? bundled.image + (match[2] || "") : source;
}

function normalizeProduct(product) {
  const oldPrices = product.prices || {};
  const variants = product.variants || Object.entries(oldPrices).map(
    ([size, price]) => ({
      weight: Number.parseFloat(size) || "",
      price: Number(price)
    })
  );

  return {
    id: Number(product.id) || Date.now(),
    name: normalizeText(product.name),
    description: normalizeText(product.description || product.sub),
    category: normalizeText(product.category || product.cat),
    image: normalizeProductImage(product.image),
    variants,
    discount: Math.min(90, Math.max(0, Number(product.discount) || 0)),
    coverage: Math.max(1, Number(product.coverage) || 7),
    colors: Array.isArray(product.colors) && product.colors.length
      ? product.colors
      : ["#ffffff", "#e8dfd0", "#c9d9bd"]
  };
}

function isPlaceholderProductName(name) {
  const value = typeof name === "object" ? name?.tg : name;
  return PLACEHOLDER_PRODUCT_NAMES.has(String(value || "").trim().toUpperCase());
}

function isStubPricing(variants) {
  if (!Array.isArray(variants) || variants.length !== 3) return false;
  const stub = [[4, 30], [10, 55], [20, 95]];
  return variants.every((variant, index) =>
    Number(variant.weight) === stub[index][0] &&
    Number(variant.price) === stub[index][1]
  );
}

function upgradePlaceholderProduct(product) {
  const defaults = DEFAULT_PRODUCTS.find(item => item.id === Number(product.id));
  if (!defaults) return normalizeProduct(product);

  const next = { ...product };
  const placeholderName = isPlaceholderProductName(product.name);
  const stubPrices = !product.variants?.length || isStubPricing(product.variants);

  // Танҳо номҳои INTERIOR/FACADE ва нархи stub-ро нав кун.
  // Сурат/нарх/матни админро ҳеҷ гоҳ нест накун.
  if (placeholderName) {
    next.name = defaults.name;
    next.description = defaults.description;
    next.category = defaults.category;
    next.coverage = defaults.coverage;
    next.colors = defaults.colors;
  }
  if (stubPrices) {
    next.variants = defaults.variants.map(variant => ({ ...variant }));
  }
  return normalizeProduct(next);
}

// V5: сайт аз интернет мегирад — телефон ва компютер якхела мешаванд.
const PRODUCTS_STORAGE_KEY = "ecoPaintProductsLiveV5";

function loadProducts() {
  // Аввал defaults; баъд catalog.json / Firestore ҳамаро якхела мекунад.
  const normalizedDefaults = DEFAULT_PRODUCTS.map(normalizeProduct);
  try {
    const saved = JSON.parse(localStorage.getItem(PRODUCTS_STORAGE_KEY) || "null");
    if (Array.isArray(saved) && saved.length) {
      return saved.map(item => {
        const product = upgradePlaceholderProduct(item);
        if (Number(product.id) === 1 && /images\/(interior\.(webp|png)|sniezhka\.jpg)$/i.test(String(product.image || ""))) {
          product.image = "images/sniezhka-sm.jpg";
        }
        return product;
      });
    }
  } catch (error) {
    console.error(error);
  }
  return normalizedDefaults;
}

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem("ecoPaintCartV1") || "[]");
    return Array.isArray(saved) ? saved.filter(item =>
      item && item.id != null && item.weight != null && Number(item.quantity) > 0
    ).map(item => ({
      id: Number(item.id),
      weight: item.weight,
      quantity: Math.max(1, Number(item.quantity) || 1)
    })) : [];
  } catch (error) {
    return [];
  }
}

function saveCart() {
  localStorage.setItem("ecoPaintCartV1", JSON.stringify(cart));
}

const $ = selector => document.querySelector(selector);
const savedLanguage = localStorage.getItem("ecoPaintLanguage");
let language = LANGUAGE_CODES.includes(savedLanguage) ? savedLanguage : "tg";
let products = loadProducts();
let selectedCategory = "all";
let cart = loadCart();

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
}

function productById(id) {
  return products.find(product => product.id === Number(id));
}

function cartVariant(product, item) {
  if (!product?.variants?.length) return { weight: item?.weight || "", price: 0 };
  return product.variants.find(variant =>
    String(variant.weight) === String(item.weight)
  ) || { weight: "", price: 0 };
}

// Маҳсулоте, ки админ нест кардааст, дар сабади кӯҳна намонад.
function pruneCart() {
  const before = cart.length;
  cart = cart.filter(item => productById(item.id));
  if (cart.length !== before) {
    saveCart();
    updateBadge();
  }
}

function catalogScore(list) {
  if (!Array.isArray(list) || !list.length) return 0;
  return list.reduce((score, item) => {
    let points = 1;
    if (String(item?.image || "").startsWith("data:image/")) points += 8;
    if (Array.isArray(item?.variants) && item.variants.length) points += item.variants.length;
    return score + points;
  }, 0);
}

let cloudCatalogStarted = false;
let cloudLive = false; // Firestore омад — digар catalog.json набояд боз нависад

function applyRemoteProducts(list, source = "fallback") {
  if (!Array.isArray(list) || !list.length) return false;
  // Агар интернет (Firestore) аллакай омада бошад, файли кӯҳна (catalog.json) нанависад.
  if (cloudLive && source !== "cloud") return false;
  products = list
    .map(item => {
      const product = upgradePlaceholderProduct(item);
      if (Number(product.id) === 1 && /images\/(interior\.(webp|png)|sniezhka\.jpg)$/i.test(String(product.image || ""))) {
        product.image = "images/sniezhka-sm.jpg";
      }
      return product;
    })
    .sort((a, b) => a.id - b.id);
  if (source === "cloud") cloudLive = true;
  try {
    localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(products));
  } catch (error) {
    console.warn("catalog cache full", error);
  }
  pruneCart();
  renderCategories();
  renderProducts();
  renderWelcomeBuckets();
  return true;
}

async function loadCatalogJsonFallback() {
  if (cloudLive) return;
  try {
    const response = await fetch(`data/catalog.json?v=24&_=${Date.now()}`, { cache: "no-store" });
    if (!response.ok || cloudLive) return;
    const payload = await response.json();
    if (cloudLive) return;
    const list = Array.isArray(payload) ? payload : payload?.products;
    applyRemoteProducts(list, "fallback");
  } catch (error) {
    console.warn("catalog.json unavailable", error);
  }
}

function startCloudCatalog() {
  if (!/^https?:$/.test(location.protocol)) return;
  // Аввал catalog.json — телефон зуд мебинад; Firestore баъд ҳақиқатро мегирад.
  if (!cloudCatalogStarted) loadCatalogJsonFallback();
  if (!ecoPaintDb || cloudCatalogStarted) return;
  cloudCatalogStarted = true;
  let latestSnapshot = null;
  let initialized = false;
  function refreshCatalog() {
    if (!latestSnapshot || (latestSnapshot.empty && !initialized)) return;
    const list = latestSnapshot.docs.map(document => {
      const data = document.data() || {};
      delete data.syncKey;
      delete data.updatedAt;
      return data;
    });
    applyRemoteProducts(list, "cloud");
  }
  // Зинда: админ тағйир → телефон бе навкунӣ нав мешавад
  ecoPaintDb.collection("products").onSnapshot(snapshot => {
    latestSnapshot = snapshot;
    refreshCatalog();
  }, error => console.error("Cloud products failed", error));

  ecoPaintDb.collection("settings").doc("catalog").onSnapshot(document => {
    initialized = document.exists && document.data()?.initialized === true;
    refreshCatalog();
  }, error => console.error("Cloud catalog state failed", error));

  ecoPaintDb.collection("settings").doc("payment").onSnapshot(document => {
    if (!document.exists) return;
    const data = { ...document.data() };
    delete data.syncKey;
    delete data.updatedAt;
    localStorage.setItem("ecoPaintPaymentSettings", JSON.stringify(data));
  }, error => console.error("Cloud settings failed", error));

  // Вақте телефон боз мешавад — як бор аз сервер каш мекунад
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState !== "visible" || !ecoPaintDb) return;
    ecoPaintDb.collection("products").get({ source: "server" }).then(snapshot => {
      latestSnapshot = snapshot;
      refreshCatalog();
    }).catch(() => {});
  });
}

window.startCloudCatalog = startCloudCatalog;

function tr(key) {
  return TEXT[language][key];
}

function localText(value) {
  return value?.[language] || value?.tg || "";
}

function htmlText(value) {
  return escapeHTML(localText(value));
}

function productImage(product) {
  // Admin-uploaded images must show on the live site; only fall back if missing.
  return product?.image || "images/interior.webp";
}

const TRANSLATION_LANGUAGE = {
  ru: "ru",
  en: "en",
  zh: "zh-CN",
  fa: "fa"
};

function decodeTranslation(value) {
  const area = document.createElement("textarea");
  area.innerHTML = value;
  return area.value;
}

async function translateChunk(text, targetLanguage) {
  const pair = `tg|${TRANSLATION_LANGUAGE[targetLanguage]}`;
  const url = "https://api.mymemory.translated.net/get" +
    `?q=${encodeURIComponent(text)}` +
    `&langpair=${encodeURIComponent(pair)}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Translation request failed");
  }
  const data = await response.json();
  const translated = data.responseData?.translatedText;
  if (!translated || data.responseStatus >= 400) {
    throw new Error(data.responseDetails || "Translation failed");
  }
  return decodeTranslation(translated);
}

function splitForTranslation(text, maximumLength = 430) {
  const pieces = [];
  let remaining = text.trim();

  while (remaining.length > maximumLength) {
    let cut = remaining.lastIndexOf(" ", maximumLength);
    if (cut < 1) cut = maximumLength;
    pieces.push(remaining.slice(0, cut));
    remaining = remaining.slice(cut).trim();
  }
  if (remaining) pieces.push(remaining);
  return pieces;
}

async function translateText(text, targetLanguage) {
  const pieces = splitForTranslation(text);
  const translatedPieces = [];

  for (const piece of pieces) {
    translatedPieces.push(
      await translateChunk(piece, targetLanguage)
    );
  }
  return translatedPieces.join(" ");
}

async function translateOldProducts(targetLanguage) {
  if (targetLanguage === "tg") return;

  const jobs = products.map(async product => {
    const descriptionIsOld =
      !product.description[targetLanguage] ||
      product.description[targetLanguage] === product.description.tg;
    const categoryIsOld =
      !product.category[targetLanguage] ||
      product.category[targetLanguage] === product.category.tg;

    if (descriptionIsOld) {
      product.description[targetLanguage] = await translateText(
        product.description.tg,
        targetLanguage
      );
    }
    if (categoryIsOld) {
      product.category[targetLanguage] = await translateText(
        product.category.tg,
        targetLanguage
      );
    }
  });

  await Promise.all(jobs);
  localStorage.setItem(
    PRODUCTS_STORAGE_KEY,
    JSON.stringify(products)
  );
}

function sizeLabel(variant) {
  return variant.weight
    ? `${variant.weight} ${tr("kg")}`
    : tr("request");
}

function finalPrice(product, variant) {
  const discount = product.discount || 0;
  return Math.round(
    Number(variant.price || 0) * (100 - discount)
  ) / 100;
}

function priceLabel(product, variant) {
  const price = finalPrice(product, variant);
  return price
    ? `${price} ${tr("currency")}`
    : tr("request");
}

function getCategories() {
  const result = new Map();
  products.forEach(product => {
    result.set(product.category.tg, product.category);
  });
  return [...result.entries()];
}

function renderCategories() {
  const categories = getCategories();
  if (selectedCategory !== "all" && !categories.some(([key]) => key === selectedCategory)) {
    selectedCategory = "all";
  }
  $("#categories").innerHTML = [
    `<button data-category="all">${tr("all")}</button>`,
    ...categories.map(([key, names]) =>
      `<button data-category="${escapeHTML(key)}">${htmlText(names)}</button>`
    )
  ].join("");

  document.querySelectorAll("[data-category]").forEach(button => {
    const active = button.dataset.category === selectedCategory;
    button.classList.toggle("active", active);
    button.onclick = () => {
      selectedCategory = button.dataset.category;
      renderCategories();
      renderProducts();
    };
  });
}

function renderProducts() {
  const query = $("#search").value.trim().toLowerCase();
  const list = products.filter(product => {
    const correctCategory = selectedCategory === "all" ||
      product.category.tg === selectedCategory;
    const searchable = [
      localText(product.name),
      localText(product.description),
      localText(product.category)
    ].join(" ").toLowerCase();
    return correctCategory &&
      searchable.includes(query);
  });

  const currentCategory = getCategories().find(
    ([key]) => key === selectedCategory
  );
  $("#title").textContent = selectedCategory === "all" || !currentCategory
    ? tr("allProducts")
    : localText(currentCategory[1]);
  $("#productCount").textContent = `${list.length} ${tr("product")}`;

  const paintAccents = ["#28b463", "#3f8cff", "#ff7a3d", "#f4c542", "#9c6bff", "#00a7a0"];

  $("#products").innerHTML = list.map((product, cardIndex) => {
    const variants = product.variants.length
      ? product.variants
      : [{ weight: "", price: 0 }];
    const first = variants[0];

    return `
      <article class="card" data-id="${product.id}" data-weight="${escapeHTML(first.weight)}"
        style="--paint-accent:${paintAccents[Math.abs(Number(product.id) - 1) % paintAccents.length]};--card-delay:${cardIndex * 70}ms">
        ${product.discount ? `<span class="discount-badge">-${product.discount}%</span>` : ""}
        <button class="photo details-button" data-details="${product.id}">
          <img src="${escapeHTML(productImage(product))}" alt="${htmlText(product.name)}" loading="lazy">
          <span>${tr("buy")}</span>
        </button>
        <div class="paint-motion" aria-hidden="true">
          <img class="paint-real-lid" src="${escapeHTML(productImage(product))}" alt="" loading="lazy">
          <i class="paint-wave"></i>
          <i class="paint-drop drop-one"></i>
          <i class="paint-drop drop-two"></i>
          <i class="paint-drop drop-three"></i>
          <i class="paint-drop drop-four"></i>
          <i class="paint-drop drop-five"></i>
        </div>
        <div class="product-hover-info">
          <small>${tr("hoverInfo")}</small>
          <strong>${htmlText(product.name)}</strong>
          <p>${htmlText(product.description)}</p>
          <div>
            ${variants.map(variant => `
              <span>${escapeHTML(sizeLabel(variant))} — ${priceLabel(product, variant)}</span>
            `).join("")}
          </div>
        </div>
        <small>${htmlText(product.category)}</small>
        <h3>${htmlText(product.name)}</h3>
        <div class="sizes">
          ${variants.map((variant, index) => `
            <button
              class="${index ? "" : "selected"}"
              data-weight="${escapeHTML(variant.weight)}">
              ${escapeHTML(sizeLabel(variant))}
            </button>
          `).join("")}
        </div>
        <div class="foot">
          <div>
            <small>${tr("price")}</small>
            ${product.discount && first.price ? `<span class="old-price">${first.price} ${tr("currency")}</span>` : ""}
            <b class="price">${priceLabel(product, first)}</b>
          </div>
          <button class="add" aria-label="${tr("cart")}">+</button>
        </div>
      </article>
    `;
  }).join("") || `<p class="empty-results">${tr("noResults")}</p>`;

  document.querySelectorAll(".card").forEach(card => {
    const product = products.find(
      item => item.id == card.dataset.id
    );
    card.querySelectorAll("[data-weight]").forEach(button => {
      button.onclick = () => {
        card.dataset.weight = button.dataset.weight;
        card.querySelectorAll("[data-weight]").forEach(item => {
          item.classList.toggle("selected", item === button);
        });
        const variant = product.variants.find(
          item => String(item.weight) === button.dataset.weight
        ) || { weight: "", price: 0 };
        card.querySelector(".price").textContent = priceLabel(
          product,
          variant
        );
        const oldPrice = card.querySelector(".old-price");
        if (oldPrice) {
          oldPrice.textContent = `${variant.price} ${tr("currency")}`;
        }
      };
    });
    card.querySelectorAll(".add").forEach(button => {
      button.onclick = () => addToCart(
        product,
        card.dataset.weight
      );
    });
  });

  document.querySelectorAll("[data-details]").forEach(button => {
    button.onclick = () => showProductDetails(
      Number(button.dataset.details)
    );
  });
}

function renderWelcomeBuckets() {
  // Окнаи асосӣ нест шуд — дигар лозим нест.
}

function showProductDetails(id) {
  const product = productById(id);
  if (!product) return;
  const variants = product.variants.length
    ? product.variants
    : [{ weight: "", price: 0 }];
  openSheet(`
    <img class="product-detail-image" src="${escapeHTML(productImage(product))}" alt="${htmlText(product.name)}">
    <small>${htmlText(product.category)}</small>
    <h2>${htmlText(product.name)}</h2>
    <p>${htmlText(product.description)}</p>
    ${product.discount ? `<p class="discount-admin">${tr("discount")}: ${product.discount}%</p>` : ""}
    <div class="sizes">
      ${variants.map(variant => `
        <button onclick="addDetailToCart(${product.id}, '${escapeHTML(variant.weight)}')">
          ${escapeHTML(sizeLabel(variant))} · ${priceLabel(product, variant)}
        </button>
      `).join("")}
    </div>
  `);
}

window.addDetailToCart = (id, weight) => {
  const product = products.find(item => item.id === id);
  addToCart(product, weight);
};

function addToCart(product, weight, quantity = 1) {
  if (!product) return;
  if (!isRegistered()) {
    pendingAuthAction = () => addToCart(product, weight, quantity);
    showAuth();
    return;
  }
  const item = cart.find(entry =>
    entry.id === product.id &&
    String(entry.weight) === String(weight)
  );
  item
    ? item.quantity += quantity
    : cart.push({ id: product.id, weight, quantity });
  saveCart();
  updateBadge();
  showCart();
}

function updateBadge() {
  $("#badge").textContent = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
}

function openSheet(html) {
  $(".sheet").classList.remove("studio-sheet", "photo-variant-sheet");
  $("#sheetContent").innerHTML = html;
  $("#overlay").classList.remove("hidden");
}

function showCart() {
  if (!isRegistered()) {
    pendingAuthAction = showCart;
    showAuth();
    return;
  }
  pruneCart();
  const lines = cart.map((item, index) => {
    const product = productById(item.id);
    const variant = cartVariant(product, item);
    return `
      <div class="cartLine">
        <img src="${escapeHTML(productImage(product))}" alt="">
        <div>
          <b>${htmlText(product.name)}</b>
          <small>${escapeHTML(sizeLabel(variant))} · ${priceLabel(product, variant)}</small>
          <div class="qty">
            <button onclick="changeQuantity(${index}, -1)">−</button>
            <span>${item.quantity}</span>
            <button onclick="changeQuantity(${index}, 1)">+</button>
          </div>
        </div>
        <button onclick="removeItem(${index})">×</button>
      </div>
    `;
  }).join("");

  openSheet(`
    <h2>${tr("cartTitle")}</h2>
    ${cart.length ? lines : `<p>🛒 ${tr("emptyCart")}</p>`}
    ${cart.length ? `<div class="cart-total"><span>${tr("total")}</span><b>${orderTotal()} ${tr("currency")}</b></div>` : ""}
    ${cart.length ? `<button class="action" onclick="showOrder()">${tr("continue")}</button>` : ""}
  `);
}

window.changeQuantity = (index, change) => {
  if (!cart[index]) return;
  cart[index].quantity = Math.max(
    1,
    cart[index].quantity + change
  );
  saveCart();
  updateBadge();
  showCart();
};

window.removeItem = index => {
  cart.splice(index, 1);
  saveCart();
  updateBadge();
  showCart();
};

function paymentSettings() {
  try {
    return {
      provider: "Dushanbe City",
      cardNumber: "001022011",
      cardHolder: "",
      whatsapp: "992554900600",
      depositPercent: 15,
      receiptCheckEnabled: false,
      receiptBrandWords: ["dushanbe", "душанбе", "dc next", "dc wallet", "001022011"],
      receiptSuccessWords: ["успеш", "оплачен", "выполнен", "success", "successful", "мувафф"],
      ...JSON.parse(localStorage.getItem("ecoPaintPaymentSettings") || "{}")
    };
  } catch (error) {
    console.error(error);
    return {
      provider: "Dushanbe City",
      cardNumber: "001022011",
      cardHolder: "",
      whatsapp: "992554900600",
      depositPercent: 15,
      receiptCheckEnabled: false,
      receiptBrandWords: ["dushanbe", "душанбе", "dc next", "dc wallet", "001022011"],
      receiptSuccessWords: ["успеш", "оплачен", "выполнен", "success", "successful", "мувафф"]
    };
  }
}

function orderTotal() {
  return Math.round(cart.reduce((sum, item) => {
    const product = productById(item.id);
    if (!product) return sum;
    return sum + finalPrice(product, cartVariant(product, item)) * item.quantity;
  }, 0) * 100) / 100;
}

function customerOrderCount(phone) {
  try {
    const customers = JSON.parse(
      localStorage.getItem("ecoPaintOrderCustomers") || "{}"
    );
    return Number(customers[phone.replace(/\D/g, "")]) || 0;
  } catch (error) {
    return 0;
  }
}

function rememberCustomerOrder(phone) {
  const key = phone.replace(/\D/g, "");
  let customers = {};
  try {
    customers = JSON.parse(
      localStorage.getItem("ecoPaintOrderCustomers") || "{}"
    );
  } catch (error) {
    console.error(error);
  }
  customers[key] = (Number(customers[key]) || 0) + 1;
  localStorage.setItem(
    "ecoPaintOrderCustomers",
    JSON.stringify(customers)
  );
}

async function checkReceipt(file, expectedAmount) {
  const settings = paymentSettings();
  if (!settings.receiptCheckEnabled) return true;

  if (typeof window.ecoPaintLoadTesseract === "function") {
    await window.ecoPaintLoadTesseract();
  }
  if (!window.Tesseract) {
    throw new Error("OCR library did not load");
  }

  const worker = await Tesseract.createWorker("eng+rus");
  try {
    const result = await worker.recognize(file);
    const text = result.data.text
      .toLowerCase()
      .replace(/\s+/g, " ");
    const compactText = text.replace(/\s/g, "");

    const hasDushanbeCity = settings.receiptBrandWords.some(
      marker => text.includes(String(marker).toLowerCase())
    );

    const hasSuccessfulStatus = settings.receiptSuccessWords.some(
      marker => text.includes(String(marker).toLowerCase())
    );

    const amount = Number(expectedAmount).toFixed(2);
    const amountVariants = [
      amount,
      amount.replace(".", ","),
      String(Number(amount))
    ].map(value => value.replace(/\s/g, ""));
    const hasCorrectAmount = amountVariants.some(value =>
      compactText.includes(value)
    );

    return hasDushanbeCity &&
      hasSuccessfulStatus &&
      hasCorrectAmount;
  } finally {
    await worker.terminate();
  }
}

function renderPaymentChoice(firstOrder) {
  const settings = paymentSettings();
  const total = orderTotal();
  const deposit = Math.round(
    total * settings.depositPercent
  ) / 100;
  const remainder = Math.round((total - deposit) * 100) / 100;
  const sendButton = document.querySelector("#order .action");
  if (sendButton) {
    sendButton.disabled = false;
    sendButton.textContent = tr("send");
  }
  $("#paymentChoice").innerHTML = `
    ${firstOrder ? `
      <div class="first-order-note">${tr("firstOrder")}</div>
      <input type="hidden" name="payment" value="card">
    ` : `
      <div class="payment-options">
        <label><input type="radio" name="payment" value="cash" checked> ${tr("cash")}</label>
        <label><input type="radio" name="payment" value="card"> ${tr("card")}</label>
      </div>
    `}
    <div id="cardPayment" class="card-payment ${firstOrder ? "" : "hidden"}">
      <strong>Dushanbe City</strong>
      <div class="card-number">${settings.cardNumber}</div>
      ${settings.cardHolder ? `<small>${settings.cardHolder}</small>` : ""}
      <button type="button" class="copy-card" onclick="copyPaymentNumber()">${tr("copyNumber")}</button>
      <div class="payment-summary">
        <span>${tr("total")}<b>${total} ${tr("currency")}</b></span>
        ${firstOrder ? `
          <span>${tr("deposit")} ${settings.depositPercent}%<b>${deposit} ${tr("currency")}</b></span>
          <span>${tr("remainder")}<b>${remainder} ${tr("currency")}</b></span>
        ` : ""}
      </div>
      <label class="receipt-picker">
        ${tr("receipt")}
        <input id="receiptFile" name="receipt" type="file" accept="image/*" ${firstOrder ? "required" : ""}>
      </label>
      <img id="receiptPreview" class="receipt-preview hidden" alt="">
      <p id="receiptStatus" class="receipt-status"></p>
    </div>
  `;
}

window.copyPaymentNumber = async () => {
  const number = paymentSettings().cardNumber;
  try {
    await navigator.clipboard.writeText(number);
  } catch (error) {
    const area = document.createElement("textarea");
    area.value = number;
    document.body.appendChild(area);
    area.select();
    document.execCommand("copy");
    area.remove();
  }
  const button = document.querySelector(".copy-card");
  if (button) button.textContent = tr("copied");
};

window.showOrder = () => {
  if (!isRegistered()) {
    pendingAuthAction = window.showOrder;
    showAuth();
    return;
  }
  let profile = {};
  try {
    profile = JSON.parse(
      localStorage.getItem("ecoPaintCustomerProfile") || "{}"
    );
  } catch (error) {
    console.error(error);
  }
  pruneCart();
  if (!cart.length) {
    showCart();
    return;
  }
  openSheet(`
    <h2>${tr("orderTitle")}</h2>
    <form class="order" id="order">
      <label>${tr("fullName")}<input name="name" value="${escapeHTML(profile.name)}" autocomplete="name" required></label>
      <label>${tr("phone")}<input name="phone" type="tel" value="${escapeHTML(profile.phone)}" autocomplete="tel" required></label>
      <label>${tr("city")}<input name="city" value="${escapeHTML(profile.city)}" autocomplete="address-level2" required></label>
      <label>${tr("address")}<textarea name="address" required></textarea></label>
      <div>
        <b>${tr("paymentMethod")}</b>
        <div id="paymentChoice"></div>
      </div>
      <label>${tr("comment")}<textarea name="comment"></textarea></label>
      <button class="action">${tr("send")}</button>
    </form>
  `);
  renderPaymentChoice(customerOrderCount(profile.phone || "") === 0);
};

$("#sheetContent").addEventListener("change", async event => {
  if (event.target.name === "phone") {
    renderPaymentChoice(customerOrderCount(event.target.value) === 0);
  }

  if (event.target.name === "payment") {
    const cardPayment = $("#cardPayment");
    const receipt = $("#receiptFile");
    const useCard = event.target.value === "card";
    cardPayment.classList.toggle("hidden", !useCard);
    receipt.required = useCard;
  }

  if (event.target.id === "receiptFile") {
    const file = event.target.files[0];
    const preview = $("#receiptPreview");
    const status = $("#receiptStatus");
    const sendButton = document.querySelector("#order .action");
    if (!file) {
      preview.classList.add("hidden");
      status.textContent = "";
      return;
    }

    preview.src = URL.createObjectURL(file);
    preview.classList.remove("hidden");
    status.className = "receipt-status checking";
    status.textContent = tr("checkingReceipt");
    sendButton.disabled = true;
    sendButton.textContent = tr("checkingReceipt");

    const phone = document.querySelector(
      "#order input[name='phone']"
    ).value;
    const firstOrder = customerOrderCount(phone) === 0;
    const settings = paymentSettings();
    const total = orderTotal();
    const expectedAmount = firstOrder
      ? Math.round(total * settings.depositPercent) / 100
      : total;

    try {
      const correctReceipt = await checkReceipt(
        file,
        expectedAmount
      );

      // MVP: OCR is advisory — never soft-lock checkout if a receipt file is attached.
      if (!correctReceipt) {
        status.className = "receipt-status rejected";
        status.textContent = tr("receiptRejected") + " — " + tr("attachReceipt");
        sendButton.disabled = false;
        sendButton.textContent = tr("send");
        return;
      }

      status.className = "receipt-status accepted";
      status.textContent = tr("receiptAccepted");
      sendButton.disabled = false;
      sendButton.textContent = tr("send");
    } catch (error) {
      console.error(error);
      status.className = "receipt-status rejected";
      status.textContent = tr("receiptError") + " — " + tr("attachReceipt");
      sendButton.disabled = false;
      sendButton.textContent = tr("send");
    }
  }
});

let phoneCheckTimer;
$("#sheetContent").addEventListener("input", event => {
  if (event.target.name !== "phone") return;
  clearTimeout(phoneCheckTimer);
  phoneCheckTimer = setTimeout(() => {
    if (event.target.value.replace(/\D/g, "").length >= 5) {
      renderPaymentChoice(
        customerOrderCount(event.target.value) === 0
      );
    }
  }, 250);
});

$("#sheetContent").addEventListener("submit", event => {
  if (event.target.id !== "order") return;
  event.preventDefault();

  const form = new FormData(event.target);
  const phone = String(form.get("phone") || "");
  const firstOrder = customerOrderCount(phone) === 0;
  const method = firstOrder ? "card" : (form.get("payment") || "cash");
  const settings = paymentSettings();
  const total = orderTotal();
  const deposit = Math.round(total * settings.depositPercent) / 100;
  const remainder = Math.round((total - deposit) * 100) / 100;
  if (method === "card" && !form.get("receipt")?.size) {
    alert(tr("receipt"));
    return;
  }
  const productLines = cart.filter(item => productById(item.id)).map(item => {
    const product = productById(item.id);
    const variant = cartVariant(product, item);
    return `• ${localText(product.name)} — ` +
      `${sizeLabel(variant)} × ${item.quantity} ` +
      `(${priceLabel(product, variant)})`;
  }).join("\n");

  const message = [
    "ECO PAINT",
    "",
    productLines,
    "",
    `${tr("fullName")}: ${form.get("name")}`,
    `${tr("phone")}: ${form.get("phone")}`,
    `${tr("city")}: ${form.get("city")}`,
    `${tr("address")}: ${form.get("address")}`,
    `${tr("paymentMethod")}: ${method === "card" ? tr("card") : tr("cash")}`,
    `${tr("total")}: ${total} ${tr("currency")}`,
    ...(method === "card" ? [
      `${tr("deposit")}: ${firstOrder ? deposit : total} ${tr("currency")}`,
      `${tr("remainder")}: ${firstOrder ? remainder : 0} ${tr("currency")}`,
      tr("attachReceipt")
    ] : []),
    `${tr("comment")}: ${form.get("comment") || "—"}`
  ].join("\n");

  const whatsappUrl = `https://wa.me/${String(settings.whatsapp).replace(/\D/g, "")}?text=` +
    encodeURIComponent(message);
  // Агар браузер равзанаи навро манъ кунад, фармоиш набояд гум шавад.
  const popup = window.open(whatsappUrl, "_blank");
  if (!popup) location.href = whatsappUrl;
  rememberCustomerOrder(phone);
  // Сабадро танҳо пас аз тасдиқ холӣ кун — агар WhatsApp баста шавад, харид гум нашавад.
  if (confirm("WhatsApp ✓\nOK — сабад холӣ")) {
    cart = [];
    saveCart();
    updateBadge();
  }
  $("#overlay").classList.add("hidden");
});

// Арзонтарин омехтаи сатилҳо, ки ҳадди ақал `kilograms` кг медиҳад.
function cheapestBucketPlan(product, kilograms) {
  const sizes = product.variants
    .map(variant => ({
      variant,
      units: Math.round(Number(variant.weight) * 10),
      price: finalPrice(product, variant)
    }))
    .filter(size => size.units > 0 && size.price > 0);
  if (!sizes.length) return null;

  const target = Math.round(kilograms * 10);
  const limit = target + Math.max(...sizes.map(size => size.units));
  const cost = new Array(limit + 1).fill(Infinity);
  const choice = new Array(limit + 1).fill(-1);
  cost[0] = 0;
  for (let amount = 1; amount <= limit; amount++) {
    sizes.forEach((size, index) => {
      if (size.units <= amount && cost[amount - size.units] + size.price < cost[amount]) {
        cost[amount] = cost[amount - size.units] + size.price;
        choice[amount] = index;
      }
    });
  }

  let best = -1;
  for (let amount = target; amount <= limit; amount++) {
    if (cost[amount] < Infinity && (best < 0 || cost[amount] < cost[best])) best = amount;
  }
  if (best < 0) return null;

  const counts = new Map();
  for (let amount = best; amount > 0; amount -= sizes[choice[amount]].units) {
    const size = sizes[choice[amount]];
    counts.set(size, (counts.get(size) || 0) + 1);
  }
  return {
    total: Math.round(cost[best] * 100) / 100,
    items: [...counts].map(([size, count]) => ({ variant: size.variant, count }))
  };
}

function showCalculator() {
  if (!products.length) return;
  const options = products.map(product => `
    <option value="${product.id}">${htmlText(product.name)}</option>
  `).join("");
  openSheet(`
    <h2>${tr("calculator")}</h2>
    <form id="paintCalculator">
      <label>${tr("chooseProduct")}
        <select id="calculatorProduct">${options}</select>
      </label>
      <div class="calculator-grid">
        <label>${tr("width")}<input id="wallWidth" type="number" min="0.1" step="0.1" required></label>
        <label>${tr("height")}<input id="wallHeight" type="number" min="0.1" step="0.1" required></label>
        <label>${tr("coats")}<input id="coatCount" type="number" min="1" value="2" required></label>
      </div>
      <button class="action">${tr("calculate")}</button>
      <div id="calculatorResult"></div>
    </form>
  `);

  $("#paintCalculator").onsubmit = event => {
    event.preventDefault();
    const product = productById($("#calculatorProduct").value);
    if (!product) return;
    const area = Math.round(Number($("#wallWidth").value) *
      Number($("#wallHeight").value) * 100) / 100;
    const kilograms = Math.ceil(
      area * Number($("#coatCount").value) / product.coverage
    );
    const plan = cheapestBucketPlan(product, kilograms);
    $("#calculatorResult").innerHTML = `
      <div class="paint-result">
        <span>${tr("area")}: ${area} м²</span>
        <b>${tr("needed")}: ${kilograms} ${tr("kg")}</b>
      </div>
      ${plan ? `
        <div class="bucket-plan">
          <small>${tr("bucketPlan")} · ${tr("cheapest")}</small>
          ${plan.items.map(item => `
            <span>${escapeHTML(sizeLabel(item.variant))} × ${item.count}</span>
          `).join("")}
          <b>${tr("total")}: ${plan.total} ${tr("currency")}</b>
          <button id="addBucketPlan" class="action" type="button">${tr("addPlan")}</button>
        </div>
      ` : ""}
    `;
    if (plan) {
      $("#addBucketPlan").onclick = function addPlan() {
        if (!isRegistered()) {
          pendingAuthAction = addPlan;
          showAuth();
          return;
        }
        plan.items.forEach(item => {
          const existing = cart.find(entry =>
            entry.id === product.id && String(entry.weight) === String(item.variant.weight)
          );
          existing
            ? existing.quantity += item.count
            : cart.push({ id: product.id, weight: item.variant.weight, quantity: item.count });
        });
        saveCart();
        updateBadge();
        showCart();
      };
    }
  };
}

const TOP_WALL_COLORS = [
  "#f1eadc", "#d5b98f", "#9caf88", "#557a58",
  "#8eb6c7", "#416a8b", "#c9828b", "#a9493d",
  "#d29a32", "#c4673f", "#76556f", "#4e5557"
];

function wallPalette(product) {
  const saved = Array.isArray(product.colors) ? product.colors : [];
  const oldDefaults = ["#ffffff", "#e8dfd0", "#c9d9bd"];
  const custom = saved.length === oldDefaults.length &&
    saved.every((color, index) => color.toLowerCase() === oldDefaults[index])
      ? []
      : saved;
  return [...new Set([...custom, ...TOP_WALL_COLORS])]
    .filter(color => /^#[0-9a-f]{6}$/i.test(color))
    .slice(0, 12);
}

function wallMode(product) {
  // Ном ва категория намуди маҳсулотро муайян мекунанд. Тавсифи INTERIOR
  // метавонад калимаи «грунтовка» дошта бошад, вале худи маҳсулот грунтовка нест.
  const text = [product.name, product.category]
    .map(value => typeof value === "object" ? Object.values(value).join(" ") : value)
    .join(" ").toLowerCase();
  if (/pva|пва|ширеш|клей/.test(text)) return "pva";
  if (/primer|грунт|грунтов/.test(text)) return "primer";
  if (/facade|фасад/.test(text)) return "facade";
  if (/decor|декор/.test(text)) return "decorative";
  if (/professional|касб|профессион/.test(text)) return "professional";
  return "interior";
}

function showWallStudioLegacy(selectedId = products[0]?.id) {
  const product = products.find(item => item.id === Number(selectedId)) || products[0];
  if (!product) return;
  const mode = wallMode(product);
  const isDemo = mode === "primer" || mode === "pva";
  const isRoom = ["interior", "decorative", "professional"].includes(mode);
  const needsForeground = isRoom || mode === "facade";
  const image = mode === "facade"
    ? "images/visualizer-facade-v2.webp"
    : mode === "decorative"
      ? "images/visualizer-decorative-v2.webp"
      : mode === "professional"
        ? "images/visualizer-professional-v2.webp"
    : mode === "primer"
      ? "images/visualizer-primer-v2.webp"
      : mode === "pva"
        ? "images/visualizer-pva-v2.webp"
        : "images/visualizer-interior-v3.webp";

  openSheet(`
    <div class="studio-toolbar">
      <div><b>${tr("visualizer")}</b><small>${tr("dragWall")}</small></div>
      <select id="wallProduct" aria-label="${tr("chooseWallProduct")}">
        ${products.map(item => `<option value="${item.id}" ${item.id === product.id ? "selected" : ""}>${htmlText(item.name)}</option>`).join("")}
      </select>
    </div>
    <div id="studioStage" class="studio-stage ${mode}-scene finish-${mode}">
      <img src="${image}" alt="${htmlText(product.name)}">
      ${isDemo ? "" : `
        <div id="paintSurface" class="studio-paint-surface">
          <div id="wallBands" class="studio-bands"></div>
          <button id="wallHandle" class="studio-handle" type="button" aria-label="${tr("dragWall")}"><span>↔</span></button>
        </div>
        ${needsForeground ? `<img class="studio-foreground ${mode}-foreground" src="${image}" alt="">` : ""}
      `}
    </div>
    ${isDemo ? `<p class="studio-demo">${tr(mode === "primer" ? "primerDemo" : "pvaDemo")}</p>` : `
      <div class="studio-status"><span>${tr("wallParts")}: <b id="wallCount">1/12</b></span><span>${tr("dragWall")}</span></div>
      <div id="wallPalette" class="studio-palette"></div>
      <div class="studio-actions">
        <button id="resetWall" type="button">↺ ${tr("resetWall")}</button>
        <button id="nextWallColor" class="action" type="button">＋ ${tr("nextColor")}</button>
      </div>
    `}
  `);
  $(".sheet").classList.add("studio-sheet");
  $("#wallProduct").onchange = event => showWallStudio(event.target.value);
  if (isDemo) return;

  const palette = wallPalette(product);
  // Ранги якум аз аввал тамоми деворро мепӯшонад. Истифодабаранда
  // тирчаро ба чап мекашад ва ранги нав ҷойи боқимондаро пур мекунад.
  let bands = [{ color: palette[0], width: 100 }];
  let active = 0;

  function renderWall() {
    $("#wallBands").innerHTML = bands.map((band, index) => `
      <div class="studio-band ${index === active ? "active" : ""}" style="width:${band.width}%;--band-color:${band.color}"></div>
    `).join("");
    const total = bands.reduce((sum, band) => sum + band.width, 0);
    $("#wallHandle").style.left = `${Math.min(total, 99.2)}%`;
    $("#wallCount").textContent = `${bands.length}/12`;
    $("#wallPalette").innerHTML = palette.map((color, index) => `
      <button type="button" data-color="${color}" title="${index + 1}" style="--swatch:${color}" class="${bands[active].color === color ? "selected" : ""}">${index + 1}</button>
    `).join("");
    $("#wallPalette").querySelectorAll("button").forEach(button => {
      button.onclick = () => {
        bands[active].color = button.dataset.color;
        renderWall();
      };
    });
    $("#nextWallColor").disabled = bands.length >= 12 || total >= 99;
  }

  function moveHandle(clientX) {
    const rect = $("#paintSurface").getBoundingClientRect();
    const previous = bands.slice(0, active).reduce((sum, band) => sum + band.width, 0);
    const maximum = 100 - bands.slice(active + 1).reduce((sum, band) => sum + band.width, 0);
    const position = Math.max(previous + 3, Math.min(maximum, (clientX - rect.left) / rect.width * 100));
    bands[active].width = position - previous;
    renderWall();
  }

  $("#wallHandle").onpointerdown = event => {
    event.preventDefault();
    $("#wallHandle").setPointerCapture(event.pointerId);
    $("#wallHandle").onpointermove = move => moveHandle(move.clientX);
    $("#wallHandle").onpointerup = () => { $("#wallHandle").onpointermove = null; };
  };
  $("#nextWallColor").onclick = () => {
    const used = bands.reduce((sum, band) => sum + band.width, 0);
    if (bands.length >= 12 || used >= 99) return;
    const remaining = 100 - used;
    bands.push({ color: palette[bands.length % palette.length], width: remaining });
    active = bands.length - 1;
    renderWall();
  };
  $("#resetWall").onclick = () => {
    bands = [{ color: palette[0], width: 100 }];
    active = 0;
    renderWall();
  };
  renderWall();
}

function showWallStudio(selectedId = products[0]?.id) {
  const product = products.find(item => item.id === Number(selectedId)) || products[0];
  if (!product) return;
  const mode = wallMode(product);
  const scenes = typeof WALL_IMAGE_VARIANTS === "object" ? WALL_IMAGE_VARIANTS[mode] : null;
  if (!scenes) return showWallStudioLegacy(selectedId);

  const labels = {
    tg: { living:"Меҳмонхона", bedroom:"Хонаи хоб", kids:"Хонаи кӯдакон", kitchen:"Ошхона", color:"Рангро интихоб кунед", room:"Хонаро интихоб кунед" },
    ru: { living:"Гостиная", bedroom:"Спальня", kids:"Детская", kitchen:"Кухня", color:"Выберите цвет", room:"Выберите комнату" },
    en: { living:"Living room", bedroom:"Bedroom", kids:"Kids room", kitchen:"Kitchen", color:"Choose a color", room:"Choose a room" },
    zh: { living:"客厅", bedroom:"卧室", kids:"儿童房", kitchen:"厨房", color:"选择颜色", room:"选择房间" },
    fa: { living:"اتاق نشیمن", bedroom:"اتاق خواب", kids:"اتاق کودک", kitchen:"آشپزخانه", color:"انتخاب رنگ", room:"انتخاب اتاق" }
  }[language] || {};
  const roomKeys = Object.keys(scenes);
  let room = roomKeys[0];
  let selected = 0;

  openSheet(`
    <div class="studio-toolbar">
      <div><b>${tr("visualizer")}</b><small>${labels.color}</small></div>
      <select id="wallProduct" aria-label="${tr("chooseWallProduct")}">
        ${products.map(item => `<option value="${item.id}" ${item.id === product.id ? "selected" : ""}>${htmlText(item.name)}</option>`).join("")}
      </select>
    </div>
    <div class="photo-variant-stage"><img id="variantScene" alt="${htmlText(product.name)}"></div>
    ${roomKeys.length > 1 ? `<div class="photo-room-tabs" aria-label="${labels.room}">${roomKeys.map(key => `<button type="button" data-room="${key}">${labels[key]}</button>`).join("")}</div>` : ""}
    <div class="photo-variant-heading"><b>${labels.color}</b><span id="variantCount"></span></div>
    <div id="photoVariantPalette" class="photo-variant-palette"></div>
  `);
  $(".sheet").classList.add("studio-sheet", "photo-variant-sheet");
  $("#wallProduct").onchange = event => showWallStudio(event.target.value);

  function renderVariant() {
    const variants = scenes[room];
    selected = Math.min(selected, variants.length - 1);
    $("#variantScene").src = variants[selected].src;
    $("#variantCount").textContent = `${selected + 1}/${variants.length}`;
    $("#photoVariantPalette").innerHTML = variants.map((item, index) => `<button type="button" data-index="${index}" style="--swatch:${item.color}" class="${index === selected ? "selected" : ""}" aria-pressed="${index === selected}" title="${item.color.toUpperCase()}" aria-label="${labels.color} ${index + 1}: ${item.color}"><span>${index + 1}</span></button>`).join("");
    $("#photoVariantPalette").querySelectorAll("button").forEach(button => button.onclick = () => { selected = Number(button.dataset.index); renderVariant(); });
    document.querySelectorAll(".photo-room-tabs button").forEach(button => button.classList.toggle("selected", button.dataset.room === room));
  }
  document.querySelectorAll(".photo-room-tabs button").forEach(button => button.onclick = () => { room = button.dataset.room; selected = 0; renderVariant(); });
  renderVariant();
}

function applyLanguage() {
  document.documentElement.lang = language;
  document.documentElement.dir = language === "fa" ? "rtl" : "ltr";
  localStorage.setItem("ecoPaintLanguage", language);
  $("#search").placeholder = tr("search");
  $("#search").setAttribute("aria-label", tr("search"));
  $("#catalogLabel").textContent = tr("catalog");
  $("#cartLabel").textContent = tr("cart");
  $("#contactLabel").textContent = tr("contact");
  $("#contactTitle").textContent = tr("contact");
  $("#profileNameLabel").textContent = tr("profileName");
  $("#profilePhoneLabel").textContent = tr("profilePhone");
  $("#profileCityLabel").textContent = tr("profileCity");
  $("#saveProfile").textContent = tr("saveProfile");
  $("#editProfile").textContent = tr("editProfile");
  $("#profileLogout").textContent = tr("logoutProfile");
  $("#cancelProfile").textContent = tr("cancel");
  $("#chooseAvatarLabel").textContent = tr("chooseAvatar");
  $("#galleryLabel").textContent = tr("gallery");
  $("#calculatorLabel").textContent = tr("calculator");
  $("#visualizerLabel").textContent = tr("visualizer");
  document.querySelectorAll("[data-lang]").forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.lang === language
    );
  });
  renderCategories();
  renderProducts();
  loadProfile();
}

let languageRequestId = 0;
document.querySelectorAll("[data-lang]").forEach(button => {
  button.onclick = async () => {
    const requestId = ++languageRequestId;
    language = button.dataset.lang;
    applyLanguage();
    const picker = document.querySelector(".language-picker");
    picker.classList.add("loading");

    try {
      await translateOldProducts(language);
      if (requestId !== languageRequestId) return;
      renderCategories();
      renderProducts();
    } catch (error) {
      if (requestId !== languageRequestId) return;
      console.error(error);
      alert("Тарҷума иҷро нашуд. Интернетро санҷед.");
    } finally {
      if (requestId === languageRequestId) {
        picker.classList.remove("loading");
      }
    }
  };
});

$("#search").oninput = renderProducts;

let selectedAvatar = "👤";
let pendingAuthAction = null;

const AUTH_TEXT = {
  tg: ["Бақайдгирӣ", "Барои харид ном, телефон ва шаҳрро нависед", "Ному насаб", "Рақами телефон", "Шаҳр ё ноҳия", "Бақайдгирӣ", "Ном, телефон ва шаҳр танҳо барои фармоиш нигоҳ дошта мешаванд."],
  ru: ["Регистрация", "Для покупки укажите имя, телефон и город", "Имя и фамилия", "Номер телефона", "Город или район", "Зарегистрироваться", "Имя, телефон и город сохраняются только для заказа."],
  en: ["Sign up", "Enter your name, phone and city to order", "Full name", "Phone number", "City or district", "Sign up", "Name, phone and city are kept only for orders."],
  zh: ["注册", "填写姓名、电话和城市以便下单", "姓名", "电话号码", "城市或地区", "注册", "姓名、电话和城市仅用于下单。"],
  fa: ["ثبت‌نام", "برای خرید نام، تلفن و شهر را بنویسید", "نام و نام خانوادگی", "شماره تلفن", "شهر یا منطقه", "ثبت‌نام", "نام، تلفن و شهر فقط برای سفارش ذخیره می‌شود."]
};

function savedCustomerProfile() {
  try { return JSON.parse(localStorage.getItem("ecoPaintCustomerProfile") || "{}"); }
  catch (error) { return {}; }
}

function isRegistered() {
  const profile = savedCustomerProfile();
  return Boolean(profile.name && profile.phone && profile.city);
}

function showAuth(error = "") {
  const copy = AUTH_TEXT[language] || AUTH_TEXT.tg;
  $("#authTitle").textContent = copy[0];
  $("#authDescription").textContent = copy[1];
  $("#authNameLabel").textContent = copy[2];
  $("#authPhoneLabel").textContent = copy[3];
  $("#authCityLabel").textContent = copy[4];
  $("#authSubmit").textContent = copy[5];
  $("#authPrivacy").textContent = copy[6];
  const profile = savedCustomerProfile();
  $("#authName").value = profile.name || "";
  $("#authPhone").value = profile.phone || "";
  $("#authCity").value = profile.city || "";
  $("#authError").textContent = error;
  $("#authError").classList.toggle("hidden", !error);
  $("#authOverlay").classList.remove("hidden");
}

function showProfileAvatar(avatar) {
  const container = $("#profileAvatar");
  avatar = String(avatar || "👤");
  container.innerHTML = avatar.startsWith("data:image/") || avatar.startsWith("https://")
    ? `<img src="${escapeHTML(avatar)}" alt="" referrerpolicy="no-referrer">`
    : escapeHTML(avatar);
}

function renderProfile(profile) {
  $("#profileDisplayName").textContent = profile.name || tr("guest");
  $("#profileDisplayCity").textContent = profile.city || "";
  $("#profileDisplayPhone").textContent = profile.phone || "";
  selectedAvatar = profile.avatar || "👤";
  showProfileAvatar(selectedAvatar);
}

function loadProfile() {
  try {
    const profile = JSON.parse(
      localStorage.getItem("ecoPaintCustomerProfile")
    ) || {};
    $("#profileName").value = profile.name || "";
    $("#profilePhone").value = profile.phone || "";
    $("#profileCity").value = profile.city || "";
    renderProfile(profile);
  } catch (error) {
    console.error(error);
    renderProfile({});
  }
}

function openProfileEditor() {
  $("#profileView").classList.add("hidden");
  $("#profileForm").classList.remove("hidden");
  $("#profileMessage").textContent = "";
}

function closeProfileEditor() {
  $("#profileForm").classList.add("hidden");
  $("#profileView").classList.remove("hidden");
}

$("#editProfile").onclick = openProfileEditor;
$("#profileLogout").onclick = () => {
  selectedAvatar = "👤";
  localStorage.removeItem("ecoPaintCustomerProfile");
  renderProfile({});
  closeProfileEditor();
  showAuth();
};
$("#cancelProfile").onclick = () => {
  loadProfile();
  closeProfileEditor();
};

document.querySelectorAll("[data-avatar]").forEach(button => {
  button.onclick = () => {
    selectedAvatar = button.dataset.avatar;
    showProfileAvatar(selectedAvatar);
    document.querySelectorAll("[data-avatar]").forEach(item => {
      item.classList.toggle("selected", item === button);
    });
  };
});

$("#profileImage").onchange = event => {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    const image = new Image();
    image.onload = () => {
      const size = 320;
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const context = canvas.getContext("2d");
      const side = Math.min(image.width, image.height);
      const x = (image.width - side) / 2;
      const y = (image.height - side) / 2;
      context.drawImage(image, x, y, side, side, 0, 0, size, size);
      selectedAvatar = canvas.toDataURL("image/jpeg", .82);
      showProfileAvatar(selectedAvatar);
    };
    image.src = reader.result;
  };
  reader.readAsDataURL(file);
};

$("#profileForm").onsubmit = event => {
  event.preventDefault();
  const old = savedCustomerProfile();
  const profile = {
    name: $("#profileName").value.trim(),
    phone: $("#profilePhone").value.trim(),
    city: $("#profileCity").value.trim(),
    email: old.email || "",
    avatar: selectedAvatar
  };
  localStorage.setItem("ecoPaintCustomerProfile", JSON.stringify(profile));
  renderProfile(profile);
  $("#profileMessage").textContent = tr("profileSaved");
  closeProfileEditor();
};
$("#calculatorBtn").onclick = showCalculator;
$("#visualizerBtn").onclick = async () => {
  try {
    if (typeof window.ecoPaintLoadWallVariants === "function") {
      await window.ecoPaintLoadWallVariants();
    }
  } catch (error) {
    console.warn("Wall variants load failed", error);
  }
  showWallStudio();
};
$("#openCart").onclick = $("#cartNav").onclick = showCart;
$("#close").onclick = () => $("#overlay").classList.add("hidden");
$("#overlay").onclick = event => {
  if (event.target.id === "overlay") {
    event.target.classList.add("hidden");
  }
};
document.addEventListener("keydown", event => {
  if (event.key !== "Escape") return;
  $("#overlay").classList.add("hidden");
  $("#authOverlay").classList.add("hidden");
});

function showPage(page) {
  $("#catalogPage").classList.toggle("hidden", page !== "catalog");
  $("#contact").classList.toggle("hidden", page !== "contact");
  $("#catalogBtn").classList.toggle("active", page === "catalog");
  $("#contactBtn").classList.toggle("active", page === "contact");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

$("#catalogBtn").onclick = () => showPage("catalog");
$("#contactBtn").onclick = () => {
  if (!isRegistered()) {
    pendingAuthAction = () => showPage("contact");
    showAuth();
    return;
  }
  showPage("contact");
};

$("#closeAuth").onclick = () => $("#authOverlay").classList.add("hidden");
$("#authOverlay").onclick = event => {
  if (event.target.id === "authOverlay") event.currentTarget.classList.add("hidden");
};

$("#quickRegister").onsubmit = event => {
  event.preventDefault();
  const old = savedCustomerProfile();
  const profile = {
    name: $("#authName").value.trim(),
    phone: $("#authPhone").value.trim(),
    city: $("#authCity").value.trim(),
    email: old.email || "",
    avatar: old.avatar || "👤"
  };
  if (profile.phone.replace(/\D/g, "").length < 9) {
    $("#authError").textContent = "Рақами телефонро пурра нависед (масалан, 992 55 490 06 00).";
    $("#authError").classList.remove("hidden");
    $("#authPhone").focus();
    return;
  }
  localStorage.setItem("ecoPaintCustomerProfile", JSON.stringify(profile));
  renderProfile(profile);
  $("#authOverlay").classList.add("hidden");
  const action = pendingAuthAction;
  pendingAuthAction = null;
  if (action) action();
};

window.addEventListener("storage", event => {
  if (
    event.key === PRODUCTS_STORAGE_KEY ||
    event.key === "ecoPaintProductsAutoV3" ||
    event.key === "ecoPaintProductsAutoV1"
  ) {
    products = loadProducts();
    pruneCart();
    renderCategories();
    renderProducts();
    renderWelcomeBuckets();
  }
});

async function startSite() {
  applyLanguage();
  showPage("catalog");
  pruneCart();
  updateBadge();
  loadProfile();
  startCloudCatalog();

  try {
    await translateOldProducts(language);
    renderCategories();
    renderProducts();
  } catch (error) {
    console.error("Automatic translation failed:", error);
  }
}

startSite();
