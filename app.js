let listaAmigos = [];

function agregarAmigo() {

    if (document.getElementById("amigo").value === "") { // a revisar: como tomar los espacios como vacíos
        alert("El campo no puede estar vacío");
        return;
    }

    if (listaAmigos.includes(document.getElementById("amigo").value)) {
        alert("Ya agregaste a este amigo");
        return;
    }

    listaAmigos.push(document.getElementById("amigo").value);
    console.log("Amigo: " + listaAmigos[listaAmigos.length - 1] + " agregado a la lista de amigos");
    asignarTextoElemento("#listaAmigos", listaAmigos);
}

function asignarTextoElemento(elemento, lista) {
    let elementoHTML = document.querySelector(elemento);
    let listaAmigos = "";
    for (let i = 0; i < lista.length; i++) {
        listaAmigos += lista[i] + "<br>";
    }
    elementoHTML.innerHTML = listaAmigos;
}

function mostrarAmigos() {
    for (let i = 0; i < listaAmigos.length; i++) {
        console.log("Amigo " + (i + 1) + ": " + listaAmigos[i]);
    }
}
function sortearAmigo() {
    alert("Clic sobre sortear amigo");
}

