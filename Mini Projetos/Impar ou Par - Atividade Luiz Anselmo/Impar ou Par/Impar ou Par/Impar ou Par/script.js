var numInput = document.getElementById("numInput");
var ImparBtn = document.getElementById("ImparBtn");
var ParBtn = document.getElementById("ParBtn");
var PlayBtn = document.getElementById("PlayBtn");
var numList = document.getElementById("numList");

var opUsuario = "";
var opPC = "";

ImparBtn.addEventListener("click", function() {
    opUsuario = "impar";
    opPC = "par";
    alert("Você escolheu: Ímpar");
});

ParBtn.addEventListener("click", function() {
    opUsuario = "par";
    opPC = "impar";
    alert("Você escolheu: Par");
});


PlayBtn.addEventListener("click", function() {
    var textoDigitado = numInput.value;

    
    if (opUsuario === "") {
        alert("Por favor, escolha entre Par ou Ímpar antes de jogar!");
        return;
    }

  
    if (textoDigitado.trim() === "") {
        alert("Opa, o campo está vazio! Digite alguma coisa.");
        return;
    }

    var numUsuario = parseInt(textoDigitado);

    if (isNaN(numUsuario)) {
        alert("Por favor, digite apenas números, letras não valem!");
        return;
    }

    var numPC = Math.floor(Math.random() * 6);
    var soma = numUsuario + numPC;

    var resultadoSoma = (soma % 2 === 0) ? "par" : "impar";


    var vencedor = "";
    if (resultadoSoma === opUsuario) {
        vencedor = "Você ganhou!";
        alert (vencedor);
    } else {
        vencedor = "A máquina ganhou!";
        alert (vencedor);
    }

   
    var textoResultado = `Sua escolha: ${opUsuario} | Você jogou: ${numUsuario} | PC jogou: ${numPC} | Soma: ${soma} (${resultadoSoma}). ${vencedor}`;


    var li = document.createElement("li");
    li.innerHTML = textoResultado;

  
    numList.insertBefore(li, numList.firstChild);

 
    numInput.value = "";
    opUsuario = "";
});