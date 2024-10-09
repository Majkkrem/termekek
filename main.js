const termekek = [
    { id: '102', nev: "Káposztás rétes", ar: 2890 },
    { id: "358", nev: "Gulyásleves", ar: 3480 },
    { id: "105", nev: "Juhtúrós sztrapacska", ar: 580 },
    { id: "150", nev: "Vegán töltött paprika", ar: 4480 },
    { id: "166", nev: "Rántott csirkemell", ar: 3380 },
    { id: "896", nev: "Diós nudli", ar: 2980 },
    { id: "158", nev: "Tejfölös uborkasaláta", ar: 1380 },
]

const talalat = termekek.find(termek => termek.id === "105");

document.write(talalat.ar);
document.write("<br>");


const termekekKulccsal = termekek.reduce((aggregalt, termek) => ({ ...aggregalt, [termek.id]: termek }), {});

const talalat2 = termekekKulccsal["105"];

document.write(talalat2.ar);

document.write("<br>");

const kedvezmenyesTermekek = Object.entries(termekekKulccsal).filter((idTermekPar) => idTermekPar[1].ar > 3000).map((idTermekPar) => [idTermekPar[0], { ...idTermekPar[1], ar: idTermekPar[1].ar * 0.9 }]);

document.write(kedvezmenyesTermekek.length);
document.write("<br>");


kedvezmenyesTermekek.forEach(myFuction);
function myFuction(item, index) {
    document.write(index + ": " + item[1].nev + " - " + item[1].ar);
    document.write("<br>");
}

//--------------------------

// console.log("elso");
// setTimeout(function myCallback() {
//     console.log("harmadik");
// }, 5000);
// console.log("masodik");



// document.body.onclick = function () {
//     while (1);
// }

//--------------------------

setTimeout(function () {
    console.log("Aszinkron hívás történt");
},3000);

console.log("Az aszinkron hívás előtt lefutó kód");

document.getElementById("button").addEventListener("click", function () {
    console.log("Aszinkron hívás történt user inputra");
});
