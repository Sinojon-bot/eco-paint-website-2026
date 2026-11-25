const firebaseConfig = {
  apiKey: "AIzaSyDvVnBNcInqRSrZqTTXnKcRyrb9X0-V1Qc",
  authDomain: "eco-paint.firebaseapp.com",
  projectId: "eco-paint",
  storageBucket: "eco-paint.firebasestorage.app",
  messagingSenderId: "599778164137",
  appId: "1:599778164137:web:3b12f9d6c741ada715d8b8",
  measurementId: "G-VHGFYFH3Q1"
};

let ecoPaintAuth = null;
let ecoPaintDb = null;
if (typeof firebase !== "undefined") {
  if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
  ecoPaintAuth = firebase.auth();
  ecoPaintDb = firebase.firestore();
}

async function finishServerGoogleLogin() {
  if (!ecoPaintAuth) return null;
  const params = new URLSearchParams(location.hash.slice(1));
  const idToken = params.get("google_id_token");
  if (!idToken) return ecoPaintAuth.currentUser;
  history.replaceState(null, "", location.pathname + location.search);
  try {
    const credential = firebase.auth.GoogleAuthProvider.credential(idToken);
    const user = (await ecoPaintAuth.signInWithCredential(credential)).user;
    sessionStorage.setItem("ecoPaintGoogleJustSignedIn", "1");
    return user;
  } catch (error) {
    sessionStorage.setItem("ecoPaintGoogleAuthError", error.code || error.message || "Google auth error");
    return null;
  }
}

async function startServerGoogleLogin(returnPath) {
  if (!/^https?:$/.test(location.protocol)) {
    throw new Error("Барои Google сайтро аз интернет ё бо OPEN-SITE.cmd кушоед. Файли HTML мустақиман воридшавиро дастгирӣ намекунад.");
  }
  if (!ecoPaintAuth) {
    throw new Error("Google/Firebase бор нашуд. Саҳифаро нав кунед. Агар боз хато шавад, Wi‑Fi/интернетро иваз кунед.");
  }
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    let result;
    try {
      result = await ecoPaintAuth.signInWithPopup(provider);
    } catch (popupError) {
      // Дар телефон popup аксар вақт баста мешавад — redirect истифода бар.
      if (String(popupError?.code || "").includes("popup") || /blocked|closed/i.test(String(popupError?.message || ""))) {
        await ecoPaintAuth.signInWithRedirect(provider);
        return null;
      }
      throw popupError;
    }
    sessionStorage.setItem("ecoPaintGoogleJustSignedIn", "1");
    sessionStorage.removeItem("ecoPaintGoogleAuthError");
    return result.user;
  } catch (error) {
    const message = error?.code || error?.message || "Google auth error";
    sessionStorage.setItem("ecoPaintGoogleAuthError", message);
    throw error;
  }
}

window.ecoPaintGoogleReady = (async () => {
  if (!ecoPaintAuth) return null;
  try {
    const redirected = await ecoPaintAuth.getRedirectResult();
    if (redirected?.user) {
      sessionStorage.setItem("ecoPaintGoogleJustSignedIn", "1");
      sessionStorage.removeItem("ecoPaintGoogleAuthError");
      return redirected.user;
    }
  } catch (error) {
    sessionStorage.setItem("ecoPaintGoogleAuthError", error.code || error.message || "Google auth error");
  }
  return finishServerGoogleLogin();
})();
window.startServerGoogleLogin = startServerGoogleLogin;
