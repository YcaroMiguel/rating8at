// Preloader com tempo fixo de 3 segundos
window.addEventListener('load', () => {
  setTimeout(() => {
    document.body.classList.add('loaded');
  }, 3000); // 3000 milissegundos = 3 segundos
});

// Dados dos alunos
const alunos = [
  "Elias", "Thais", "Gustavo", "Ana Sophia", "Cesar",
  "Isabelle", "Mateus", "Sury", "André"
];

// Função para criar lista de alunos nas categorias
function criarCategoria(idCategoria) {
  const ul = document.getElementById(idCategoria);
  alunos.forEach((aluno, index) => {
    const li = document.createElement('li');
    li.textContent = `${index + 1}º - ${aluno} (0 pts)`;
    li.onclick = () => toggleHistorico(li, aluno + '-' + idCategoria);

    const historico = document.createElement('div');
    historico.className = 'historico hidden';
    historico.id = 'historico-' + aluno + '-' + idCategoria;
    historico.innerHTML = `<h3>Histórico de ${aluno}</h3><ul><li>Nenhum apontamento ainda.</li></ul>`;

    ul.appendChild(li);
    ul.appendChild(historico);
  });
}

// Categorias
criarCategoria('categoria-notas');
criarCategoria('categoria-participacao');
criarCategoria('categoria-gentileza');
criarCategoria('categoria-atitude');

// Mostrar e esconder histórico
function toggleHistorico(element, historicoId) {
  const historico = document.getElementById('historico-' + historicoId);
  historico.classList.toggle('hidden');
  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}