const rulesBtn = document.getElementById("rules-btn")
const htmlBody = document.getElementById("body");
const mainEl = document.getElementById("main")
const html = document.getElementById("html");
const rulesDisplay = document.getElementById('rules-display')
const initialBackground = html.style.background;
const screenSize = window.matchMedia("(min-width: 1024px)")



// to get rules buttton to display rules for screen sizes
    rulesBtn.addEventListener("click", function(){
        if (screenSize.matches) { // If media query matches
            rulesDisplay.style.display = "grid"
        } else{
            htmlBody.style.background = "none";
            mainEl.style.display = "none"
            html.style.background = "none"
            rulesDisplay.style.display = "flex"
        } 
    
            const closeBtn = document.getElementById('close-btn');
            closeBtn.addEventListener("click", function(){
            html.style.background = initialBackground;
            mainEl.style.display = "block"
            rulesDisplay.style.display = "none"
    
       
    })

})





const choicesArr = ["rock", "paper", "scissors", "spock", "lizard"]
let choicesContainer = document.getElementById("choices-container")
let playerScore = document.getElementById("player-score")
const btns = document.querySelectorAll('.background-img')
let playerChoice = ""
let computerChoice = generateComputerChoice()

let playerScorePoint = 0

let fromLocalStorage = JSON.parse(localStorage.getItem("Score")) 
playerScore.textContent =  fromLocalStorage 
const playAgainBtn = document.getElementById("play-again-btn")
const playAgain = document.getElementById("play-again")
playerScorePoint = fromLocalStorage

function updateScoreBoard(){
    if(result==="WIN"){
        playerScorePoint ++
        playerScore.textContent = playerScorePoint
        document.getElementById("win-or-lose").textContent = "YOU WIN" 
    } else if(result==="LOSE") {
        if(playerScorePoint > 0){
            playerScorePoint --
            playerScore.textContent = playerScorePoint
            document.getElementById("win-or-lose").textContent = "YOU LOSE"
        } else{
            document.getElementById("win-or-lose").textContent = "YOU LOSE"
        }
   
    } else {
        playerScorePoint === playerScorePoint
           playerScore.textContent = playerScorePoint
           document.getElementById("win-or-lose").textContent = "TIE"
           } 
    playAgainBtn.style.display = "block"
    rulesBtn.style.marginTop = "-10px"
    localStorage.setItem("Score", JSON.stringify(playerScorePoint))

}



// setting game rules to determine winner
function generateComputerChoice(){
     const randomIndex = Math.floor(Math.random() * choicesArr.length);
     return choicesArr[randomIndex];
}

// To determine winner
    let result = ""

function determineWinnner(playerChoice, computerChoice){

    if (playerChoice === computerChoice){
        result = "TIE"
    } else if((playerChoice=== "rock" && (computerChoice===  "scissors" || computerChoice === "lizard"))||
      (playerChoice=== "paper" && (computerChoice=== "rock" || computerChoice === "spock")) ||
      (playerChoice=== "scissors" && (computerChoice=== "paper" || computerChoice === "lizard")) ||
      (playerChoice=== "lizard" && (computerChoice=== "spock" || computerChoice === "paper")) ||
      (playerChoice=== "spock" && (computerChoice=== "rock" || computerChoice === "scissors"))){
          result = "WIN"
      }   else {
        result = "LOSE"
      } 
      return result
    }


// updating score



    // To show the results when player selects a button
const displayContainer = document.getElementById("display-container")

if (screenSize.matches) { // If media query matches
    function display(){
    determineWinnner(playerChoice, computerChoice)
    choicesContainer.style.display = "none"
    displayContainer.innerHTML = `
        
        <div id="my-div">
            <p id="text">YOU PICKED</p> 
            <button id="${playerChoice}"></button>
        </div>
        <div id="space">
            <p id="text">THE HOUSE PICKED</p>
            <button></button>
        </div>
    `
    // document.getElementById("my-div").classList.add("my-div")
    const displayDiv = document.getElementById("display-div")
    setTimeout(function(){
        document.getElementById("space").style.display = "none"
        displayContainer.innerHTML += `
        <div>
            <p id="text">THE HOUSE PICKED</p>
            <button id="${computerChoice}"></button>
        </div>
        `
        setTimeout(function(){
            updateScoreBoard()
            displayContainer.style.gap = "352px"
            playAgain.style.marginTop = "-200px"
            rulesBtn.style.margin = "200px -64px auto auto"
        }, 2500)
            

    },3000)
    }
        } else{   //phone layout
        function display(){
        determineWinnner(playerChoice, computerChoice)
        choicesContainer.style.display = "none"
        displayContainer.innerHTML = `
        <div>
            <button id="${playerChoice}"></button>
            <p id="text">YOU PICKED</p> 
        </div>
        <div id="space">
            <button></button>
            <p id="text">THE HOUSE PICKED</p>
        </div>
      
    `
    const displayDiv = document.getElementById("display-div")
    setTimeout(function(){
        document.getElementById("space").style.display = "none"
        displayContainer.innerHTML += `
        <div>
            <button id="${computerChoice}"></button>
            <p id="text">THE HOUSE PICKED</p>
        </div>
        `
        setTimeout(function(){
            updateScoreBoard()
        }, 2500)
            

    },3000)
    
    
        } 
        
    

    }



btns.forEach(btn => {

   btn.addEventListener('click', event => {
    //    play()
       playerChoice = event.target.value 
       computerChoice = generateComputerChoice()
       

       display()
        console.log(localStorage.getItem("Score"))
       
   })

})

function resetGame(){
    
           choicesContainer.style.display = "flex"
            displayContainer.innerHTML = " "
            document.getElementById("win-or-lose").innerHTML = " "
            
            if (choicesContainer.style.display==="flex"){
                playAgainBtn.style.display = "none"
            }
            rulesBtn.style.marginTop = "150px"
}

playAgainBtn.addEventListener("click", function(){
    
    
       resetGame()
       
       

    
})


function play() {
        const audio = new Audio("audios/button-124476.mp3")
        audio.play();
        
        
      }
