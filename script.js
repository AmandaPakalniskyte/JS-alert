"use strict";

let kaina = prompt("Kiek kainuoja prekė?");


while (isNaN(kaina)) {
    kaina = prompt("Kiek kainuoja prekė?");
  
}

alert("Prekės kaina su PVM: " + kaina + " €" + "," + " PVM: " + (kaina * 0.21).toFixed(2) + " €" + "," + " kaina be PVM: " + (kaina - kaina * 0.21).toFixed(2) + " €")





















// 1 uzduotis

// kaina = Number(kaina);

// alert("Prekes kaina su PVM: " + kaina + " €" + "," + " PVM: " + (kaina * 0.21).toFixed(2) + " €" + "," + " kaina be PVM: " + (kaina - kaina * 0.21).toFixed(2) + " €")
// let kaina2 = Number(kaina);

// prompt("Kiek kainuoja?");

// let kaina = Number.isNaN;
// do {
//     prompt("Kiek kainuoja?");
  
// } while (kaina = isNaN);


// let kaina = Number.isNaN;
// while (kaina = isNaN) { 
//     prompt("Kiek kainuoja?");
  
// }




// let kaina = Number(kaina);
// do {
//     prompt("Kiek kainuoja?");
  
// } while (kaina = isNaN);

// do {
//     prompt("Kiek kainuoja?");
//     }
//     while (Number.isNaN);






// if (Number(kaina)) {
//     prompt("Kiek kainuoja?");
//     alert("Prekes kaina su PVM: " + kaina + " €" + "," + " PVM: " + (kaina * 0.21).toFixed(2) + " €" + "," + " kaina be PVM: " + (kaina - kaina * 0.21).toFixed(2) + " €");
// }

// else {
//     prompt("Kiek kainuoja?");
//      }


// kaina = Number(kaina);

// while (kaina = isNaN) {
// console.log(lbas)
// }

// alert("Prekes kaina su PVM: " + kaina + " €" + "," + " PVM: " + (kaina * 0.21).toFixed(2) + " €" + "," + " kaina be PVM: " + (kaina - kaina * 0.21).toFixed(2) + " €")


