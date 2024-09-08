document.querySelector("form").addEventListener("submit", function(event) {
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
  
    const namePattern = /^[A-Za-zÀ-ÿ\s'-]{2,22}$/;
  
    if (!namePattern.test(firstName) || !namePattern.test(lastName)) {
      alert("El nombre o apellido contienen caracteres no permitidos. Por favor revisar.");
      event.preventDefault(); 
    } else {
      alert("El formulario ha sido enviado");
    }
  });
  
  
  document.addEventListener("DOMContentLoaded", (event) => {
    const today = new Date().toISOString().split("T")[0];
    document.getElementById("dob").setAttribute("max", today);
  });