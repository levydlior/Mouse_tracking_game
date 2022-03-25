const timeDisplay= document.querySelector("#timer")
const scoreDisplay= document.querySelector("#score")
const target = document.querySelector("#target")

let isRunning = false;


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
    if (timeDisplay.innerText === 0){
        isRunning === false
    }
    if (timeDisplay.innerText === 0 && isRunning === false){
        timeDisplay.innerText = 10
    }
}

target.addEventListener("click", () =>{
    isRunning = true
    if (isRunning){
        movingTarget()
        countDown()
        console.log("isRunning?", isRunning)
    }else{
        null
    }
})

