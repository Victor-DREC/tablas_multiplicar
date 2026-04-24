
function generarTablas() {
    const contenedorTabla = document.querySelector(".table-card");
    const inputBase = document.getElementById("numero-base");
    const displayFactor = document.getElementById("display-factor");
    
    let base = parseInt(inputBase.value);
    
    if (isNaN(base)) {
        alert("Por favor, ingresa un número válido");
        return;
    }

    let contenido = `
        <div class="table-row header-row">
          <span class="cell cell-factor">N</span>
          <span class="cell cell-op">OP</span>
          <span class="cell cell-base">BASE</span>
          <span class="cell cell-eq">=</span>
          <span class="cell cell-result">RESULT</span>
        </div>
    `;

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
            </div>
        `;
    }

    contenedorTabla.innerHTML = contenido;

    displayFactor.innerText = "X" + base;
    document.getElementById("stat-min").innerText = base.toString().padStart(2, '0');
    document.getElementById("stat-max").innerText = (base * 10).toString().padStart(2, '0');
    document.getElementById("stat-factor").innerText = "x" + base;
}

document.addEventListener("DOMContentLoaded", generarTablas);