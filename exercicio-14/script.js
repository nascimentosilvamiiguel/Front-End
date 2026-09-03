let totalVisitas = 0;
const campoNome = document.querySelector("#nome");
const botao = document.querySelector("#registrar");
const globalSaida = document.querySelector("#global");
const localSaida = document.querySelector("#local");

botao.addEventListener("click", () => {
  const nomeVisitante = campoNome.value.trim();

  if (nomeVisitante === "") {
    localSaida.textContent = "Variável local: digite um nome.";
    return;
  }

  totalVisitas++;
  const mensagemLocal = "Último visitante: " + nomeVisitante;

  globalSaida.textContent = "Total global de visitas: " + totalVisitas;
  localSaida.textContent = mensagemLocal;
});
