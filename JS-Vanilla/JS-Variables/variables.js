
function mesVariables(){

    let age = 10;
    
    console.log(age);
    
    const PI = 3.141592, TAUXTVA = 0.2;
    
    
    let message = "Mon \"nom\" est Toto";
    console.log(message);
    
    message = 'Mon "nom" est Toto';
    console.log(message);
    
    message = '\tJe m\'appelle Toto\n';
    console.log(message);
    
    message = `\tJe m'appelle Toto\n`;
    console.log(message);
    
    message = `Mon nom est Toto`;
    console.log(message);
}

// mesVariables();

/* --------------------------------------------------------------- */

// Faire la conversion

function string_to_entier(){
    let monString = prompt("Entrez : ");
    let nbEntier = parseInt(monString);
    console.log(nbEntier);
}

const string_to_decimal = () => {
    let monString = prompt("Entrez : ");
    let nbDecimal = parseFloat(monString);
    console.log(nbDecimal);
}

const string_to_reel = () => {
    let monString = prompt("Entrez : ");
    let nbReel = parseDouble(monString);
    console.log(nbReel);
}

// string_to_decimal()
// string_to_entier()
// string_to_reel()
/* --------------------------------------------------------------- */