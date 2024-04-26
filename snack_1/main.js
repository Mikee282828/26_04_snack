// creo la lista contenente le parole da stampare
let words = [];
let nWords = prompt("Inserisci il numero di parole che vuoi inserire");
for (let i = 0; i < nWords; i++) {
    words[i] = prompt("Inserisci la parola: ");
}

// cerco le parole con lunghezza in ordine crescente
let min = words[0].length;
let temp;
for (let i = 0; i < nWords; i++) {
    for (let j = nWords-i-1; j>=0; j--) {
        if (min > words[j].length) {
            temp = words[0];
            words[0] = words[j];
            min = words[j].length;
            words[j] = temp;
        }
    }
    console.log(words[0]);
    words.shift();
    if(words.length!==0){
        min = words[0].length;
    }
}