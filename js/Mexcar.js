const autos = {
    "Nissan": {
        "Versa": [2022, 2023],
        "Modelo B": [2018, 2019]
    },
    "Toyota": {
        "Corolla": [2021,2022],
        "Modelo D": [2023]
    },
    "Kia": {
        "Seltos": [2026],
        "Modelo F": [2018, 2020]
    }
};
const inventario = [
    {
        marca: "Nissan",
        modelo: "Versa",
        anio: 2022,
        color: "Rojo",
        lugares: [
            "A3",
            "A4",
            "B2"
        ]
    },
    {
        marca: "Nissan",
        modelo: "Versa",
        anio: 2023,
        color: "Azul",
        lugares: [
            "B1"
        ]
    },
    {
        marca: "Toyota",
        modelo: "Corolla",
        anio: 2021,
        color: "Blanco",
        lugares: [
            "B3",
            "A2",
            "A1"
        ]
    },
    {
        marca: "Toyota",
        modelo: "Corolla",
        anio: 2022,
        color: "Negro",
        lugares: [
            "C3"
        ]
    },
    {
        marca: "Kia",
        modelo: "Seltos",
        anio: 2026,
        color: "Rojo",
        lugares: [
            "C2",
            "C1"
        ]
    }
];
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
function buscarAutos() {

    const marca = document.getElementById("Marca").value;
    const modelo = document.getElementById("Modelo").value;
    const anio = document.getElementById("Anio").value;

    const resultados = document.getElementById("Resultados");

    resultados.innerHTML = "";

    resultados.style.visibility = "visible";

    inventario.forEach(auto => {

        if (
            auto.marca === marca &&
            auto.modelo === modelo &&
            auto.anio == anio
        ) {

            auto.lugares.forEach(lugar => {

                const li = document.createElement("li");
                const boton = document.createElement("button");

                boton.textContent =
                    `${lugar} | ${auto.marca} ${auto.modelo} ${auto.anio} | ${auto.color}`;

                li.appendChild(boton);
                resultados.appendChild(li);

            });

        }

    });

}