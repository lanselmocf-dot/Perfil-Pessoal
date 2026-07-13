var tela = document.getElementById("display");
var btns = document.getElementsByTagName("button");
var aux = "";

function pressed(v){
    aux = aux + v;
    tela.innerHTML = aux;
}

function clearAll(){
    aux = "";
    tela.innerHTML = "";
}

function calculate(){
    if (aux) {
        try {
        
            aux = String(eval(aux));
            tela.innerHTML = aux;
        } catch (e) {
        
            tela.innerHTML = "Erro";
            aux = "";
        }
    }
}


function backspace(){
    aux = aux.slice(0, -1);
    tela.innerHTML = aux;
}

// Ativar efeito LED temporário no botão
function activateLed(btn) {
    if (btn) {
        btn.classList.add('led-active');
        setTimeout(function() {
            btn.classList.remove('led-active');
        }, 150); // Efeito dura 150ms
    }
}

// Vincular clique de cada botão ao efeito LED
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
        activateLed(this);
    });
}

function getButtonByKey(key) {
    let searchKey = key;
    

    if (key === 'Enter') searchKey = '=';
    if (key === 'Escape' || key === 'Delete') searchKey = 'C';
    if (key === 'Backspace') searchKey = '<';


    for (let i = 0; i < btns.length; i++) {
        if (btns[i].innerText === searchKey) {
            return btns[i];
        }
    }
    return null;
}


document.addEventListener('keydown', function(event) {
    let key = event.key;
    let btn = getButtonByKey(key);

    if (btn) {
      
        btn.classList.add('led-active');
        
       
        if (key === 'Enter' || key === 'Backspace' || key === '/') {
            event.preventDefault(); 
        }
        
      
        if ((key >= '0' && key <= '9') || ['+', '-', '*', '/', '.'].includes(key)) {
            pressed(key);
        } else if (key === 'Enter') {
            calculate();
        } else if (key === 'Escape' || key === 'Delete') {
            clearAll();
        } else if (key === 'Backspace') {
            backspace();
        }
    }
});

document.addEventListener('keyup', function(event) {
    let key = event.key;
    let btn = getButtonByKey(key);

    if (btn) {
       
        btn.classList.remove('led-active'); 
    }
});