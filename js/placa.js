function consulta() {
  var placa = prompt("Digite a placa do seu veículo. EX: ABC2020");

  if (placa.length > 7 || placa.length < 7) {
    alert("Digite corretamente o número da sua placa");
  } else {
    var numero = placa.substring(6, 7);

    console.log(numero);

    switch (numero) {
      case "1":
      case "2":
        numero = "Não pode rodar as segundas";
        break;

      case "3":
      case "4":
        numero = "Não pode rodar as terças";
        break;

      case "5":
      case "6":
        numero = "Não pode rodar as quartas";
        break;

      case "7":
      case "8":
        numero = "Não pode rodar as quintas";
        break;

      case "9":
      case "0":
        numero = "Não pode rodar as sextas";
        break;

      default:
        numero = "Inexistente";
        break;
    }
    alert("Esse é o seu rodizio. " + numero);
  }
}
