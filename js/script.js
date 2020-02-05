"use strict";


function Initialize()
{
    const pi = 3.14;
    var getal1 = 10;
    let getal2 = 12;
}


function ToonGetallen()
{
   // console.log("Getal1="+getal1);
    //console.log("Getal2="+getal2);
   // console.log("pi="+pi);
}

let aantalHerhalingen = 0;
let getal = 33
let randomGetal = Math.floor(Math.random()*100);
while(getal !=randomGetal)
{
    aantalHerhalingen++;
    randomGetal = Math.floor(Math.random()*100);
    console.log(randomGetal);
}
console.log("aantal herhalingen="+aantalHerhalingen);

//test the map function
var ar_getallen = [21,45,7,8,65,9,98,65,32,2];
var evenNumbers = ar_getallen.map(function{});
evenNumbers.forEach(element => {console.log(element);
    
});



Initialize();
ToonGetallen();

//console.log("getal1="+getal1);
