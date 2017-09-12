var ellogin = document.getElementById('login');
var elhaslo = document.getElementById('haslo');
var elpodajKolor = document.getElementById('podajKolor');
var elkolor = document.getElementById('kolor');

var kolor= [];
function zapisz(){
   
    kolor[0] = ellogin.value.fontcolor('#' + elkolor.value); 
    kolor[1] = elhaslo.value.fontcolor('#' + elkolor.value);
    kolor[2] = elkolor.value.fontcolor('#' + elkolor.value);
    document.write(kolor);
    console.log(kolor);
};
