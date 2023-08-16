const bigContainer = document.querySelector('.big-container');


function createEtchDivs() {
    for (i = 0; i < 16; i++) {
        const etchDiv = document.createElement('div');
        etchDiv.classList.add('etch-div');
        bigContainer.appendChild(etchDiv);
    }
}

createEtchDivs();