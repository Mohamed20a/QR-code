let input = document.querySelector('.form input'),
    button = document.querySelector('.form button'),
    qrImg = document.querySelector('.qr-generator img');

button.addEventListener('click',()=>{
    let data = input.value ;
    if(data.length > 0 )
    {
        let imgSrc = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${data}` ;
        qrImg.src = imgSrc ;
        qrImg.parentElement.classList.remove('hidden');
    }
});    