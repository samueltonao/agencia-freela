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

const itemAtivo2 = document.querySelectorAll(".pergunta-2");

itemAtivo2.forEach(function (item) {
  item.addEventListener("click", function () {
    let itemAtivoAtual2 = document.querySelector(".resposta-2");

    const desativar = itemAtivoAtual2.classList.contains("ativo");

    itemAtivoAtual2.classList.add("ativo");

    if (desativar) {
      itemAtivoAtual2.classList.remove("ativo");
    }

    console.log(itemAtivoAtual2);
  });
});