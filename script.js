const alunos = [
  "Aimê", "Alice", "Allana", "Ana Clara", "Ana Sophia", "André", "Ashira",
  "Cesar", "Elias", "Emanuelly", "Felipe", "Gabriel", "Gustavo", "Hiel",
  "Isabelly", "Júlio", "Luiz", "Lyvia", "Maria Alice", "Mateus", "Marya Luiza",
  "Rebeca", "Samuel", "Sury", "Thais", "Ycaro"
];

// Inicialização dos dados: todos zerados
const categorias = {
  albert: alunos.map(nome => ({ nome, pontos: 0 })),
  steve: alunos.map(nome => ({ nome, pontos: 0 })),
  comportados: alunos.map(nome => ({ nome, pontos: 0 })),
  dedicados: alunos.map(nome => ({ nome, pontos: 0 }))
};

const historicoAlunos = {};
alunos.forEach(nome => {
  historicoAlunos[nome] = [];
});

// Função para renderizar cada categoria
function renderizarCategoria(id, dados) {
  const container = document.querySelector(`#${id} .lista-alunos`);
  container.innerHTML = "";
  const ordenado = [...dados].sort((a, b) =>
    b.pontos !== a.pontos ? b.pontos - a.pontos : a.nome.localeCompare(b.nome)
  );

  ordenado.forEach((aluno, i) => {
    const li = document.createElement("li");
    li.textContent = `${i + 1}º ${aluno.nome} - ${aluno.pontos} pts`;
    li.onclick = () => mostrarHistorico(aluno.nome);
    container.appendChild(li);
  });
}

// Mostrar histórico de um aluno
function mostrarHistorico(nome) {
  const container = document.getElementById("detalhesHistorico");
  const historico = historicoAlunos[nome];
  container.innerHTML = `<h3>${nome}</h3>`;
  if (historico.length === 0) {
    container.innerHTML += "<p>Sem apontamentos ainda.</p>";
  } else {
    container.innerHTML += "<ul>" +
      historico.map(item => `<li>${item}</li>`).join("") +
      "</ul>";
  }
  document.getElementById("historico").scrollIntoView({ behavior: "smooth" });
}

// Inicialização
function carregarSite() {
  renderizarCategoria("albert", categorias.albert);
  renderizarCategoria("steve", categorias.steve);
  renderizarCategoria("comportados", categorias.comportados);
  renderizarCategoria("dedicados", categorias.dedicados);
}

window.onload = carregarSite;