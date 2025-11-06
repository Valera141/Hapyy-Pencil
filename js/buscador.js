document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("mainSearch") || document.getElementById("buscador");
  const items = document.querySelectorAll(".item img");
  const sections = document.querySelectorAll(".section");

  if (!searchInput) return;

  searchInput.addEventListener("input", e => {
    const query = e.target.value.toLowerCase().trim();
    let matchesFound = false;

    // Recorremos todas las imágenes de productos
    items.forEach(img => {
      const altText = img.alt.toLowerCase();

      if (altText.includes(query)) {
        img.parentElement.style.display = "block";
        matchesFound = true;
      } else {
        img.parentElement.style.display = "none";
      }
    });

    // Ocultar o mostrar secciones completas según resultados
    sections.forEach(section => {
      const visibleItems = section.querySelectorAll(".item:not([style*='display: none'])");
      section.style.display = visibleItems.length ? "block" : "none";
    });

    // Mostrar mensaje si no hay resultados
    showNoResultsMessage(!matchesFound && query.length > 0);
  });

  // Mostrar mensaje si no hay resultados
  function showNoResultsMessage(show) {
    let msg = document.getElementById("noResultsMsg");
    if (show) {
      if (!msg) {
        msg = document.createElement("div");
        msg.id = "noResultsMsg";
        msg.textContent = "No se encontraron productos para tu búsqueda 😕";
        msg.style.textAlign = "center";
        msg.style.margin = "30px 0";
        msg.style.fontWeight = "500";
        msg.style.color = "#C07F3D";
        document.body.appendChild(msg);
      }
    } else if (msg) {
      msg.remove();
    }
  }
});