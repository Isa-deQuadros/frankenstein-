/*Objectives 
1) render all toy-images to scroll bar on top of page 
2) render the 2nd toy to the page 
3) render the 5th toy to the page
4) render the 8th toy to the page 
5) submit new toy (image, name)

Advanced

1) make toy additions persist
2) click on toy- menu image and display toy in "toy-detail"
*/

let addToy = false;

document.addEventListener("DOMContentLoaded", () => {



    const addBtn = document.querySelector("#new-toy-btn");
    const toyFormContainer = document.querySelector(".container");
    addBtn.addEventListener("click", () => {
      // hide & seek with the form
      addToy = !addToy;
      if (addToy) {
        toyFormContainer.style.display = "block";
      } else {
        toyFormContainer.style.display = "none";
      }
    });

})