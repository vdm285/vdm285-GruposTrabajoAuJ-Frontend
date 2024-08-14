document.addEventListener('DOMContentLoaded', function () {
    const greetButton = document.getElementById('greet-btn');
    const colorButton = document.getElementById('color-btn');
    
    greetButton.addEventListener('click', function () {
        alert('¡A la espera de la próxima misión!');
    });
    
    colorButton.addEventListener('click', function () {
        document.body.classList.toggle('toggled-style');
    });
});

