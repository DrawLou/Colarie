// On déclare les datas :
// le label + sa donnée
// On peut configurer aussi l'apparance
const data1 = {
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
const config1 = {
    type: 'line',
    data: data1,
    options: {
        aspectRatio: 3, // Pour le responsive
    }
};

// On affiche le chart dans l'élément avec l'ID correspondant
var myChart1 = new Chart(
    document.getElementById('myChart1'),
    config1
);

const data2 = {
    labels: [
      "Normal",
      "Surpoid",
      "Obésité",
      "Obésité sévère"
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [52.7, 30.3, 17, 2],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };

  const config2 = {
    type: 'pie',
    data: data2,
  };

  var myChart2 = new Chart(
    document.getElementById('myChart2'),
    config2
);