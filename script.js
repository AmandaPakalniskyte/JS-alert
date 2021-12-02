"use strict";

let kaina = prompt("Kiek kainuoja prekė?");


while (isNaN(kaina)) {
    kaina = prompt("Kiek kainuoja prekė?");
  
}

alert("Prekės kaina su PVM: " + kaina + " €" + "," + " PVM: " + (kaina * 0.21).toFixed(2) + " €" + "," + " kaina be PVM: " + (kaina - kaina * 0.21).toFixed(2) + " €")





















