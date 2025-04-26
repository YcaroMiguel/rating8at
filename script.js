const alunos = [
  { nome: "Elias", einstein: 0, jobs: 0, quietos: 0, dedicados: 0, historico: [] },
  { nome: "Thais", einstein: 0, jobs: 0, quietos: 0, dedicados: 0, historico: [] },
  { nome: "Gustavo", einstein: 0, jobs: 0, quietos: 0, dedicados: 0, historico: [] },
  { nome: "Ana Sophia", einstein: 0, jobs: 0, quietos: 0, dedicados: 0, historico: [] },
  // Adicione os outros alunos aqui
];

function mostrarCategoria(categoria) {
  document.querySelectorAll(".categoria").forEach(cat => {
    cat.classList.remove("ativo");
  });
  document.getElementById(categoria).classList.add("ativo");
}

function renderAlunos() {
  const categorias = ["einstein", "jobs", "quietos", "dedicados"];

  categorias.forEach(cat => {
    const container = document.getElementById("lista-" + cat);
    container.innerHTML = "";

    const ordenados = [...alunos].sort((a, b) => b[cat] - a[cat] || a.nome.localeCompare(b.nome));

    ordenados.forEach((aluno, index) => {
      const div = document.createElement("div");
      div.className = "aluno";
      div.onclick = () => {
        const hist = div.querySelector(".historico");
        hist.style.display = hist.style.display === "block" ? "none" : "block";
      };

      div.innerHTML = `
        <h3>${index + 1}º - ${aluno.nome} | ${aluno[cat]} pts</h3>
        <div class="historico">
          ${aluno.historico.length ? aluno.historico.map(h => `<p>${h}</p>`).join('') : "Sem histórico."}
        </div>
      `;
      container.appendChild(div);
    });
  });
}

document.addEventListener("DOMContentLoaded", renderAlunos);