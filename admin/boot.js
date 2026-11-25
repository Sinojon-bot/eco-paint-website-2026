(function () {
  const FIREBASE_SETS = [
    [
      "https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js",
      "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth-compat.js",
      "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore-compat.js"
    ],
    [
      "https://cdn.jsdelivr.net/npm/firebase@10.14.1/firebase-app-compat.js",
      "https://cdn.jsdelivr.net/npm/firebase@10.14.1/firebase-auth-compat.js",
      "https://cdn.jsdelivr.net/npm/firebase@10.14.1/firebase-firestore-compat.js"
    ],
    [
      "https://unpkg.com/firebase@10.14.1/firebase-app-compat.js",
      "https://unpkg.com/firebase@10.14.1/firebase-auth-compat.js",
      "https://unpkg.com/firebase@10.14.1/firebase-firestore-compat.js"
    ]
  ];

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const existing = document.querySelector(`script[src="${src}"]`);
      if (existing) {
        resolve();
        return;
      }
      const script = document.createElement("script");
      script.src = src;
      script.async = false;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error(src));
      document.head.appendChild(script);
    });
  }

  async function loadFirebaseSet(urls) {
    for (const url of urls) {
      await loadScript(url);
    }
    if (typeof firebase === "undefined") {
      throw new Error("firebase missing");
    }
  }

  async function boot() {
    let loaded = false;
    for (const set of FIREBASE_SETS) {
      try {
        await loadFirebaseSet(set);
        loaded = true;
        break;
      } catch (error) {
        console.warn("Firebase CDN failed", error);
      }
    }

    await loadScript("../firebase-config.js");
    await loadScript("admin.js?v=12");

    window.ecoPaintFirebaseReady = true;
    window.dispatchEvent(new CustomEvent("ecoPaintFirebaseReady", {
      detail: { loaded }
    }));

    if (!loaded) {
      const status = document.getElementById("cloudStatus");
      if (status) {
        status.textContent = "Firebase бор нашуд. Админи маҳаллӣ кор мекунад; интернетро санҷед ё саҳифаро нав кунед.";
        status.classList.add("is-error");
      }
    }
  }

  boot().catch(error => {
    console.error(error);
    const status = document.getElementById("cloudStatus");
    if (status) {
      status.textContent = "Админ пурра бор нашуд. Саҳифаро нав кунед (Ctrl+F5).";
      status.classList.add("is-error");
    }
  });
})();
