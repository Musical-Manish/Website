 function idhr(){
    if(document.getElementById("1").checked){
        window.location.href = "musk.html"; 
      } else if (document.getElementById("2").checked) {
        window.location.href = "elt.html";  
      }
 }
 window.onscroll = function() {myFunction()};
 var header = document.getElementById("8");
 var sticky = header.offsetTop;
 function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
