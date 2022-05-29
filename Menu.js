
window.onload = function wid(){
  if(window.innerWidth<401){
  document.getElementById("menu").style.left = "-355px";
 }
 else{
 document.getElementById("menu").style.left = "0px";
 }
}

function show(){

   if(document.getElementById("menu").style.left == "-355px"){

  document.getElementById("menu").style.left = "-240px";

  }

  else{

  document.getElementById("menu").style.left = "-355px";

  }

}
