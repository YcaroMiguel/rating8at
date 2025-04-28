document.addEventListener('DOMContentLoaded', function () {
    const studentsContainer = document.querySelector('.ratings');
    const historyDiv = document.getElementById('student-history');
    const playerCount = document.getElementById('player-count');
    const preloader = document.querySelector('.preloader');
    const mainContent = document.querySelector('main');
    const preloaderText = document.querySelector('.preloader-text');

    let previousOrder = [];

    const studentsData = [
        { name: "Aimê Laís", points: 120 },
        { name: "Alanna Gabrielly", points: 150 },
        { name: "Alice Feitosa", points: 90 },
        { name: "Ana Clara", points: 110 },
        { name: "Ana Sophia", points: 105 },
        { name: "André Lucas", points: 95 },
        { name: "Ashira Giovanna", points: 130 },
        { name: "Bruna Vitória", points: 100 },
        { name: "Cesar Miguel", points: 140 },
        { name: "Elias Maia", points: 125 },
        { name: "Emanuelly Ester", points: 115 },
        { name: "Felipe de Melo", points: 180 },
        { name: "Gabriel Pinheiro", points: 80 },
        { name: "Gustavo Luiz", points: 70 },
        { name: "Hiel Alves", points: 160 },
        { name: "Isabelly Lins", points: 135 },
        { name: "João Lucas", points: 95 },
        { name: "Júlio Cezar", points: 85 },
        { name: "Kaira Vitória", points: 105 },
        { name: "Luiz Gabriel", points: 90 },
        { name: "Lyvia Emanuelly", points: 115 },
        { name: "Maria Alice", points: 120 },
        { name: "Maria Eduarda", points: 130 },
        { name: "Marya Luiza", points: 100 },
        { name: "Matheus Vitor", points: 95 },
        { name: "Pedro Henrique", points: 110 },
        { name: "Rebecca Silva", points: 140 },
        { name: "Samuel Asafe", points: 100 },
        { name: "Sury de França", points: 125 },
        { name: "Thais Lopez", points: 110 },
        { name: "Ycaro Miguel", points: 456 }
    ];

    const fakeHistory = {};
    studentsData.forEach(student => {
        fakeHistory[student.name] = [];
    });

    const loadingMessages = [
        "Preparando o próximo desafio...",
        "Verificando jogadores restantes...",
        "Contando os cascalhos acumulados...",
        "Aumentando a tensão...",
        "Conferindo as estrelas...",
        "Quem será eliminado?",
        "Quem vai para o topo?"
    ];
    preloaderText.textContent = loadingMessages[Math.floor(Math.random() * loadingMessages.length)];

    setTimeout(() => {
        preloader.style.display = 'none';
        mainContent.style.display = 'block';
        renderStudents();
    }, 3000);

    function renderStudents() {
        studentsData.sort((a, b) => b.points - a.points);

        const currentOrder = studentsData.map(s => s.name);
        studentsContainer.innerHTML = '';

        studentsData.forEach(student => {
            const div = document.createElement('div');
            div.classList.add('student');
            div.setAttribute('data-student', student.name);
            div.innerHTML = `<strong>${student.name}</strong> — ${student.points} pts`;
            studentsContainer.appendChild(div);

            div.addEventListener('click', function () {
                const name = student.name;
                const history = fakeHistory[name] || [];

                if (history.length === 0) {
                    historyDiv.innerHTML = `<h2>Histórico de ${name}</h2><p>Nenhuma atividade recente. Talvez esteja eliminado?</p>`;
                } else {
                    historyDiv.innerHTML = `<h2>Histórico de ${name}</h2><ul>${history.map(item => `<li>${item}</li>`).join('')}</ul>`;
                }

                historyDiv.style.display = 'block';
                historyDiv.scrollIntoView({ behavior: 'smooth' });
            });

            const prevIndex = previousOrder.indexOf(student.name);
            const currIndex = currentOrder.indexOf(student.name);

            if (prevIndex !== -1) {
                if (currIndex < prevIndex) {
                    div.classList.add('up');
                } else if (currIndex > prevIndex) {
                    div.classList.add('down');
                }
            }
        });

        previousOrder = currentOrder;
        playerCount.textContent = `Jogadores restantes: ${studentsData.length}`;
    }
});