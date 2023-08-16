//create constants
const bigContainer = document.querySelector('.big-container');
const generatorButton = document.querySelector('.generator');

//create functions

//this function is a functional mess
function createEtchDivs() {
     let etchDivNumber = parseInt(prompt("Enter desired number of squares per side (1-100): "));
     if (etchDivNumber > 100 || etchDivNumber < 1) {
          alert("Invalid input. Refresh the page.");
     } else {
          for (i = 0; i < etchDivNumber**2; i++) {
               let etchDiv = document.createElement('div');
               let etchDivWidth = 600/(etchDivNumber);
               let etchDivHeight = etchDivWidth;
               const widthHeightAttribute = document.createAttribute("style");
               widthHeightAttribute.value = `width: ${etchDivWidth}px; height: ${etchDivHeight}px;`;
               etchDiv.setAttributeNode(widthHeightAttribute);
               bigContainer.appendChild(etchDiv);
               etchDiv.classList.add('etch-div'); 
               etchDiv.addEventListener('mouseover', () => {
                    etchDiv.classList.add('hover');
               })
          }          
     }
     
};

generatorButton.addEventListener('click', () => {
     createEtchDivs();
})


