var modalBox = document.getElementById("modalbox"); //modalbox
var images = [];  //contenido del modalbox


function addClickToImage(){
  images = document.getElementsByClassName("modal-content");
  console.log(images);
  for (var i = 0; i < images.length; i++){
    images[i].addEventListener("click", showImage);
  }
}

function showImage(){
 //alert("hola");
 images = document.getElementsByClassName("modal-content");
 modalBox.style.display = "block";
 images[i].src = this.src;
}

var span = document.getElementsByClassName("close")[0]; //boton de cerrar
span.onclick = function() {
  
  modalBox.style.display = "none";
}

addClickToImage();
