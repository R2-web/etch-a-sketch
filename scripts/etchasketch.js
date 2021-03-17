
createPanel();

function createPanel() {
    const container = document.querySelector("#container");
    container.classList.add("grid");
    addDivs(256);
    let blocks = document.querySelectorAll("#block"); /*ID set in addDivs */
    blocks.forEach(element => element.addEventListener("mouseover", function(){element.style.backgroundColor = "red" }));
}

function addDivs(number) {
    for(i=1; i <= number; i++) {
        x = document.createElement("div");
        x.setAttribute("id", "block");
//        x.textContent = "x"; (this was just to test the grid)
        container.appendChild(x); 
        }
} 

function clearBlocks() {
    let blocks = document.querySelectorAll("#block");
    blocks.forEach(element => element.style.backgroundColor = "beige");
        }

function newPanel() {
    squares = prompt("How many square per side");
    if (squares > 100) {
        alert("Your panel must have less than 100 squares per side!")
    }
    
    else {
    console.log(squares);
    document.querySelector("#container").innerHTML = ""; /*Clears container */
    
    container.style.gridTemplateColumns = "repeat(" + squares +", auto)";
    container.style.gridTemplateRows = "repeat(" + squares +", auto)";

    addDivs(squares*squares);
    let blocks = document.querySelectorAll("#block");
    //blocks.forEach(element => element.addEventListener("mouseover", function(){element.style.backgroundColor = "red"}));  
    blocks.forEach(element => element.addEventListener("mouseover", function()
                {element.style.backgroundColor = anycolor()}));
  }
}        

function anycolor() {
    const colour = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    return colour.toString();
}