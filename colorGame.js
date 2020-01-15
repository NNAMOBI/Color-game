
let colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255,0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 135)",
    "rgb(23, 255, 148)"
]

let squareBox = document.querySelectorAll('.square')

for(i = 0; i < squareBox.length; i++){

    squareBox[i].style.backgroundColor = colors[i]
}
