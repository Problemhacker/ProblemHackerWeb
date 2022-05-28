
  document.getElementById("menu").style.left = "0px";

function show(){

   if(document.getElementById("menu").style.left == "-350px"){

  document.getElementById("menu").style.left = "0px";
  document.getElementById("m_icon").style.transform = "rotate(90deg)";

  }

  else{

  document.getElementById("menu").style.left = "-350px";
  document.getElementById("m_icon").style.transform = "rotate(180deg)";

  }

}
