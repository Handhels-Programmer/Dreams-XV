        // Lógica del Reproductor Modal
        const videoCards = document.querySelectorAll('.video-card');
        const videoModal = document.getElementById('videoModal');
        const closeModal = document.getElementById('closeModal');
        const videoIframe = document.getElementById('videoIframe');

        // Abrir Modal
        videoCards.forEach(card => {
            card.addEventListener('click', () => {
                const videoUrl = card.getAttribute('data-video-url');
                videoIframe.src = videoUrl; // Cargamos la URL del video en el iframe
                videoModal.classList.remove('opacity-0', 'pointer-events-none');
                document.body.style.overflow = 'hidden'; // Evita hacer scroll en la página de fondo
            });
        });

        // Cerrar Modal
        const closeVideo = () => {
            videoModal.classList.add('opacity-0', 'pointer-events-none');
            videoIframe.src = ''; // Limpiamos el src para detener la reproducción del video
            document.body.style.overflow = 'auto'; // Restauramos el scroll
        };

        closeModal.addEventListener('click', closeVideo);

        // Cerrar si se hace clic fuera del video
        videoModal.addEventListener('click', (e) => {
            if(e.target === videoModal) closeVideo();
        });