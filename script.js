const tarefaInput = document.getElementById("tarefa");
const btnAdc = document.getElementById("adicionar");
const listaTarefas = document.getElementById("tarefas");
const listaFinalizadas = document.getElementById("finalizadas")



btnAdc.addEventListener("click", adicionarTarefa);
tarefaInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        adicionarTarefa();
    }
});



function adicionarTarefa() {
    const tarefaTexto = tarefaInput.value;
    if (tarefaTexto.trim() !== "") {
        const novaTarefa = document.createElement("li");
        novaTarefa.innerHTML = `
          ${tarefaTexto} <button class="excluir">Excluir</button> <button class="finalizar">Finalizar</button>
      `;
        listaTarefas.appendChild(novaTarefa);
        tarefaInput.value = "";
        
    }
    listaFinalizadas.addEventListener('mouseout', function (e) {
        if (e.target.classList.contains('finalizar')) {
            this.innerHTML = `${tarefaTexto} <button class="excluir">Excluir</button>` //não tá funcionando!!
            this.style.color ='green'
        }
    })
}


listaTarefas.addEventListener("click", function (e) {
    if (e.target.classList.contains("excluir")) {
        e.target.parentElement.remove();
    }
    if (e.target.classList.contains("finalizar")) {
        listaFinalizadas.appendChild(e.target.parentElement)
    }
});

listaFinalizadas.addEventListener("click", function (e) {
    if (e.target.classList.contains("excluir")) {
        e.target.parentElement.remove()
    }
    
})






