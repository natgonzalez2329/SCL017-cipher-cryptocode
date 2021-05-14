import cipher from './cipher.js';

console.log(cipher);

const homeTab = document.getElementById("home-tab");
const aboutTab = document.getElementById("about-tab");
const contactTab = document.getElementById("contact-tab");
const cipherEncrypt = document.getElementById("cipher-encrypt");

homeTab.style.display = "block";
aboutTab.style.display = "none";
contactTab.style.display = "none";
cipherEncrypt.style.display = "block";

const btnhome = document.getElementById("home");
btnhome.addEventListener("click", () => {
    homeTab.style.display = "block";
    aboutTab.style.display = "none";
    contactTab.style.display = "none";
    cipherEncrypt.style.display = "block";
});

const btnabout = document.getElementById("about");
btnabout.addEventListener("click", () => {
    aboutTab.style.display = "block";
    homeTab.style.display = "none";
    contactTab.style.display = "none";
    cipherEncrypt.style.display = "none";
});

const btncontact = document.getElementById("contact");
btncontact.addEventListener("click", () => {
    contactTab.style.display = "block";
    homeTab.style.display = "none";
    aboutTab.style.display = "none";
    cipherEncrypt.style.display = "none";
});
 

/*const submit = e => {
    e.preventDefault();
    cryptogram.innerHTML = "";
    shiftMessage();//donde se ejecuta el mensaje original
  }

  encryptInput.onsubmit = submit;*/


  //CIPHER
  const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
      const encryptInputMessage = document.getElementById("encrypt-input_message");
      const encryptInput = document.getElementById("encrypt-input");
      const cryptogram = document.getElementById("cryptogram");
      const cryptogramInputResult = document.getElementById("cryptogram-input_result");
      const changeInputOffset = document.getElementById("change-input_offset");
      const btnEncode = document.getElementById("btnEncode");
      const btnDecode = document.getElementById("btnDecode");
      


    encryptInputMessage.addEventListener("keyup", () =>{
        encryptInputMessage.value = encryptInputMessage.value.toUpperCase();
    });

    btnEncode.addEventListener("click", () =>{
        const textMessage = encryptInputMessage.value;
        const changeOffset = changeInputOffset.value;
        cryptogramInputResult.value = encodeText(textMessage,changeOffset);
    });

    btnDecode.addEventListener("click", () =>{
        const textMessage = encryptInputMessage.value;
        const changeOffset = changeInputOffset.value;
        cryptogramInputResult.value = decodeText(textMessage,changeOffset);
    });

    //function to encode the textMessage by the chengeOffset to get the textResult-this is a new var to put-
    const encodeText = (textMessage,changeOffset) =>{
        let textResult = "";
        const backToAlphabetM;// declarar variable afuera, si no se pone opaca.

        for (let i = 0; i < textMessage.length; i++) {
            const codeAscii = textMessage[i].charCodeAt();
            if (codeAscii != alphabet[i].charCodeAt()) {
                textResult += String.fromCharCode(codeAscii);
            }

            if(codeAscii >= 65 && codeAscii <= 90) {
                console.log(codeAscii);
                backToAlphabetM = (codeAscii - 65 + changeOffset);
                while(backToAlphabetM < 0) {
                    backToAlphabetM = (codeAscii - 65 + changeOffset);
                }
                let formulaEncode = (backToAlphabetM) % 26 + 65;
                textResult += String.fromCharCode(formulaEncode);
                console.log(textResult);
            }
        /* if(codeAscii <= 65 && codeAscii >= 90) {
            textResult += textMessage[i];
        } */
    }
}