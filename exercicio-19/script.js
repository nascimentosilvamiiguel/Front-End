const campoSenha = document.querySelector("#senha");
const botao = document.querySelector("#alternar");

botao.addEventListener("click", () => {
  const estaOculta = campoSenha.type === "password";
  campoSenha.type = estaOculta ? "text" : "password";
  botao.textContent = estaOculta ? "Ocultar senha" : "Mostrar senha";
});