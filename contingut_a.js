function amagarInfo(){
  let llistaInfo = document.querySelectorAll("#info div");
  for(let i = 0; i<llistaInfo.length; i++ ){
    llistaInfo[i].style.display="none";
  }
}

window.onload=function(){
  let navContingut = document.getElementById("contingut");
  let llistalink=navContingut.querySelectorAll("a");
 amagarInfo();
  for(let i = 0; i<llistalink.length; i++ ){
    llistalink[i].onclick=function(event){
      event.preventDefault();
      amagarInfo();
      document.getElementById(this.title).style.display="block";

    }

  }

}

