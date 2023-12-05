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
}

listaTarefas.addEventListener("click", function (e) {
    if (e.target.classList.contains("excluir")) {
        e.target.parentElement.remove();
    }
    if (e.target.classList.contains("finalizar")) {
        const tarefa = e.target.parentElement;
        const tarefaTexto = tarefa.innerText.split(" ")[0];
        tarefa.innerHTML = `${tarefaTexto} <button class="excluir">Excluir</button>`;
        tarefa.style.color = 'green';
        listaFinalizadas.appendChild(tarefa);
    }
});

listaFinalizadas.addEventListener("click", function (e) {
    if (e.target.classList.contains("excluir")) {
        e.target.parentElement.remove()
    }
});