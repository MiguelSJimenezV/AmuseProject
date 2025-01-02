"use strict";

function vEmail() {
  let validarvacio = document.getElementById("email").value;
  let regexEspecial = /[-!#$%^&*()_+|~=`{}\[\]:";'<>?,\/]/;
  let especialC = regexEspecial.test(validarvacio);

  if (!validarvacio) {
    $("#email").removeClass("is-valid").addClass("is-invalid");
    $(".vEmail")
      .text("no puede quedar vacio")
      .removeClass("text-success")
      .addClass("text-danger");
  } else if (especialC) {
    $("#email").removeClass("is-valid").addClass("is-invalid");
    $(".vEmail")
      .text("Caracter Invalido")
      .removeClass("text-success")
      .addClass("text-danger");
  } else if (!validarvacio.includes("@")) {
    $("#email").removeClass("is-valid").addClass("is-invalid");
    $(".vEmail")
      .text("te falta el @")
      .removeClass("text-success")
      .addClass("text-danger");
  } else if (!validarvacio.includes("gmail.com")) {
    $("#email").removeClass("is-valid").addClass("is-invalid");
    $(".vEmail")
      .text("ingrese un dominio valido. Ej: @gmail.com")
      .removeClass("text-success")
      .addClass("text-danger");
  } else {
    $("#email").removeClass("is-invalid").addClass("is-valid");
    $(".vEmail")
      .text("correo válido")
      .removeClass("text-danger")
      .addClass("text-success");
  }
  document.getElementById("email").value = validarvacio.toLowerCase();
}

function validarNombre() {
  let validarvacio = document.getElementById("name").value;
  let regex = /^[^0-9]+$/;
  let miRegex = regex.test(validarvacio);
  console.log(miRegex);
  if (!validarvacio) {
    $("#name").removeClass("is-valid").addClass("is-invalid");
    $(".vNombre")
      .text("no puede quedar vacio")
      .removeClass("text-success")
      .addClass("text-danger");
  } else if (miRegex == false) {
    $("#name").removeClass("is-valid").addClass("is-invalid");
    $(".vNombre")
      .text("no puede contener números")
      .removeClass("text-success")
      .addClass("text-danger");
  } else {
    $("#name").removeClass("is-invalid").addClass("is-valid");
    $(".vNombre")
      .text("nombre válido")
      .removeClass("text-danger")
      .addClass("text-success");
  }
}

function vSurname() {
  let validarvacio = document.getElementById("surname").value;
  let regex = /^[^0-9]+$/;
  let miRegex = regex.test(validarvacio);
  console.log(miRegex);
  if (!validarvacio) {
    $("#surname").removeClass("is-valid").addClass("is-invalid");
    $(".vSurname")
      .text("no puede quedar vacio")
      .removeClass("text-success")
      .addClass("text-danger");
  } else if (miRegex == false) {
    $("#surname").removeClass("is-valid").addClass("is-invalid");
    $(".vSurname")
      .text("no puede contener números")
      .removeClass("text-success")
      .addClass("text-danger");
  } else {
    $("#surname").removeClass("is-invalid").addClass("is-valid");
    $(".vSurname")
      .text("nombre válido")
      .removeClass("text-danger")
      .addClass("text-success");
  }
}

function vPass() {
  let validarvacio = document.getElementById("password").value;
  let regex = /\d/;
  let regexEspecial = /[-!@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
  let miRegex = regex.test(validarvacio);
  let especialC = regexEspecial.test(validarvacio);
  console.log(miRegex);

  if (!validarvacio) {
    $("#password").removeClass("is-valid").addClass("is-invalid");
    $(".vPassword")
      .text("No puede quedar vacío")
      .removeClass("text-success")
      .addClass("text-danger");
  } else if (validarvacio.length < 6) {
    $("#password").removeClass("is-valid").addClass("is-invalid");
    $(".vPassword")
      .text("La contraseña debe tener un mínimo de (6) seis caracteres")
      .removeClass("text-success")
      .addClass("text-danger");
  } else if (!miRegex) {
    $("#password").removeClass("is-valid").addClass("is-invalid");
    $(".vPassword")
      .text("Debe contener números")
      .removeClass("text-success")
      .addClass("text-danger");
  } else if (!especialC) {
    $("#password").removeClass("is-valid").addClass("is-invalid");
    $(".vPassword")
      .text("Debe contener al menos un carácter especial")
      .removeClass("text-success")
      .addClass("text-danger");
  } else {
    $("#password").removeClass("is-invalid").addClass("is-valid");
    $(".vPassword")
      .text("Contraseña válida")
      .removeClass("text-danger")
      .addClass("text-success");
  }

  vPass2();
}

function vPass2() {
  let pass = document.getElementById("password").value;
  let pass2 = document.getElementById("password2").value;

  if (!pass) {
    $("#password2").removeClass("is-valid").addClass("is-invalid");
    $(".vPassword2")
      .text("No puede quedar vacío")
      .removeClass("text-success")
      .addClass("text-danger");
  } else if (pass !== pass2) {
    $("#password2").removeClass("is-valid").addClass("is-invalid");
    $(".vPassword2")
      .text("Las contraseñas no coinciden")
      .removeClass("text-success")
      .addClass("text-danger");
  } else {
    $("#password2").removeClass("is-invalid").addClass("is-valid");
    $(".vPassword2")
      .text("Contraseña válida")
      .removeClass("text-danger")
      .addClass("text-success");
  }
}

function vSexo() {
  let validarvacio = document.getElementById("sexo").value;

  if (validarvacio.trim() == "") {
    $("#sexo").removeClass("is-valid").addClass("is-invalid");
    $(".vSexo")
      .text("Seleccione un genero")
      .removeClass("text-success")
      .addClass("text-danger");
  } else if (validarvacio == "Seleccionar") {
    $("#sexo").removeClass("is-valid").addClass("is-invalid");
    $(".vSexo")
      .text("Seleccione un genero")
      .removeClass("text-success")
      .addClass("text-danger");
  } else {
    $("#sexo").removeClass("is-invalid").addClass("is-valid");
    $(".vSexo")
      .text("Sexo valido")
      .removeClass("text-danger")
      .addClass("text-success");
  }
}

function vCheckbox() {
  var checkbox = document.getElementById("checkbox");
  var btn = document.getElementById("btn");

  if (!checkbox.checked) {
    $("#checkbox").removeClass("is-valid").addClass("is-invalid");
    $(".vCheckbox")
      .text("Para continuar debe aceptar todos los terminos y condiciones")
      .removeClass("text-success")
      .addClass("text-danger");
    btn.setAttribute("disabled", "disabled");
  } else {
    $("#checkbox").removeClass("is-invalid").addClass("is-valid");
    $(".vCheckbox")
      .text("Muchas gracias, presione Enviar para continuar")
      .removeClass("text-danger")
      .addClass("text-success");
    btn.removeAttribute("disabled");
  }
}

function vGenerales(event) {
  event.preventDefault();

  vEmail();
  validarNombre();
  vSurname();
  vCheckbox();

  let errores = document.querySelectorAll(".is-invalid");

  let btn = document.getElementById("btn");
  if (errores.length > 0) {
    $(".vBtn")
      .text("Por favor, complete los campos correctamente")
      .removeClass("text-success")
      .addClass("text-danger");
  } else {
    Swal.fire({
      title: "¿Tus datos son Correctos?",
      text: "De ser enviados no es posible revertilos",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Envialo",
      cancelButtonText: "No, Cancelar",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Enviado",
          text: "Tus datos han sido enviados Correctamente",
          icon: "success",
        });

        $("#btn").removeClass("is-invalid").addClass("is-valid");
        $(".vBtn")
          .text("Enviado Correctamente!")
          .removeClass("text-danger")
          .addClass("text-success");
        btn.removeAttribute("disabled");

        var formData = {
          email: document.getElementById("email").value,
          password: document.getElementById("password").value,
          password2: document.getElementById("password2").value,
          name: document.getElementById("name").value,
          surname: document.getElementById("surname").value,
        };

        var jsonData = JSON.stringify(formData);
        console.log("Datos del formulario en JSON:", jsonData);
      } else {
        swal.fire({
          title: "Cancelado",
          text: "Revisa que tus datos esten correctos",
          icon: "error",
        });
        $(".vBtn")
          .text("Revisa tus datos e intentalo de nuevo")
          .removeClass("text-success")
          .addClass("text-danger");
      }
    });
  }

  document.getElementById("formulario").reset();
}
