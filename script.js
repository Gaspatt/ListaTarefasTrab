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
    const data = new Date();
    const tempo = data.toLocaleDateString();

    if (tarefaTexto.trim() !== "") {
        const novaTarefa = document.createElement("li");
        novaTarefa.innerHTML = `
          ${tarefaTexto} - Adicionado em <span class="hora">${tempo}</span> <button class="excluir">\u00D7</button> <button class="finalizar">\&#10004</button>
      `;
        const hora = novaTarefa.querySelector(".hora");
        hora.style.color = 'blue';
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
        const data = new Date();
        const tempo = data.toLocaleDateString();
        tarefa.innerHTML = `${tarefaTexto} - Concluido em <span class="hora">${tempo}</span> <button class="excluir">\u00D7</button>`;
        const hora = tarefa.querySelector(".hora");
        tarefa.style.color = 'green';
        hora.style.color = 'blue';
        listaFinalizadas.appendChild(tarefa);
    }
});


listaFinalizadas.addEventListener("click", function (e) {
    if (e.target.classList.contains("excluir")) {
        e.target.parentElement.remove()
    }
});