var textarea = document.querySelector('.container-form__textarea');
var resultado = document.querySelector('.container-return__box__msg');
var buttonEncrypt = document.querySelector('.container-form__button-criptografar');
var buttonDecrypt = document.querySelector('.container-form__button-descriptografar');
var buttonCopy = document.querySelector('.container-return__copy');
var photo = document.querySelector('.img-principal');



function encrypt(text){
    let textUsuary = text.value;
    let cryptoMsg = textUsuary.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");



    return cryptoMsg;
}

buttonEncrypt.addEventListener('click', ()=>{

    resultado.textContent = encrypt(textarea);
    textarea.value = '';

    photo.style.display = 'none';
    buttonCopy.style.display = 'block';

})



function decrypt(text){
    let textUsuary = text.value;
    let cryptoMsg = textUsuary.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    return cryptoMsg;
}

buttonDecrypt.addEventListener('click', ()=>{
    resultado.textContent = decrypt(textarea);
    textarea.value = '';

    photo.style.display = 'none';
    buttonCopy.style.display = 'block';
})

buttonCopy.addEventListener('click', ()=>{
    
})