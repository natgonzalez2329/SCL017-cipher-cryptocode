import cipher from "./cipher.js";

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

//CIPHER-events
const encryptInputMessage = document.getElementById("encrypt-input_message");
const cryptogramInputResult = document.getElementById(
  "cryptogram-input_result"
);
const changeInputOffset = document.getElementById("change-input_offset");
const btnEncode = document.getElementById("btnEncode");
const btnDecode = document.getElementById("btnDecode");


btnEncode.addEventListener("click", () => {
  const textMessage = encryptInputMessage.value;
  const changeOffset = changeInputOffset.value;
  cryptogramInputResult.value = cipher.encode(textMessage, changeOffset);
});

btnDecode.addEventListener("click", () => {
  const textMessage = encryptInputMessage.value;
  const changeOffset = changeInputOffset.value;
  cryptogramInputResult.value = cipher.decode(textMessage, changeOffset);
});

//btnCopy
const btnCopy = document.getElementById("btnCopy");

btnCopy.addEventListener("click", () => {
  const copyText = cryptogramInputResult;
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
});

//btnClear
const btnClear = document.getElementById("btnClear");

btnClear.addEventListener("click", () => {
  encryptInputMessage.value = "";
  cryptogramInputResult.value = "";
});

