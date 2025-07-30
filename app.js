let listaAmigos = [];

function agregarAmigo() {

    const nombreAmigo = document.getElementById("amigo").value.trim();

    if (nombreAmigo === "") {
        alert("El campo no puede estar vacío");
        return;
    }

    if (listaAmigos.includes(nombreAmigo)) {
        alert("Ya agregaste a este amigo");
        return;
    }

    listaAmigos.push(nombreAmigo);
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
    if (listaAmigos.length < 2) {
        alert("La cantidad mínima de amigos para sortear es 2");
        return;
    }
    let cantiadAmigos = listaAmigos.length;

    let amigoSorteado = listaAmigos[Math.floor(Math.random() * cantiadAmigos)];
    console.log("Amigo sorteado: " + amigoSorteado);
    asignarTextoAElemento("#resultado", "Amigo sorteado: " + amigoSorteado);
}

function asignarTextoAElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}