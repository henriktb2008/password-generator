const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

let passwordContainerEl = document.getElementById("password-container")
let passwordSliderEl = document.getElementById("password-slider")

let passwordAmout = 4

generatePasswords()

passwordSliderEl.oninput = function() {
    passwordAmout = this.value * 2
}

function generatePasswords() {
    while (passwordContainerEl.firstChild) {
        passwordContainerEl.removeChild(passwordContainerEl.lastChild)
    }
    for (let i = 0; i < passwordAmout; i++) {
        addPassword(15)
    }
}

function addPassword(passwordLength) {
	const newPassword = document.createElement("p")
    newPassword.classList.add("password")
    newPassword.classList.add("highlighted")

    for (let i = 0; i < passwordLength; i++) {
        newPassword.textContent += characters[Math.floor(Math.random() * characters.length)]
    }
	passwordContainerEl.appendChild(newPassword)
}