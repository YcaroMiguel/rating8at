// Espera o carregamento do DOM
document.addEventListener('DOMContentLoaded', function () {
    const students = document.querySelectorAll('.student');
    const historyDiv = document.getElementById('student-history');

    const fakeHistory = {
        "Aimê Laís": [],
        "Alanna Gabrielly": [],
        "Alice Feitosa": [],
        "Ana Clara": [],
        "Ana Sophia": [],
        "André Lucas": [],
        "Ashira Giovanna": [],
        "Bruna Vitória": [],
        "Cesar Miguel": [],
        "Elias Maia": [],
        "Emanuelly Ester": [],
        "Felipe de Melo": [],
        "Gabriel Pinheiro": [],
        "Gustavo Luiz": [],
        "Hiel Alves": [],
        "Isabelly Lins": [],
        "João Lucas": [],
        "Júlio Cezar": [],
        "Kaira Vitória": [],
        "Luiz Gabriel": [],
        "Lyvia Emanuelly": [],
        "Maria Alice": [],
        "Maria Eduarda": [],
        "Marya Luiza": [],
        "Matheus Vitor": [],
        "Pedro Henrique": [],
        "Rebecca Silva": [],
        "Samuel Asafe": [],
        "Sury de França": [],
        "Thais Lopez": [],
        "Ycaro Miguel": []
    };

    students.forEach(student => {
        student.addEventListener('click', function () {
            const name = student.getAttribute('data-student');
            const history = fakeHistory[name] || [];

            if (history.length === 0) {
                historyDiv.innerHTML = `<h2>Histórico de ${name}</h2><p>Sem apontamentos registrados.</p>`;
            } else {
                historyDiv.innerHTML = `<h2>Histórico de ${name}</h2><ul>${history.map(item => `<li>${item}</li>`).join('')}</ul>`;
            }

            historyDiv.style.display = 'block';
            historyDiv.scrollIntoView({ behavior: 'smooth' });
        });
    });
});