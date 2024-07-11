document.addEventListener("DOMContentLoaded", function() {
  // Selecciona el contenedor donde se cargará la navbar
  const navbarContainer = document.getElementById('navbar-container');
  
  // Verifica si el contenedor existe para evitar errores
  if (navbarContainer) {
	// Utiliza fetch para cargar el contenido de navbar.html
	fetch('Navb.html')
	  .then(response => response.text())
	  .then(data => {
		// Inserta el contenido de navbar.html en el contenedor
		navbarContainer.innerHTML = data;
	  })
	  .catch(error => {
		// Maneja errores, por ejemplo, si navbar.html no se encuentra
		console.error('Error loading the navbar:', error);
	  });
  }
});

