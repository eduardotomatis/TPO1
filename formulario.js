function validar() {
    var nombre, correo, telefono, expresion;
    nombre = document.getElementById("nombre").value;
    correo = document.getElementById("correo").value;
    telefono = document.getElementById("telefono").value;

    expresion = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (nombre === "" || correo === "" || telefono === "") {
        alert("El campo esta vacio");
        return false;
    } else if (nombre.length > 60) {
        alert("Limite de caracteres exedido");
        return false;
    } else if (!expresion.test(correo)) {
        alert("El correo no es valido");
        return false;
    } else if (telefono.length > 14) {
        alert("El telefono es muy largo");
        return false;
    } else if (isNaN(telefono)) {
        alert("El telefono no es un numero");
        return false;
    }

}