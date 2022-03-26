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

const countDown = () => {
    
    setInterval(() =>{
        if (timeDisplay.innerText > 0){
            timeDisplay.innerText--
        }
    }, 1000)
}

const restart = () => {
    if (timeDisplay.innerText == 0){
        timeDisplay.innerText = 10
        clearInterval(countDown)
    }
}


target.addEventListener("click", () =>{
    if (isRunning){
        movingTarget()
        scoreDisplay.innerText ++
    }
})

