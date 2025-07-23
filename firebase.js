// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Configurações do Firebase (as tuas)
const firebaseConfig = {
  apiKey: "AIzaSyBK7VWZXC4eGhSM09jSgEFi2DZKMtx8tUw",
  authDomain: "moz-recargas-2f537.firebaseapp.com",
  projectId: "moz-recargas-2f537",
  storageBucket: "moz-recargas-2f537.appspot.com",
  messagingSenderId: "394578070225",
  appId: "1:394578070225:web:b2db4c9b1509ad295153f0"
};

// Inicializa e exporta
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);