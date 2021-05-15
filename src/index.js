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
  //const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
      const encryptInputMessage = document.getElementById("encrypt-input_message");
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
    //(*numero de la letra ASCII* x-65 + offset) % 26 + 65-----la operacion x-65---- saber posición alfabeto o array
    /*1.obtener el codigo ASCII de las letras que se ingresan en encrypt-input_message= textMessage
    2.convertir a la posición del alfabeto
    3.aplicar la formula y luego con esa nueva posicion que esta en el alfabeto, pasarla otra vez  
    a cod ASCII para que la computadora nos muestre esa nueva letra.*/
    const encodeText = (textMessage,changeOffset) =>{
        let textResult = "";

        for (let i = 0; i < textMessage.length; i++) {
            const codeAscii = textMessage[i].charCodeAt();
            if (codeAscii < 65 || codeAscii > 90) {
                textResult += String.fromCharCode(codeAscii);
            }
            if(codeAscii >= 65 && codeAscii <= 90) {
                changeOffset = (changeOffset % 26 +26) % 26;
               const encodedAlphabet = (codeAscii - 65 + changeOffset);
               const formulaEncode = encodedAlphabet % 26 + 65;
               textResult += String.fromCharCode(formulaEncode);
            }
    }
    return textResult;
}

    const decodeText = (textMessage,changeOffset) =>{
        let textResult = "";

         for (let i = 0; i < textMessage.length; i++) {
        const codeAscii = textMessage[i].charCodeAt();
        if (codeAscii < 65 || codeAscii > 90) {
            textResult += String.fromCharCode(codeAscii);
        }
        if(codeAscii >= 65 && codeAscii <= 90) {
            changeOffset = (changeOffset % 26 +26) % 26;
           const encodedAlphabet = (codeAscii - 65 - changeOffset);
           const formulaEncode = encodedAlphabet % 26 + 65;
           textResult += String.fromCharCode(formulaEncode);
        }
}
    return textResult;
}

