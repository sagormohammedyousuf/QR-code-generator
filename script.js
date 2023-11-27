const qrBox = document.getElementById("qrbox");
const qrImage = document.getElementById("qr-code");
const qrText = document.getElementById("qr-text")


function generateQR() {
    if (qrText.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
            qrText.value;

        imgBox.textContent = "hello"


    } else {
        qrText.style.border = "1px solid red"
        qrText.placeholder = "Put your text or url before click"
    }
}