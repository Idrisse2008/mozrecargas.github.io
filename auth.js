// auth.js
import { auth } from './firebase.js';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Login
export function login() {
  const email = document.getElementById("loginEmail").value;
  const senha = document.getElementById("loginPassword").value;
  const msg = document.getElementById("loginMsg");

  signInWithEmailAndPassword(auth, email, senha)
    .then(() => {
      msg.textContent = "Login com sucesso! Redirecionando...";
      msg.style.color = "lime";
      window.location.assign("index.html");
    })
    .catch(error => {
      msg.textContent = "Erro: " + error.message;
      msg.style.color = "red";
    });
}

// Registro
export function register() {
  const email = document.getElementById("registerEmail").value;
  const senha = document.getElementById("registerPassword").value;
  const msg = document.getElementById("registerMsg");

  createUserWithEmailAndPassword(auth, email, senha)
    .then(() => {
      msg.textContent = "Conta criada com sucesso! Redirecionando...";
      msg.style.color = "lime";
      window.location.assign("login.html");
    })
    .catch(error => {
      msg.textContent = "Erro: " + error.message;
      msg.style.color = "red";
    });
}

// Logout (caso precise)
export function logout() {
  signOut(auth).then(() => location.reload());
}