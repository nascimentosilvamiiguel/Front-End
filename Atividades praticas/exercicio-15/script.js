function calcularDesconto(preco, percentual) {
  return preco * (percentual / 100);
}

function calcularPrecoFinal(preco, desconto) {
  return preco - desconto;
}

const botao = document.querySelector("#calcular");
const resultado = document.querySelector("#resultado");

botao.addEventListener("click", () => {
  const preco = Number(document.querySelector("#preco").value);
  const percentual = Number(document.querySelector("#desconto").value);
  const valorDesconto = calcularDesconto(preco, percentual);
  const precoFinal = calcularPrecoFinal(preco, valorDesconto);

  resultado.textContent = "Preço final: R$ " + precoFinal.toFixed(2);
});
