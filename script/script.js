let btnOpenModal = document.querySelector("#open-modal");
let modal = document.querySelector(".modal-wrapper");

btnOpenModal.addEventListener("click", openModal);

function openModal() {
  modal.classList.remove("invisible");
}

document.addEventListener("keydown", function (event) {
  console.log(event);
  if (event.code == "Escape") {
    modal.classList.add("invisible");
  }
});
