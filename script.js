function getFibonacciSeries() {
    let num;
    
    while (true) {
      const userInput = prompt("Ingrese un número para generar la serie de Fibonacci: ");
      num = parseInt(userInput);
  
      if (!isNaN(num) && Number.isInteger(num) && num >= 0) {
        break;
      } else {
        alert("Por favor, ingrese un número entero válido.");
      }
    }
  
    const fib = [0, 1];
  
    for (let i = 2; i < num; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
  
    // Imprimir la serie de Fibonacci en el DOM
    const resultDiv = document.getElementById("fibonacciResult");
    resultDiv.innerHTML = "El resultado de la serie de Fibonacci solicitada es:";
    for (let i = 0; i < num; i++) {
      resultDiv.innerHTML += ` ${fib[i]},`;
    }
  }
  
  getFibonacciSeries();
  

// function fibonacci(num){
//     const fib = [0,1]
    
//     for (let i =2; i <= num;i++) {
//         fib[i] = fib [i-1] + fib [i-2]
//     }
//     return fib [num]
// }





