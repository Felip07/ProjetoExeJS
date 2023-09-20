const containerGridSize = document.getElementById("container");
const conteudoDiv = document.getElementById("conteudo-div");

function chamarExercicio(exercicio) {
  containerGridSize.style.gridTemplateRows = "10vh 80vh 80vh 10vh";
  conteudoDiv.className = "conteudo-div";

  if (exercicio === "exercicio1") {
    conteudoDiv.scrollIntoView({
      behavior: "smooth",
    });
    exercicio1();
  } else if (exercicio === "exercicio2") {
    conteudoDiv.scrollIntoView({
      behavior: "smooth",
    });
    conteudoDiv.innerHTML = `<h2 class='title'>Rendimento do Mês</>`;
  } else if (exercicio === "exercicio3") {
    conteudoDiv.scrollIntoView({
      behavior: "smooth",
    });
    conteudoDiv.innerHTML = `<h2 class='title'>Calculadora</>`;
  } else if (exercicio === "exercicio4") {
    conteudoDiv.scrollIntoView({
      behavior: "smooth",
    });
    conteudoDiv.innerHTML = `<h2 class='title'>Locadora de Veículos</>`;
  } else if (exercicio === "exercicio5") {
    conteudoDiv.scrollIntoView({
      behavior: "smooth",
    });
    conteudoDiv.innerHTML = `<h2 class='title'>Contador</>`;
  }
}

function exercicio1() {
  conteudoDiv.innerHTML = `<h2 class='title'>Conversão de Moedas</h2>
          <input type="number" placeholder="Insira o valor..." class="check-placeholder" id="value">
          <br>Converter para:
          <input type="radio" name="conversao" id="01">EUR
          <input type="radio" name="conversao" id="02">USD
          <br><input type="button" value="Converter" class="button-type">
          <p id="result"></p>
          `;

  let value = Number(document.getElementById("value").value)
  
  const EURChecked = document.getElementById("01")
  const USDChecked = document.getElementById("02")

  if (EURChecked) {
    value = value * 0.19
    var resultado = document.getElementById("result")
  } else if (USDChecked) {
    value = value * 0.20
    var resultado = document.getElementById("result")
  } else {
    var resultado = document.getElementById("result")
    resultado.textContent = 'Nenhum valor inserido!'
  }
  resultado.textContent = `${value}`
}

function reload() {
  window.location.reload();
}
