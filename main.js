let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let newGame = document.getElementById("new-game")

let homeCount = 0
let guestCount = 0

function home1(){
    homeCount +=1
    homeScore.textContent = homeCount
}
function home2(){
    homeCount +=2
    homeScore.textContent = homeCount
}
function home3(){
    homeCount +=3
    homeScore.textContent = homeCount
}

function guest1(){
    guestCount +=1
    guestScore.textContent = guestCount
}
function guest2(){
    guestCount +=2
    guestScore.textContent = guestCount
}
function guest3(){
    guestCount +=3
    guestScore.textContent = guestCount
}

function newgame(){
    guestCount = 0
    homeCount = 0
    guestScore.textContent = guestCount 
    homeScore.textContent = homeCount
}