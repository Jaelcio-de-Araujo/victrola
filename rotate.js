
// Selecione a div com a classe "stamp"
const stampDiv = document.querySelector('.stamp');

// Função para girar a div continuamente
function girarComoDisco() {
    // Incremento de rotação (em graus por atualização)
    const incremento = 1;
    let rotacaoAtual = 0;

    // Função que atualiza a rotação
    function atualizarRotacao() {
        rotacaoAtual += incremento;
        stampDiv.style.transform = `rotate(${rotacaoAtual}deg)`;
        requestAnimationFrame(atualizarRotacao);
    }

    // Inicialize a animação
    requestAnimationFrame(atualizarRotacao);
}

// Chame a função para iniciar a rotação
girarComoDisco();
