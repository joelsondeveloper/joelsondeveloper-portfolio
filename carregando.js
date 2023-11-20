function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints;
}

// Verificar se o dispositivo é touchscreen
if (isTouchDevice()) {
    // Se for touchscreen, aguarde 10 segundos e depois redirecione o usuário para outro arquivo HTML na mesma pasta
    setTimeout(function() {
        window.location.href = 'index1.html';
    }, 5000); // 10000 milissegundos = 10 segundos
}
else {
    setTimeout(function() {
        window.location.href = 'index2.html';
    }, 10000);
}