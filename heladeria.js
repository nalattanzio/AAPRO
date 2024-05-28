/* CLASE 11 */

/* HELADERIA */

var tamanio;
var topping;
var precio;
var cantSabores;
var listaSabores = [];
var respuesta = new Boolean();


function calcularPrecio() {
  

  respuesta = envase();
  if (respuesta) {
    alert("No eligió ningún tamaño");
  } else {
    respuesta = sabores();
    if (respuesta) {
      alert("No eligió ningún sabor");
    } else {
      respuesta = saboresPorEnvase();
      if (respuesta) {
        alert("Puede elegir hasta " + cantSabores + " sabores.");
      } else {
          aderezo();
          precios();
          detalleCompra();
          fecha();
      }
    }
  }
}

function envase() {
  tamanio = '';
  
  const radios = document.getElementsByName("tamanio");
  for (const radio of radios) {
    if (radio.checked) {
      tamanio = radio.value;
    }
  }

  if (tamanio == '') {
    return true;
  } else {
      return false;
  }
}

function sabores() {
  var matrizSabores = [];
  cantSabores = 0;
  listaSabores = [];

  matrizSabores[0]= document.getElementById("frutilla");
  matrizSabores[1]= document.getElementById("naranja");
  matrizSabores[2]= document.getElementById("limon");
  matrizSabores[3]= document.getElementById("ddleche");
  matrizSabores[4]= document.getElementById("chocolate");
  matrizSabores[5]= document.getElementById("vainilla");
  matrizSabores[6]= document.getElementById("tramontana");
  matrizSabores[7]= document.getElementById("fdbosque");
  matrizSabores[8]= document.getElementById("cdalmendra");

  for (let index = 0; index < matrizSabores.length; index++) {
    if (matrizSabores[index].checked){
      cantSabores++;
      listaSabores = listaSabores + matrizSabores[index].name;
    }
  }

  if (cantSabores == 0) {
    return true;
  } else {
      return false;
  }
}


function saboresPorEnvase() {

  switch (tamanio) {
    case "1 bocha":
      if (cantSabores !== 1) {
        cantSabores = 1;
        return true;
      } else {
          return false;
      }

    case "2 bochas":
    case "Cono Dulce":
    case "Tasita":
      if (cantSabores > 2) {
        cantSabores = 2;
        return true;
      } else {
        return false;
      }

    case "3 bochas":
    case "1/4 Kg":
      if (cantSabores > 3) {
        cantSabores = 3;
        return true;
      } else {
        return false;
      }

      case "1/2 Kg":
    case "1 Kg":
      if (cantSabores > 4) {
        cantSabores = 4;
        return true;
      } else {
        return false;
      }
  }
}

function aderezo() {
  topping = "";
  const radio2 = document.getElementsByName("topping");
  for (const radio of radio2) {
    if (radio.checked) {
      topping = radio.value;
    }
  }

  if (topping == "") {
    topping = "sin topping";
  }
}

function precios() {
  switch (tamanio) {
    case "1 bocha":
      precio = 10;
      break;
    case "2 bochas":
      precio = 18;
      break;
    case "3 bochas":
      precio = 27;
      break;
    case "Cono Dulce":
      precio = 33;
      break;
    case "Tasita":
      precio = 30;
      break;
    case "1/4 Kg":
      precio = 35;
      break;
    case "1/2 Kg":
      precio = 65;
      break;
    case "1 Kg":
      precio = 120;
  }

  switch (topping) {
    case "Oreo":
      precio = precio + 5;
      break;
    case "KitKat":
      precio = precio + 6;
      break;
    case "Kinder":
      precio = precio + 7;
  }
}

function detalleCompra() {
  alert(
    "SU COMPRA:  TAMAÑO: " +
      tamanio +
      "   SABORES: " +
      cantSabores +
      " (" +
      listaSabores +
      ")   TOPPING: " +
      topping +
      "   A PAGAR: $" +
      precio +
      ".-"
  );
}

function rutinaError() {
  alert("Por favor revise su pedido");
  huboError = !huboError;
}

function fecha() {
  const a = new Date();
  const m = new Date();
  const d = new Date();
  const h = new Date();
  const t = new Date();
  const s = new Date();
  
  let anio = a.getFullYear();
  
  let mes = m.getMonth() + 1;
  if (mes < 10) {
    mes = "0" + mes;
  }
  
  let dia = d.getDate();
  if (dia < 10) {
    dia = "0" + dia;
  }
  
  let hora = h.getHours();
  if (hora < 10) {
    hora = "0" + hora;
  }
  
  let minuto = t.getMinutes();
  if (minuto < 10) {
    minuto = "0" + minuto;
  }
  
  let segundo = s.getSeconds();
  if (segundo < 10) {
    segundo = "0" + segundo;
  }
  
  let cadenaFecha = dia + "/" + mes + "/" + anio + "  " + hora + ":" + minuto + ":" + segundo;
  
  const elemento = document.getElementById('fechaYhora');
  elemento.textContent = cadenaFecha;
 
}


/*
function calcularPrecio() {
  envase();

  if (huboError == false) {
    sabores();

    if (huboError == false) {
      saboresPorEnvase();

      if (huboError == false) {
        aderezo();
        precios();
        detalleCompra();
        fecha();
      } else {
        rutinaError();
      }
    } else {
      rutinaError();
    }
  } else {
    rutinaError();
  }
}
*/