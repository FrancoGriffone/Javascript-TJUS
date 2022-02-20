var tematica1=new Array("Alquileres", "Despidos/indemnizaciones", "Derechos reales", "Cobros","Otro");
var tematica2=new Array("Robo/hurto","Homicidio y variables","Abuso sexual en todas sus formas","Delitos públicos","Otro");
var tematica3=new Array("Contratos","Obligaciones","Societario","Consumidores","Otro");
var tematica4=new Array("Violencia intrafamiliar", "Cuota alimentaria", "Responsabilidad parental", "Otro");
var tematica5=new Array("No es necesario completar este campo");

var todasTematicas = [
  [],
  tematica1,
  tematica2,
  tematica3,
  tematica4,
  tematica5,
];

function cambia_area(){ 
     //tomo el valor del select del area elegido 
     var area 
     area = document.form1.area[document.form1.area.selectedIndex].value 
     //miro a ver si el area está definido 
     if (area != 0) { 
        //si estaba definido, entonces coloco las opciones de la tematica correspondiente. 
        //selecciono el array de tematica adecuado 
        misTematicas=todasTematicas[area]
        //calculo el numero de tematicas 
        numTematicas = misTematicas.length 
        //marco el número de tematicas en el select 
        document.form1.tematica.length = numTematicas 
        //para cada tematica del array, la introduzco en el select 
        for(i=0;i<numTematicas;i++){ 
           document.form1.tematica.options[i].value=misTematicas[i] 
           document.form1.tematica.options[i].text=misTematicas[i] 
        }	
     }else{ 
        //si no había tematica seleccionada, elimino las tematicas del select 
        document.form1.tematica.length = 1 
        //coloco un guión en la única opción que he dejado 
        document.form1.tematica.options[0].value = "No es necesario completar este campo" 
        document.form1.tematica.options[0].text = "No es necesario completar este campo"
     } 
     //marco como seleccionada la opción primera de tematica 
     document.form1.tematica.options[0].selected = true 
}
 
let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let email = id("exampleFormControlInput1"),
    form = id("form1"), 
    area = id ("area"),
    texto = id ("exampleFormControlTextarea1")
    errorMsg = classes ("errorMsg");

form.addEventListener("submit", (e) => {
   e.preventDefault();

   emailControl(email, 1, "Debes introducir un correo electrónico");
   areaControl

 });
let emailControl = (id, serial, mensaje) => {
   if (id.value.trim() === "") {
      errorMsg[serial].innerHTML = mensaje;
      id.style.border = "3px solid red";
   } else {
      errorMsg[serial].innerHTML = "";
      id.style.border = "3px solid green";
   }
}
function areaControl () {
   if (area.selectedIndex == null || area.selectedIndex == 0) {
      errorMsg[0].innerHTML = "Debes seleccionar un área"
      area.style.border = "3px solid red"; 
   } else if (area.selectedIndex == 5 && texto.value.trim() == "") {
      errorMsg[0].innerHTML = "Al seleccionar la opción /Otros/ el espacio para describir tu caso se vuelve obligatorio"
      errorMsg[2].innerHTML = "Debes completar este campo al seleccionar el área /Otros/"
      area.style.border = "3px solid red"; 
      texto.style.border = "3px solid red";
   } else {
      errorMsg[0].innerHTML = "";
      errorMsg[2].innerHTML = "";
      area.style.border = "3px solid green";
      texto.style.border = "3px solid green";
   }
} 
function finalizarFormulario () {
   form.addEventListener
   location.href = "../index.html";
}