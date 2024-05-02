/* variable */
var textBrut = document.getElementById("txt-brut");
var textClear = document.getElementById("txt-clear");
var textResult = document.getElementById("txt-result");
var nbChar = document.getElementById("nb-char");
var crypt = document.getElementById("coder");
var $ = (id) => document.getElementById(id);

/*  */
var nettoyer = (txt) => {
    var accents = "éèàçâêôîûäëüïö";

    var voyelles = "aeuio";

    return [...txt.toLowerCase()].map(c => accents.includes(c) ? voyelles[accents.indexOf(c)] : c).join('').replace(/[^a-z]/g, '').toUpperCase();
}

function nettoyer_2(){
    var txt = textBrut.value.toLowerCase()
            .replace(/[àâ]/g, 'a').replace(/[ëéèê]/, 'e')
            .replace(/[ïî]/g, 'i').replace(/[ô]/, 'o')
            .replace(/[üû]/g, 'u').replace(/[^a-z]/g, '')
            .toUpperCase();

            textClear.value = txt;
}

// $('nb-char').innerText = textBrut.length;
/* 
textBrut.addEventListener('keyup', 
    function(e){ 
        console.log(e.target.value)
        console.log(nettoyer(e.target.value))
        textClear.value = nettoyer(e.target.value);
    }
);
 */

textBrut.addEventListener('keyup', 
nettoyer_2, false
);

crypt.addEventListener('click', 
    function(e){ 
        console.log('crypter');
        console.log(textClear.value);
        textClear.value = nettoyer(textBrut.value)
    }, 
    false
);


/* Le code de César */
/**
 * 
 * @param {string} c 
 * @param {number} dec : décallage
 * @returns 
 */
var cesar = (c, dec) => {
    var alpha = "AZERTYUIOPMLKJHGFDSQWXCVBN";

    return alpha[( + dec + alpha.indexOf(c) + 26) % 26]
}
