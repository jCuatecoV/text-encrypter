const campo_texto = document.querySelector("#txt-encriptado");
const campo_msn = document.querySelector("#mensaje");


const matriz_code = [
    ["e", "enter"], //indice 0
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

function btnEncriptar() {
    const texto = encriptar(campo_texto.value.toLowerCase());
    mensaje.value = texto;
    limpiar();
    mensaje.style.backgroundImage = "none";
}

function encriptar(fraseEncriptada) {
    for (let i = 0; i < matriz_code.length; i++) {
        if (fraseEncriptada.includes(matriz_code[i][0])) {
            fraseEncriptada = fraseEncriptada.replaceAll(matriz_code[i][0],matriz_code[i][1])
        }
        
    }
    return fraseEncriptada;
}

function btnDesencriptar() {
    const texto = desencriptar(campo_texto.value);
    mensaje.value = texto;
    limpiar();
}

function desencriptar(fraseDesencriptada) {
    for (let i = 0; i < matriz_code.length; i++) {
        if (fraseDesencriptada.includes(matriz_code[i][1])) {
            fraseDesencriptada = fraseDesencriptada.replaceAll(matriz_code[i][1],matriz_code[i][0])
        }
        
    }
    return fraseDesencriptada;
}

function copiar() {
    const papelera = document.querySelector("#mensaje").value;
    navigator.clipboard.writeText(papelera);
    console.log(alert("El mensaje se ha copiado"));
    
}
function limpiar() {
    campo_texto.value = "";
}
  