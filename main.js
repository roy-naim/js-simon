//genera numeri a caso. In questo caso 5 numeri a caso deve far vedere
var arrayPrint = [];
while(arrayPrint.length < 5){
    var r = Math.floor(Math.random() * 100) + 1;
    if(arrayPrint.indexOf(r) === -1) arrayPrint.push(r);
}

document.getElementById('numbers').textContent = arrayPrint;

// imposta il tempo....30 secondi fai vedere i numeri. Dopo 30 secondi sparisce
setTimeout(function(){
  var hideNum = $("#numbers").text(arrayPrint);
  hideNum.hide();
}, 5000);

// arriva il prompt che ti chiede di riscrive i numeri che hai visto prima

// Dopo che sono stati inseriti i 5 numeri,
// il software dice quanti e quali dei numeri da indovinare sono stati individuati.
