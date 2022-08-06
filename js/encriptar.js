var botonEncriptar = document.querySelector("#boton-encriptar");
var textoEntrada = document.querySelector("#encripto");
var textoSalida = document.querySelector("#result");
var munheco = document.querySelector("#munheco");
var copiar = document.querySelector("#copyBoton");
var desencriptar = document.querySelector("#Desencriptar");
var mensaje = document.querySelector("#mensaje");

textoEntrada.value= "";
textoSalida.value= "";

botonEncriptar.addEventListener("click", function(event){
    if(textoEntrada.value == ""){
        alert("No se ha ingresado ningun Texto para Encriptar");
        return;
    }
    textoSalida.value= "";
    event.preventDefault();
    
    setTimeout(function(){
        encriptar();
        munheco.classList.add("oculto");
        textoSalida.classList.remove("oculto");
        copiar.classList.remove("oculto");
        mensaje.classList.add("oculto");
        desencriptar.classList.add("oculto");
    },200);
    
});

function encriptar(){
    var text = textoEntrada.value;
    text = text.replaceAll(/á/g,"a");
    text = text.replaceAll(/é/g,"e");
    text = text.replaceAll(/í/g,"i");
    text = text.replaceAll(/ó/g,"o");
    text = text.replaceAll(/ú/g,"u");

    text = text.replaceAll(/e/g,"enter");
    text = text.replaceAll(/i/g,"imes");
    text = text.replaceAll(/a/g,"ai");
    text = text.replaceAll(/o/g,"ober");
    text = text.replaceAll(/u/g,"ufat");

    textoSalida.value = text;
    
    return true;
}