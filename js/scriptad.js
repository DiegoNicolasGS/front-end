function autoInicioAdmin(){
    console.log("se esta ejecutando")
    $.ajax({
        url:"http://129.151.109.22:8080/api/Admin/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta);
             
        }
    
    })
  
  }
  function pintarRespuesta(respuesta){
  
    let myTable="<table class='table table-striped table-bordered table-hover table-dark'><th><center>NAME</center></th><th><center>PASWORD</center></th><th><center>EMAIL</center></th><th><center>EDIT</center></th><th><center>DELETE</center></th>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td><center>"+respuesta[i].name+"</center></td>";
        myTable+="<td><center>"+respuesta[i].password+"</center></td>";
        myTable+="<td><center>"+respuesta[i].email+"</center></td>";
        myTable+="<td><center><button onclick=' actualizarInformacionAdmin("+respuesta[i].id+")'>Update</button></center>";
        myTable+="<td><center><button onclick='borrarAdmin("+respuesta[i].id+")'>Delete</button></center>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado1").html(myTable);
  }
  
  function guardarInformacionAdmin(){
    let var2 = {
        name:$("#Aname").val(),
        password:$("#Apassword").val(),
        email:$("#Aemail").val()
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),
        
        url:"http://129.151.109.22:8080/api/Admin/save",
       
        
        success:function(response) {
                console.log(response);
            console.log("Se guardo correctamente");
            alert("The Admin was saved correctly.");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("The Admin was not saved correctly.");
    
    
        }
        });
  
  }
  
  function actualizarInformacionAdmin(idElemento){
    let myData={
        id:idElemento,
        name:$("#Aname").val(),
        password:$("#Apassword").val(),
        email:$("#Aemail").val()
  
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.109.22:8080/api/Admin/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#Aname").val("");
            $("#Apassword").val("");
            $("#Aemail").val("");
            autoInicioAdmin();
            alert("Correctly modified admin.")
        }
    });
  
  }
  
  function borrarAdmin(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.109.22:8080/api/Admin/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            autoInicioAdmin();
            alert("Admin removed successfully.")
        }
    });
  
  }
  
  
  
  // Doctor
  
  function autoInicioScore(){
    console.log("se esta ejecutando")
    $.ajax({
        url:"http://129.151.109.22:8080/api/Score/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta1(respuesta);
        }
    
    })
  
  }
  function pintarRespuesta1(respuesta){
  
    let myTable="<table class='table table-striped table-bordered table-hover table-dark'><th><center>TEXT</center></th><th><center>STARS</center></th><th><center>DATE</center></th><th><center>EDIT</center></th><th><center>DELETE</center></th>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].text+"</td>";
        myTable+="<td>"+respuesta[i].stars+"</td>";
        myTable+="<td>"+respuesta[i].date+"</td>";
        myTable+="<td> <button onclick=' actualizarInformacionScore("+respuesta[i].id+")'>Actualizar</button>";
        myTable+="<td> <button onclick='borrarScore("+respuesta[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado2").html(myTable);
  }
  
  function guardarInformacionScore(){
    let var2 = {
        text:$("#Stext").val(),
        stars:$("#Sstars").val(),
        date:$("#Sdate").val(),
        };
       
        console.log(var2);
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),
        
        url:"http://129.151.109.22:8080/api/Score/save",
       
        
        success:function(response) {
                console.log(response);
            console.log("Se guardo correctamente");
            alert("The score was saved correctly.");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("The score was not saved correctly.");
    
    
        }
        });
  
  }
  
  function actualizarInformacionScore(idElemento){
    let myData={
        id:idElemento,
        text:$("#Stext").val(),
        stars:$("#Sstars").val(),
        date:$("#Sdate").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.109.22:8080/api/Score/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#Stext").val("");
            $("#Sstars").val("");
            $("#Sdate").val("");
            autoInicioScore();
            alert("The score was modified correctly.")
        }
    });
  
  }
  
  function borrarScore(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.109.22:8080/api/Score/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            autoInicioScore();
            alert("The score was removed correctly.")
        }
    });
  
  }