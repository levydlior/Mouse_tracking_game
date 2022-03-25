const timeDisplay= document.querySelector("#timer")
const scoreDisplay= document.querySelector("#score")
const target = document.querySelector("#target")

let isRunning = false;


const moveSideways = (min, max)=>{ 
    let number = Math.random()*(-59.4 - 0)
    return number
}
const moveUpAndDown = ()=>{ 
    let number = Math.random()*(-34.8 - 0)
    return number
}

target.addEventListener("click", () =>{
   target.style.right= moveSideways() +"rem"
   target.style.bottom= moveUpAndDown() +"rem"
})