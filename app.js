let rounds = 0;
let playerScore = 0;
let npcScore = 0;





getComputerChoice = () => {
    let choice =  Math.floor(Math.random() *3)
    if(choice === 0){
        return 'rock'
    } else if(choice === 1){
        return 'paper'
    } else if (choice === 2){
        return  'scissors'
    }
}



let round = ( ) => {
    npcSelection = getComputerChoice();
    


    if(npcSelection === player){
        rounds++
        return 'its a draw';
    } else if (player === 'rock' && npcSelection === 'scissors') {
        rounds++
        playerScore++
        return 'Player Wins';
    } else if(player === 'rock' && npcSelection === 'paper'){
        rounds++
        npcScore++
        return 'Npc Wins'
    } else if(player === 'paper' && npcSelection === 'rock'){
        rounds++
        playerScore++
        return 'Player Wins'
    } else if(player === 'paper' && npcSelection === 'scissors'){
        rounds++
        npcScore++
        return 'NpcWins'
    } else if(player === 'scissors' && npcSelection === 'paper'){
        rounds++
        playerScore++
        return 'Player Wins'
    } else if(player === 'scissors' && npcSelection === 'rock'){
        rounds++
        npcScore++
        return 'Npc Wins'
    } else {
        return 'shit is broken'
    }

}

let game = () => {
    console.log(`round ${rounds}.` )
    console.log(round())
    console.log(`the score is ${playerScore} for the players & ${npcScore} for the Npc`)    
    

}








////////////////////////////////////////////////////////


const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
let npcpunt = document.getElementById('npcPunt')
let playpunt = document.getElementById('playPunt')
let questionImage = document.getElementById('playImage1')
let rockImage = document.getElementById('playImage2')
let paperImage = document.getElementById('playImage3')
let scissorImage = document.getElementById('playImage4')
let npcQuestionImage = document.getElementById('playImage6')
let npcRockImage = document.getElementById('playImage7')
let npcPaperImage = document.getElementById('playImage8')
let npcScissorsImage = document.getElementById('playImage9')
let roundnumba = document.getElementById('roundnumba')
player = ""





rock.addEventListener('click', e => {
    player = 'rock'
    questionImage.style.display = 'none'
    rockImage.style.display = 'block'
    paperImage.style.display = 'none'
    scissorImage.style.display = 'none'
    game()
    roundCounter()
    npcImageSelector()
    npcpunt.innerHTML = npcScore
    playpunt.innerHTML = playerScore
    fifthRound()


    
    
})

paper.addEventListener('click', e => {
    player = 'paper'
    questionImage.style.display = 'none'
    rockImage.style.display = 'none'
    paperImage.style.display = 'block'
    scissorImage.style.display = 'none'
    
    game()
    roundCounter()
    npcImageSelector()
    npcpunt.innerHTML = npcScore
    playpunt.innerHTML = playerScore
    fifthRound()


})

scissors.addEventListener('click', e => {
    player = 'scissors'
    questionImage.style.display = 'none'
    rockImage.style.display = 'none'
    paperImage.style.display = 'none'
    scissorImage.style.display = 'block'
    game()
    roundCounter()
    npcImageSelector()
    npcpunt.innerHTML = npcScore
    playpunt.innerHTML = playerScore
    fifthRound()

})


const roundCounter = () => {
    roundnumba.innerHTML = rounds
}

const npcImageSelector = () => {
    if(npcSelection === 'rock'){
        npcQuestionImage.style.display = 'none'
        npcRockImage.style.display = 'block'
        npcPaperImage.style.display = 'none'
        npcScissorsImage.style.display = 'none'
    } else if (npcSelection === 'paper'){
        npcQuestionImage.style.display = 'none'
        npcRockImage.style.display = 'none'
        npcPaperImage.style.display = 'block'
        npcScissorsImage.style.display = 'none'
    } else if(npcSelection === 'scissors') {
        npcQuestionImage.style.display = 'none'
        npcRockImage.style.display = 'none'
        npcPaperImage.style.display = 'none'
        npcScissorsImage.style.display = 'block'
    }
}

const fifthRound = ()=> {
    if(rounds === 5 && playerScore > npcScore){
        rounds = 0;
        playerScore = 0;
        npcScore = 0; 
        roundnumba.innerHTML = "0"
        npcpunt.innerHTML = '0'
        playpunt.innerHTML = '0'
        questionImage.style.display = 'block'
        npcQuestionImage.style.display = 'block'
        rockImage.style.display = 'none'
        paperImage.style.display = 'none'
        scissorImage.style.display = 'none'
        npcRockImage.style.display = 'none'
        npcPaperImage.style.display = 'none'
        npcScissorsImage.style.display = 'none'
        alert('The player won the game')
        } else if (rounds === 5 && playerScore < npcScore){
            rounds = 0;
            playerScore = 0;
            npcScore = 0; 
            roundnumba.innerHTML = "0"
            npcpunt.innerHTML = '0'
            playpunt.innerHTML = '0'
            questionImage.style.display = 'block'
            npcQuestionImage.style.display = 'block'
            rockImage.style.display = 'none'
            paperImage.style.display = 'none'
            scissorImage.style.display = 'none'
            npcRockImage.style.display = 'none'
            npcPaperImage.style.display = 'none'
            npcScissorsImage.style.display = 'none'
            alert('The NPC won the game')
 
        } else if (rounds === 5 && playerScore === npcScore){
            rounds = 0;
            playerScore = 0;
            npcScore = 0; 
            roundnumba.innerHTML = "0"
            npcpunt.innerHTML = '0'
            playpunt.innerHTML = '0'
            questionImage.style.display = 'block'
            npcQuestionImage.style.display = 'block'
            rockImage.style.display = 'none'
            paperImage.style.display = 'none'
            scissorImage.style.display = 'none'
            npcRockImage.style.display = 'none'
            npcPaperImage.style.display = 'none'
            npcScissorsImage.style.display = 'none'
            alert('its a draw')
        }
}
