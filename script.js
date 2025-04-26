// Dados simulados dos alunos e suas pontuações nas categorias
const alunos = [
    { nome: "Elias", pontosEinstein: 80, pontosJobs: 60, pontosComportados: 70, pontosNoPain: 90 },
    { nome: "Thais", pontosEinstein: 90, pontosJobs: 85, pontosComportados: 60, pontosNoPain: 75 },
    { nome: "Gustavo", pontosEinstein: 70, pontosJobs: 80, pontosComportados: 85, pontosNoPain: 60 },
    { nome: "Mateus", pontosEinstein: 60, pontosJobs: 50, pontosComportados: 80, pontosNoPain: 85 },
    { nome: "Isabelle", pontosEinstein: 85, pontosJobs: 90, pontosComportados: 75, pontosNoPain: 80 },
];

// Função para atualizar a lista de alunos em cada categoria
function atualizarListaCategoria(categoria) {
    const listaAlunos = document.querySelector(`#categoria-${categoria} .lista-alunos`);
    listaAlunos.innerHTML = ''; // Limpar a lista antes de adicionar novos itens

    // Filtra os alunos pela categoria e cria elementos para a lista
    alunos.forEach(aluno => {
        let pontosCategoria = aluno[`pontos${categoria}`];  // Utiliza a categoria dinamicamente
        let alunoDiv = document.createElement("div");
        alunoDiv.classList.add("aluno");

        alunoDiv.innerHTML = `
            <h3>${aluno.nome}</h3>
            <p>Pontos: ${pontosCategoria}</p>
        `;

        listaAlunos.appendChild(alunoDiv);
    });
}

// Função para alternar a visibilidade das categorias
function alternarCategoria(categoria) {
    // Esconde todas as categorias
    const categorias = document.querySelectorAll('.categoria');
    categorias.forEach(c => c.classList.remove('ativo'));

    // Mostra a categoria clicada
    const categoriaDiv = document.getElementById(`categoria-${categoria}`);
    categoriaDiv.classList.add('ativo');

    // Atualiza a lista de alunos dessa categoria
    atualizarListaCategoria(categoria);
}

// Inicializa o site
document.getElementById("prêmio-einstein").addEventListener("click", () => alternarCategoria('Einstein'));
document.getElementById("prêmio-jobs").addEventListener("click", () => alternarCategoria('Jobs'));
document.getElementById("comportados").addEventListener("click", () => alternarCategoria('Comportados'));
document.getElementById("no-pain").addEventListener("click", () => alternarCategoria('NoPain'));

// Ao carregar a página, mostra a primeira categoria
document.addEventListener("DOMContentLoaded", () => {
    alternarCategoria('Einstein');  // Mostra a primeira categoria ao carregar
});