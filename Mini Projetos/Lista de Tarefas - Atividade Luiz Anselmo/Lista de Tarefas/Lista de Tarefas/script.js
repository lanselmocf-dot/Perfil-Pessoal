var taskInput = document.getElementById("taskInput");
var addTaskBtn = document.getElementById("addTaskBtn");
var taskList = document.getElementById("taskList");

var tarefasMockadas = JSON.parse(localStorage.getItem("minhasTarefas")) || [];

function atualizarListaDOM() {
    taskList.innerHTML = "";

    for (var i = 0; i < tarefasMockadas.length; i++) {
        var texto = tarefasMockadas[i];

        var li = document.createElement("li");
        li.innerHTML = texto;

        var btnRemover = document.createElement("button");
        btnRemover.innerHTML = "&times;";

        btnRemover.setAttribute("data-index", i);

        btnRemover.addEventListener("click", function(event) {

        var indexParaRemover = event.target.getAttribute("data-index");

        tarefasMockadas.splice(indexParaRemover, 1);

        localStorage.setItem("minhasTarefas", JSON.stringify(tarefasMockadas));

        atualizarListaDOM();
        });

        li.appendChild(btnRemover);

        taskList.appendChild(li);
    }
}

addTaskBtn.addEventListener("click", function() {
    var textoDigitado = taskInput.value;

    if (textoDigitado !== "") {
        tarefasMockadas.push(textoDigitado);
        localStorage.setItem("minhasTarefas", JSON.stringify(tarefasMockadas));
        atualizarListaDOM();
        taskInput.value = "";

    } else {
        alert("Por favor, informe a sua tarefa!");
    }
})

atualizarListaDOM();