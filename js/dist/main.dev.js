"use strict";

var input = document.querySelector('.form input'),
    button = document.querySelector('.form button'),
    qrImg = document.querySelector('.qr-generator img');
button.addEventListener('click', function () {
  var data = input.value;

  if (data.length > 0) {
    var imgSrc = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=".concat(data);
    qrImg.src = imgSrc;
    qrImg.parentElement.classList.remove('hidden');
  }
});
//# sourceMappingURL=main.dev.js.map
