let gambarQR = document.getElementById("gambarqr");
let inputbox = document.getElementById("input");
let downloadbtn = document.getElementById("btn");

function konversi() {
  gambarQR.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
    inputbox.value;
  gambarQR.className = "mt-2 shadow-md rounded-md mb-3"
}
function download() {
  let imagePath = gambarQR.getAttribute("src");
  saveAs(imagePath, "QRcode");
}
