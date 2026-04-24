function generarTablas() {
    let contenedor = document.getElementById("tabla-container");

    contenedor.innerHTML = "<h1 style='color: var(--clr-cyan); font-family: var(--ff-display); text-align: center;'>PROBANDO...</h1>";

    setTimeout(() => {
        let htmlBase = `
            <div class="table-card">
                <div class="table-row header-row">
                    <span class="cell cell-factor">N</span>
                    <span class="cell cell-op">OP</span>
                    <span class="cell cell-base">BASE</span>
                    <span class="cell cell-eq">=</span>
                    <span class="cell cell-result">RESULT</span>
                </div>
        `;

        for (let i = 1; i <= 10; i++) {
            let resultado = i * 3;
            let esUltimo = (i === 10) ? "row-last" : "";
            let claseNeon = (i === 10) ? "neon-pink" : "";
            
            htmlBase += `
                <div class="table-row ${esUltimo}" style="--i:${i}">
                    <span class="cell cell-factor">${i.toString().padStart(2, '0')}</span>
                    <span class="cell cell-op">x</span>
                    <span class="cell cell-base">3</span>
                    <span class="cell cell-eq">=</span>
                    <span class="cell cell-result ${claseNeon}">${resultado.toString().padStart(2, '0')}</span>
                </div>
            `;
        }

        htmlBase += `</div>`;
        contenedor.innerHTML = htmlBase;
    }, 500);
}

document.addEventListener("DOMContentLoaded", () => {
    const btnProbar = document.querySelector(".btn-probar");
    if (btnProbar) {
        btnProbar.addEventListener("click", generarTablas);
    }
});