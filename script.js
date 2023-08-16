//create constants
const bigContainer = document.querySelector('.big-container');


//create functions

//something about this not working, divs create but do not respond to hover
for (i = 0; i < 256; i++) {
     let etchDiv = document.createElement('div');
     bigContainer.appendChild(etchDiv);
     etchDiv.classList.add('etch-div'); 
     etchDiv.addEventListener('mouseover', () => {
          etchDiv.classList.add('hover');
     })
}

//create event listeners


//call functions
//createEtchDivs();