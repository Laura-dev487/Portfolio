document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
  
    const mensajeExito = document.getElementById("mensajeExito");
    mensajeExito.style.display = "block";
    
    
    this.reset();
    
   
    setTimeout(function() {
        mensajeExito.style.display = "none";
    }, 3000);
});
