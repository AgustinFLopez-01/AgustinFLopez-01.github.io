const autos = {
    "Marca 1": {
        "Modelo A": [2020, 2021, 2022],
        "Modelo B": [2018, 2019]
    },
    "Marca 2": {
        "Modelo C": [2015, 2016],
        "Modelo D": [2023]
    },
    "Marca 3": {
        "Modelo E": [2010, 2011, 2012],
        "Modelo F": [2018, 2020]
    }
};

const marca = document.getElementById("Marca");
const modelo = document.getElementById("Modelo");
const anio = document.getElementById("Anio");

marca.addEventListener("change", function () {

    modelo.innerHTML = "";
    anio.innerHTML = "<option>Selecciona un modelo antes</option>";

    for (let nombreModelo in autos[this.value]) {
        let opcion = document.createElement("option");
        opcion.value = nombreModelo;
        opcion.textContent = nombreModelo;
        modelo.appendChild(opcion);
    }

    modelo.dispatchEvent(new Event("change"));
});

// Cuando cambia el modelo
modelo.addEventListener("change", function () {

    anio.innerHTML = "";

    let listaAnios = autos[marca.value][this.value];

    for (let valor of listaAnios) {
        let opcion = document.createElement("option");
        opcion.value = valor;
        opcion.textContent = valor;
        anio.appendChild(opcion);
    }
});