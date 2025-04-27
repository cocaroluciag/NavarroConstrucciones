var imagenes = document.querySelectorAll('.imagen-port img');
var modal = document.getElementById('imagenModal');
var modalImg = document.getElementById('modalImagen');
var currentIndex = 0;

// Función para abrir el modal y mostrar la imagen seleccionada
imagenes.forEach(function(imagen, index) {
    imagen.addEventListener('click', function() {
        modal.style.display = "block";
        modalImg.src = imagen.src;
        currentIndex = index; // Guardamos el índice de la imagen actual
    });
});

// Función para cerrar el modal
var closeModal = document.querySelector('.close');
closeModal.addEventListener('click', function() {
    modal.style.display = "none";
});

// Función para navegar entre las imágenes
function cambiarImagen(n) {
    currentIndex += n;
    if (currentIndex < 0) {
        currentIndex = imagenes.length - 1;
    } else if (currentIndex >= imagenes.length) {
        currentIndex = 0;
    }
    modalImg.src = imagenes[currentIndex].src;
}

// Función para cerrar el modal al hacer clic fuera de la imagen
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
