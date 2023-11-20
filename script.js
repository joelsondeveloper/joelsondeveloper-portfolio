function typeEffect(id, text, onFinish) {
    const textElement = document.getElementById(id);
    let i = 0;

    function type() {
        if (i < text.length) {
            textElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 100);
        } else {
            onFinish();
        }
    }

    type();
}

const phrases = [
    "Sobre mim",
    "Veja projetos",
    "entre em contato"
];

function changePhrase(id, newPhrase) {
    const textElement = document.getElementById(id);
    textElement.textContent = newPhrase;
}

function restoreOriginalPhrase(id) {
    const textElement = document.getElementById(id);
    if (id === "text") {
        textElement.textContent = "olá, eu sou o";
    } else if (id === "text1") {
        textElement.textContent = "Joelson Vicente";
    } else if (id === "text2") {
        textElement.textContent = "desenvolvedor front end";
    }
}

let touchEnabled = false;

// Verifique se o dispositivo suporta toque
if ('ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) {
    touchEnabled = true;

    // Adicione um evento de toque para a tela inteira
    document.addEventListener('touchstart', function() {
        togglePhrases();
    });
    
    // Adicione um evento de toque para restaurar as frases
    document.addEventListener('touchend', function() {
        restoreOriginalPhrases();
    });
}

// Função para alternar todas as frases
function togglePhrases() {
    const textElements = document.querySelectorAll('.typewriter');
    for (let i = 0; i < textElements.length; i++) {
        changePhrase(textElements[i].id, phrases[i]);
    }
}

// Função para restaurar todas as frases originais
function restoreOriginalPhrases() {
    changePhrase("text", "olá, eu sou o");
    changePhrase("text1", "Joelson Vicente");
    changePhrase("text2", "desenvolvedor front end");
}

setTimeout(function() {
    if (!touchEnabled) {
        // Adicione eventos de mouse somente se não for um dispositivo touchscreen
        document.getElementById("text").addEventListener("mouseover", function() {
            changePhrase("text", phrases[0]);
        });

        document.getElementById("text").addEventListener("mouseout", function() {
            restoreOriginalPhrase("text");
        });

        document.getElementById("text1").addEventListener("mouseover", function() {
            changePhrase("text1", phrases[1]);
        });

        document.getElementById("text1").addEventListener("mouseout", function() {
            restoreOriginalPhrase("text1");
        });

        document.getElementById("text2").addEventListener("mouseover", function() {
            changePhrase("text2", phrases[2]);
        });

        document.getElementById("text2").addEventListener("mouseout", function() {
            restoreOriginalPhrase("text2");
        });
    }
}, 5000);

// Função para alternar todas as frases permanentemente após 8 segundos se não houver suporte para mouse
function togglePhrasesPermanent() {
    if (!touchEnabled) {
        togglePhrases();
    }
}

// Inicie o timeout quando o script for carregado
setTimeout(togglePhrasesPermanent, 8000);

function startTypewriters() {
    typeEffect("text", "olá, eu sou o", function () {
        typeEffect("text1", "Joelson Vicente", function () {
            typeEffect("text2", "desenvolvedor front end", function () {
                console.log("Todos os efeitos terminaram.");
            });
        });
    });
}

startTypewriters();

 // Função para verificar o suporte a tela sensível ao toque
