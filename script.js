document.addEventListener('DOMContentLoaded', function () {
    const greetButton = document.getElementById('greet-btn');
    const colorButton = document.getElementById('color-btn');
    
    const githubRepoUrl = 'https://github.com/ReyesMorales/AdoptaUnJunior';
    
    greetButton.addEventListener('click', function () {
        const userConfirmed = confirm('¿Seguro que desea continuar?');
        
        if (userConfirmed) {
            window.location.href = githubRepoUrl;
        }
    });
    
    colorButton.addEventListener('click', function () {
        document.body.classList.toggle('toggled-style');
    });
});