const encriptarTexto = (texto) => {
    return texto
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
  };
  
 
  const desencriptarTexto = (texto) => {
    return texto
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
  };
  

  function Encriptar() {
    const texto = document.getElementById("texto").value.trim();
    if (texto === "") {
      alert("Por favor, ingresa el texto que deseas encriptar.");
      return;
    }
  
  
    const textoEncriptado = encriptarTexto(texto);
    

    mostrarResultado(textoEncriptado);
    

    document.getElementById("texto").value = "";
  

    document.getElementById("Exclamacion").style.display = "none";
    document.getElementById("ilustracion").style.display = "none";
  }
  

  function Desencriptar() {
    const texto = document.getElementById("texto").value.trim();
    if (texto === "") {
      alert("Por favor, ingresa el texto que deseas desencriptar.");
      return;
    }
  
  
    const textoDesencriptado = desencriptarTexto(texto);
    
 
    mostrarResultado(textoDesencriptado);
    
  
    document.getElementById("texto").value = "";
  

    document.getElementById("Exclamacion").style.display = "none";
    document.getElementById("ilustracion").style.display = "none";
  }
  
  
  function mostrarResultado(resultado) {
    document.getElementById("titulo-mensaje").textContent = "Texto procesado";
    document.getElementById("parrafo").textContent = resultado;
    document.getElementById("boton-copiar").style.display = "block";
  }
  
  

  function CopiarTexto() {
    const resultado = document.getElementById("parrafo").textContent;
    navigator.clipboard.writeText(resultado).then(() => {
      alert("Texto copiado al portapapeles.");
    }, (err) => {
      alert("Error al copiar el texto: " + err);
    });
  }
  
  
  document.querySelector(".boton-desencriptar").onclick = Desencriptar;
  