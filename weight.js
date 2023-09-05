let poundsInput = document.querySelector(".Pounds > input");
let gramsInput = document.querySelector(".Grams > input");
let kilogramsInput = document.querySelector(".Kilograms > input");
let ouncesInput = document.querySelector(".Ounces > input");

let weightClear = document.querySelector(".weight-clear");


poundsInput.addEventListener("input", function(){
    let pWeight = parseFloat(poundsInput.value);
    let gWeight = (pWeight * 453.592);
    let kweight = (pWeight * 0.453592);
    let oWeight = (pWeight * 16);

    gramsInput.value = gWeight;
    kilogramsInput.value = kweight;
    ouncesInput.value = oWeight;
})

gramsInput.addEventListener("input", function(){
    let gWeight = parseFloat(gramsInput.value);
    let pWeight = (gWeight * 0.00220462);
    let kweight = (gWeight / 1000);
    let oWeight = (gWeight / 28.34952);

    poundsInput.value = pWeight;
    kilogramsInput.value = kweight;
    ouncesInput.value = oWeight;
})

kilogramsInput.addEventListener("input", function(){
    let kWeight = parseFloat(kilogramsInput.value);
    let pWeight = (kWeight * 2.2);
    let gweight = (kWeight * 1000);
    let oWeight = (kWeight * 35.274);

    poundsInput.value = pWeight;
    gramsInput.value = gweight;
    ouncesInput.value = oWeight;
})

ouncesInput.addEventListener("input", function(){
    let oWeight = parseFloat(ouncesInput.value);
    let pWeight = (oWeight * 0.0625);
    let gweight = (oWeight * 28.34952);
    let kWeight = (oWeight * 0.0283495);

    poundsInput.value = pWeight;
    gramsInput.value = gweight;
    kilogramsInput.value = kWeight;
})

weightClear.addEventListener('click', () => {
    poundsInput.value = '';
    gramsInput.value = '';
    kilogramsInput.value = '';
    ouncesInput.value = '';
})
