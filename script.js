const addButton=document.querySelector(".add-btn");
const modalConatiner=document.querySelector(".modal-container");

let isModalOpen=false;
addButton.addEventListener("click",function(){
      if(!isModalOpen){
            modalConatiner.style.display="flex";
      }
      else{
        modalConatiner.style.display="none";
      }
      isModalOpen=!isModalOpen;
})

const allPriorityColor=document.querySelectorAll(".priority-color");
allPriorityColor.forEach(function(priorityColor){
    priorityColor.addEventListener("click",function(){
        allPriorityColor.forEach(function(Color){
            Color.classList.remove("active");
        })
        priorityColor.classList.add("active");
    })
})

