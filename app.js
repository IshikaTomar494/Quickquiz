// Firebase SDK v9 Modular
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

// ✅ Your Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyD0w3LtkW9qCLlFR2dVOR33m5aCbc0sgJ8",
  authDomain: "quickquiz-2ae8e.firebaseapp.com",
  projectId: "quickquiz-2ae8e",
  storageBucket: "quickquiz-2ae8e.appspot.com",
  messagingSenderId: "621213406786",
  appId: "1:621213406786:web:49779aa3bc27af5a257fdb",
  measurementId: "G-BCCLHCGB2R"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// ✅ Google Sign-In Button
const loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("click", async () => {
  try {
    const result = await signInWithPopup(auth, provider);
// sourcery skip: use-object-destructuring
    const user = result.user;

    // Save login state
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("userName", user.displayName);
    localStorage.setItem("userEmail", user.email);

    // Redirect
    window.location.href = "home.html";
  } catch (error) {
    console.error("Login error", error);
    alert("Login failed: " + error.message);
  }
});

// ✅ Practice without login
document.getElementById("practiceBtn")?.addEventListener("click", () => {
  localStorage.setItem("loggedIn", "false");
  window.location.href = "home.html";
});
