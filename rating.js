document.addEventListener('DOMContentLoaded', function () {
    const studentsContainer = document.querySelector('.ratings');
    const playerCount = document.getElementById('player-count');
    const preloader = document.querySelector('.preloader');
    const mainContent = document.querySelector('main');

    let previousOrder = [];

    // Lista de alunos
    const studentsData = [
        { name: "Aimê Laís", points: 0, history: [] },
        { name: "Alanna Gabrielly", points: 0, history: [] },
        { name: "Alice Feitosa", points: 0, history: [] },
        { name: "Ana Clara", points: 0, history: [] },
        { name: "Ana Sophia", points: 0, history: [] },
        { name: "André Lucas", points: 0, history: [] },
        { name: "Ashira Giovanna", points: 0, history: [] },
        { name: "Bruna Vitória", points: 0, history: [] },
        { name: "Cesar Miguel", points: 0, history: [] },
        { name: "Elias Maia", points: 30, history: [] },
        { name: "Emanuelly Ester", points: 0, history: [] },
        { name: "Felipe de Melo", points: 0, history: [] },
        { name: "Gabriel Pinheiro", points: 0, history: [] },
        { name: "Gustavo Luiz", points: 15, history: [] },
        { name: "Hiel Alves", points: 0, history: [] },
        { name: "Isabelly Lins", points: 0, history: [] },
        { name: "João Lucas", points: 0, history: [] },
        { name: "Júlio Cezar", points: 0, history: [] },
        { name: "Kaira Vitória", points: 0, history: [] },
        { name: "Luiz Gabriel", points: 0, history: [] },
        { name: "Lyvia Emanuelly", points: 0, history: [] },
        { name: "Maria Alice", points: 0, history: [] },
        { name: "Maria Eduarda", points: 0, history: [] },
        { name: "Marya Luiza", points: 0, history: [] },
        { name: "Matheus Vitor", points: 0, history: [] },
        { name: "Pedro Henrique", points: 0, history: [] },
        { name: "Rebecca Silva", points: 0, history: [] },
        { name: "Samuel Asafe", points: 0, history: [] },
        { name: "Sury de França", points: 0, history: [] },
        { name: "Thais Lopez", points: 15, history: [] },
        { name: "Ycaro Miguel", points: 0, history: [] }
    ];

    const loadingMessages = [
        "Preparando o próximo desafio...",
        "Verificando jogadores restantes...",
        "Contando os cascalhos acumulados...",
        "Aumentando a tensão...",
        "Conferindo as estrelas...",
        "Quem será eliminado?",
        "Quem vai para o topo?"
    ];

    const preloaderText = document.querySelector('.preloader-text');
    preloaderText.textContent = loadingMessages[Math.floor(Math.random() * loadingMessages.length)];

    // Aguarda 3 segundos para mostrar o conteúdo
    setTimeout(() => {
        preloader.style.display = 'none';
        mainContent.style.display = 'block';
        renderStudents();
    }, 3000);

    function renderStudents() {
        studentsContainer.innerHTML = '';

        studentsData.sort((a, b) => b.points - a.points);

        const currentOrder = studentsData.map(s => s.name);

        studentsData.forEach((student, index) => {
            const div = document.createElement('div');
            div.classList.add('student');
            div.setAttribute('data-student', student.name);

            div.innerHTML = `
                <strong>${index + 1}°</strong> - <span class="student-name">${student.name}</span> — ${student.points} pts
            `;
            studentsContainer.appendChild(div);

            const prevIndex = previousOrder.indexOf(student.name);
            const currIndex = currentOrder.indexOf(student.name);

            if (prevIndex !== -1) {
                if (currIndex < prevIndex) {
                    div.classList.add('up');
                } else if (currIndex > prevIndex) {
                    div.classList.add('down');
                }
            }

            div.querySelector('.student-name').addEventListener('click', function (e) {
                e.stopPropagation();
                showHistory(student);
            });
        });

        previousOrder = currentOrder;
        playerCount.textContent = `Jogadores restantes: ${studentsData.length}`;
    }

    function showHistory(student) {
        const popup = document.createElement('div');
        popup.classList.add('popup');

        popup.innerHTML = `
            <div class="popup-content">
                <h2>Histórico de ${student.name}</h2>
                <ul>
                    ${student.history.length ? student.history.map(item => `<li>${item}</li>`).join('') : '<li>Sem registros ainda.</li>'}
                </ul>
                <button class="close-popup">Fechar</button>
            </div>
        `;

        document.body.appendChild(popup);

        popup.querySelector('.close-popup').addEventListener('click', function () {
            popup.remove();
        });
    }
});