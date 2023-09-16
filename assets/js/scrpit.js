function Quiz() {
    const IniciaQuiz = Number(prompt('Iniciar Quiz?\n 1 - Sim \n 2 - Não'));

    if (IniciaQuiz == 1) {
        const pergunta1 = Number(prompt("O que é DevOps: \n 1 - Um estilo de música popular. \n 2 - Um sistema de navegação por satélite. \n 3 - Uma abordagem para aprimorar a colaboração entre desenvolvedores e operadores de TI."))
        if (pergunta1 == 3) {
            alert("Resposta Correta, Click em ok para proxima pergunta");   
            chamaPergunta2();
        } else {
            alert('Estude mais!');
        }

    } else {
        alert('Opção invalida!');
        Quiz();
    }
    function chamaPergunta2() {
        let pergunta2 = Number(prompt("Qual é o objetivo principal do DevOps: \n 1 - Cultivar vegetais orgânicos. \n 2 - Melhorar a entrega de software e a colaboração entre equipes. \n 3 - Resolver equações matemáticas complexas."));

        if (pergunta2 == 2) {
            alert("Resposta Correta, Click em ok para proxima pergunta");
            chamaPergunta3();
        } else {
            alert('Estude mais!');
            Quiz();
        }
    }

    function chamaPergunta3() {
        let pergunta3 = Number(prompt("O que as práticas DevOps visam acelerar: \n 1 - O processo de produção de filmes de Hollywood. \n 2 - O ciclo de vida de desenvolvimento de software. \n 3 - A construção de arranha-céus."));

        if (pergunta3 == 2) {
            alert("Resposta Correta, Click em ok para proxima pergunta");
            chamaPergunta4();
        } else {
            alert('Estude mais!');
            Quiz();
        }
    }
    function chamaPergunta4() {
        let pergunta4 = Number(prompt("Por que a automação desempenha um papel importante no DevOps: \n 1 - Para criar robôs de batalha \n 2 - Para eliminar totalmente o envolvimento humano em processos. \n 3 - Para executar tarefas repetitivas de forma consistente e eficiente."));

        if (pergunta4 == 3) {
            alert("Resposta Correta, Click em ok para proxima pergunta");
            chamaPergunta5();
        } else {
            alert('Estude mais!');
            Quiz();
        }
    }
    function chamaPergunta5() {
        let pergunta5 = Number(prompt("Quais são os principais princípios do DevOps: \n 1 -Colaboração contínua, automação e entrega contínua de software. \n 2 - Práticas de culinária gourmet. \n 3 - Táticas de mergulho submarino."));

        if (pergunta5 == 1) {
            alert(`Resposta Correta, Quiz finalizado!`);

        } else {
            alert('Estude mais!');
            Quiz();
        }
    }
}