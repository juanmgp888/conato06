$(document).ready(function() {
  $("#boton03").hide();
   
  $("#boton01").on("click", function(){
    $(this).hide(200);
  })

  // Con  una función anónima e inmediata:
 /*   $("#boton02").on("click", function(event){
        $('#boton03').show();
  })
*/
  // O con una función nombrada que se define por separado y se asocia al avento
  // Es reutilizable desde otros lugares.
  accionParaElClick = function(event){
    $("#boton03").show(200);
  }
  $("#boton02").on("click",accionParaElClick); // Debajo del accionParaElClick

  // Con funciones anónimas directas
  $("#superBoton").on({
    click: function(){
    $("#txtSuperBoton").text(":::: click");
    },
       dblclick: function(){
       $("#txtSuperBoton").text(":::: doble click");
    }
  });

  // Utilizando una sola función para manejar todos los eventos
  accionParaSuperBoton = function(event){
  // Dependiendo del tipo de evento, cambiar el texto
    if (event.type === "click") {
      $("#txtSuperBoton").text(":::: click");
    } else if (event.type === "dblclick") {
      $("#txtSuperBoton").text(":::: doble click");
    } else if (event.type === "mouseenter") {
      $("#txtSuperBoton").text(":::: mouseenter");
    } else if (event.type === "mouseleave") {
      $("#txtSuperBoton").text(":::: mouseleave");
    }
  };
  
  // Asignar el mismo manejador para todos los eventos
  $("#superBoton").on("click dblclick mouseenter mouseleave", accionParaSuperBoton);
  

  $('#miInput').keydown(function(event) {
    var tecla = event.which || event.keyCode;
    var nombreTecla = String.fromCharCode(tecla); // Convierte el código a un carácter (si es una tecla imprimible)
    $('#teclaPulsada').text('Has presionado la tecla... '+nombreTecla);
  });

  // Cambiar los estilos de un boton según tres eventos
  $("#iconoInternet").on({
    mouseenter: function(){
    $(this).css("background-color", "green");
    },
    mouseleave: function(){
    $(this).css("background-color", "lightblue");
    },
    click: function(){
    $(this).css("background-color", "yellow");
    }
  });


  $("#boton04").hover(
    function() {  // mouse enter
      $(this).val("BOTÓN04");
    },
    function() {  // mouse leave
      $(this).val("Botón04");
    }
  );

  // Obtener todas las ocurrencias de <button> dentro de #miBloqueBotones
  var botones = $("#miBloqueBotones").find("button");
  
  // Guardar la cantidad de botones encontrados
  var cantidadBotones = botones.length;

  // Mostrar la cantidad de botones encontrados
  $("h5").text("Cantidad de botones (uno oculto): "+cantidadBotones);
       

console.log('Consoleando que es gerundio');
});