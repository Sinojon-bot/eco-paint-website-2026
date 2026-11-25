const LANGUAGES = [
  { code: "tg", label: "🇹🇯 Тоҷикӣ" },
  { code: "ru", label: "🇷🇺 Русский" },
  { code: "en", label: "🇬🇧 English" },
  { code: "zh", label: "🇨🇳 中文" },
  { code: "fa", label: "🇮🇷 فارسی" }
];

const PLACEHOLDER_PRODUCT_NAMES = new Set([
  "INTERIOR", "FACADE", "DECORATIVE", "PRIMER", "PVA", "PROFESSIONAL"
]);

const DEFAULT_PRODUCTS = [
  createDefault(
    1,
    ["СНЕЖКА", "СНЕЖКА", "SNEZHKA", "СНЕЖКА 超白漆", "СНЕЖКА"],
    [
      "Эмулсияи акрилии суперсафед Eco Paint СНЕЖКА барои девор ва шифт. Барои корҳои дарунӣ ва берунӣ.",
      "Супербелая акриловая водоэмульсия Eco Paint СНЕЖКА для стен и потолков. Для внутренних и наружных работ.",
      "Eco Paint SNEZHKA super-white acrylic emulsion for walls and ceilings. Interior and exterior.",
      "Eco Paint СНЕЖКА 超白丙烯酸乳胶漆，适用于墙面与天花板，室内外皆可。",
      "امولسیون اکریلیک فوق‌سفید Eco Paint СНЕЖКА برای دیوار و سقف. برای کار داخلی و خارجی."
    ],
    ["Эмулсия", "Эмульсия", "Emulsion", "乳胶漆", "امولسیون"],
    "images/interior.webp",
    [[10, 75], [20, 140]],
    9,
    ["#f7f4ef", "#e8dfd0", "#d5c4a8", "#c9d9bd"]
  ),
  createDefault(
    2,
    ["Eco Facade", "Eco Facade", "Eco Facade", "Eco Facade 外墙漆", "Eco Facade"],
    [
      "Ранги фасадӣ барои беруни хона. Ба борон, офтоб ва гармӣ тобовар.",
      "Фасадная краска для наружных работ. Устойчива к дождю, солнцу и жаре.",
      "Exterior facade paint. Weather-resistant against rain, sun and heat.",
      "外墙涂料，耐雨、耐晒、耐热。",
      "رنگ نما برای فضای بیرونی. مقاوم در برابر باران، آفتاب و گرما."
    ],
    ["Эмулсия", "Эмульсия", "Emulsion", "乳胶漆", "امولسیون"],
    "images/facade.webp",
    [[4, 58], [10, 118], [20, 215]],
    7,
    ["#f2efe8", "#d8c8a8", "#a8b59a", "#7d8fa3"]
  ),
  createDefault(
    3,
    ["Eco Decorative", "Eco Decorative", "Eco Decorative", "Eco Decorative 装饰漆", "Eco Decorative"],
    [
      "Пӯшиши декоративӣ бо фактураи зебо барои ҳуҷраҳои меҳмонӣ ва хобгоҳ.",
      "Декоративное покрытие с красивой фактурой для гостиных и спален.",
      "Decorative textured finish for living rooms and bedrooms.",
      "装饰纹理涂料，适合客厅与卧室。",
      "پوشش تزئینی با بافت زیبا برای پذیرایی و اتاق خواب."
    ],
    ["Декоративӣ", "Декоративные", "Decorative", "装饰涂料", "تزئینی"],
    "images/decorative.webp",
    [[4, 85], [10, 175], [20, 310]],
    5,
    ["#efe6d8", "#c9b29a", "#9caf88", "#76556f"]
  ),
  createDefault(
    4,
    ["Eco Primer", "Eco Primer", "Eco Primer", "Eco Primer 底漆", "Eco Primer"],
    [
      "Грунтовкаи акрилӣ барои омода кардани девор пеш аз рангкунӣ.",
      "Акриловая грунтовка для подготовки стен перед покраской.",
      "Acrylic primer to prepare walls before painting.",
      "丙烯酸底漆，涂装前打底用。",
      "آستر اکریلیک برای آماده‌سازی دیوار قبل از رنگ‌کاری."
    ],
    ["Грунтовка", "Грунтовка", "Primer", "底漆", "آستر"],
    "images/primer.webp",
    [[4, 38], [10, 78], [20, 135]],
    12,
    ["#ffffff", "#f3f1ec", "#e6e2d8"]
  ),
  createDefault(
    5,
    ["Eco PVA", "Eco PVA", "Eco PVA", "Eco PVA 胶水", "Eco PVA"],
    [
      "Клейи универсалии ПВА барои чӯб, коғаз ва корҳои сохтмонӣ.",
      "Универсальный клей ПВА для дерева, бумаги и строительных работ.",
      "Universal PVA adhesive for wood, paper and construction jobs.",
      "通用 PVA 胶，适用于木材、纸张与施工。",
      "چسب همه‌کاره PVA برای چوب، کاغذ و کارهای ساختمانی."
    ],
    ["Клей ПВА", "Клей ПВА", "PVA glue", "PVA 胶", "چسب PVA"],
    "images/pva.webp",
    [[4, 42], [10, 88], [20, 155]],
    8,
    ["#ffffff", "#f7f7f5"]
  ),
  createDefault(
    6,
    ["Eco Professional", "Eco Professional", "Eco Professional", "Eco Professional 专业漆", "Eco Professional"],
    [
      "Серияи касбӣ бо тобоварии баланд барои устоҳо ва корҳои калон.",
      "Профессиональная серия повышенной стойкости для мастеров и крупных работ.",
      "Professional high-durability range for trades and large jobs.",
      "专业高耐久系列，适合工匠与大型工程。",
      "سری حرفه‌ای با دوام بالا برای استادکاران و پروژه‌های بزرگ."
    ],
    ["Касбӣ", "Профессиональные", "Professional", "专业系列", "حرفه‌ای"],
    "images/professional.webp",
    [[4, 72], [10, 148], [20, 265]],
    8,
    ["#f5f2eb", "#e0d4c2", "#88aacc", "#557a58"]
  )
];

function createDefault(
  id,
  names,
  descriptions,
  categories,
  image,
  prices,
  coverage = 7,
  colors = ["#ffffff", "#e8dfd0", "#c9d9bd"]
) {
  const translatedName = {};
  const translatedDescription = {};
  const translatedCategory = {};

  LANGUAGES.forEach((language, index) => {
    translatedName[language.code] = Array.isArray(names) ? names[index] : names;
    translatedDescription[language.code] = descriptions[index];
    translatedCategory[language.code] = categories[index];
  });

  return {
    id,
    name: translatedName,
    description: translatedDescription,
    category: translatedCategory,
    image,
    variants: prices.map(([weight, price]) => ({ weight, price })),
    discount: 0,
    coverage,
    colors
  };
}

function repeatForLanguages(value) {
  return Object.fromEntries(
    LANGUAGES.map(language => [language.code, value || ""])
  );
}

function normalizeText(value) {
  if (value && typeof value === "object") {
    return Object.fromEntries(
      LANGUAGES.map(language => [
        language.code,
        value[language.code] || value.tg || ""
      ])
    );
  }
  return repeatForLanguages(value);
}

function normalizeProductImage(source) {
  if (typeof source !== "string") return "";
  // Catalog data is shared by the PNG source site and the WebP public build.
  // Only bundled bucket paths may change; uploaded and external images stay intact.
  const match = source.match(/^(?:\.\/|\.\.\/|\/)?images\/(interior|facade|decorative|primer|pva|professional)\.(?:png|webp)([?#].*)?$/i);
  if (!match) return source;
  const prefix = `images/${match[1].toLowerCase()}.`;
  const bundledProduct = DEFAULT_PRODUCTS.find(product => product.image.toLowerCase().startsWith(prefix));
  return bundledProduct ? bundledProduct.image + (match[2] || "") : source;
}

function normalizeProduct(product) {
  const variants = product.variants || Object.entries(
    product.prices || {}
  ).map(([size, price]) => ({
    weight: Number.parseFloat(size) || "",
    price: Number(price)
  }));

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
  const uglyPoster = Number(product.id) === 1 &&
    /sniezhka/i.test(String(product.image || ""));

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
  if (uglyPoster) {
    next.image = defaults.image;
    next.colors = defaults.colors.slice();
  }
  return normalizeProduct(next);
}

const PRODUCTS_STORAGE_KEY = "ecoPaintProductsAutoV3";

function migrateSniezhkaCatalog(products) {
  return products.map(product => {
    if (Number(product.id) !== 1) return product;
    const defaults = DEFAULT_PRODUCTS[0];
    return normalizeProduct({
      ...product,
      name: defaults.name,
      description: defaults.description,
      category: defaults.category,
      image: defaults.image,
      variants: defaults.variants.map(variant => ({ ...variant })),
      coverage: defaults.coverage,
      colors: defaults.colors.slice()
    });
  });
}

function loadProducts() {
  try {
    const rawV3 = localStorage.getItem(PRODUCTS_STORAGE_KEY);
    const rawV2 = localStorage.getItem("ecoPaintProductsAutoV2");
    const rawV1 = localStorage.getItem("ecoPaintProductsAutoV1");
    const saved = JSON.parse(rawV3 || rawV2 || rawV1);
    // Массиви холӣ маънои онро дорад, ки маҳсулотҳо аз админ нест шудаанд.
    // Онҳоро аз рӯйхати пешфарз дубора насоз.
    if (Array.isArray(saved)) {
      let migrated = saved.map(item => {
        const product = upgradePlaceholderProduct(item);
        if (!product.variants.length) {
          const original = DEFAULT_PRODUCTS.find(
            defaultProduct => defaultProduct.id === product.id
          );
          product.variants = original
            ? original.variants.map(variant => ({ ...variant }))
            : [{ weight: 10, price: 75 }, { weight: 20, price: 140 }];
        }
        return product;
      });
      if (!rawV3) migrated = migrateSniezhkaCatalog(migrated);
      localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(migrated));
      return migrated;
    }
  } catch (error) {
    console.error(error);
  }
  localStorage.setItem(
    PRODUCTS_STORAGE_KEY,
    JSON.stringify(DEFAULT_PRODUCTS)
  );
  return DEFAULT_PRODUCTS.map(product => normalizeProduct(product));
}

const $ = selector => document.querySelector(selector);
let products = loadProducts();
let cloudCatalogNeedsSeed = false;

function loadPaymentSettings(remoteSettings) {
  let settings = remoteSettings || {};
  try {
    if (!remoteSettings) settings = JSON.parse(
      localStorage.getItem("ecoPaintPaymentSettings")
    ) || {};
  } catch (error) {
    console.error(error);
  }
  $("#merchantCard").value = settings.cardNumber || "001022011";
  $("#merchantName").value = settings.cardHolder || "";
  $("#merchantWhatsApp").value = settings.whatsapp || "992554900600";
  $("#firstOrderDeposit").value = settings.depositPercent || 15;
  $("#receiptCheckEnabled").checked = settings.receiptCheckEnabled === true;
  $("#receiptBrandWords").value = (settings.receiptBrandWords || [
    "dushanbe", "душанбе", "dc next", "dc wallet", "001022011"
  ]).join(", ");
  $("#receiptSuccessWords").value = (settings.receiptSuccessWords || [
    "успеш", "оплачен", "выполнен", "success", "successful", "мувафф"
  ]).join(", ");
}

function saveProducts() {
  localStorage.setItem(
    PRODUCTS_STORAGE_KEY,
    JSON.stringify(products)
  );
}

function hasLocalAdminSession() {
  return sessionStorage.getItem("ecoPaintAdmin") === "yes";
}

function canEditLocally() {
  return hasLocalAdminSession() || isCloudAdmin(ecoPaintAuth?.currentUser);
}

const ADMIN_EMAIL = "sinoitojirsandora@gmail.com";

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
}

function adminError(error) {
  const code = error?.code || "";
  if (code.includes("permission-denied")) return "Сервер иҷозат надод. Бо Google-и админ ворид шавед; қоидаҳои Firestore бояд дастрасии админро ба products, settings ва customers иҷозат диҳанд. Тағйирот сабт нашуд.";
  if (code.includes("popup-blocked")) return "Браузер равзанаи Google-ро баст. Равзанаҳои поп-апро барои ин сайт иҷозат диҳед ва «Пайваст шудан»-ро пахш кунед.";
  if (code.includes("popup-closed") || code.includes("cancelled-popup")) return "Воридшавӣ бекор шуд. Маълумот тағйир наёфт.";
  if (code.includes("unauthorized-domain")) return "Ин суроға барои Google иҷозат надорад. Админро аз пайванди интернетии сайт кушоед.";
  if (code.includes("unavailable") || code.includes("network")) return "Сервер дастрас нест. Интернетро санҷед; тағйирот ҳанӯз сабт нашуд.";
  return error?.message || "Амал иҷро нашуд. Боз кӯшиш кунед.";
}

function setCloudStatus(message, isError = false) {
  $("#cloudStatus").textContent = message;
  $("#cloudStatus").classList.toggle("is-error", isError);
}

function showAdmin() {
  $("#loginView").classList.add("hidden");
  $("#adminView").classList.remove("hidden");
  sessionStorage.setItem("ecoPaintAdmin", "yes");
  renderProducts();
}

function isCloudAdmin(user) {
  return Boolean(user && user.email?.toLowerCase() === ADMIN_EMAIL && user.emailVerified);
}

function requireCloud() {
  if (!/^https?:$/.test(location.protocol)) throw new Error("Админ аз файл кушода шудааст. OPEN-ADMIN.cmd-ро истифода баред ё «Кушодани админ дар интернет»-ро пахш кунед.");
  if (!ecoPaintAuth || !ecoPaintDb) throw new Error("Google бор нашуд. Интернетро санҷед ва саҳифаро нав кунед.");
}

async function ensureCloudAdmin() {
  requireCloud();
  await window.ecoPaintGoogleReady;
  const user = ecoPaintAuth.currentUser;
  if (!isCloudAdmin(user)) throw new Error("Аввал «Пайваст шудан бо Google»-ро пахш кунед ва аккаунти админро интихоб кунед.");
  return user;
}

async function seedOrLoadCloudProducts() {
  await ensureCloudAdmin();
  const [snapshot, payment, catalog] = await Promise.all([
    ecoPaintDb.collection("products").get({ source: "server" }),
    ecoPaintDb.collection("settings").doc("payment").get({ source: "server" }),
    ecoPaintDb.collection("settings").doc("catalog").get({ source: "server" })
  ]);
  cloudCatalogNeedsSeed = snapshot.empty && !catalog.data()?.initialized;
  let upgradedCloudCatalog = false;
  if (!cloudCatalogNeedsSeed) {
    const rawProducts = snapshot.docs.map(document => ({
      ...document.data(),
      cloudId: document.id
    }));
    const needsCloudUpgrade = rawProducts.some(product => {
      const variants = product.variants || Object.entries(product.prices || {}).map(
        ([size, price]) => ({ weight: Number.parseFloat(size) || "", price: Number(price) })
      );
      return isPlaceholderProductName(product.name) || isStubPricing(variants);
    });

    products = rawProducts
      .map(item => {
        const { cloudId, ...data } = item;
        return { ...upgradePlaceholderProduct(data), cloudId };
      })
      .sort((a, b) => a.id - b.id);

    if (needsCloudUpgrade) {
      await initializeCatalog(products);
      upgradedCloudCatalog = true;
    }
  }
  saveProducts();
  if (payment.exists) {
    localStorage.setItem("ecoPaintPaymentSettings", JSON.stringify(payment.data()));
    loadPaymentSettings(payment.data());
  }
  renderProducts();
  if (cloudCatalogNeedsSeed) {
    setCloudStatus("Пайваст шуд. Сабти аввали маҳсулот онҳоро ба сайти интернетӣ мегузаронад.");
  } else if (upgradedCloudCatalog) {
    setCloudStatus(`Каталог нав шуд · ${products.length} маҳсулот дар интернет. Сурат/нархро тағйир диҳед ва нигоҳ доред.`);
  } else {
    setCloudStatus(`Пайваст: ${ecoPaintAuth.currentUser.email} · ${products.length} маҳсулот. Тағйирот баъд аз «Нигоҳ доштан» дар сайт дида мешавад.`);
  }
}

async function saveProductToCloud(product) {
  await ensureCloudAdmin();
  if (cloudCatalogNeedsSeed) {
    const initial = new Map(products.map(item => [item.id, item]));
    initial.set(product.id, product);
    await initializeCatalog([...initial.values()]);
    return;
  }
  const { cloudId, ...data } = product;
  await ecoPaintDb.collection("products").doc(cloudId || String(product.id)).set({
    ...data,
    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
  }, { merge: true });
}

async function initializeCatalog(items) {
  const batch = ecoPaintDb.batch();
  items.forEach(({ cloudId, ...item }) => batch.set(
    ecoPaintDb.collection("products").doc(cloudId || String(item.id)),
    { ...item, updatedAt: firebase.firestore.FieldValue.serverTimestamp() }
  ));
  batch.set(ecoPaintDb.collection("settings").doc("catalog"), { initialized: true });
  await batch.commit();
  cloudCatalogNeedsSeed = false;
}

async function connectAdmin() {
  try {
    requireCloud();
    const user = await startServerGoogleLogin();
    if (!isCloudAdmin(user)) throw new Error("Ин аккаунт ҳуқуқи админ надорад. Google-и соҳиби мағозаро интихоб кунед.");
    showAdmin();
    setCloudStatus("Маълумот аз сервер бор мешавад...");
    await seedOrLoadCloudProducts();
    await loadCustomers();
  } catch (error) {
    const message = adminError(error);
    setCloudStatus(message, true);
    $("#loginError").textContent = message;
    $("#customerStatus").textContent = message;
  }
}

function imageForAdmin(source) {
  const image = normalizeProductImage(source);
  if (!image) return "";
  if (/^(?:[a-z][a-z0-9+.-]*:|\/|\.{1,2}\/)/i.test(image)) return image;
  return "../" + image;
}

function showToast(message) {
  $("#toast").textContent = message;
  $("#toast").classList.add("show");
  setTimeout(() => {
    $("#toast").classList.remove("show");
  }, 2200);
}

function showView(id) {
  document.querySelectorAll(".view").forEach(view => {
    view.classList.toggle("hidden", view.id !== id);
  });
  document.querySelectorAll(".nav").forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.view === id
    );
  });
  if (id === "customersView") loadCustomers();
}

function customerDate(value) {
  if (!value?.toDate) return "—";
  return value.toDate().toLocaleString("tg-TJ");
}

async function loadCustomers() {
  const status = $("#customerStatus");
  const list = $("#customerList");
  list.innerHTML = "";
  if (!ecoPaintAuth || !isCloudAdmin(ecoPaintAuth.currentUser)) {
    status.textContent = "Барои дидани рӯйхат бо аккаунти админ ворид шавед.";
    return;
  }
  status.textContent = "Маълумот бор шуда истодааст...";
  try {
    await ensureCloudAdmin();
    const snapshot = await ecoPaintDb.collection("customers").get({ source: "server" });
    status.textContent = `Ҳамагӣ: ${snapshot.size} харидор`;
    list.innerHTML = snapshot.docs.slice().sort((a, b) =>
      (b.data().updatedAt?.toMillis?.() || 0) - (a.data().updatedAt?.toMillis?.() || 0)
    ).map(document => {
      const customer = document.data();
      const avatar = /^(https:\/\/|data:image\/)/i.test(customer.avatar || "")
        ? `<img src="${escapeHTML(customer.avatar)}" alt="" referrerpolicy="no-referrer">`
        : `<span class="customer-avatar">👤</span>`;
      return `<article class="customer-card">
        ${avatar}
        <div><strong>${escapeHTML(customer.name || "Беном")}</strong><br><small>${escapeHTML(customer.email || "—")}</small></div>
        <span>☎ ${escapeHTML(customer.phone || "—")}</span>
        <span>⌖ ${escapeHTML(customer.city || "—")}</span>
        <small>${customerDate(customer.updatedAt)}</small>
      </article>`;
    }).join("");
  } catch (error) {
    status.textContent = adminError(error);
    console.error(error);
  }
}

$("#adminGoogleLogin").onclick = connectAdmin;
$("#connectAdmin").onclick = connectAdmin;
$("#loginGoogle").onclick = connectAdmin;
$("#refreshAdmin").onclick = async () => {
  try { await seedOrLoadCloudProducts(); await loadCustomers(); }
  catch (error) { setCloudStatus(adminError(error), true); }
};

function createLanguageFields() {
  $("#translationFields").innerHTML = `
    <section class="language-fields">
      <label>
        Номи маҳсулот (тоҷикӣ)
        <input id="name-tg" required>
      </label>
      <label>
        Категория (тоҷикӣ)
        <input id="category-tg" required>
      </label>
      <label>
        Маълумоти маҳсулот (ҳангоми бурдани муш)
        <textarea id="description-tg" rows="4" required></textarea>
      </label>
      <details><summary>Матни дигар забонҳоро дидан ва тағйир додан</summary>
        ${LANGUAGES.filter(item => item.code !== "tg").map(item => `
          <h3>${item.label}</h3>
          <label>Ном<input id="name-${item.code}"></label>
          <label>Категория<input id="category-${item.code}"></label>
          <label>Маълумот<textarea id="description-${item.code}" rows="3"></textarea></label>
        `).join("")}
      </details>
    </section>
  `;
}

function renderProducts() {
  const query = $("#adminSearch").value.trim().toLowerCase();
  const list = products.filter(product => {
    return [
      product.name.tg,
      product.description.tg,
      product.category.tg
    ].join(" ").toLowerCase().includes(query);
  });

  $("#productList").innerHTML = list.map(product => `
    <article class="admin-product">
      <img src="${escapeHTML(imageForAdmin(product.image))}" alt="${escapeHTML(product.name.tg)}">
      <div class="info">
        <small>${escapeHTML(product.category.tg)}</small>
        <h3>${escapeHTML(product.name.tg)}</h3>
        <p>${escapeHTML(product.description.tg)}</p>
        <div class="product-prices">${product.variants.map(item => `<span>${escapeHTML(item.weight)} кг — ${escapeHTML(item.price)} сомонӣ</span>`).join("")}</div>
        <p>
          Масраф: ${product.coverage} м²/кг ·
          Рангҳо: ${product.colors.length}
          ${product.discount ? ` · <span class="discount-admin">Тахфиф ${product.discount}%</span>` : ""}
        </p>
        <div class="product-actions">
          <button class="edit" data-edit="${product.id}">
            Тағйир
          </button>
          <button class="delete" data-delete="${product.id}">
            Нест кардан
          </button>
        </div>
      </div>
    </article>
  `).join("");

  document.querySelectorAll("[data-edit]").forEach(button => {
    button.onclick = () => editProduct(Number(button.dataset.edit));
  });
  document.querySelectorAll("[data-delete]").forEach(button => {
    button.onclick = () => deleteProduct(Number(button.dataset.delete));
  });
}

function addPriceRow(weight = "", price = "") {
  const row = document.createElement("div");
  row.className = "price-row";
  row.innerHTML = `
    <label>
      Вазн (кг)
      <input
        class="weight-input"
        type="number"
        min="0"
        step="0.1"
        value="${weight}"
        placeholder="4">
    </label>
    <label>
      Нарх (сомонӣ)
      <input
        class="price-input"
        type="number"
        min="0"
        step="0.01"
        value="${price}"
        placeholder="30">
    </label>
    <button type="button" class="remove-price">×</button>
  `;
  row.querySelector(".remove-price").onclick = () => row.remove();
  $("#priceRows").appendChild(row);
}

function resetForm() {
  $("#productForm").reset();
  $("#productId").value = "";
  $("#imageValue").value = "";
  $("#imagePreview").removeAttribute("src");
  $("#discount").value = "0";
  $("#coverage").value = "7";
  $("#colors").value = "#ffffff, #e8dfd0, #c9d9bd";
  $("#priceRows").innerHTML = "";
  addPriceRow();
  $("#formTitle").textContent = "Иловаи маҳсулот";
}

function editProduct(id) {
  const product = products.find(item => item.id === id);
  if (!product) return;

  resetForm();
  $("#productId").value = product.id;
  $("#imageValue").value = product.image;
  $("#imagePreview").src = imageForAdmin(product.image);
  $("#discount").value = product.discount || 0;
  $("#coverage").value = product.coverage || 7;
  $("#colors").value = product.colors.join(", ");

  $("#name-tg").value = product.name.tg;
  $("#description-tg").value = product.description.tg;
  $("#category-tg").value = product.category.tg;
  LANGUAGES.filter(item => item.code !== "tg").forEach(item => {
    ["name", "description", "category"].forEach(field => {
      $("#" + field + "-" + item.code).value = product[field][item.code] || "";
    });
  });

  $("#priceRows").innerHTML = "";
  if (product.variants.length) {
    product.variants.forEach(variant => {
      addPriceRow(variant.weight, variant.price);
    });
  } else {
    addPriceRow();
  }

  $("#formTitle").textContent = "Тағйири маҳсулот";
  showView("formView");
}

async function deleteProduct(id) {
  const product = products.find(item => item.id === id);
  if (!product) return;
  const accepted = confirm(
    `Маҳсулоти «${product.name.tg}» нест карда шавад?`
  );
  if (!accepted) return;

  if (!canEditLocally()) {
    alert("Аввал бо admin/12345 ё Google-и админ ворид шавед.");
    return;
  }

  try {
    if (isCloudAdmin(ecoPaintAuth?.currentUser)) {
      await ensureCloudAdmin();
      if (cloudCatalogNeedsSeed) await initializeCatalog(products.filter(item => item.id !== id));
      else {
        const batch = ecoPaintDb.batch();
        batch.delete(ecoPaintDb.collection("products").doc(product.cloudId || String(id)));
        batch.set(ecoPaintDb.collection("settings").doc("catalog"), { initialized: true });
        await batch.commit();
      }
      products = products.filter(item => item.id !== id);
      saveProducts();
      renderProducts();
      showToast("Маҳсулот аз ҳамаи дастгоҳҳо нест карда шуд");
      return;
    }

    products = products.filter(item => item.id !== id);
    saveProducts();
    renderProducts();
    setCloudStatus("Маҳсулот дар ин компютер нест шуд. Барои сайти интернетӣ бо Google-и админ пайваст шавед.");
    showToast("Маҳсулот нест карда шуд");
  } catch (error) {
    setCloudStatus(adminError(error), true);
    alert(adminError(error));
  }
}

function readImage(file) {
  return new Promise((resolve, reject) => {
    if (!file) {
      resolve($("#imageValue").value);
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const image = new Image();
      image.onload = () => {
        const maximumSize = 900;
        const scale = Math.min(
          1,
          maximumSize / Math.max(image.width, image.height)
        );
        const canvas = document.createElement("canvas");
        canvas.width = Math.round(image.width * scale);
        canvas.height = Math.round(image.height * scale);
        canvas.getContext("2d").drawImage(
          image,
          0,
          0,
          canvas.width,
          canvas.height
        );
        resolve(canvas.toDataURL("image/jpeg", 0.82));
      };
      image.onerror = reject;
      image.src = reader.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

$("#loginForm").onsubmit = event => {
  event.preventDefault();
  const correctLogin = $("#username").value === "admin" &&
    $("#password").value === "12345";

  if (correctLogin) {
    $("#loginView").classList.add("hidden");
    $("#adminView").classList.remove("hidden");
    sessionStorage.setItem("ecoPaintAdmin", "yes");
    renderProducts();
  } else {
    $("#loginError").textContent = "Ном ё рамз нодуруст аст!";
  }
};

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

  const response = await fetch(url, { signal: AbortSignal.timeout(10000) });
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

async function translateProduct(tajikText, previous) {
  const result = {
    name: { tg: tajikText.name },
    description: { tg: tajikText.description },
    category: { tg: tajikText.category }
  };

  await Promise.all(Object.keys(TRANSLATION_LANGUAGE).flatMap(code =>
    ["name", "description", "category"].map(async field => {
      const manual = $("#" + field + "-" + code).value.trim();
      const unchanged = previous?.[field]?.tg === tajikText[field];
      if (manual && (!previous || manual !== previous[field]?.[code] || unchanged)) {
        result[field][code] = manual;
      } else if (unchanged && previous[field]?.[code]) {
        result[field][code] = previous[field][code];
      } else {
        try { result[field][code] = await translateText(tajikText[field], code); }
        catch { result[field][code] = tajikText[field]; result.translationPending = true; }
      }
    })
  ));

  return result;
}

$("#productForm").onsubmit = async event => {
  event.preventDefault();
  const id = Number($("#productId").value) || Date.now();
  if (!canEditLocally()) {
    alert("Аввал бо admin/12345 ё Google-и админ ворид шавед.");
    return;
  }
  const cloudSave = isCloudAdmin(ecoPaintAuth?.currentUser);
  if (cloudSave) {
    try { await ensureCloudAdmin(); }
    catch (error) { setCloudStatus(adminError(error), true); alert(adminError(error)); return; }
  }
  const previous = products.find(item => item.id === id);
  let image;

  try {
    image = await readImage($("#imageFile").files[0]);
  } catch (error) {
    alert("Сурат хонда нашуд.");
    return;
  }
  if (!image) {
    alert("Суратро интихоб кунед.");
    return;
  }

  const tajikText = {
    name: $("#name-tg").value.trim(),
    description: $("#description-tg").value.trim(),
    category: $("#category-tg").value.trim()
  };

  const saveButton = $("#saveProduct");
  saveButton.disabled = true;
  saveButton.textContent = "Тарҷума шуда истодааст...";

  let translated;
  try {
    translated = await translateProduct(tajikText, previous);
  } catch (error) {
    console.error(error);
    alert(
      "Тарҷума иҷро нашуд. Интернетро санҷед ва боз кӯшиш кунед."
    );
    saveButton.disabled = false;
    saveButton.textContent = "Нигоҳ доштан ва тарҷума кардан";
    return;
  }

  const variants = [];
  document.querySelectorAll(".price-row").forEach(row => {
    const weight = Number(row.querySelector(".weight-input").value);
    const price = Number(row.querySelector(".price-input").value);
    if (weight || price) {
      variants.push({ weight, price });
    }
  });

  const product = {
    id,
    ...(previous?.cloudId ? { cloudId: previous.cloudId } : {}),
    name: translated.name,
    description: translated.description,
    category: translated.category,
    image,
    variants,
    discount: Math.min(
      90,
      Math.max(0, Number($("#discount").value) || 0)
    ),
    coverage: Math.max(1, Number($("#coverage").value) || 7),
    colors: $("#colors").value
      .split(",")
      .map(color => color.trim())
      .filter(color => /^#[0-9a-f]{6}$/i.test(color))
  };
  if (!variants.length || variants.some(item => !Number.isFinite(item.weight) || item.weight <= 0 || !Number.isFinite(item.price) || item.price < 0)) {
    alert("Ҳадди ақал як вазни мусбат ва нархи дуруст ворид кунед.");
    saveButton.disabled = false;
    saveButton.textContent = "Нигоҳ доштан ва тарҷума кардан";
    return;
  }
  const index = products.findIndex(item => item.id === id);

  if (cloudSave) {
    try {
      saveButton.textContent = "Дар сервер нигоҳ дошта мешавад...";
      await saveProductToCloud(product);
    } catch (error) {
      setCloudStatus(adminError(error), true);
      alert(adminError(error));
      saveButton.disabled = false;
      saveButton.textContent = "Нигоҳ доштан ва тарҷума кардан";
      return;
    }
  }

  if (index >= 0) products[index] = product;
  else products.push(product);
  try { saveProducts(); }
  catch {
    setCloudStatus(cloudSave
      ? "Дар сервер нигоҳ дошта шуд. Хотираи браузер пур аст; саҳифаро нав кунед."
      : "Хотираи браузер пур аст; сурати хурдтар интихоб кунед.", true);
  }
  if (cloudSave) {
    if (translated.translationPending) setCloudStatus("Маҳсулот нигоҳ дошта шуд. Тарҷума дастрас набуд; матн дар дигар забонҳо муваққатан тоҷикӣ аст ва аз форма тағйир дода мешавад.");
    else setCloudStatus("Тағйирот дар сервер нигоҳ дошта шуд ва барои ҳамаи харидорон дастрас аст.");
  } else {
    setCloudStatus("Маҳсулот дар ин компютер нигоҳ дошта шуд. Барои сайти интернетӣ бо Google-и админ пайваст шавед.");
  }

  saveButton.disabled = false;
  saveButton.textContent = "Нигоҳ доштан ва тарҷума кардан";

  renderProducts();
  showView("productsView");
  showToast(
    index >= 0
      ? "Тағйирот нигоҳ дошта шуд"
      : "Маҳсулот илова шуд"
  );
};

$("#imageFile").onchange = () => {
  const file = $("#imageFile").files[0];
  if (file) {
    $("#imagePreview").src = URL.createObjectURL(file);
  }
};

$("#addPrice").onclick = () => addPriceRow();
$("#newProduct").onclick = () => {
  resetForm();
  showView("formView");
};
$("#cancelEdit").onclick = () => showView("productsView");
$("#adminSearch").oninput = renderProducts;

$("#paymentForm").onsubmit = async event => {
  event.preventDefault();
  const settings = {
    provider: "Dushanbe City",
    cardNumber: $("#merchantCard").value.trim(),
    cardHolder: $("#merchantName").value.trim(),
    whatsapp: $("#merchantWhatsApp").value.replace(/\D/g, ""),
    depositPercent: Math.min(
      100,
      Math.max(1, Number($("#firstOrderDeposit").value) || 15)
    ),
    receiptCheckEnabled: $("#receiptCheckEnabled").checked,
    receiptBrandWords: $("#receiptBrandWords").value
      .split(",").map(word => word.trim().toLowerCase()).filter(Boolean),
    receiptSuccessWords: $("#receiptSuccessWords").value
      .split(",").map(word => word.trim().toLowerCase()).filter(Boolean)
  };
  if (!canEditLocally()) {
    alert("Аввал бо admin/12345 ё Google-и админ ворид шавед.");
    return;
  }
  const saveButton = event.target.querySelector("button[type='submit'], button.save");
  saveButton.disabled = true;
  try {
    if (isCloudAdmin(ecoPaintAuth?.currentUser)) {
      await ensureCloudAdmin();
      await ecoPaintDb.collection("settings").doc("payment").set({
        ...settings,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      localStorage.setItem("ecoPaintPaymentSettings", JSON.stringify(settings));
      setCloudStatus("Танзими пардохт дар сервер нигоҳ дошта шуд.");
      showToast("Пардохт дар ҳамаи дастгоҳҳо нав шуд");
    } else {
      localStorage.setItem("ecoPaintPaymentSettings", JSON.stringify(settings));
      setCloudStatus("Пардохт дар ин компютер нигоҳ дошта шуд. Барои сайтҳои интернетӣ бо Google-и админ пайваст шавед.");
      showToast("Пардохт нигоҳ дошта шуд");
    }
  } catch (error) {
    setCloudStatus(adminError(error), true);
    alert(adminError(error));
  } finally {
    saveButton.disabled = false;
  }
};

document.querySelectorAll(".nav").forEach(button => {
  button.onclick = () => {
    if (button.dataset.view === "formView") {
      resetForm();
    }
    showView(button.dataset.view);
  };
});

$("#logout").onclick = async () => {
  try {
    if (ecoPaintAuth) await ecoPaintAuth.signOut();
  } catch (error) {
    console.error("Sign out failed", error);
  }
  sessionStorage.removeItem("ecoPaintAdmin");
  location.reload();
};

createLanguageFields();
loadPaymentSettings();

if (sessionStorage.getItem("ecoPaintAdmin") === "yes") {
  $("#loginView").classList.add("hidden");
  $("#adminView").classList.remove("hidden");
  renderProducts();
}

if (location.protocol === "file:") {
  const message = "Ин нусха аз файл кушода шудааст. Барои Google ва харидорон OPEN-ADMIN.cmd-ро кушоед ё аз пайванди админи интернетӣ истифода баред.";
  $("#loginHelp").textContent = message;
  setCloudStatus(message, true);
} else if (ecoPaintAuth) {
  ecoPaintAuth.onAuthStateChanged(async user => {
    if (!isCloudAdmin(user)) return;
    showAdmin();
    try { await seedOrLoadCloudProducts(); }
    catch (error) { setCloudStatus(adminError(error), true); }
  });
}
