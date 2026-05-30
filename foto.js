// Cambiamos 'DOMContentLoaded' por 'galeriaCargada'
        document.addEventListener('galeriaCargada', () => {
            const lightbox = document.getElementById('lightbox');
            const lightboxImg = document.getElementById('lightboxImg');
            const lightboxCaption = document.getElementById('lightboxCaption');
            const btnCerrar = document.getElementById('btnCerrarLightbox');
            const itemsGaleria = document.querySelectorAll('.galeria-item');

            itemsGaleria.forEach(item => {
                item.addEventListener('click', () => {
                    const imagen = item.querySelector('img');
                    const nombres = item.getAttribute('data-personas') || ''; 
                    
                    lightboxImg.src = imagen.src;
                    lightboxCaption.innerText = nombres; 
                    
                    lightbox.classList.remove('hidden');
                    document.body.style.overflow = 'hidden';
                    
                    setTimeout(() => {
                        lightbox.classList.remove('opacity-0');
                        lightboxImg.classList.remove('scale-95');
                        lightboxImg.classList.add('scale-100');
                        lightboxCaption.classList.remove('opacity-0'); 
                    }, 10);
                });
            });

            const cerrarLightbox = () => {
                lightbox.classList.add('opacity-0');
                lightboxImg.classList.remove('scale-100');
                lightboxImg.classList.add('scale-95');
                lightboxCaption.classList.add('opacity-0'); 
                
                document.body.style.overflow = 'auto';
                
                setTimeout(() => {
                    lightbox.classList.add('hidden');
                    lightboxImg.src = ""; 
                    lightboxCaption.innerText = "";
                }, 300);
            };

            btnCerrar.addEventListener('click', cerrarLightbox);
            
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox || e.target.parentElement === lightbox) {
                    cerrarLightbox();
                }
            });

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && !lightbox.classList.contains('hidden')) {
                    cerrarLightbox();
                }
            });
        });