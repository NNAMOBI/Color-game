 
 // Instead of creating an array of colors let us generate random numbers and push it inside an array
// let colors = [
//     "rgb(255, 0, 0)",
//     "rgb(255, 255,0)",
//     "rgb(0, 255, 255)",
//     "rgb(0, 0, 255)",
//     "rgb(255, 0, 135)",
//     "rgb(23, 255, 148)"
// ]

let colors = generateRandom(6)

// select the button tag
let button = document.querySelector("button")

// manipulate the button to add the css selector
button.classList.add(".button")

let squareBox = document.querySelectorAll('.square')

// call the pickedCol function and assign it to the pickedColor
pickedColor = pickedCol();

// displayedMessage = true;
let displayMessage = document.getElementById("displayMessage")

let colorToBeDisplayed = document.getElementById("colorDisplay")
 
// Assign the h1 the textContent of the looped array of colors,whichever is selected
colorToBeDisplayed.textContent = pickedColor

for(i = 0; i < squareBox.length; i++){
     
    // add initial colors to squares 
    squareBox[i].style.backgroundColor = colors[i]

// add click events and handlers
squareBox[i].addEventListener('click', function(){
    
    // alert(this.style.backgroundColor)
    let clickedColor = this.style.backgroundColor;
    if(clickedColor === pickedColor ){

        changeAllSquares(clickedColor , function(){

            displayMessage.textContent = "correct"
            displayMessage.style.color = "white"
            // displayMessage = false
            
            
        })
        
        
    }else {
        // alert("WRONG CHOICE")
        this.style.backgroundColor = "#232323";
        displayMessage.textContent = "try again"
        displayMessage.style.color = "white"
    }

    function changeAllSquares(color, fn){
        for(i = 0; i<= squareBox.length; i++){
            squareBox[i].style.backgroundColor = color;
            fn()
        }
    }

    

    // function reset(){


    //     displayMessage = true;
    // }
})


}

// button.addEventListener("click", function(){
//     reset()
// })

function pickedCol(){
    let randomCol = Math.floor(Math.random() * colors.length)
    // for(i = 0; i< colors.length; i++){
   return colors[randomCol]

    // }
}

function generateRandom(num){
// make an empty array
let arr = []
// repeat the colors num times
for( i = 0 ; i< num ; i++){
   // generate random (num) colors and push into the empty array 
}
// 
// lastly return the arr

return arr

}

function randomColor(){
    //pick a random color from rgb using Math.floor(Math.random() * 255 + 1)
    //pick red;
    let r = Math.floor(Math.random() * 255 + 1)
    console.log(r)
    //pick green;
    let g = Math.floor(Math.random() * 255 + 1)
    console.log(g)
    //pick blue;
    let b = Math.floor(Math.random() * 255 + 1)
  console.log(b)    
//   console.log(`rgb(${r},${g},${b})`)
return(`rgb(${r},${g},${b})`)
}
