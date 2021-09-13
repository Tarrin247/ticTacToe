let cells = document.querySelectorAll('.row > div');

// console.log(cells);
// logs all 9 cells in the .row > div to console by name from html

// cells [0].addEventListener

for (let i = 0; i < cells.length; i++) {
    // console.log(cells[i]);
    // verify that cells array 0-8
    // cells[i] represents the html element. 1st argument is string. Second is a function to run.
    cells[i].addEventListener('click', cellClicked);
    // cellClicked no parenthesis means not calling it right away. When the click occurs it will run the function and not including parenthesis is how you make that work.

}

function cellClicked () { 
    // When the click occurs the function will run.
    // console.log('IT WORKED!');
    //**************** */
    // logs a PointerEvent with curly braces indicates js object which works on '.notation' properties. See properties in drop down. 
    console.log(event); 
}

