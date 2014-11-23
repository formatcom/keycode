// Creado por FormatCom
// No dejen de visitarnos 
 
var temp = false;
 
var teclado = {};
 
function log(texto,nueva){
    var capa=document.getElementById("log");
    if (nueva)
        capa.innerHTML+="<br/>"+texto;
    else
        capa.innerHTML=texto;
}
 
function limpiar(){
    log('Presione una tecla');
}
 
function elementoControl(){
    agregarEvento(document,"keydown",function(e){
        //se coloca true la tecla presionada
        if(!temp){
            e.preventDefault();
            teclado[e.keyCode] = true;
            log('Codigo: ' + e.keyCode,true);
            temp = true;
        }
    });
    agregarEvento(document,"keyup",function(e){
        //se coloca false al soltar la tecla
        teclado[e.keyCode] = false;
        temp = false;
    });
 
    function agregarEvento(elemento, nombreEvento, funtion){
        if(elemento.addEventListener){
            //navegadores de verdad
            elemento.addEventListener(nombreEvento, funtion, false);
        }else if(elemento.attachEvent){
            //internet explorer xD...
            elemento.attachEvent(nombreEvento, funtion, false);
        }
    }
}
 
elementoControl();