var text = 'ZSK = zespół szkół komunikacji';
console.log(text.length);

var pierwszyZnak = text.charAt(0); //pierwszy znak z text
console.log(pierwszyZnak);

var ostatniZnak = text.charAt(text.length-1); //ostatni znak 
console.log(ostatniZnak);

var kod = text.charCodeAt(0); //kod ascu pierwszej liter 
console.log(kod);

//zamiana na duze litery

var duza = text.toUpperCase();
console.log(duza);

var mala = text.toLowerCase();
console.log(mala);

/*var poprawnyTekst = prompt('podaj imie', 'np. kowalski');
poprawnyTekst = poprawnyTekst.charAt(0).toUpperCase() + poprawnyTekst.slice(1).toLowerCase();
console.log(poprawnyTekst) ;*/

var mojeImie = prompt ('podaj swoje imie');
mojeImie= mojeImie.substr(1, mojeImie.length - 2 );
console.log(mojeImie);