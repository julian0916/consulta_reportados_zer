const zonaNombres = {
    C1: "CENTRO LITOGRAFIAS",
    C2: "CENTRO GALAN",
    C3: "CENTRO CTI",
    C4: "CENTRO DINAMICA",
    C5: "CENTRO MI BUÑUELO",
    C6: "CENTRO TERPEL",
    C7: "CENTRO TOROMOTOS",
    C8: "CENTRO CASCOS Y LUJOS",
    F01: "EL FARO",
    G1: "GALERIA EL MAGO",
    G2: "GALERIA MC POLLO",
    G5: "GALERIA LA BOLIVAR",
    G6: "GALERIA AUTECO",
    G7: "GALERIA EMO",
    G8: "GALERIA CHILENITAS",
    G10: "GALERIA DIAMANTE",
    G11: "GALERIA PORCICARNES",
    G12: "GALERIA LOS BANANOS",
    G13: "GALERIA COLISEO",
    G14: "GALERIA ZONA CARGA",
    G15: "GALERIA LOS VALENCIA",
    G16: "GALERIA OLIMPICA",
    G17: "GALERIA PEPE TIENDAS",
    H2: "HOSPITAL SAVIA",
    H5: "HOSPITAL LA CHAVA",
    H8: "HOSPITAL UCI",
    H9: "HOSPITAL SAN JUAN DE DIOS",
    H11: "HOSPITAL CHIVEROS",
    M1: "MAYORISTAS",
    SA1: "SAN ANTONIO BRAZA Y LEÑA",
    SA2: "SAN ANTONIO ESQUINAZO",
    SA3: "SAN ANTONIO LOS HELADOS",
    SA4: "SAN ANTONIO SURTIMAX",
    SA5: "SAN ANTONIO VIEW",
    SA6: "SAN ANTONIO CALICHEPAN",
    SA7: "SAN ANTONIO EL PATIO",
    SA8: "SAN ANTONIO REST ITALIANO",
    SA10: "SAN ANTONIO CASA CURAL",
    T1: "TRANSITO"
};

// Función para formatear la fecha y hora en formato de 12 horas
function formatFecha(fechaISO) {
    if (!fechaISO) return 'N/A';

    const date = new Date(fechaISO);

    const offset = 0; // GMT-5
    date.setHours(date.getHours() + offset);

    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');

    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;

    return `${day}/${month}/${year} ${hours.toString().padStart(2, '0')}:${minutes} ${ampm}`;
}

//Funcion para formatear los valores a moneda
function formatearPesosColombianos(valor) {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    }).format(valor);
}