const containerGridSize = document.getElementById("container");
const conteudoDiv = document.getElementById("conteudo-div");
const exercicioAtual = document.getElementById("exercicios");

function chamarExercicio(exercicio) {
  containerGridSize.style.gridTemplateRows = "10vh 80vh 80vh 10vh";
  // conteudoDiv.className = "conteudo-div";

  if (exercicio === "exercicio1") {
    conteudoDiv.classList.remove("conteudo-div");
    conteudoDiv.classList.add("ativo");
    exercicioAtual.classList.add("ativo");
    conteudoDiv.scrollIntoView({
      behavior: "smooth",
    });
    // conteudoDiv.innerHTML = `<h2 class='title'>Calculadora</>`
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
