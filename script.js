const tarefaInput = document.getElementById("tarefa");
const btnAdc = document.getElementById("adicionar");
let listaTarefas = document.getElementById("tarefas");
const listaFinalizadas = document.getElementById("finalizadas")



btnAdc.addEventListener("click", adicionarTarefa);
tarefaInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        alert(listaTarefas.childElementCount);
        adicionarTarefa();
    }
});



function adicionarTarefa() {
    const tarefaTexto = tarefaInput.value;
    const qtd = listaTarefas.childElementCount;
    if (tarefaTexto.trim() !== "") {
        const novaTarefa = document.createElement(`li`);
        li.id
        novaTarefa.innerHTML = `
          ${tarefaTexto} <button class="excluir">Excluir</button> <button id='"${tarefaTexto.replace(' ', '')}"' class="finalizar">Finalizar</button>
      `;
      novaTarefa.dataset.index = qtd;
        listaTarefas.appendChild(novaTarefa);
        tarefaInput.value = "";
        
    }
    listaFinalizadas.addEventListener('mouseout', function (e) {
        alert('aa')
        if (e.target.classList.contains('finalizar')) {
            // const texto = this.textContent.substring(0, this.textContent.indexOf(" Excluir Finalizar"));
            // this.innerHTML = `${texto} <button class="excluiFinalizada">Excluir</button>` //não tá funcionando!!
            this.innerHTML = `${tarefaTexto} <button class="excluir">Excluir</button>` //não tá funcionando!!
            this.style.color ='green';
            alert('00')
            atualizaIndex();
        }
    })
}

function atualizaIndex() {
    listaTarefas = document.getElementById("tarefas");
    alert(listaTarefas.childElementCount);
}

listaTarefas.addEventListener("click", function (e) {
    if (e.target.classList.contains("finalizar")) {
        // alert(e.target.parentElement.textContent);
        let li = document.createElement("li");
        li.textContent = this.textContent.substring(0, this.textContent.indexOf(" Excluir Finalizar"));
        
        let btExcFinal = document.createElement("button");
        btExcFinal.className = "excluiFinalizada";
        btExcFinal.innerHTML = "Excluir";
        li.appendChild(btExcFinal);
        li.style.color = 'green';
        // excluida += `<button class="excluiFinalizada">Excluir</button>`;
        listaFinalizadas.appendChild(li);
        // e.target.parentElement.remove();
    }
    if (e.target.classList.contains("excluir")) {
        // e.target.parentElement.remove();
    }
});

// listaTarefas.addEventListener("click", function (e) {
//     if (e.target.classList.contains("excluir")) {
//         e.target.parentElement.remove();
//     }
    
// });

// listaTarefas.addEventListener('dblclick', function(e) {
//     listaFinalizadas.appendChild(e.target.parentElement)
// })


listaFinalizadas.addEventListener("click", function (e) {
    if (e.target.classList.contains("excluiFinalizada")) {
        // e.target.parentElement.remove()
        e.addEventListener("click", function() {
            alert(e.value);
        })
    }
    
})






