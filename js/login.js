document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const senha = document.getElementById("password").value;
  const erro = document.getElementById("login-error");

  firebase.auth().signInWithEmailAndPassword(email, senha)
    .then(() => {
      window.location.href = "painel.html";
    })
    .catch((err) => {
      erro.textContent = "Erro ao fazer login: " + err.message;
    });
});
