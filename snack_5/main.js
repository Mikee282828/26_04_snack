let number;
let somma=0;
while(!(number>999 && number <= 9999)){
    number = prompt("Inserisci un numero a 4 cifre");
}
for(i = 0; i<4; i++){
    somma += parseInt(number[i]);
}
console.log("La somma delle cifre è:",somma);