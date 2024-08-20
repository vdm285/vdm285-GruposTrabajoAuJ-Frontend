document.addEventListener("DOMContentLoaded", function () {
  const greetButton = document.getElementById("greet-btn");
  const colorButton = document.getElementById("color-btn");

  greetButton.addEventListener("click", function () {
    const userResponse = confirm("¿Seguro que desea continuar?");
    if (userResponse) {
      window.location.href = "https://github.com/marta-vilaseca/adoptaunjunior/";
    }
  });

  colorButton.addEventListener("click", function () {
    document.body.classList.toggle("toggled-style");
  });
});
