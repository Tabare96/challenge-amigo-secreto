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
    mostrarAmigos();
}

function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < listaAmigos.length; i++) {
        lista.innerHTML += "<li>" + listaAmigos[i] + "</li>";
    }
}

function sortearAmigo() {
    console.log("Clic sobre sortear amigo");
    let cantiadAmigos = listaAmigos.length;

    let amigoSorteado = listaAmigos[Math.floor(Math.random() * cantiadAmigos)];
    console.log("Amigo sorteado: " + amigoSorteado);
    asignarTextoAElemento("#resultado", "Amigo sorteado: " + amigoSorteado);
}

function asignarTextoAElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}