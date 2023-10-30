let nb1 = 5;
let nb2 = 7;

console.log(`Avant l'inversion nb1 = ${nb1} et nb2 = ${nb2}`);

// Méthode n° 1
const methode1 = () => {
    let temp = nb1;
    nb1 = nb2;
    nb2 = temp;

    console.log(`Après l'inversion nb1 = ${nb1} et nb2 = ${nb2}`);
}

methode1();


// Méthode n° 2
const methode2 = () => {
    nb1 = nb2 + nb1;
    nb2 = nb1 - nb2;
    nb1 -= nb2;

    console.log(`Après l'inversion nb1 = ${nb1} et nb2 = ${nb2}`);
}
methode2();

// Méthode n° 3
const methode3 = () => {
    nb1 = nb2 * nb1;
    nb2 = nb1 / nb2;
    nb1 /= nb2;

    console.log(`Après l'inversion nb1 = ${nb1} et nb2 = ${nb2}`);
}
methode3();
