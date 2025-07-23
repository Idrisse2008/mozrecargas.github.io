// Inicialização do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBK7VWZXC4eGhSM09jSgEFi2DZKMtx8tUw",
  authDomain: "moz-recargas-2f537.firebaseapp.com",
  databaseURL: "https://moz-recargas-2f537-default-rtdb.firebaseio.com",
  projectId: "moz-recargas-2f537",
  storageBucket: "moz-recargas-2f537.appspot.com",
  messagingSenderId: "394578070225",
  appId: "1:394578070225:web:b2db4c9b1509ad295153f0",
  measurementId: "G-X5N3NF1FXR"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Exibir nome e preço do produto
const nomeProduto = localStorage.getItem("produtoNome");
const precoProduto = localStorage.getItem("produtoPreco");

document.getElementById("nomeProduto").textContent = nomeProduto || "Produto não encontrado";
document.getElementById("precoProduto").textContent = `Preço: ${precoProduto} MZN`;

// Enviar dados para Firebase ao confirmar pagamento
document.getElementById("formPagamento").addEventListener("submit", function (e) {
  e.preventDefault();

  const numero = document.getElementById("numero").value;

  if (!numero || !nomeProduto || !precoProduto) {
    alert("Preencha os dados corretamente.");
    return;
  }

  const pagamentosRef = ref(db, "pagamentos");
  const novoPagamentoRef = push(pagamentosRef);

  set(novoPagamentoRef, {
    produto: nomeProduto,
    preco: precoProduto,
    numero: numero,
    status: "pendente",
    data: new Date().toISOString()
  })
  .then(() => {
    alert("Pagamento enviado com sucesso! Aguarde o processamento.");
    window.location.href = "index.html"; // Redirecionar após o sucesso
  })
  .catch((error) => {
    console.error("Erro ao registrar pagamento:", error);
    alert("Erro ao enviar pagamento.");
  });
});