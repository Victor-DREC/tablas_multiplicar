
function generarTablas() {
    const inputBase = document.getElementById("numero-base");
    const contenedor = document.getElementById("tabla-container");
    const displayFactor = document.getElementById("display-factor");
    const valBase = inputBase.value;

    if (valBase === "" || valBase < 0) {
        alert("SISTEMA: Por favor, ingrese un número válido mayor a 0.");
        inputBase.focus();
        return;
    }

    const base = parseInt(valBase);

    displayFactor.innerText = "X" + base;

    let contenido = "";

    contenido += `
      <div class="table-card">
        <div class="table-row header-row">
          <span class="cell cell-factor">N</span>
          <span class="cell cell-op">OP</span>
          <span class="cell cell-base">BASE</span>
          <span class="cell cell-eq">=</span>
          <span class="cell cell-result">RESULT</span>
        </div>`;

    for (let i = 1; i <= 10; i++) {
        let resultado = i * base;
        let esUltimo = (i === 10) ? "row-last" : "";
        let claseNeon = (i === 10) ? "neon-pink" : "";

        contenido += `
          <div class="table-row ${esUltimo}" style="--i:${i}">
            <span class="cell cell-factor">${i.toString().padStart(2, '0')}</span>
            <span class="cell cell-op">x</span>
            <span class="cell cell-base">${base}</span>
            <span class="cell cell-eq">=</span>
            <span class="cell cell-result ${claseNeon}">${resultado.toString().padStart(2, '0')}</span>
          </div>`;
    }

    contenido += `</div>`;

    contenedor.innerHTML = contenido;

    document.getElementById("stat-min").innerText = base.toString().padStart(2, '0');
    document.getElementById("stat-max").innerText = (base * 10).toString().padStart(2, '0');
    document.getElementById("stat-factor").innerText = "x" + base;
}

document.getElementById("numero-base")?.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        generarTablas();
    }
});