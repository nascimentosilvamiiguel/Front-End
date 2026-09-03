const nomes = ["Ana", "Bruno", "Carla", "Diego"];
const botao = document.querySelector("#mostrar");
const lista = document.querySelector("#lista");

botao.addEventListener("click", () => {
  lista.innerHTML = "";
  nomes.forEach((nome, indice) => {
    const item = document.createElement("li");
    item.textContent = (indice + 1) + ". " + nome;
    lista.appendChild(item);
  });
});
