function autoInicioReport(){
    console.log("se esta ejecutando")
    $.ajax({
        url:"http://129.151.109.22:8080/api/Reservation/report-status",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta);
             
        }
    })
}

function pintarRespuesta(respuesta){
    let myTable="<table class='table'><thead class='thead-dark'><th><center>COMPLETED</center></th><th><center>CANCELED</center></th></thead>";
        myTable+="<tr>";
        myTable+="<td><center>"+respuesta.completed+"</center></td>";
        myTable+="<td><center>"+respuesta.cancelled+"</center></td>";
        myTable+="</tr>";
    myTable+="</table>";
    $("#resultado").html(myTable);
}


// date

function traerReporteDate(){
    
   

    var fechaInicio = document.getElementById("RstarDate").value;
    var fechaCierre = document.getElementById("RdevolutionDate").value;
  console.log(fechaInicio);
  console.log(fechaCierre);

    $.ajax({
        url:"http://129.151.109.22:8080/api/Reservation/report-dates/"+fechaInicio+"/"+fechaCierre,
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaDate(respuesta);
        }
    });
}
function pintarRespuestaDate(respuesta){

    let myTable="<table class='table'><thead class='thead-dark'><th><center>DEVOLUTION DATE</center></th><th><center>START DATE</center></th><th><center>STATUS</center></th></thead>";
    myTable+="<tr>";
      
    for(i=0;i<respuesta.length;i++){
        myTable+="<td><center>"+respuesta[i].devolutionDate+"</center></td>";
        myTable+="<td><center>"+respuesta[i].startDate+"</center></td>";
        myTable+="<td><center>"+respuesta[i].status+"</center></td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoDate").html(myTable);
}

// reporte clientes favoritos

function traerReporteClientes(){
    $.ajax({
        url:"http://129.151.109.22:8080/api/Reservation/report-clients",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaClientes(respuesta);
        }
    });
}

function pintarRespuestaClientes(respuesta){

    let myTable="<table class='table'><thead class='thead-dark'><th><center>TOTAL RESERVATIONS</center></th><th><center>NAME</center></th><th><center>EMAIL</center></th><th><center>AGE</center></th></thead>";
    myTable+="<tr>";
      
    for(i=0;i<respuesta.length;i++){
        myTable+="<td><center>"+respuesta[i].total+"</center></td>";
        myTable+="<td><center>"+respuesta[i].client.name+"</center></td>";
        myTable+="<td><center>"+respuesta[i].client.email+"</center></td>";
        myTable+="<td><center>"+respuesta[i].client.age+"</center></td>";
      
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoClientes").html(myTable);
}

