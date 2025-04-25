function contar() {
    const numero = Number(document.getElementById('inputNumber').value);
  
    let resultado = document.getElementById("resultado");
  
    resultado.innerHTML = "";
  
    for (let i = 1; i <= numero; i++) {
      resultado.innerHTML += i + " ";
    }
  }
  
  let button = document.querySelector('button')
  
  button.addEventListener('click', contar)
