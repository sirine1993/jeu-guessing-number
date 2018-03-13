// Jeu du plus ou moins


// Declarations de variables

var computerNumber = Math.floor(Math.random()*100+1) ;

// Défintion de ma fonction
function DevineNombre() {

    var guess = document.getElementById("guess");
    var output = document.getElementById("output");
    var maProposition = guess.value;

    
    if (maProposition < computerNumber) {
        output.innerHTML = "Essaie un nombre au-dessus !";
    }
    else if (maProposition > computerNumber) {
        output.innerHTML = "Essaie un nombre en-dessous !";
    }
    else if (maProposition == computerNumber) {
        output.innerHTML = "Dans le mille !" 
        alert("Le nombre à deviner était " + computerNumber + " ! ")
        computerNumber = Math.floor(Math.random()*100+1) ;
    }
}
