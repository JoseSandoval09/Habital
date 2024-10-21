const proyectos = {
    1: {
        imagenes: ['/Website/Resources/Portfolio/1.DEPARTAMENTOSCAMPOS/7-10DPTOSCAMPOS.webp','/Website/Resources/Portfolio/1.DEPARTAMENTOSCAMPOS/2-10DPTOSCAMPOS.webp'],
        cliente: 'Particular',
        anio: '2023 - Presente',
        ubicacion: 'Tijuana, Baja California',
        superficie: '554.00 m²',
        descripcion: 'Diseño y construcción de departamentos'
    }
};

$(document).ready(function(){
    $('.ver-detalles').on('click', function(){
        const id = $(this).data('id');
        const proyecto = proyectos[id];

        // Cargar imágenes en el carrusel
        const $carousel = $('.carousel').empty();
        proyecto.imagenes.forEach(img => {
            $carousel.append(`<div><img src="${img}" loading="lazy" alt="Imagen"></div>`);
        });

        // Inicializar carrusel
        $carousel.slick({
            autoplay: true,
            autoplaySpeed: 3000, // Cambia de imagen cada 3 segundos
            dots: true,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev">Previous</button>',
            nextArrow: '<button type="button" class="slick-next">Next</button>'
        });

        // Cargar otros detalles
        $('#Cliente').text(`Cliente: ${proyecto.cliente}`);
        $('#Fecha').text(`Fecha: ${proyecto.anio}`);
        $('#Ubicacion').text(`Ubicación: ${proyecto.ubicacion}`);
        $('#Superficie').text(`Superficie: ${proyecto.superficie}`);
        $('#Descripcion').text(`Descripción: ${proyecto.descripcion}`);

        // Mostrar modal
        $('#detallesModal').modal('show');
    });

    $('#detallesModal').on('hidden.bs.modal', function () {
        $('.carousel').slick('unslick');
    });
});
