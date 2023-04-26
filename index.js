/*
    Nav
*/

window.addEventListener("scroll", function(){
    let header = document.querySelector("nav");
    header.classList.toggle("down", window.scrollY>0)
});

function Alerta(){
    Swal.fire({
        title: 'Estas de acuerdo?',
        text: "La informacion esta correcta?",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Enviado!',
            'La compra fue existosa!!',
            'success'
          )
        }
      })
}