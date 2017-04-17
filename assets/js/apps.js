var modalBox = document.getElementById("modalbox"); //modalbox
var modalImg = document.getElementById("img01");
var images = [];  //contenido del modalbox

// esta funcion recorre el arreglo que se guarda en images, por cada imagen,
// para a cada imagen agregarle el evento de click que provoque la ejecucion de la funcionshowImage
function addClickToImage(){
  images = document.getElementsByClassName("modal-content");
  console.log(images);
  for (var i = 0; i < images.length; i++){
    images[i].addEventListener("click", showImage);
  }
}

// mostrar la imagen al dar el click
function showImage(){
 //alert("hola");
 //el estilo del div modalBox se vuelve visible
 modalBox.style.display = "block";
 // la src de la imagen se vuelve la src de this (objeto imagen) que debe mostrar o de la imagen que se le ha dado click
 modalImg.src = this.src;
}

var span = []; //boton de cerrar

for (var i = 0; i < span.length; i++){
  span[i] = document.getElementsByClassName("close")[0];
  span[i].addEventListener("click", close);
}

function close() {
  modalBox.style.display = "none";
}

addClickToImage();
