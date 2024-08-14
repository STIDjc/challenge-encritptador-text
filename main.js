// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"


/*encriptador*/
function encriptar(){
    let textoUser = document.getElementById("text_input").value;
    if(validarCaracteres(textoUser)){
        mensajeAlerta("Caracteres no permitidos");
        return;
    }
    let resultado=textoUser.replace(/e/g,'enter').replace(/i/g,'imes').replace(/a/g,'ai').replace(/o/g,'ober').replace(/u/g,'ufat');
    //verificar la longitud minima para encriptar 
    if(textoUser.length < 4){
        mensajeAlerta("Para una mejor experiencia ingresa al menos dos palabra");
        document.getElementById("text_input").value = textoUser;
    }
        document.getElementById('panel').innerText = resultado
        if(textoUser !== ""){
            document.getElementById("text_encrip").innerText = "Texto encriptado";
        
        return resultado;
    }
}

/*desencriptador*/
function desencriptar(){
    let textoUser = document.getElementById("text_input").value;
    if(validarCaracteres(textoUser)){
        mensajeAlerta("Caracteres no permitidos");
        return;
    }
    let resultado=textoUser.replace(/enter/g,'e').replace(/imes/g,'i').replace(/ai/g,'a').replace(/ober/g,'o').replace(/ufat/g,'u');
    
    document.getElementById('panel').innerText = resultado;
    if(textoUser !== ""){
        document.getElementById("text_encrip").innerText = "Texto desencriptado";
    }
    return resultado;
}

//validar caracteres no permitidos
function validarCaracteres(text){
    let validar = new RegExp("[^a-zñ\r\n ]+");
    return validar.test(text);
}

//validar caracteres no permitidos
function validar(elemento){
    if(validarCaracteres(elemento.value)){
        elemento.setAttribute("maxlength", elemento.value.length);
        
    } else{
            elemento.removeAttribute("maxlength");     
    }
    if(elemento.value.length <= 0){
        document.getElementById("text_encrip").innerText = "Texto";
        document.getElementById("panel").innerText = "";
        
    }
}

//mensaje de alerta
function mensajeAlerta(texto){
    document.getElementById("alerta_info").innerText = texto
    document.getElementById("alerta_info").show();
    document.getElementById("alerta_info").style.opacity = 1; 
    setTimeout(function(){document.getElementById("alerta_info").close();
    document.getElementById("alerta_info").style.opacity = 0;},3000); 
}

//btn copiar
function copiarTexto(){
    let textarea = document.getElementById("panel");
    let imgCopiado = document.getElementById("img_copiado");
    let mensajeCopiado = document.getElementById("text_copiado");
    
    if(textarea.value.trim()!== ""){
        textarea.select();
         //copiar el texto seleccionado
        document.execCommand("copy");

        mensajeCopiado.style.display = "inline";//mostrar el mensaje en la pantalla
        imgCopiado.style.display = "none";
        /*
         *cuando se precione el icono aperece el text
         *cuando aparece el text se oculta el icono 
         *pasado 2 sg retorna el icono se esconde el icono
        */
        setTimeout(function(){
            imgCopiado.style.display = "inline";
        }, 2000);
        //para ocultar el mensaje
        setTimeout(function(){
            mensajeCopiado.style.display = "none";//oculta el mensaje 
        }, 2000);// dos segundos
    }
}

//btn clear text
function clearText(){
    let textoUser = document.getElementById("text_input");
    if(textoUser.value.length > 0){
        textoUser.value = "";
    }
    return textoUser;
}


//function para cambios de imagenes :D

// funtion para el cambio de igms:background
// function cambiarFondoImagen() {
//     const imagenes = [
//         'url("img/girl-lofi.jpeg")',
//         'url("img/chica-anime-rosa.jpg")',
//     ];
//     let indice = 0;

//     function cambiar() {
//         let indice = Math.floor(Math.random()*imagenes.length);
//         document.body.style.backgroundImage = imagenes[indice];
//         indice = (indice + 1) % imagenes.length;
//     }
//     cambiar();

//     // Cambiar cada 2 minutos (120000 milisegundos)
//     setInterval(cambiar, 200000);
// }
// cambiarFondoImagen();