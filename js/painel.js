firebase.auth().onAuthStateChanged(async (user) => {
  if (user) {
    document.getElementById("user-email").value = user.email;

    try {
      const querySnapshot = await firebase.firestore()
        .collection("matriculas")
        .where("email", "==", user.email)
        .get();

      if (!querySnapshot.empty) {
        const docData = querySnapshot.docs[0].data();
        mostrarDadosFormatados(docData);
      } else {
        document.getElementById("matricula-dados").innerHTML = "<p>Nenhuma matrícula encontrada para este e-mail.</p>";
      }

    } catch (error) {
      console.error("Erro ao buscar matrícula:", error);
      document.getElementById("matricula-dados").innerHTML = "<p>Erro ao buscar matrícula.</p>";
    }
  } else {
    window.location.href = "login.html";
  }
});

function mostrarDadosFormatados(dados) {
  const dadosContainer = document.getElementById("matricula-dados");
  dadosContainer.innerHTML = '';

  const camposImportantes = {
    "nome": "Nome",
    "data-nascimento": "Data de Nascimento",
    "email": "Email",
    "telefone": "Telefone",
    "endereco": "Endereço",
    "cidade": "Cidade",
    "estado": "Estado",
    "objetivo": "Objetivo",
    "plano": "Plano",
    "duracao": "Duração do Plano (meses)",
    "como-conheceu": "Como nos conheceu",
    "mensagem": "Mensagem"
  };

  for (const chave in camposImportantes) {
    if (dados[chave]) {
      const item = document.createElement('div');
      item.className = 'dado-item';

      const label = camposImportantes[chave];
      const valor = dados[chave];
      

      item.innerHTML = `<strong>${label}:</strong> ${valor}`;
      dadosContainer.appendChild(item);
    }
  }
}

function logout() {
  firebase.auth().signOut().then(() => {
    window.location.href = "login.html";
  });
}

function formatarData(dataString) {
  const partes = dataString.split("-");
  return `${partes[2]}/${partes[1]}/${partes[0]}`;
}
