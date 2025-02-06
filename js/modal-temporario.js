const btnModal = document.querySelector('.btn-modal')

if (!sessionStorage.getItem('modalVisto')) {
    const modal = document.querySelector('.modal-temporario')    

    modal.style.display = 'flex'
}

btnModal.addEventListener('click', () => {
    const modal = document.querySelector('.modal-temporario')

    modal.style.display = 'none';
    sessionStorage.setItem('modalVisto', 'true');
})