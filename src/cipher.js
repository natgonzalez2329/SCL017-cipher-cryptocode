const cipher = {
  encode: (textMessage,changeOffset) =>{
    let textResult = "";

    for (let i = 0; i < textMessage.length; i++) {
        const codeAscii = textMessage[i].charCodeAt();

        let offset = 0;
        
        if(codeAscii >= 48 && codeAscii <= 57) {
            offset = (changeOffset % 10 +10) % 10;
           const encodedNumber = (codeAscii - 48 + offset);
           const formulaEncodeN = encodedNumber % 10 + 48;
           textResult += String.fromCharCode(formulaEncodeN);
        } else if(codeAscii >= 65 && codeAscii <= 90) {
            offset = (changeOffset % 26 +26) % 26;
           const encodedAlphabet = (codeAscii - 65 + offset);
           const formulaEncode = encodedAlphabet % 26 + 65;
           textResult += String.fromCharCode(formulaEncode);
        } else if(codeAscii >= 97 && codeAscii <= 122) {
            offset = (changeOffset % 26 +26) % 26;
           const encodedAlphabet = (codeAscii - 97 + offset);
           const formulaEncode = encodedAlphabet % 26 + 97;
           textResult += String.fromCharCode(formulaEncode);
        } else {
            textResult += String.fromCharCode(codeAscii); 
        } 
}
return textResult;
},

decode: (textMessage,changeOffset) =>{
    let textResult = "";

    for (let i = 0; i < textMessage.length; i++) {
        const codeAscii = textMessage[i].charCodeAt();

        let offset = 0;

     if(codeAscii >= 48 && codeAscii <= 57) {
        offset = (changeOffset % 10 +10) % 10;
        const encodedNumber = (codeAscii - 48 - offset);
        const formulaEncodeN = encodedNumber % 10 + 48;
        textResult += String.fromCharCode(formulaEncodeN);
    } else if(codeAscii >= 65 && codeAscii <= 90) {
       offset = (changeOffset % 26 +26) % 26;
       const encodedAlphabet = (codeAscii - 65 - offset);
       const formulaEncode = encodedAlphabet % 26 + 65;
       textResult += String.fromCharCode(formulaEncode);
    } else if(codeAscii >= 97 && codeAscii <= 122) {
       offset = (changeOffset % 26 +26) % 26;
       const encodedAlphabet = (codeAscii - 97 - offset);
       const formulaEncode = encodedAlphabet % 26 + 97;
       textResult += String.fromCharCode(formulaEncode);
    } else {
        textResult += String.fromCharCode(codeAscii); 
    }
}
return textResult;
}

};

export default cipher;
