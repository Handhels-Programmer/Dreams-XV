        const btnMenu = document.getElementById('btnMenu');
        const menuMovil = document.getElementById('menuMovil');
        let menuAbierto = false;

        btnMenu.addEventListener('click', () => {
            menuAbierto = !menuAbierto;
            if (menuAbierto) {
                menuMovil.classList.remove('opacity-0', 'pointer-events-none');
                btnMenu.innerHTML = '<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"></path></svg>';
            } else {
                menuMovil.classList.add('opacity-0', 'pointer-events-none');
                btnMenu.innerHTML = '<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"></path></svg>';
            }
        });