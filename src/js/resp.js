const itemAtivo = document.querySelectorAll(".pergunta");

itemAtivo.forEach(function (item) {
  item.addEventListener("click", function () {
    let itemAtivoAtual = document.querySelector(".resposta");

    const desativar = itemAtivoAtual.classList.contains("ativo");

    itemAtivoAtual.classList.add("ativo");

    if (desativar) {
      itemAtivoAtual.classList.remove("ativo");
    }

    console.log(itemAtivoAtual);
  });
});
