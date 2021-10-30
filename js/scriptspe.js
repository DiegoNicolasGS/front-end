function autoInicioSpec(){
  console.log("se esta ejecutando")
  $.ajax({
      url:"http://129.151.109.22:8080/api/Specialty/all",
      type:"GET",
      datatype:"JSON",
      success:function(respuesta){
          console.log(respuesta);
          pintarRespuesta(respuesta);
          let $select = $("#select-specialty");
          $.each(respuesta, function (id, name) {
              $select.append('<option value='+name.id+'>'+name.name+'</option>');
              console.log("select "+name.id);
          }); 
      }
  
  })

}
function pintarRespuesta(respuesta){

  let myTable="<table class='table table-striped table-bordered table-hover table-dark'><th><center>NAME</center></th><th><center>DESCRIPTION</center></th><th><center>EDIT</center></th><th><center>DELETE</center></th>";
  for(i=0;i<respuesta.length;i++){
      myTable+="<tr>";
      myTable+="<td><center>"+respuesta[i].name+"</center></td>";
      myTable+="<td><center>"+respuesta[i].description+"</center></td>";
      myTable+="<td><center><button onclick=' actualizarInformacionSpec("+respuesta[i].id+")'>Update</button></center>";
      myTable+="<td><center><button onclick='borrarSpec("+respuesta[i].id+")'>Delete</button></center>";
      myTable+="</tr>";
  }
  myTable+="</table>";
  $("#resultado1").html(myTable);
}

function guardarInformacionSpec(){
  let var2 = {
      name:$("#Sname").val(),
      description:$("#Sdescription").val()
      };
    
      $.ajax({
      type:'POST',
      contentType: "application/json; charset=utf-8",
      dataType: 'JSON',
      data: JSON.stringify(var2),
      
      url:"http://129.151.109.22:8080/api/Specialty/save",
     
      
      success:function(response) {
              console.log(response);
          console.log("Se guardo correctamente");
          alert("The specialty was saved correctly.");
          window.location.reload()
  
      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            window.location.reload()
          alert("The specialty was not saved correctly.");
  
  
      }
      });

}

function actualizarInformacionSpec(idElemento){
  let myData={
      id:idElemento,
      name:$("#Sname").val(),
      description:$("#Sdescription").val()

  };
  console.log(myData);
  let dataToSend=JSON.stringify(myData);
  $.ajax({
      url:"http://129.151.109.22:8080/api/Specialty/update",
      type:"PUT",
      data:dataToSend,
      contentType:"application/JSON",
      datatype:"JSON",
      success:function(respuesta){
          $("#resultado").empty();
          $("#id").val("");
          $("#Sname").val("");
          $("#Sdescription").val("");
          autoInicioSpec();
          alert("Correctly modified specialty.")
      }
  });

}

function borrarSpec(idElemento){
  let myData={
      id:idElemento
  };
  let dataToSend=JSON.stringify(myData);
  $.ajax({
      url:"http://129.151.109.22:8080/api/Specialty/"+idElemento,
      type:"DELETE",
      data:dataToSend,
      contentType:"application/JSON",
      datatype:"JSON",
      success:function(respuesta){
          $("#resultado").empty();
          autoInicioSpec();
          alert("Specialty removed successfully.")
      }
  });

}



// Doctor

function autoInicioDoc(){
  console.log("se esta ejecutando")
  $.ajax({
      url:"http://129.151.109.22:8080/api/Doctor/all",
      type:"GET",
      datatype:"JSON",
      success:function(respuesta){
          console.log(respuesta);
          pintarRespuesta1(respuesta);
          let $select = $("#select-doctor");
          $.each(respuesta, function (id, name) {
              $select.append('<option value='+name.id+'>'+name.name+'</option>');
              console.log("select "+name.id);
          }); 
          let $select1 = $("#select-doctor1");
          $.each(respuesta, function (id, name) {
              $select1.append('<option value='+name.id+'>'+name.name+'</option>');
              console.log("select1 "+name.id);
          });
      }
  
  })

}
function pintarRespuesta1(respuesta){

  let myTable="<table class='table table-striped table-bordered table-hover table-dark'><th><center>NAME</center></th><th><center>DEPARTMENT</center></th><th><center>YEAR</center></th><th><center>DESCRIPTION</center></th><th><center>SPECIALTY</center></th><th><center>EDIT</center></th><th><center>DELETE</center></th>";
  for(i=0;i<respuesta.length;i++){
      myTable+="<tr>";
      myTable+="<td>"+respuesta[i].name+"</td>";
      myTable+="<td>"+respuesta[i].department+"</td>";
      myTable+="<td>"+respuesta[i].year+"</td>";
      myTable+="<td>"+respuesta[i].description+"</td>";
      myTable+="<td>"+respuesta[i].specialty.name+"</td>";
      myTable+="<td> <button onclick=' actualizarInformacionDoc("+respuesta[i].id+")'>Actualizar</button>";
      myTable+="<td> <button onclick='borrarDoc("+respuesta[i].id+")'>Borrar</button>";
      myTable+="</tr>";
  }
  myTable+="</table>";
  $("#resultado2").html(myTable);
}

function guardarInformacionDoc(){
  let var2 = {
      name:$("#Dname").val(),
      department:$("#Ddepartment").val(),
      year:$("#Dyear").val(),
      description:$("#Ddescription").val(),
      specialty: {id:+$("#select-specialty").val()},
      };
     
      console.log(var2);
      $.ajax({
      type:'POST',
      contentType: "application/json; charset=utf-8",
      dataType: 'JSON',
      data: JSON.stringify(var2),
      
      url:"http://129.151.109.22:8080/api/Doctor/save",
     
      
      success:function(response) {
              console.log(response);
          console.log("Se guardo correctamente");
          alert("The doctor was saved correctly.");
          window.location.reload()
  
      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            window.location.reload()
          alert("The doctor was not saved correctly.");
  
  
      }
      });

}

function actualizarInformacionDoc(idElemento){
  let myData={
      id:idElemento,
      name:$("#Dname").val(),
      department:$("#Ddepartment").val(),
      year:$("#Dyear").val(),
      description:$("#Ddescription").val(),
      specialty: {id:+$("#select-specialty").val()},


  };
  console.log(myData);
  let dataToSend=JSON.stringify(myData);
  $.ajax({
      url:"http://129.151.109.22:8080/api/Doctor/update",
      type:"PUT",
      data:dataToSend,
      contentType:"application/JSON",
      datatype:"JSON",
      success:function(respuesta){
          $("#resultado").empty();
          $("#id").val("");
          $("#Dname").val("");
          $("#Ddepartment").val("");
          $("#Dyear").val("");
          $("#Ddescription").val("");
          $("select-specialty").val("");
          autoInicioDoc();
          alert("The doctor was modified correctly.")
      }
  });

}

function borrarDoc(idElemento){
  let myData={
      id:idElemento
  };
  let dataToSend=JSON.stringify(myData);
  $.ajax({
      url:"http://129.151.109.22:8080/api/Doctor/"+idElemento,
      type:"DELETE",
      data:dataToSend,
      contentType:"application/JSON",
      datatype:"JSON",
      success:function(respuesta){
          $("#resultado").empty();
          autoInicioDoc();
          alert("The doctor was removed correctly.")
      }
  });

}

// Cliente

function autoInicioCli(){
  console.log("se esta ejecutando")
  $.ajax({
      url:"http://129.151.109.22:8080/api/Client/all",
      type:"GET",
      datatype:"JSON",
      success:function(respuesta){
          console.log(respuesta);
          pintarRespuesta2(respuesta);
          let $select = $("#select-client");
          $.each(respuesta, function (idClient, name) {
              $select.append('<option value='+name.idClient+'>'+name.name+'</option>');
              console.log("select "+name.idClient);
          });
          let $select1 = $("#select-client1");
          $.each(respuesta, function (idClient, name) {
              $select1.append('<option value='+name.idClient+'>'+name.name+'</option>');
              console.log("select1 "+name.idClient);
          });
      }
  
  })

}
function pintarRespuesta2(respuesta){

  let myTable="<table class='table table-striped table-bordered table-hover table-dark'><th><center>EMAIL</center></th><th><center>PASSWORD</center></th><th><center>NAME</center></th><th><center>AGE</center></th><th><center>EDIT</center></th><th><center>DELETE</center></th>";
  for(i=0;i<respuesta.length;i++){
      myTable+="<tr>";
      
      myTable+="<td>"+respuesta[i].email+"</td>";
      myTable+="<td>"+respuesta[i].password+"</td>";
      myTable+="<td>"+respuesta[i].name+"</td>";
      myTable+="<td>"+respuesta[i].age+"</td>";
      myTable+="<td> <button onclick=' actualizarInformacionCli("+respuesta[i].idClient+")'>Actualizar</button>";
      myTable+="<td> <button onclick='borrarCli("+respuesta[i].idClient+")'>Borrar</button>";
      myTable+="</tr>";
  }
  myTable+="</table>";
  $("#resultado3").html(myTable);
}

function guardarInformacionCli(){
  let var2 = {
      
      email:$("#Clemail").val(),
      password:$("#Clpassword").val(),
      name:$("#Clname").val(),
      age:$("#Clage").val(),
   
      };
     
      console.log(var2);
      $.ajax({
      type:'POST',
      contentType: "application/json; charset=utf-8",
      dataType: 'JSON',
      data: JSON.stringify(var2),
      
      url:"http://129.151.109.22:8080/api/Client/save",
     
      
      success:function(response) {
              console.log(response);
          console.log("Se guardo correctamente");
          alert("The client was saved correctly.");
          window.location.reload()
  
      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("The client was not saved correctly.");
  
  
      }
      });

}

function actualizarInformacionCli(idElemento){
  let myData={
      idClient:idElemento,
      email:$("#Clemail").val(),
      password:$("#Clpassword").val(),
      name:$("#Clname").val(),
      age:$("#Clage").val(),


  };
  console.log(myData);
  let dataToSend=JSON.stringify(myData);
  $.ajax({
      url:"http://129.151.109.22:8080/api/Client/update",
      type:"PUT",
      data:dataToSend,
      contentType:"application/JSON",
      datatype:"JSON",
      success:function(respuesta){
          $("#resultado").empty();
          $("#idClient").val("");
          $("#Clemail").val("");
          $("#Clpassword").val("");
          $("#Clname").val("");
          $("#Clage").val("");
          autoInicioCli();
          alert("The client was modified correctly.")
      }
  });

}

function borrarCli(idElemento){
  let myData={
      idClient:idElemento
  };
  let dataToSend=JSON.stringify(myData);
  $.ajax({
      url:"http://129.151.109.22:8080/api/Client/"+idElemento,
      type:"DELETE",
      data:dataToSend,
      contentType:"application/JSON",
      datatype:"JSON",
      success:function(respuesta){
          $("#resultado").empty();
          autoInicioCli();
          alert("The client was removed correctly.")
      }
  });

}

// Menssage

function autoInicioMess(){
  console.log("se esta ejecutando")
  $.ajax({
      url:"http://129.151.109.22:8080/api/Message/all",
      type:"GET",
      datatype:"JSON",
      success:function(respuesta){
          console.log(respuesta);
          pintarRespuesta4(respuesta);
          let $select = $("#select-message");
          $.each(respuesta, function (idMessage, name) {
              $select.append('<option value='+name.idMessage+'>'+name.name+'</option>');
              console.log("select "+name.idMessage);
          });
      }
  
  })

}
function pintarRespuesta4(respuesta){

  let myTable="<table class='table table-striped table-bordered table-hover table-dark'><th><center>MESSAGE TEXT</center></th><th><center>DOCTOR</center></th><th><center>CLIENT</center></th><th><center>EDIT</center></th><th><center>DELETE</center></th>";
  for(i=0;i<respuesta.length;i++){
      myTable+="<tr>";
      
      myTable+="<td>"+respuesta[i].messageText+"</td>";
      myTable+="<td>"+respuesta[i].doctor.name+"</td>";
      myTable+="<td>"+respuesta[i].client.name+"</td>";
      myTable+="<td> <button onclick=' actualizarInformacionMess("+respuesta[i].idMessage+")'>Actualizar</button>";
      myTable+="<td> <button onclick='borrarMess("+respuesta[i].idMessage+")'>Borrar</button>";
      myTable+="</tr>";
  }
  myTable+="</table>";
  $("#resultado4").html(myTable);
}

function guardarInformacionMess(){
  let var2 = {
      
    messageText:$("#MmessageText").val(),
    doctor: {id:+$("#select-doctor").val()},
    client: {idClient:+$("#select-client").val()},
   
    };
     
      console.log(var2);
      $.ajax({
      type:'POST',
      contentType: "application/json; charset=utf-8",
      dataType: 'JSON',
      data: JSON.stringify(var2),
      
      url:"http://129.151.109.22:8080/api/Message/save",
     
      
      success:function(response) {
              console.log(response);
          console.log("Se guardo correctamente");
          alert("The Message was saved correctly.");
          window.location.reload()
  
      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("The Message was not saved correctly.");
  
  
      }
      });

}

function actualizarInformacionMess(idElemento){
  let myData={
      idMessage:idElemento,
      messageText:$("#MmessageText").val(),
      doctor:{id:+$("#select-doctor").val()},
      client:{idClient:+$("#select-client").val()}
  };
  console.log(myData);
  let dataToSend=JSON.stringify(myData);
  $.ajax({
      url:"http://129.151.109.22:8080/api/Message/update",
      type:"PUT",
      data:dataToSend,
      contentType:"application/JSON",
      datatype:"JSON",
      success:function(respuesta){
          $("#resultado4").empty();
          $("#idMessage").val("");
          $("#MmessageText").val("");
          $("#select-doctor").val("");
          $("#select-client").val("");
          autoInicioMess();
          alert("The Message was modified correctly.")
      }
  });

}

function borrarMess(idElemento){
  let myData={
      idMessage:idElemento
  };
  let dataToSend=JSON.stringify(myData);
  $.ajax({
      url:"http://129.151.109.22:8080/api/Message/"+idElemento,
      type:"DELETE",
      data:dataToSend,
      contentType:"application/JSON",
      datatype:"JSON",
      success:function(respuesta){
          $("#resultado4").empty();
          autoInicioMess();
          alert("The Message was removed correctly.")
      }
  });

}

// Reservations 

function autoInicioRes(){
    console.log("se esta ejecutando")
    $.ajax({
        url:"http://129.151.109.22:8080/api/Reservation/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta5(respuesta);
            let $select = $("#select-reservation");
            $.each(respuesta, function (idReservation, name) {
                $select.append('<option value='+name.idReservation+'>'+name.name+'</option>');
                console.log("select "+name.idReservation);
            });
        }
    
    })
  
  }
  function pintarRespuesta5(respuesta){
  
    let myTable="<table class='table table-striped table-bordered table-hover table-dark'><th><center>START DATE</center></th><th><center>DEVOLUTION DATE</center></th><th><center>STATUS</center></th><th><center>DOCTOR</center></th><th><center>CLIENT</center></th><th><center>EDIT</center></th><th><center>DELETE</center></th>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        
        myTable+="<td>"+respuesta[i].startDate+"</td>";
        myTable+="<td>"+respuesta[i].devolutionDate+"</td>";
        myTable+="<td>"+respuesta[i].status+"</td>";
        myTable+="<td>"+respuesta[i].doctor.name+"</td>";
        myTable+="<td>"+respuesta[i].client.name+"</td>";
        myTable+="<td> <button onclick=' actualizarInformacionRess("+respuesta[i].idReservation+")'>Actualizar</button>";
        myTable+="<td> <button onclick='borrarRess("+respuesta[i].idReservation+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado5").html(myTable);
  }
  
  function guardarInformacionRess(){
    let var2 = {
        startDate:$("#RstartDate").val(),
        devolutionDate:$("#RdevolutionDate").val(),
        doctor: {id:+$("#select-doctor1").val()},
        client: {idClient:+$("#select-client1").val()},
     
      };
       
        console.log(var2);
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),
        
        url:"http://129.151.109.22:8080/api/Reservation/save",
       
        
        success:function(response) {
                console.log(response);
            console.log("Se guardo correctamente");
            alert("The Reservation was saved correctly.");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
              alert("The Reservation was not saved correctly.");
    
    
        }
        });
  
  }
  
  function actualizarInformacionRess(idElemento){
    let myData={
        idReservation:idElemento,
        startDate:$("#RstartDate").val(),
        devolutionDate:$("#RdevolutionDate").val(),
        doctor:{id:+$("#select-doctor1").val()},
        client:{idClient:+$("#select-client1").val()}
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.109.22:8080/api/Reservation/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado5").empty();
            $("#idReservation").val("");
            $("#RstartDate").val("");
            $("#RdevolutionDate").val("");
            $("#select-doctor").val("");
            $("#select-client").val("");
            autoInicioRes();
            alert("The Reservation was modified correctly.")
        }
    });
  
  }
  
  function borrarRess(idElemento){
    let myData={
        idMessage:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.109.22:8080/api/Reservation/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado5").empty();
            autoInicioRes();
            alert("The Reservation was removed correctly.")
        }
    });
  
  }
