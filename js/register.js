const validacionRegistro = () => {
  let email = document.getElementById("email").value
  let name = document.getElementById("name").value
  let password = document.getElementById("password").value
  let repeatPassword = document.getElementById("repeatPassword").value
  var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z])+\.)+([a-zA-Z]{2,4})+$/;
  if (email !== '' && name !== '' && password !== '' && repeatPassword !== '') {
    if (expr.test(email)) {
      if (password === repeatPassword) {
        registrarUsuario()
      } else {
        Swal.fire({
          title: `Las contraseñas no coincides`,
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
    } else {
      Swal.fire({
        title: `Correo no valido`,
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

// Ejemplo implementando el metodo POST:
async function registrarUsuario(url = 'http://localhost:8080/api/user/new', data = {
  email: document.getElementById("email").value.toLowerCase(),
  name: document.getElementById("name").value,
  password: document.getElementById("password").value,
}) {
  try {
    // Opciones por defecto estan marcadas con un *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    if (response.status === 201) {
      // window.location = "index.html"
      Swal.fire({
        title: `Usuario creado con exito`,
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
      setTimeout(() => {
        window.location = "index.html"
      }, 1500);
      $("#email").val("");
      $("#name").val("");
      $("#password").val("");
      $("#repeatPassword").val("");
      // alert("¡ Usuario creado con exito !")
    } else {
      alert("El registro fallo")
    }
  } catch (error) {
    // console.log(error)
  }
}


function correoExiste() {
  $.ajax({
    url: `http://localhost:8080/api/user/${document.getElementById("email").value.toLowerCase()}`,
    type: "GET",
    datatype: "JSON",
    success: function (respuesta) {
      if (respuesta) {
        Swal.fire({
          title: `¡ Este correo ya existe !`,
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
        $("#email").val("");
      } else {
      }
    }
  });
}