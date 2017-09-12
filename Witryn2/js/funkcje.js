
/*function witaj(imie)
{
    document.write('witaj ' + imie)
}
var name = 'Adrian';
witaj(name);

function poleProstokata(a, b){
    var pole = a * b;
    return pole;
}
var szerokosc = prompt('Podaj szerokość');
var dlugosc = prompt('Podaj dlugosc');
document.write(poleProstokata(szerokosc, dlugosc));*/

function poleObjetosc(szerokosc, dlugosc, wysokosc){
    var pole = szerokosc * dlugosc;
    var objetosc = szerokosc * dlugosc * wysokosc;
    var wynik = [pole, objetosc];
    return wynik;
}
console.log(poleObjetosc(2,3,4));
var pole = poleObjetosc(2, 3, 10)[0];
var objetosc = poleObjetosc(2, 3, 10)[1];
console.log(pole);
console.log(objetosc);

var x = prompt('podaj wartość' + '0 - pole, 1- objętość');
var dane = poleObjetosc(2, 3, 10)[x];
console.log(dane);

//zadanie napisz skrypt który oblicza obwód, pole koła oraz objętość stożka. Dane użytkownik podaje z klawiatury. wykorzystaj obiekt math. Użytkownik wybiera za pomocą pola radio co chce obliczyć. dane wprowadza w formularzu. dane wyświetl w bloku. console.log(match.PI);

function poleObjetoscobwod(r, h){
    var pi = Math.PI;
    var obwod = 2 * pi * r;
    var pole = pi * r * r;
    var objetosc = 1/3 (pi * r * r * h);
    var wynik = [obwod, pole, objetosc];
    return wynik;
}
