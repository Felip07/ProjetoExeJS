const containerGridSize = document.getElementById("container");
const conteudoDiv = document.getElementById("conteudo-div");

function chamarExercicio(exercicio) {
  containerGridSize.style.gridTemplateRows = "10vh 80vh 80vh 10vh";
  conteudoDiv.className = "conteudo-div";

  if (exercicio === "exercicio1") {
    conteudoDiv.scrollIntoView({
      behavior: "smooth",
    });
    conteudoDiv.innerHTML = `<h2 class='title'>Conversão de Moedas</h2>
          <input type="number" placeholder="Valor p/ conversão: ">
          <p>Converter para:</>
          <input type="radio" name="conversao" id="01">BRL
          <input type="radio" name="conversao" id="02">USD
          <input type="radio" name="conversao" id="03">EUR`;
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


function reload() {
  window.location.reload();
}