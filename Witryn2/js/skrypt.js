/*document.write("skrypt działa poprawnie<br />");
document.write("skrypt działa poprawnie<br />");
document.write("skrypt działa poprawnie<br />");
console.log("text");*/

// var - słowo kluczowe
// imie - nazwa zmiennej
// = - operator przypisania
// Ada - wartość zmiennej

//var imie = "Ada";
//document.write("Witaj, " + imie +  "!"); //Ada

/*console.log(imie);
var imie2 = "Kacper";
document.write(imie2); //Kacper
document.write('test');*/
//var suma = 10 - '20' + 30;
//console.log(suma);
//alert('test');

var a = 9, b = 'Janusz', c = true;
var d;
var suma = a + b;
var różnica = a - b;
var mnożenie = a * b;
var dzielenie = a / b;
var modulo = a % b;
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));
var dzialanie = (7%2)/3;
console.log(dzialanie);

var dziesietna = 10;
var oktalna = 020;
var hex = 0x20;

console.log(dziesietna); //10
console.log(oktalna); //16
console.log(hex); //32

console.trace();

//camelCase
/*var duzaLitera;
var _duzaLitera;
var $duzaLitera;
var -duzaLitera;*/

var zmienna = 2.5;
console.log(zmienna);
var j1 = '1';
var j2 = '1.5';
var wiek = 'Ada';
console.log(typeof(j1));
j1 = parseInt(j1); //bo stałoprzecinkowa przetwarza na liczbe 
j2 = parseFloat(j2); //bo zmiennoprzecinkowa przetwarza na l zmien
var wynik = j1 + j2;
wiek = parseFloat(wiek); //NaN nie numer 
console.log(wynik);
console.log(wiek);

var x = "zsk";
//document.getElementById('naglowek').innerHTML = x;//można tak robić ale lepiej nie 

var elNaglowek = document.getElementById('naglowek');
elNaglowek.innerHTML = x;
elNaglowek.style.color = 'red';

//var imie = prompt('podaj swoje imię');
//console.log(typeof(imie));

/*var a = prompt('podaj a');
var b = prompt('podaj b');
var wynik = a * b;
console.log(wynik);*/

/*
var a = prompt('podaj wiek');
var b = prompt('podaj 2 wiek');
a = parseInt(a);
b = parseInt(b);
var wynik = (a+b) / 2;
console.log(wynik);
var elNaglowek2 = document.getElementById('naglowek2');
elNaglowek2.innerHTML = wynik;
*/

