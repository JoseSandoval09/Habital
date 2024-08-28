document.addEventListener("DOMContentLoaded", function() {
  // Selecciona el contenedor donde se cargará el footer
  const footerContainer = document.getElementById('footer-container');

  // Verifica si el contenedor existe para evitar errores
  if (footerContainer) {
	// Utiliza fetch para cargar el contenido de footer.html
	fetch('Footer.html')
	  .then(response => response.text())
	  .then(data => {
		// Inserta el contenido de footer.html en el contenedor
		footerContainer.innerHTML = data;
	  })
	  .catch(error => {
		// Maneja errores, por ejemplo, si footer.html no se encuentra
		console.error('Error loading the footer:', error);
	  });
  }
});
