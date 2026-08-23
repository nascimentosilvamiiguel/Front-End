const campo = document.querySelector("#texto");
const contador = document.querySelector("#contador");

campo.addEventListener("input", () => {
  contador.textContent = "Caracteres digitados: " + campo.value.length;
});