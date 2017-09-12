//tworzenie tablicy za pomocą literału tablicy:
/*var kolory = ['biały', 'czerwony', 'zielony'];
var elwynik = decument.getElementById('wynik');
elwynik.innerHTML = kolory[0];*/



//Tworzenie tablicy za pomocą konstruktora tablicy array:

/*var samochody = new Array('bmw', 'audi', 'ferrari', 'porshe');
console.log(samochody[samochody.length-1]);
console.log('ilosc elementoów ' + samochody.length);

var nowy = prompt('Podaj nowy samochód');
samochody[0] = nowy;
console.log(samochody);*/

//Utwórz tablice o nazwie szkola przypisz do niej imie nazwisko i wiek o które spytasz ucznia w prompcie wyświetl tablice z bloku o nazwie dane

/*var szkola =[];
var eldane = document.getElementById('dane');
var imie = prompt('Podaj imie');
var nazwisko = prompt('Podaj nazwisko');
var wiek = prompt('Podaj wiek');

szkola[0] = imie;
szkola[1] = nazwisko;
szkola[2] = wiek;
console.log(szkola);
eldane.innerHTML = szkola;*/

//Tablice wielowymiarowe

var tab = new Array (
new Array ('Jan', 'Nowak', 'Poznań'),
new Array ('Anna', 'Kawa', 'Gniezno'),
 new Array ('michal', 'Nowy', 'Poznań')
);
console.log(tab);
console.log(tab[1][2]);

//Sortowanie

var imiona = ['Paweł', 'Anna', 'Zenon', 'Jacek'];
console.log(imiona);
var posortowane = imiona.sort();//posortowanie
console.log(posortowane);
var odwroc = posortowane.reverse();//zmiana kolejności od konca
odwroc.pop(); //usówa ostatni
odwroc.push('Gerwazy'); //dodaje na koncy
odwroc.unshift('Joanna'); //dodaje na początku
console.log(odwroc);

console.log(odwroc.indexOf('Anna')); // -1 nieistnieje
console.log(odwroc.indexOf('Gerwazy')); //pokazuje idnex 4 istnieje 

//sortowanie liczb

var cyfry = [1, 2, 20, 190, -1, 1000000];
console.log(cyfry);
var sort = cyfry.sort();
console.log(sort); //[-1, 1, 1000000, 190, 2, 20] sortuje patrząc na kazda cyfre nie na liczbe

/*cyfry sort(function(a,b){
    return(a-b);
});//tylko do cyfr odejmuje po kolei czy są w dobrej kolejniośći
console.log(cyfry);*/

var eldane = document.getElementById('dane');
var elpodajKolor = document.getElementById('podajKolor');
var elkolor = document.getElementById('kolor');
var kolor= [];
function zapisz(){
   /* console.log(elkolor.value);*/
    kolor[0] = elkolor.value; //wysyłanie danych do tablicy
    console.log(kolor);
};

//zaddom utwórz formularz z loginem (typu textowego) i hasłem (pole typu password) i kolorem hexadecymalnym  (text).
//Przypisz dane do tablicy jednowymiarowej, wypisz dane w bloku na stronie w kolorze jaki podał użytkownik. Pobierz dane z tablicy. 



