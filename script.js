const container = document.querySelector('#container');

function createDivs() {
    for (var i = 0; i < 256; i++) {
        let div = document.createElement('div'); 
        div.setAttribute("class", "squareDiv");
        container.appendChild(div);

    }
}
createDivs();

let squareDiv = document.querySelectorAll(".squareDiv")

squareDiv.forEach((squareDiv) => {
    squareDiv.addEventListener('mouseover', () => {
        squareDiv.setAttribute('class', 'trail');
    });
    });

function customGrid() {

}

let button = document.querySelectorAll("button") 

button.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(squareDiv);
        squareDiv.forEach((squareDiv) => {
            squareDiv.setAttribute('class', 'squareDiv')});
        customGrid();
        });
        });