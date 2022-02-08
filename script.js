// On déclare les datas :
// le label + sa donnée
// On peut configurer aussi l'apparance
const data1 = {
    labels: ["Insee 1980", "Insee 1991", "ObÉpi 1997", "ObÉpi 2000", "ObÉpi 2003", "ObÉpi 2006", "ObÉpi 2009", "ObÉpi 2012", "ObÉpi 2021"],
    datasets: [{
        label: "Pourcentage d'obésité en France ( + de 18ans)",
        data: [6.1, 6.5, 8.5, 10.1, 11.3, 12.4, 14.5, 15.0, 17.0],
        fill: true,
        backgroundColor: 'rgba(230, 93, 17, 0.3)',
        borderColor: 'rgb(227, 73, 133 )',
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
        'rgb(35, 211, 191)',
        'rgb(255, 99, 132)',
        'rgb(230, 93, 17)',
        'rgb(161, 42, 19 )'
      ],
      borderColor: 'rgb(230, 161, 22)',
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

// SLIDE

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}