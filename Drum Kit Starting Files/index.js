
const drumButtons = document.querySelectorAll(".drum")

function buttonPressed(key) {
    switch (key) {
        case "w":
            tom1 = new Audio('./sounds/tom-1.mp3')
            tom1.play()  
            break;

        case "a":
            tom2 = new Audio('./sounds/tom-2.mp3')
            tom2.play()  
            break;

        case "s":
            tom3 = new Audio('./sounds/tom-3.mp3')
            tom3.play()  
            break;                
        
        case "d":
            tom4 = new Audio('./sounds/tom-4.mp3')
            tom4.play()  
            break;
        
        case "j":
            crash = new Audio('./sounds/crash.mp3')
            crash.play()  
            break;

        case "k":
            kick = new Audio('./sounds/kick-bass.mp3')
            kick.play()  
            break;
        
        case "l":
            snare = new Audio('./sounds/snare.mp3')
            snare.play()  
            break;
        default:
        break;
    }
}

function buttonAnimation(currentKey) {

    const activeButton = document.querySelector("." + currentKey)
    activeButton.classList.add("pressed")
    setTimeout(() => {
        activeButton.classList.remove("pressed")
    }, '100')
    


}

for (let i = 0; i < drumButtons.length; i++) {
    drumButtons[i].addEventListener("click", function () {

        const buttonLetter = this.innerHTML
        buttonPressed(buttonLetter)
        buttonAnimation(buttonLetter)
    })
}

for(let i=0; i <drumButtons.length; i++) {
    document.addEventListener('keydown', function(event){
        buttonPressed(event.key)
        buttonAnimation(event.key)
    })
}


