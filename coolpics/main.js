const gallery = document.querySelector('#content');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

const menuBtn = document.querySelector('#menu')
const nav = document.querySelector('nav')

// Event listener for opening the modal
gallery.addEventListener('click', openModal);

// Event listener for opening menu
menuBtn.addEventListener('click', openMenu)

function openMenu(e) {
    if (nav.style.display == 'none') {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }

}

function openModal(e) {
    
    // Code to show modal  - Use event parameter 'e'  
    // console.log(typeof e.target.src);
    modalImage.src = e.target.src;

    modal.showModal();
}
// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
    modalImage.src = "";
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
        modalImage.src = "";
    }
});