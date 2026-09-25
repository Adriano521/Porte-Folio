// ========================================
// JAVASCRIPT DU PORTFOLIO
// ========================================

// Ce script ajoute une petite interaction
// lors de l'envoi vers la section contact.

// On récupère tous les liens internes de la page.
const liens = document.querySelectorAll('a[href^="#"]');

liens.forEach(function (lien) {

  lien.addEventListener("click", function () {

    // Récupère l'élément correspondant au lien.
    const cible = document.querySelector(lien.getAttribute("href"));

    // Si l'élément existe, on effectue un défilement fluide.
    if (cible) {
      cible.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});