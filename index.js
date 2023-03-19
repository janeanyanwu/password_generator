let passwordLength = 15
let generatedPasswordOne = document.getElementById("generated-password-one")
let generatedPasswordTwo = document.getElementById("generated-password-two")
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
"Q","R","S","T",
"U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l",
"m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", 
"4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")",
"_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}
function generateRandomPassword() {
    let passwordEl = ""
    for (let i = 0; i < passwordLength; i++) {
        passwordEl += getRandomCharacter()         
    }
    return passwordEl
}

const handleClick = () => {
 generatedPasswordOne.textContent = generateRandomPassword()
 generatedPasswordTwo.textContent = generateRandomPassword()
}





