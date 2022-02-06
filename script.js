// On déclare les datas :
// le label + sa donnée
// On peut configurer aussi l'apparance
const data = {
    labels: ["Insee 1980", "Insee 1991", "ObÉpi 1997", "ObÉpi 2000", "ObÉpi 2003", "ObÉpi 2006", "ObÉpi 2009", "ObÉpi 2012", "ObÉpi 2021"],
    datasets: [{
        label: "Pourcentage d'obésité en France ( + de 18ans)",
        data: [6.1, 6.5, 8.5, 10.1, 11.3, 12.4, 14.5, 15.0, 17.0],
        fill: true,
        backgroundColor: 'rgba(221, 36, 36, 0.2)',
        borderColor: 'rgb(70, 36, 221)',
        tension: 0.5 // La fluidité de la ligne
    }]
};

// On configure notre chart
const config = {
    type: 'line',
    data: data,
    options: {
        aspectRatio: 3, // Pour le responsive
        
    }
};

// On affiche le chart dans l'élément avec l'ID correspondant
var myChart1 = new Chart1(
    document.getElementById('myChart1'),
    config
);