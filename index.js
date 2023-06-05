//document.getElementById("count-el").innerText = 5

//let firstBatch = 5
//let secondBatch = 7
//let count = firstBatch + secondBatch
//console.log(count)

//let myAge = 23
//let humanDogRatio = 7
//let myDogAge = myAge * humanDogRatio
//console.log(myDogAge)

//let bonusPoints = 50
//bonusPoints = bonusPoints + 50
//bonusPoints = bonusPoints - 75
//bonusPoints = bonusPoints + 45
//console.log(bonusPoints)

//function increment() {
//    console.log("The button was clicked.")    
//}

//function countdown() {
//    console.log(5)
//    console.log(4)
//    console.log(3)
//    console.log(2)
//    console.log(1)
//}

//countdown() //setting up race
//go
//players are running the race
//race is finished!

//countdown() //new race setting up

//function log_num() {
//    console.log(42)
//}

//log_num()

//let lap1 = 34
//let lap2 = 33
//let lap3 = 36

//function lap_sum() {
//    let laps = lap1 + lap2 + lap3;
//    console.log(laps)
//}

//lap_sum()

//let lapsCompleted = 0

//function lapped() {
//    lapsCompleted = lapsCompleted + 1
//}

//lapped()
//lapped()
//lapped()

//console.log(lapsCompleted)
let count = 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

console.log(countEl)

function increment() {
    //console.log("clicked")
    count += 1
    countEl.innerText = count
    //document.getElementById("count-el").innerText = 5    
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    console.log(count)

}

//let username = "per"
//let message = "You have three new notifications."

//let messageToUser = message +", "+ username +"!"
//console.log(messageToUser)

//let name = "Binoy"
//let greeting = "Hi, my name is "

//let myGreeting = greeting + name +"."
//console.log(myGreeting)


let welcomeEl = document.getElementById("welcome-el")
let name = "Binoy"
let greeting = "Welcome to the page"

let displayp = greeting + ", " + name + "."
document.getElementById("welcome-el").innerText = displayp

welcomeEl.innerText += "👋🏻"
























































