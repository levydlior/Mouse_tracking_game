const timeDisplay= document.querySelector("#timer")
const scoreDisplay= document.querySelector("#score")
const target = document.querySelector("#target")
const startGame = document.querySelector("#start")


let isRunning = false;

const runGame = () => {
    if (!isRunning){
        isRunning = true
        startGame.innerText = "Restart"
        countDown()
    }
}


startGame.addEventListener('click', ()=>{
    runGame()  
})


const targetLocationGenerator = (min, max)=>{ 
    let number = Math.random()*(min - max)
    return number
}
const movingTarget = () => {
    target.style.right= targetLocationGenerator(-59.4, - 0) +"rem"
    target.style.bottom= targetLocationGenerator(-34.8, - 0) +"rem"
}

const increaseDifficulty = ()=> {
    if (scoreDisplay.innerText < 5){
        timeDisplay.innerText = 10
    }else if (scoreDisplay.innerText < 10){
        timeDisplay.innerText = 8
    }else if (scoreDisplay.innerText < 15){
        timeDisplay.innerText = 5
    }else if (scoreDisplay.innerText < 20){
        timeDisplay.innerText = 3
    }else if (scoreDisplay.innerText < 25){
        timeDisplay.innerText = 1
    }
 }


const countDown = () => {
    const countDownTimer = setInterval(() =>{
        if (timeDisplay.innerText > 0){
            timeDisplay.innerText--
        }else if (timeDisplay.innerText === "0"){
            isRunning = false
            console.log("gameover", isRunning)
            clearInterval(countDownTimer)
    }
    }, 1000);
}


target.addEventListener("click", () =>{
    if (isRunning){
        // movingTarget()
        scoreDisplay.innerText ++
        increaseDifficulty()
        }
})

