// app.js
import { auth, provider, signInWithPopup } from "./app.js";

document.getElementById("loginBtn").addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      alert(`Welcome, ${user.displayName}!`);
      // Redirect or show dashboard
    })
    .catch((error) => {
      console.error("Error during sign-in:", error.message);
      alert("Failed to sign in.");
    });
});

document.getElementById("guestBtn").addEventListener("click", () => {
  alert("Welcome Guest! Let's start practicing!");
  // Redirect or show practice mode
});
