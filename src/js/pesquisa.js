function search() {
    const input = document.getElementById("inputBusca").value == "vagas";
    const resultadoSection = document.getElementById("section-resultado");

    if (input) {
        resultadoSection.style.display = "block";
    } else {
        resultadoSection.style.display = "none";
    }
}