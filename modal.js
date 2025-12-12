const modal = document.querySelector(".backdrop");
const openModalButton = document.querySelector(".modal-button-open");
const closeModalButton = document.querySelector(".modal-button-close");

const toggleModal = () => modal.classList.toggle("is-hidden");

openModalButton.addEventListener("click", toggleModal);
closeModalButton.addEventListener("click", toggleModal);
