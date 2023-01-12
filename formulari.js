
    function guardar(){
        var nomest = document.getElementById("nom").value;
        var cognomest = document.getElementById("cognom").value;
        var emailest = document.getElementById("email").value;
        var numeroest = document.getElementById("numero").value;
        var adresaest = document.getElementById("adresa").value;
        var ciutatest = document.getElementById("ciutat").value;
        alert("Hola" +nomest+" "+cognomest +"el teu correu es: "+ emailest+"El teu contacte disponible "+numeroest+ "el Codi postal:"+ adresaest+" es de aquesta ciutat "+ ciutatest+"Esta tot correcte moltes gracies per inscriute "+ nomest);
    
        if(nomest=" "){
            alert("Aquest camp es obligtori");
            
        }
        if(cognomest=" "){
            alert("Aquest camp es obligtori");
        }
        if(emailest=" "){
            alert("Aquest camp es obligtori");
        }
        if(numeroest=" "){
            alert("Aquest camp es obligtori");
        }
        if(adresaest=" "){
            alert("Aquest camp es obligtori");
        }
        if(ciutatest=" "){
            alert("Aquest camp es obligtori");
        }
        
}
