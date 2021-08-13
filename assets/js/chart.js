var halo = JSON.parse(window.localStorage.getItem('group1'));
var hale = JSON.parse(window.localStorage.getItem('group2'));
const ctx = document.getElementById("planet-chart");
const planetChartData = new Chart(ctx, {
    type: "pie",
    data: {
        labels: [
            'Top 3',
            'Top 10',
            'Top 100'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [1, 3, 5],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true,
    }
});