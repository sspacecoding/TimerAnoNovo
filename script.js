// Seleciona o elemento do timer
const timerElement = document.getElementById('timer');

// Define a data do próximo Ano Novo
const nextYear = new Date().getFullYear() + 1;
const newYearDate = new Date(`January 1, ${nextYear} 00:00:00`);

// Função para atualizar o timer
function updateTimer() {
    const now = new Date();
    const timeRemaining = newYearDate - now;

    if (timeRemaining <= 0) {
        timerElement.textContent = "Feliz Ano Novo!";
        clearInterval(timerInterval);
        return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    timerElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Atualiza o timer a cada segundo
const timerInterval = setInterval(updateTimer, 1000);

// Inicializa o timer
updateTimer();
