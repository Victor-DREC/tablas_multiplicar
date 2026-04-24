function generarTablas() {
    let contenedor = document.getElementById("tabla-container");

    contenedor.innerHTML = "<h1>PROBANDO TABLA DEL 5...</h1>";

    let contenido = "";
    let base = 5; 
    contenido += `<div class="table-card">
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
}