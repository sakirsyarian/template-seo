var app = new Vue({
  el: "#app",
  data: {
    average: 0,
    top: [0, 0, 0],
    up: 0,
    down: 0,
    thisWeek: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    lastWeek: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    twoWeeksAgo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    dMW: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  methods: {
    updateChart: function () {
      // chart top
      planetChartData.data.datasets.forEach((dataset) => {
        planetChartData.data.datasets[0].data[0] = this.top[0];
        planetChartData.data.datasets[0].data[1] = this.top[1];
        planetChartData.data.datasets[0].data[2] = this.top[2];
      });
      planetChartData.update();
    },
    totalAverage: function () {
      var sum = 0;
      for (var i in this.thisWeek) {
        sum += parseInt(this.thisWeek[i]);
      }
      var numbersCnt = this.thisWeek.length;
      let total = sum / numbersCnt;
      this.average = total;
    },
    minWeeks: function () {
      // evolusi 1
      ChartLineSatu.data.datasets.forEach((dataset) => {
        ChartLineSatu.data.datasets[0].data[0] = this.twoWeeksAgo[0];
        ChartLineSatu.data.datasets[0].data[1] = this.lastWeek[0];
        ChartLineSatu.data.datasets[0].data[2] = this.thisWeek[0];
      });
      ChartLineSatu.update();
      // evolusi 2
      ChartLineDua.data.datasets.forEach((dataset) => {
        ChartLineDua.data.datasets[0].data[0] = this.twoWeeksAgo[1];
        ChartLineDua.data.datasets[0].data[1] = this.lastWeek[1];
        ChartLineDua.data.datasets[0].data[2] = this.thisWeek[1];
      });
      ChartLineDua.update();
      // evolusi 3
      ChartLineTiga.data.datasets.forEach((dataset) => {
        ChartLineTiga.data.datasets[0].data[0] = this.twoWeeksAgo[2];
        ChartLineTiga.data.datasets[0].data[1] = this.lastWeek[2];
        ChartLineTiga.data.datasets[0].data[2] = this.thisWeek[2];
      });
      ChartLineTiga.update();
      // evolusi 4
      ChartLineEmpat.data.datasets.forEach((dataset) => {
        ChartLineEmpat.data.datasets[0].data[0] = this.twoWeeksAgo[3];
        ChartLineEmpat.data.datasets[0].data[1] = this.lastWeek[3];
        ChartLineEmpat.data.datasets[0].data[2] = this.thisWeek[3];
      });
      ChartLineEmpat.update();
      // evolusi 5
      ChartLineLima.data.datasets.forEach((dataset) => {
        ChartLineLima.data.datasets[0].data[0] = this.twoWeeksAgo[4];
        ChartLineLima.data.datasets[0].data[1] = this.lastWeek[4];
        ChartLineLima.data.datasets[0].data[2] = this.thisWeek[4];
      });
      ChartLineLima.update();
      // evolusi 6
      ChartLineEnam.data.datasets.forEach((dataset) => {
        ChartLineEnam.data.datasets[0].data[0] = this.twoWeeksAgo[5];
        ChartLineEnam.data.datasets[0].data[1] = this.lastWeek[5];
        ChartLineEnam.data.datasets[0].data[2] = this.thisWeek[5];
      });
      ChartLineEnam.update();
      // evolusi 7
      ChartLineTujuh.data.datasets.forEach((dataset) => {
        ChartLineTujuh.data.datasets[0].data[0] = this.twoWeeksAgo[6];
        ChartLineTujuh.data.datasets[0].data[1] = this.lastWeek[6];
        ChartLineTujuh.data.datasets[0].data[2] = this.thisWeek[6];
      });
      ChartLineTujuh.update();
      // evolusi 8
      ChartLineDelapan.data.datasets.forEach((dataset) => {
        ChartLineDelapan.data.datasets[0].data[0] = this.twoWeeksAgo[7];
        ChartLineDelapan.data.datasets[0].data[1] = this.lastWeek[7];
        ChartLineDelapan.data.datasets[0].data[2] = this.thisWeek[7];
      });
      ChartLineDelapan.update();
      // evolusi 9
      ChartLineSembilan.data.datasets.forEach((dataset) => {
        ChartLineSembilan.data.datasets[0].data[0] = this.twoWeeksAgo[8];
        ChartLineSembilan.data.datasets[0].data[1] = this.lastWeek[8];
        ChartLineSembilan.data.datasets[0].data[2] = this.thisWeek[8];
      });
      ChartLineSembilan.update();
      // evolusi 10
      ChartLineSepuluh.data.datasets.forEach((dataset) => {
        ChartLineSepuluh.data.datasets[0].data[0] = this.twoWeeksAgo[9];
        ChartLineSepuluh.data.datasets[0].data[1] = this.lastWeek[9];
        ChartLineSepuluh.data.datasets[0].data[2] = this.thisWeek[9];
      });
      ChartLineSepuluh.update();

      // pengurangan
      this.dMW[0] = this.lastWeek[0] - this.thisWeek[0];
      this.dMW[1] = this.lastWeek[1] - this.thisWeek[1];
      this.dMW[2] = this.lastWeek[2] - this.thisWeek[2];
      this.dMW[3] = this.lastWeek[3] - this.thisWeek[3];
      this.dMW[4] = this.lastWeek[4] - this.thisWeek[4];
      this.dMW[5] = this.lastWeek[5] - this.thisWeek[5];
      this.dMW[6] = this.lastWeek[6] - this.thisWeek[6];
      this.dMW[7] = this.lastWeek[7] - this.thisWeek[7];
      this.dMW[8] = this.lastWeek[8] - this.thisWeek[8];
      this.dMW[9] = this.lastWeek[9] - this.thisWeek[9];
      var naik = this.dMW.filter(function (item) {
        return item > 0;
      });
      this.up = naik.length;

      var turun = this.dMW.filter(function (item) {
        return item < 0;
      });
      this.down = turun.length;
    },
  },
});
