
function changeImage(element) {
  document.getElementById("mainImg").src = element.src;
  
  // Supprimer active de toutes les miniatures
  let miniatures = document.querySelectorAll(".miniature");
  miniatures.forEach(img => img.classList.remove("active"));

  // Ajouter active sur celle cliquée
  element.classList.add("active");
}


