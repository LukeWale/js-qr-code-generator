let url = document.querySelector('#url-input');
let generateButton = document.querySelector('#create-qr-code');
let imageSize = document.querySelector('#image-size');
let urlBaseAPI = `https://chart.googleapis.com/chart?cht=qr`;
let qrCode = document.querySelector('#qr-code');

generateButton.onclick = function () {
    qrCode.src = `${urlBaseAPI}&chs=${imageSize.value}&chl=${encodeURIComponent(url.value)}`;
}