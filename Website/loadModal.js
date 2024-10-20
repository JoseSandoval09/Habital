// Espera a que el documento esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Cargar el archivo JSON
    fetch('/Website/JSON/projects.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la red al intentar cargar el JSON');
            }
            return response.json();
        })
        .then(data => {
            // Selecciona todos los botones de "Ver Detalles"
            const buttons = document.querySelectorAll('.view-more');
            buttons.forEach(button => {
                button.addEventListener('click', (e) => {
                    const id = e.target.getAttribute('data-id'); // Obtiene el ID del botón
                    const project = data.projects.find(p => p.id === parseInt(id)); // Encuentra el proyecto por ID
                    if (project) {
                        // Actualiza el contenido del modal
                        document.getElementById('projectTitle').innerText = project.name;
                        document.getElementById('projectDescription').innerText = project.description;
                        document.getElementById('projectSurface').innerText = project.surface;
                        document.getElementById('projectClient').innerText = project.client;
                        document.getElementById('projectLocation').innerText = project.location;
                        document.getElementById('projectDate').innerText = project.date;
                        
                        const imagesContainer = document.getElementById('projectImages');
                        imagesContainer.innerHTML = ''; // Limpia imágenes anteriores
                        
                        // Agrega las imágenes al contenedor
                        project.images.forEach(image => {
                            const imgElement = document.createElement('img');
                            imgElement.src = image; // Asegúrate de que la ruta sea correcta
                            imgElement.classList.add('img-fluid'); // Agrega clase para estilo
                            imagesContainer.appendChild(imgElement);a
                        });
                    } else {
                        console.error('Proyecto no encontrado:', id);
                    }
                });
            });
        })
        .catch(error => console.error('Error al cargar el JSON:', error));
});
