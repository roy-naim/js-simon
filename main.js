$(document).ready(function(){
  //genera numeri a caso. In questo caso 5 numeri a caso deve far vedere
  var arrayPrint = [];
  while(arrayPrint.length < 5){
      var r = Math.floor(Math.random() * 100) + 1;
      if(arrayPrint.indexOf(r) === -1) arrayPrint.push(r);
  }

  // document.getElementById('numbers').textContent = arrayPrint;
  $('#numbers').text(arrayPrint);
  // imposta il tempo....30 secondi fai vedere i numeri. Dopo 30 secondi sparisce
  setTimeout(function(){
    var hideNum = $("#numbers");
    hideNum.hide();
  }, 30000);

  // arriva il prompt che ti chiede di riscrivere i numeri che hai visto prima


  setTimeout(function(){
    var i = 1;
    var j = 0; //PER CONTARE PARTIRE DA 0
    while (i >= 1 && i <=5) {
      var askUser = (parseInt(prompt('Scrivi i numeri che hai appena visualizzato:')));
      if (arrayPrint.includes(askUser)) {
        $('#result').append(askUser + ' ');
        j++;
        //CONTATORE SERVE PER CONTARE QUANTE VOLTE HA TROVATO. METTERLO SEMPRE IN UNA CONDIZIONE.
      } i++;
    }
    $('#count').text('Hai indovinato per: ' + j + ' volte');
  }, 30200);

  // il software dice quanti e quali dei numeri da indovinare sono stati individuati.

})
