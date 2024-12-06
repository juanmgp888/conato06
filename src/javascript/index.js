$(document).ready(function() {
    $("#boton03").hide();
   
    $("#boton01").on("click", function(){
        $(this).hide();
    })
 /*   $("#boton02").on("click", function(event){
        $('#boton03').show();
    })
*/

    accionParaElClick = function(event){
        $("#boton03").show();
    }
    $("#boton02").on("click",accionParaElClick); // Debajo del accionParaElClick


    // click, dblclick
/*    accionParaSuperBotonClick = function(event){
        $("#txtSuperBoton").text(":::: click");
    }
    accionParaSuperBotonDblClick = function(event){
        $("#txtSuperBoton").text(":::: doble click");
    }
    $("#superBoton").on("click",accionParaSuperBotonClick); 
    $("#superBoton").on("dblclick",accionParaSuperBotonDblClick); 
//    $("#superBoton").on("mouseenter",accionParaSuperBoton); 
//    $("#superBoton").on("mouseleave",accionParaSuperBoton); 
*/
    // Como el anterior aprox.
    $("#superBoton").on({
       click: function(){
       $("#txtSuperBoton").text(":::: click");
    },
       dblclick: function(){
       $("#txtSuperBoton").text(":::: doble click");
    }
    });



    // keypress, keydown, keyup
    $('#miInput').keydown(function(event) {
        var tecla = event.which || event.keyCode;
        var nombreTecla = String.fromCharCode(tecla); // Convierte el código a un carácter (si es una tecla imprimible)

        $('#teclaPulsada').text('Has presionado la tecla... '+nombreTecla);

      });


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


console.log('Consoleando que es gerundio');
});