const wrd = document.querySelector(".input-text");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");


btn.addEventListener("click", countVw);
function countVw() {
    let vowelCount = 0;
    let wordVal = wrd.value.toLowerCase();
    for (let i = 0; i < wordVal.length; i++){
        let letter = wordVal[i];
        if (letter.match(/([a,e,i,o,u])/)) {
         vowelCount++;
        }
    }

    result.innerHTML = `${wrd.value.toUpperCase()} has ${vowelCount} vowels`;
}

