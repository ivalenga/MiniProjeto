function add() { 
  var nota = document.getElementById("nota").value.trim(); // Pega o valor digitado no input "nota" e remove espaços extras
  var selecionado = document.querySelector('input[name="nome"]:checked'); // Pega o radio button selecionado (Urgente ou Não Urgente)
  var urgenteDiv = document.getElementById("u"); // Pega a div onde as notas urgentes serão adicionadas
  var naoUrgenteDiv = document.getElementById("nu"); // Pega a div onde as notas não urgentes serão adicionadas
   
  if (nota === "") { // Verifica se o input está vazio
    alert("Digite uma nota!"); // Mostra alerta pedindo para digitar uma nota
  }

  var novaNota = document.createElement("div"); // Cria uma nova div que vai conter a nota
  novaNota.className = "nota"; // Adiciona a classe "nota" à div criada (para estilo CSS)
  novaNota.textContent = nota; // Define o texto da div como a nota digitada

  if (selecionado.value === "Urgente") { // Verifica se o radio selecionado é "Urgente"
    urgenteDiv.appendChild(novaNota); // Adiciona a nota na div de notas urgentes
  } else {
    naoUrgenteDiv.appendChild(novaNota); // Caso contrário, adiciona na div de notas não urgentes
  }

  document.getElementById("nota").value = ""; // Limpa o input para digitar nova nota
}

function apagarTudo() {
  var urgenteDiv = document.getElementById("u"); // Pega a div de notas urgentes
  var naoUrgenteDiv = document.getElementById("nu"); // Pega a div de notas não urgentes

  urgenteDiv.innerHTML = "<h3>Urgente</h3>"; // Apaga todo o conteúdo da div e mantém só o título "Urgente"
  naoUrgenteDiv.innerHTML = "<h3>Não Urgente</h3>"; // Apaga todo o conteúdo da div e mantém só o título "Não Urgente"

  document.getElementById("nota").value = ""; // Limpa
}

function removerTexto() {
  var urgenteDiv = document.getElementById("u"); // Pega a div de notas urgentes
  var naoUrgenteDiv = document.getElementById("nu"); // Pega a div de notas não urgentes

  var ultimaUrgente = urgenteDiv.lastElementChild; // Pega a última nota adicionada na div urgente
  var ultimaNaoUrgente = naoUrgenteDiv.lastElementChild; // Pega a última nota adicionada na div não urgente

  if (ultimaUrgente && ultimaUrgente.tagName !== "H3") { // Se houver nota urgente e não for o título
    urgenteDiv.removeChild(ultimaUrgente); // Remove a última nota urgente
  } else if (ultimaNaoUrgente && ultimaNaoUrgente.tagName !== "H3") { // Se houver nota não urgente e não for o título
    naoUrgenteDiv.removeChild(ultimaNaoUrgente); // Remove a última nota não urgente
  } else {
    alert("Não há notas para remover!"); // Caso não haja notas, mostra alerta
  }
}

