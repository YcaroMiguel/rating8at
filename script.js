
const alunos = [
    "Aimê", "Alice", "Ana Clara", "Ana Sophia", "André", "Ashira", "Cesar", "Elias",
    "Emanuelly", "Felipe", "Gabriel", "Gustavo", "Hiel", "Isabelly", "Júlio", "Luiz",
    "Mateus", "Marya Luiza", "Rebeca", "Samuel", "Sury", "Thais", "Ycaro"
];

const categorias = {
    "melhores-notas": "Prêmio Albert Einstein - Melhores notas",
    "mais-criativo": "Prêmio Steve Jobs - Mais Criativo",
    "comportados": "Comportados - Aluno mais quieto",
    "dedicado": "Prêmio 'No pain, no gain' - Mais dedicado"
};

let ratings = {};

Object.keys(categorias).forEach(cat => {
    ratings[cat] = alunos.map(nome => ({
        nome,
        pontos: 0,
        perfil: []
    }));
});

function showCategory(category) {
    document.getElementById('category-title').innerText = categorias[category];
    const tbody = document.getElementById('ranking-body');
    tbody.innerHTML = "";

    const ranking = [...ratings[category]];
    ranking.sort((a, b) => b.pontos - a.pontos || a.nome.localeCompare(b.nome));

    ranking.forEach((aluno, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td><a href="#" onclick="showProfile('${category}','${aluno.nome}')">${aluno.nome}</a></td>
            <td>${aluno.pontos}</td>
        `;
        tbody.appendChild(tr);
    });
}

function showProfile(category, nome) {
    const aluno = ratings[category].find(a => a.nome === nome);
    const container = document.getElementById("profile-info");
    container.innerHTML = `
        <p><strong>Nome:</strong> ${aluno.nome}</p>
        <p><strong>Pontos:</strong> ${aluno.pontos}</p>
        <h3>Histórico:</h3>
        <ul>${aluno.perfil.length ? aluno.perfil.map(e => `<li>${e}</li>`).join('') : '<li>Sem apontamentos</li>'}</ul>
    `;
    document.getElementById("student-profile").scrollIntoView({ behavior: 'smooth' });
}

window.onload = () => {
    showCategory("melhores-notas");
};
