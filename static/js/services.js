function toggleDescriptions(isOpen, target) {
    const arrowIcon = target.querySelector('.fa-arrows-v');
    console.log(arrowIcon);
    const serviceDescriptions = target.querySelectorAll('p');
    serviceDescriptions.forEach((desc) => {
        desc.style.display = isOpen ? 'none': 'block';
    });
    if (isOpen) {
        target.classList.remove('opened');
        arrowIcon.style.transform = 'rotate(0deg)';
    } else {
        target.classList.add('opened');
        arrowIcon.style.transform = 'rotate(45deg)';
    }
}

document.addEventListener('readystatechange', (ev) => {
    if (document.readyState === 'complete') {
        const serviceItems = document.querySelectorAll('.services__item');
        serviceItems.forEach((serviceItem) => {
            serviceItem.addEventListener('click', (event) => {
                const target = event.currentTarget;
                const isOpen = target.classList.contains('opened');
                toggleDescriptions(isOpen, target);
            })
        });    
    }
});
