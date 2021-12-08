function iniciarSesion() {
  if (document.getElementById("email").value !== '' && document.getElementById("password").value !== '') {
    $.ajax({
      url: `http://localhost:8080/api/user/${document.getElementById("email").value.toLowerCase()}/${document.getElementById("password").value}`,
      type: "GET",
      datatype: "JSON",
      success: function (respuesta) {
        if (respuesta.id !== null) {
          Swal.fire({
            title: `Bienvenido ${respuesta.name}`,
            icon: 'success',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            showConfirmButton: false,
            timer: 1500,
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            },
            color: '#03a9f4',
          })

        } else {
          Swal.fire({
            title: `Usuario o Contraseña Incorrectos`,
            icon: 'error',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            showConfirmButton: false,
            timer: 1500,
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            },
            color: 'red',
          })
        }
      }
    });
  } else {
    Swal.fire({
      title: `Diligenciar todos los campos`,
      icon: 'warning',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      showConfirmButton: false,
      timer: 1500,
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
      color: 'orange',
    })
  }

}

function onKeyDownHandler(event) {

  var codigo = event.which || event.keyCode;


  if (codigo === 13) {
    iniciarSesion();
  }

}