var halo = JSON.parse(window.localStorage.getItem("group1"));
var hale = JSON.parse(window.localStorage.getItem("group2"));
const ctx = document.getElementById("planet-chart");
const planetChartData = new Chart(ctx, {
  type: "pie",
  data: {
    labels: ["Top 3", "Top 10", "Top 100"],
    datasets: [
      {
        label: "My First Dataset",
        data: [0, 0, 0],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  },
  options: {
    responsive: true,
    legend: {
      display: false,
      labels: {
        // This more specific font property overrides the global property
        // fontColor: 'red',
        fontSize: 15,
        fontFamily: "'Poppins', sans-serif",
      },
    },
  },
});

// donut 1
var lineSatu = document.getElementById("chart-satu").getContext("2d");
var ChartLineSatu = new Chart(lineSatu, {
  type: "doughnut",
  data: {
    labels: ["2 Minggu Lalu", "Minggu Lalu", "Minggu Ini"],
    datasets: [
      {
        label: "My First Dataset",
        data: [0, 0, 0],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  },
  options: {
    legend: {
      display: false,
    },
  },
});
// donut 2
var lineDua = document.getElementById("chart-dua").getContext("2d");
var ChartLineDua = new Chart(lineDua, {
  type: "doughnut",
  data: {
    labels: ["2 Minggu Lalu", "Minggu Lalu", "Minggu Ini"],
    datasets: [
      {
        label: "My First Dataset",
        data: [0, 0, 0],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  },
  options: {
    legend: {
      display: false,
    },
  },
});
// donut 3
var lineTiga = document.getElementById("chart-tiga").getContext("2d");
var ChartLineTiga = new Chart(lineTiga, {
  type: "doughnut",
  data: {
    labels: ["2 Minggu Lalu", "Minggu Lalu", "Minggu Ini"],
    datasets: [
      {
        label: "My First Dataset",
        data: [0, 0, 0],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  },
  options: {
    legend: {
      display: false,
    },
  },
});
// donut 4
var lineEmpat = document.getElementById("chart-empat").getContext("2d");
var ChartLineEmpat = new Chart(lineEmpat, {
  type: "doughnut",
  data: {
    labels: ["2 Minggu Lalu", "Minggu Lalu", "Minggu Ini"],
    datasets: [
      {
        label: "My First Dataset",
        data: [0, 0, 0],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  },
  options: {
    legend: {
      display: false,
    },
  },
});
// donut 5
var lineLima = document.getElementById("chart-lima").getContext("2d");
var ChartLineLima = new Chart(lineLima, {
  type: "doughnut",
  data: {
    labels: ["2 Minggu Lalu", "Minggu Lalu", "Minggu Ini"],
    datasets: [
      {
        label: "My First Dataset",
        data: [0, 0, 0],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  },
  options: {
    legend: {
      display: false,
    },
  },
});
// donut 6
var lineEnam = document.getElementById("chart-enam").getContext("2d");
var ChartLineEnam = new Chart(lineEnam, {
  type: "doughnut",
  data: {
    labels: ["2 Minggu Lalu", "Minggu Lalu", "Minggu Ini"],
    datasets: [
      {
        label: "My First Dataset",
        data: [0, 0, 0],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  },
  options: {
    legend: {
      display: false,
    },
  },
});
// donut 7
var lineTujuh = document.getElementById("chart-tujuh").getContext("2d");
var ChartLineTujuh = new Chart(lineTujuh, {
  type: "doughnut",
  data: {
    labels: ["2 Minggu Lalu", "Minggu Lalu", "Minggu Ini"],
    datasets: [
      {
        label: "My First Dataset",
        data: [0, 0, 0],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  },
  options: {
    legend: {
      display: false,
    },
  },
});
// donut 8
var lineDelapan = document.getElementById("chart-delapan").getContext("2d");
var ChartLineDelapan = new Chart(lineDelapan, {
  type: "doughnut",
  data: {
    labels: ["2 Minggu Lalu", "Minggu Lalu", "Minggu Ini"],
    datasets: [
      {
        label: "My First Dataset",
        data: [0, 0, 0],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  },
  options: {
    legend: {
      display: false,
    },
  },
});
// donut 9
var lineSembilan = document.getElementById("chart-sembilan").getContext("2d");
var ChartLineSembilan = new Chart(lineSembilan, {
  type: "doughnut",
  data: {
    labels: ["2 Minggu Lalu", "Minggu Lalu", "Minggu Ini"],
    datasets: [
      {
        label: "My First Dataset",
        data: [0, 0, 0],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  },
  options: {
    legend: {
      display: false,
    },
  },
});
// donut 10
var lineSepuluh = document.getElementById("chart-sepuluh").getContext("2d");
var ChartLineSepuluh = new Chart(lineSepuluh, {
  type: "doughnut",
  data: {
    labels: ["2 Minggu Lalu", "Minggu Lalu", "Minggu Ini"],
    datasets: [
      {
        label: "My First Dataset",
        data: [0, 0, 0],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  },
  options: {
    legend: {
      display: false,
    },
  },
});
