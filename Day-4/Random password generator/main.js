
const Password= document.getElementById("password")

function genPassword() {

    const char = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const passwordLength = 16

    let password ="" ;

    for (let length = 0; length <= passwordLength; length++) {

        let randomNumber = Math.floor(Math.random() * char.length)

        password += char.substring(randomNumber,randomNumber +1)
    }

    document.getElementById("password").value = password;


}

