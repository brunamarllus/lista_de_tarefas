function adicionarTarefa() {
  const input = document.getElementById("nova-tarefa");
  const texto = input.value.trim();

  if (texto === "") {
    alert("Digite uma tarefa!");
    return;
  }

  const li = document.createElement("li");

  const tarefaInfo = document.createElement("div");
  tarefaInfo.classList.add("tarefa-info");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const span = document.createElement("span");
  span.textContent = texto;

  checkbox.addEventListener("change", function () {
    span.classList.toggle("tarefa-concluida", checkbox.checked);
  });

  tarefaInfo.appendChild(checkbox);
  tarefaInfo.appendChild(span);

  const btnRemover = document.createElement("button");
  btnRemover.classList.add("remover-btn");
  btnRemover.innerHTML = "🗑️";
  btnRemover.addEventListener("click", () => li.remove());

  li.appendChild(tarefaInfo);
  li.appendChild(btnRemover);

  document.getElementById("lista-tarefas").appendChild(li);

  input.value = "";
  input.focus();
}

// Adicionar tarefa pressionando Enter
document.getElementById("nova-tarefa").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Evita o comportamento padrão
    adicionarTarefa();
  }
});
