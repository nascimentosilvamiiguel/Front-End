const nomes = ["Ana", "Bruno", "Carla"];
const campo = document.querySelector("#nome");
const botao = document.querySelector("#adicionar");
const lista = document.querySelector("#lista");
const quantidade = document.querySelector("#quantidade");

function mostrarNomes() {
  lista.innerHTML = "";
  for (const nome of nomes) {
    const item = document.createElement("li");
    item.textContent = nome;
    lista.appendChild(item);
  }
  quantidade.textContent = "Quantidade de nomes: " + nomes.length;
}

botao.addEventListener("click", () => {
  const novoNome = campo.value.trim();
  if (novoNome === "") return;
  nomes.push(novoNome);
  campo.value = "";
  mostrarNomes();
});

mostrarNomes();
