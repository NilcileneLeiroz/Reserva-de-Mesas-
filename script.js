const filaInterna = [];
const filaExterna = [];
let mesaOcupada = false;

document.getElementById("reservaForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const cidade = document.getElementById("cidade").value;
  const pessoas = document.getElementById("pessoas").value;
  const area = document.getElementById("area").value;

  const cliente = { nome, telefone, cidade, pessoas };

  if (area === "interna") {
    filaInterna.push(cliente);
    atualizarLista("interna");
  } else {
    filaExterna.push(cliente);
    atualizarLista("externa");
  }

  this.reset();
});

function atualizarLista(area) {
  const ul = document.getElementById("lista-" + area);
  ul.innerHTML = "";
  const fila = area === "interna" ? filaInterna : filaExterna;
  fila.forEach((cliente, index) => {
    const li = document.createElement("li");
    li.textContent = `${cliente.nome} (${cliente.pessoas} pessoas - ${cliente.cidade})`;
    ul.appendChild(li);
  });
}

function liberarMesa() {
  const status = document.getElementById("mesa-status");
  if (mesaOcupada) {
    mesaOcupada = false;
    status.textContent = "Mesa disponível";
  } else {
    const cliente = filaInterna.shift() || filaExterna.shift();
    if (cliente) {
      status.textContent = `Mesa ocupada por ${cliente.nome} (${cliente.pessoas} pessoas)`;
      mesaOcupada = true;
      atualizarLista("interna");
      atualizarLista("externa");
    } else {
      status.textContent = "Sem clientes na fila.";
    }
  }
}