const container = document.querySelector('#container');

let totalSquares = 256;


function createDivs() {
    for (var i = 0; i < totalSquares; i++) {
        let div = document.createElement('div'); 
        div.setAttribute("class", "squareDiv");
        container.appendChild(div);
    }
    let squareDiv = document.querySelectorAll(".squareDiv");

    squareDiv.forEach((squareDiv) => {
        squareDiv.addEventListener('mouseover', () => {
            squareDiv.setAttribute('class', 'trail');
        });
    });
}

createDivs();

let startOverButton = document.querySelectorAll('#start');

startOverButton.forEach((button) => {
    button.addEventListener('click', () => {
        while (container.hasChildNodes()) {
            container.removeChild(container.lastChild);
        };
        customGrid();
        });
        });

function customGrid() {
    let squarePerSide = prompt('How many squares per side?', 16);
    document.documentElement.style.setProperty("--sideNum", squarePerSide);
    totalSquares = squarePerSide * squarePerSide;
    createDivs();
}