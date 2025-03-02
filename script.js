const messages = [
    "Tem certeza?",
    "Certeza mesmo?",
    "Tá certa disso?",
    "Beesst...",
    "Pense bem na sua resposta!",
    "Se você disser que não, eu vou ficar muito triste...",
    "Tá locona?",
    "Eu vou ficar muito, muito triste...",
    "Ok, tudo bem, vou parar de perguntar...",
    "Tava brincando, diz sim por favor! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton  = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    noButton.textContent = messages[messageIndex];

    messageIndex      = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);

    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}