let milesInput = document.querySelector('.Miles > input');
let kmInput = document.querySelector('.Kilometers > input');
let feetInput = document.querySelector('.Feet > input');

let disClear = document.querySelector('.dis-clear');

milesInput.addEventListener('input', () => {
    let milesdis = parseFloat(milesInput.value);
    let kmdis = milesdis * 1.609;
    let feetdis = milesdis * 5280;

    kmInput.value = kmdis;
    feetInput.value = feetdis;
})

kmInput.addEventListener('input', () => {
    let kmdis = parseFloat(kmInput.value);
    let milesdis = kmdis / 1.609;
    let feetdis = kmdis * 3281;

    milesInput.value = milesdis;
    feetInput.value = feetdis;
})

feetInput.addEventListener('input', () => {
    let feetdis = parseFloat(feetInput.value);
    let milesdis = feetdis / 5280;
    let kmdis = feetdis / 3281;

    milesInput.value = milesdis;
    kmInput.value = kmdis;
})

disClear.addEventListener('click', () => {
    milesInput.value = '';
    kmInput.value = '';
    feetInput.value = '';
})