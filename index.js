/* FUNÇÕES */
// Inserir um número no console
function inserir(num) {
    let valor = num;
    let valorInserido = document.getElementById("valorInserido").value;

    if(valorInserido < 99999999999999n) {
        document.getElementById("valorInserido").value += valor;
    }
}