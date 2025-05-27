
document.getElementById('reservaForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const cidade = document.getElementById('cidade').value;
    const pessoas = document.getElementById('pessoas').value;
    const area = document.getElementById('area').value;

    const item = document.createElement('p');
    item.textContent = `${nome.toUpperCase()} (${pessoas} pessoas - ${cidade.toUpperCase()})`;

    document.getElementById('listaEspera').appendChild(item);

    document.getElementById('reservaForm').reset();
});

function liberarMesa() {
    document.getElementById('statusMesa').textContent = "Mesa disponível";
}
