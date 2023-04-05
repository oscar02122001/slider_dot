const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"
];

let leftEl = document.getElementById("left-el")
let rightEl = document.getElementById("right-el")
let inputEl = document.getElementById("input-el")
let inputText = document.getElementById("input-text")



function generateBtn() {
    let passwordLenght = inputEl.value
    let password = ""
    let secondPassword = ""

    if (inputEl.value > 16) {
        inputText.textContent = "Please write less then number of 16 "
        rightEl.textContent = ""
        leftEl.textContent = ""
    } else if (inputEl.value < 4) {
        inputText.textContent = "Please write more then number of 4 "
        rightEl.textContent = ""
        leftEl.textContent = ""
    } else {
        inputText.textContent = ""
        for (let i = 0; i < passwordLenght; i++) {
            let randomEl = Math.floor(Math.random() * characters.length)
            let secondRandom = Math.floor(Math.random() * characters.length)
            password += characters[randomEl]
            secondPassword += characters[secondRandom]

        }

        // inputEl.textContent = passwordLength
        leftEl.textContent = password
        rightEl.textContent = secondPassword
    }


}