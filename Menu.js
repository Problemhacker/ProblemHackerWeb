
window.onload = function wid(){
  if(window.innerWidth<401){
  document.getElementById("menu").style.left = "-400px";
 }
 else{
 document.getElementById("menu").style.left = "0px";
 }
}

function show(){

   if(document.getElementById("menu").style.left == "-400px"){

  document.getElementById("menu").style.left = "0px";
  document.getElementById("body").style.overflow = "hidden";  

  }

  else{

  document.getElementById("menu").style.left = "-400px";
  document.getElementById("body").style.overflow = "auto";  
  }

}
