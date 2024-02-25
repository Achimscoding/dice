 const myPix =  new Array("./images/dice1.jpg", "./images/dice2.jpg", "./images/dice3.jpg",
"./images/dice4.jpg", "./images/dice5.jpg", "./images/dice6.jpg");

function play1 () {
    random1 = Math.floor(Math.random() * myPix.length);
    document.querySelector(`.img1`).src = myPix[random1];
    const name1 = document.querySelector(`#name1`).value;
    const result1 = document.querySelector(`#result1`);
    result1.textContent = name1;
}

function play2 () {
    random2 = Math.floor(Math.random() * myPix.length);
    document.querySelector(`.img2`).src = myPix[random2];
    const name2 = document.querySelector(`#name2`).value;
    const result2 = document.querySelector(`#result2`)
    result2.textContent = name2;

    if(random1 > random2) {
        const name1 = document.querySelector(`#name1`).value;
        const result = document.querySelector(`#result`);
        result.textContent = `${name1} wins`;

    } else if(random1 < random2) {
        const name2 = document.querySelector(`#name2`).value;
        const result = document.querySelector(`#result`);
        result.textContent = `${name2} wins`;
} else {
    result.textContent = `draw`
}
}


































// function play1() {
//     random1 = Math.floor(Math.random() * myPix.length);
//     document.querySelector(`.img1`).src = myPix[random1];
//     document.querySelector(`#result1`);
//     const name1 = document.querySelector(`#name1`).value;
//     result1.textContent = `${name1}`;
// }

// function play2() {
//     let random2 = Math.floor(Math.random() * myPix.length);
//     document.querySelector(`.img2`).src = myPix[random2];
//     const name2 = document.querySelector(`#name1`).value;
//     result2.textContent = `${name2}`;
     
//     if(random1 > random2) {
//         const name1 = document.querySelector(`#name1`).value;
//         result.textContent = `${name1} wins`;

//     } else if(random2 > random1) {
//         const name2 = document.querySelector(`#name2`).value;
//         result.textContent = `${name2} wins`;
//     } else {
//         result.textContent = `draw`;

//     }
// }









