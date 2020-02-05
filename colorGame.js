 
 // Instead of creating an array of colors let us generate random numbers and push it inside an array
// let colors = [
//     "rgb(255, 0, 0)",
//     "rgb(255, 255,0)",
//     "rgb(0, 255, 255)",
//     "rgb(0, 0, 255)",
//     "rgb(255, 0, 135)",
//     "rgb(23, 255, 148)"
// ]
let numOfSquares = 6
let colors = generateRandom(numOfSquares)

// select the button tag
let button = document.querySelector("button")

let resetButton = document.getElementById("resetButton")
resetButton.style.color = 'red'


// manipulate the button to add the css selector
button.classList.add(".button")

let squareBox = document.querySelectorAll('.square')
let h1 = document.querySelector('h1')
let easyBtn = document.querySelector("#easyBtn")
let hardBtn = document.querySelector("#hardBtn")


// call the pickedCol function and assign it to the pickedColor
let pickedColor = pickedCol();


let displayMessage = document.getElementById("displayMessage")

let colorToBeDisplayed = document.getElementById("colorDisplay")
 
// Assign the h1 the textContent of the looped array of colors,whichever is selected


resetButton.addEventListener('click', function(){

    resetButton.textContent = "New colors"
    displayMessage.textContent = "Message"
    // // generate random colors
    colors = generateRandom(numOfSquares)
    // //pick a random color
    pickedColor = pickedCol();
    // //let the display message equal to picked color so you can confirm when there is doubt 
    
    colorToBeDisplayed.textContent = pickedColor 
    
    for( i = 0; i < squareBox.length; i++){
        
        // change the color of the squares
        squareBox[i].style.background = colors[i]
        
        // colorToBeDisplayed.textContent = pickedColor
 
    }
    
    
    h1.style.background = "#232323"

  
    
   
    
})

easyBtn.addEventListener("click", function(){
    // alert("easy button clicked")
    easyBtn.classList.add('select')
    hardBtn.classList.remove('select')

    //pseudo-code: we want only the three colors to appear in the guessing game, so lets do this
    // generate 3 random colors
    numOfSquares = 3
    colors = generateRandom(numOfSquares)
    // pick a color that the users will guess
    pickedColor = pickedCol()
    // let get = document.querySelectorAll('.square')
    for(i = 0; i < squareBox.length; i++){
        if(colors[i]){
    squareBox[i].style.background = colors[i]
    }else{
        squareBox[i].style.display = "none"
    }
}
})

hardBtn.addEventListener("click",function(){
    // alert("hard button clicked")
    hardBtn.classList.add('select')
    easyBtn.classList.remove('select')

    //pseudo-code: we want it to generate the initial 6 colors to appear in the guessing game, so lets do this
    // generate 3 random colors
    numOfSquares = 6
    colors = generateRandom(numOfSquares)
    // pick a color that the users will guess
    pickedColor = pickedCol()
    // let get = document.querySelectorAll('.square')
    for(i = 0; i < squareBox.length; i++){
        
    squareBox[i].style.background = colors[i]
    
        squareBox[i].style.display = "block"
    
}
})


colorToBeDisplayed.textContent = pickedColor 


// function runLoopForSquares(){
    for(i = 0; i < squareBox.length; i++){
     
        // add initial colors to squares 
        squareBox[i].style.background = colors[i]

        colorToBeDisplayed.textContent = pickedColor


    
    
    // add click events and handlers
    squareBox[i].addEventListener('click', function(){
        
        // 
    
        var clickedColor = this.style.background;
        console.log(this.style.background)
        console.log(pickedColor)
        // console.log(clickedColor)
    
        // console.log(`${clickedColor}, ${pickedColor}`)
        if(clickedColor === pickedColor){
    
          
            changeAllSquares(clickedColor , function(){
    
                displayMessage.textContent = "correct"
                displayMessage.style.color = "black"
                h1.style.background = clickedColor;
                resetButton.textContent = "Play Again?"
                
                
                
            })
            
            
        }else {
            // alert("WRONG CHOICE")
            this.style.backgroundColor = "#232323";
            displayMessage.textContent = "try again"
            displayMessage.style.color = "black"
        }
    
        
    
        
    
        
    })
}
// }
// runLoopForSquares()

function changeAllSquares(color, fn){
    for(i = 0; i< squareBox.length; i++){
        squareBox[i].style.background = color;
        fn()
    }
}




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
   arr.push(randomColor())
}
// 
// lastly return the arr

return arr

}

function randomColor(){
    //pick a random color from rgb using Math.floor(Math.random() * 255 + 1)
    //pick red;
    let r = Math.floor(Math.random() * 255 + 1)
    // console.log(r)
    //pick green;
    let g = Math.floor(Math.random() * 255 + 1)
    // console.log(g)
    //pick blue;
    let b = Math.floor(Math.random() * 255 + 1)
//   console.log(b)    
//   console.log(`rgb(${r},${g},${b})`)
return `rgb(${r}, ${g}, ${b})`
}


