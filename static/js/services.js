document.addEventListener('readystatechange', (ev) => {
    if (document.readyState === 'complete') {
        const serviceItems = document.querySelectorAll('.services__item');
        serviceItems.forEach((serviceItem) => {
            serviceItem.addEventListener('click', (event) => {
                if (event.currentTarget.classList.contains('opened')) {
                    event.currentTarget.classList.remove('opened');
                } else {
                    event.currentTarget.classList.add('opened');
                }
            })
        });    
    }
});
