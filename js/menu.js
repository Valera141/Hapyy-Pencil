document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.getElementById("darkModeToggle");
  const body = document.body;
  const icon = darkModeToggle.querySelector("i");

  // Función para aplicar el modo oscuro
  const enableDarkMode = () => {
    body.classList.add("dark-mode");
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
    localStorage.setItem("darkMode", "enabled");
  };

  // Función para desactivar el modo oscuro
  const disableDarkMode = () => {
    body.classList.remove("dark-mode");
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
    localStorage.setItem("darkMode", "disabled");
  };

  // Comprobar si el modo oscuro ya estaba activado
  if (localStorage.getItem("darkMode") === "enabled") {
    enableDarkMode();
  }

  // Evento al hacer clic en el botón
  darkModeToggle.addEventListener("click", () => {
    if (body.classList.contains("dark-mode")) {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  });
});