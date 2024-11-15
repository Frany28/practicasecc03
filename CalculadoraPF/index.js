const solicitarOperacion = () => {
  const operacion = prompt(
    "Selecciona una operación (+, -, *, /) o escribe 'salir' para terminar:"
  );
  if (["+", "-", "*", "/"].includes(operacion) || operacion === "salir") {
    return operacion;
  } else {
    alert("Operación no válida. Por favor, intenta nuevamente.");
    return solicitarOperacion();
  }
};

const soliciNumeros = () => {
  num1 = parseFloat(prompt("Ingresa el primer número:"));
  num2 = parseFloat(prompt("Ingresa el segundo número:"));
  return [num1, num2];
};

const realizarOperacion = (operacion, num1, num2) => {
  switch (operacion) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
  }
};

const ejeJuego = () => {
  alert("Bienvenido a la calculadora");
  while (true) {
    operacion = solicitarOperacion();
    if (operacion === "salir") {
      alert("Gracias por usar la calculadora. ¡Hasta luego!");
      break;
    }
    [num1, num2] = soliciNumeros();
    realizarOperacion();
    resultado = realizarOperacion(operacion, num1, num2);
    alert(
      `El resultado de la operación es: ${num1} ${operacion} ${num2} = ${resultado}`
    );
  }
};

ejeJuego();
