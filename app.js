// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo() {
    listaAmigos.push(document.getElementById("amigo").value);
    alert("amigo :" + listaAmigos[listaAmigos.length - 1] + " agregado");

    mostrarAmigos();
}

function mostrarAmigos() {
    for (let i = 0; i < listaAmigos.length; i++) {
        console.log("Amigo " + (i + 1) + ": " + listaAmigos[i]);
    }
}
function sortearAmigo() {
    alert("Clic sobre sortear amigo");
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
