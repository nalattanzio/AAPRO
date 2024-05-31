document.getElementById("formGeneros").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de manera tradicional
    var selectElement = document.getElementById("generos"); //Guarda todas las opciones del SELECT "generos"
    var selectedValue = selectElement.value; // Obtiene el valor de la opción seleccionada

    var elegido = '';
    switch(selectedValue){
        case 'value1':
            elegido = 'ACCION';
            break;
        case 'value2':
            elegido = 'AVENTURA';
            break;
        case 'value3':
            elegido = 'COMEDIA';
            break;
        case 'value4':
            elegido = 'DRAMA';
            break;
        case 'value5':
            elegido = 'CIENCIA FICCION';
            break;
        case 'value6':
            elegido = 'FANTASIA';
            break;
        case 'value7':
            elegido = 'TERROR';
            break;
        case 'value8':
            elegido = 'MISTERIO';
            break;
        case 'value9':
            elegido = 'SUSPENSO';
            break;
        case 'value10':
            elegido = 'ROMANCE';
            break;
        case 'value11':
            elegido = 'ANIMACION';
            break;
        case 'value12':
            elegido = 'DOCUMENTAL';
            break;
        case 'value13':
            elegido = 'CRIMEN';
            break;
        case 'value14':
            elegido = 'WESTERN';
            break;
        case 'value15':
            elegido = 'MUSICAL';
            break;
        case 'value16':
            elegido = 'GUERRA';
            break;
        case 'value17':
            elegido = 'BIOGRAFICO';
            break;
        case 'value18':
            elegido = 'HISTORICO';
            break;
        case 'value19':
            elegido = 'DEPORTES';
    }

    const elemento = document.getElementById('generote');
    elemento.textContent = elegido;
    
  });


  /*
console.log("");
console.warm("");
console.error("");
console.info("");

function buscarEnGoogle(){
    var cadena = document.getElementById(titulo);
    for (let index = 0; index < cadena.length; index++) {
        const element = array[index];
        
    }
}

<a href="https://www.google.com/search?q=ChatGPT" target="_blank">Buscar ChatGPT en Google</a>
*/
