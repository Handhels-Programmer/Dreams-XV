// Cambiamos 'DOMContentLoaded' por 'galeriaCargada'
        document.addEventListener('galeriaCargada', () => {
            const botonesFiltro = document.querySelectorAll('.btn-filtro');
            const itemsGaleria = document.querySelectorAll('.galeria-item');

            botonesFiltro.forEach(boton => {
                boton.addEventListener('click', () => {
                    botonesFiltro.forEach(b => {
                        b.classList.remove('bg-[#44a0cf]', 'bg-[#E87A8F]', 'text-white', 'shadow-md');
                        b.classList.add('bg-transparent', 'text-[#2A1E1D]/70');
                    });

                    boton.classList.remove('bg-transparent', 'text-[#2A1E1D]/70');
                    
                    if (boton.getAttribute('data-target') === 'familia') {
                        boton.classList.add('bg-[#E87A8F]', 'text-white', 'shadow-md');
                    } else {
                        boton.classList.add('bg-[#44a0cf]', 'text-white', 'shadow-md');
                    }

                    const filtroSeleccionado = boton.getAttribute('data-target');

                    itemsGaleria.forEach(item => {
                        const categoriaItem = item.getAttribute('data-categoria');

                        if (filtroSeleccionado === 'todos' || filtroSeleccionado === categoriaItem) {
                            item.style.display = 'block';
                            setTimeout(() => {
                                item.style.opacity = '1';
                                item.style.transform = 'scale(1)';
                            }, 50);
                        } else {
                            item.style.opacity = '0';
                            item.style.transform = 'scale(0.8)';
                            setTimeout(() => {
                                item.style.display = 'none';
                            }, 400); 
                        }
                    });
                });
            });
        });