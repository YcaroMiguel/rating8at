<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Estrelas do Bimestre - Rating</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        /* Estilos Gerais */
        body, html {
            margin: 0;
            padding: 0;
            font-family: 'Poppins', sans-serif;
            background-color: #0f0f0f;
            color: #fff;
            overflow-x: hidden;
        }

        /* Barra de Navegação */
        .navbar {
            background-color: #e60073; /* Rosa inspirado na série */
            padding: 10px 20px;
            text-align: center;
            font-size: 20px;
        }

        .navbar a {
            color: #fff;
            text-decoration: none;
            margin: 0 15px;
        }

        .navbar a:hover {
            text-decoration: underline;
        }

        /* Títulos e Textos */
        h1 {
            text-align: center;
            font-size: 2.5em;
            margin-top: 20px;
            color: #e60073;
        }

        h2 {
            text-align: center;
            font-size: 2em;
            color: #fff;
            margin: 20px;
        }

        /* Rating e Categorias */
        .rating-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 30px;
            padding: 20px;
            justify-items: center;
        }

        .rating-card {
            background-color: #222;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
            width: 100%;
            transition: transform 0.3s ease;
        }

        .rating-card:hover {
            transform: scale(1.05);
        }

        .card-header {
            text-align: center;
            font-size: 1.8em;
            margin-bottom: 15px;
            color: #e60073;
        }

        .card-body {
            font-size: 1.2em;
            color: #fff;
            text-align: center;
        }

        /* Histórico do Aluno */
        .historico {
            margin-top: 20px;
            background-color: #333;
            padding: 15px;
            border-radius: 8px;
            display: none;
        }

        .historico ul {
            list-style-type: none;
            padding-left: 0;
        }

        .historico li {
            margin: 5px 0;
            font-size: 1em;
            color: #e60073;
        }

        /* Preloader */
        #preloader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #0f0f0f;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
        }

        .loader {
            color: #fff;
            font-size: 24px;
        }

        .formas {
            display: flex;
            gap: 15px;
            margin-bottom: 15px;
        }

        .circulo, .triangulo, .quadrado {
            width: 30px;
            height: 30px;
            background-color: #e60073;
            animation: bounce 1.5s infinite ease-in-out;
        }

        .circulo {
            border-radius: 50%;
        }

        .triangulo {
            width: 0;
            height: 0;
            border-left: 15px solid transparent;
            border-right: 15px solid transparent;
            border-bottom: 30px solid #e60073;
        }

        .quadrado {
            border-radius: 5px;
        }

        @keyframes bounce {
            0%, 100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-15px);
            }
        }

        /* Esconde o preloader depois de 3s */
        body.loaded #preloader {
            display: none;
        }
    </style>
</head>
<body>

    <!-- Preloader -->
    <div id="preloader">
        <div class="loader">
            <div class="formas">
                <div class="circulo"></div>
                <div class="triangulo"></div>
                <div class="quadrado"></div>
            </div>
            <p>Carregando Rating...</p>
        </div>
    </div>

    <!-- Navbar -->
    <div class="navbar">
        <a href="index.html">Início</a>
        <a href="rating.html">Rating</a>
    </div>

    <!-- Título -->
    <h1>Estrelas do Bimestre - Rating</h1>
    <h2>Veja os alunos e suas categorias!</h2>

    <!-- Rating de Categorias -->
    <div class="rating-container">
        <div class="rating-card">
            <div class="card-header">Prêmio Albert Einstein</div>
            <div class="card-body">Melhores notas do bimestre</div>
        </div>

        <div class="rating-card">
            <div class="card-header">Prêmio Steve Jobs</div>
            <div class="card-body">Aluno mais criativo</div>
        </div>

        <div class="rating-card">
            <div class="card-header">Comportados</div>
            <div class="card-body">Aluno mais quieto</div>
        </div>

        <div class="rating-card">
            <div class="card-header">No Pain, No Gain</div>
            <div class="card-body">Aluno mais dedicado</div>
        </div>
    </div>

    <!-- Histórico do Aluno -->
    <div class="historico" id="historico">
        <h2>Histórico de Apontamentos</h2>
        <ul id="historico-list">
            <!-- Apontamentos do aluno serão preenchidos aqui -->
        </ul>
    </div>

    <script>
        // Função para mostrar o histórico de apontamentos
        function mostrarHistorico(aluno) {
            const historicoDiv = document.getElementById('historico');
            const historicoList = document.getElementById('historico-list');

            // Exemplo de dados de apontamentos (isso pode ser dinâmico)
            const apontamentos = [
                "Recebeu 10 pontos por ajudar na limpeza da sala.",
                "Perdeu 5 pontos por usar o celular na aula.",
                "Ganhou 15 pontos por melhorar sua participação nas atividades."
            ];

            // Preencher o histórico com os apontamentos
            historicoList.innerHTML = apontamentos.map(apontamento => `<li>${apontamento}</li>`).join('');
            historicoDiv.style.display = 'block'; // Mostra o histórico
        }

        // Função de carregamento da página
        setTimeout(() => {
            document.body.classList.add('loaded');
        }, 3000);
    </script>

</body>
</html>