const modal = document.querySelector('.modal');
const modalBtn = document.querySelector('.modalBtn');
const closeModalBtn = document.querySelector('.closeModalBtn');




const openModal = () => {
    modal.style.visibility = "visible";
}

const closeModal = () => {
    modal.style.visibility = "hidden";
}

modalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal)