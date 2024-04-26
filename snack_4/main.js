const N = prompt("Inserisci i N numeri di cui vuoi sapere il cubo: ");
for(let i = 0; i<= N; i++){
    console.log(`Il cubo di ${i} è : ${Math.pow(i,3)}`);
}