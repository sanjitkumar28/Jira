const addButton = document.querySelector(".add-btn");
const modalConatiner = document.querySelector(".modal-container");
const textAreaContainer = document.querySelector(".text-area-container");
const mainContainer = document.querySelector(".main-container");
let modalText;
let priorityColorValue;
let isModalOpen = false;
let ticketsArr = [];
// let uniqueId=shortid();
// console.log(uniqueId);
addButton.addEventListener("click", function () {
  if (!isModalOpen) {
    modalConatiner.style.display = "flex";
  } else {
    modalConatiner.style.display = "none";
  }
  isModalOpen = !isModalOpen;
});

const allPriorityColor = document.querySelectorAll(".priority-color");
allPriorityColor.forEach(function (priorityColor) {
  priorityColor.addEventListener("click", function () {
    allPriorityColor.forEach(function (Color) {
      Color.classList.remove("active");
    });
    priorityColor.classList.add("active");
    priorityColorValue = priorityColor.classList[0];
  });
});

modalConatiner.addEventListener("keydown", function (event) {
  if (event.key == "Shift") {
    modalText = textAreaContainer.value;
    createTicket(priorityColorValue, modalText);
    modalConatiner.style.display = "none";
    isModalOpen = false;
    textAreaContainer.value = "";
    allPriorityColor.forEach(function (color) {
      color.classList.remove("active");
    });
  }
});

function createTicket(priorityColorValue, modalText, ticketID) {
  const id = ticketID || shortid();
  const ticketContainerDiv = document.createElement("div");
  ticketContainerDiv.setAttribute("class", "ticket-container");
  ticketContainerDiv.innerHTML = `
    <div class="ticket-color ${priorityColorValue}"></div>
    <div class="ticket-id">${id}</div>
    <div class="task-area">${modalText}</div>`;
  mainContainer.appendChild(ticketContainerDiv);
  if (!ticketID) {
    ticketsArr.push({ priorityColorValue, modalText, ticketID: id });
    localStorage.setItem("tickets", JSON.stringify(ticketsArr));
  }
}

if (localStorage.getItem("tickets")) {
  const ticketsArrCopy = JSON.parse(localStorage.getItem("tickets"));
  ticketsArrCopy.forEach(function (ticket) {
    createTicket(ticket.priorityColorValue, ticket.modalText, ticket.ticketID);
  });
}
