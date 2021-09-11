var app = new Vue({
  el: "#app",
  data: {
    project: "",
    average: "-",
    top: [0, 0, 0],
    up: 0,
    down: 0,
    domain: "",
    otoritas: 0,
    index: 0,
    allData: [
      {
        keywords: "",
        thisWeek: 0,
        lastWeek: 0,
        twoWeeksAgo: 0,
        dates: 0,
        dMW: 0,
      },
      {
        keywords: "",
        thisWeek: 0,
        lastWeek: 0,
        twoWeeksAgo: 0,
        dates: 0,
        dMW: 0,
      },
      {
        keywords: "",
        thisWeek: 0,
        lastWeek: 0,
        twoWeeksAgo: 0,
        dates: 0,
        dMW: 0,
      },
      {
        keywords: "",
        thisWeek: 0,
        lastWeek: 0,
        twoWeeksAgo: 0,
        dates: 0,
        dMW: 0,
      },
      {
        keywords: "",
        thisWeek: 0,
        lastWeek: 0,
        twoWeeksAgo: 0,
        dates: 0,
        dMW: 0,
      },
    ],
  },
  created() {
    this.project = localStorage.getItem("project") || "";
    this.average = localStorage.getItem("posisi") || this.average;
    this.top = JSON.parse(localStorage.getItem("top")) || this.top;
    this.up = localStorage.getItem("up") || this.up;
    this.down = localStorage.getItem("down") || this.down;
    this.domain = localStorage.getItem("domain") || this.domain;
    this.otoritas = localStorage.getItem("otoritas") || this.otoritas;
    this.index = localStorage.getItem("index") || this.index;
  },
  methods: {
    localStorage: function () {
      localStorage.setItem("project", this.project);
      localStorage.setItem("domain", this.domain);
      localStorage.setItem("otoritas", this.otoritas);
      localStorage.setItem("index", this.index);
    },
    updateChart: function () {
      // chart top
      planetChartData.data.datasets.forEach((dataset) => {
        planetChartData.data.datasets[0].data[0] = this.top[0];
        planetChartData.data.datasets[0].data[1] = this.top[1];
        planetChartData.data.datasets[0].data[2] = this.top[2];
      });
      planetChartData.update();
      const parsed = JSON.stringify(this.top);
      localStorage.setItem("top", parsed);
    },
    // rata2
    totalAverage: function () {
      var sum = 0;
      for (var i in this.allData) {
        sum += parseInt(this.allData[i].thisWeek);
      }
      var numbersCnt = this.allData.length;
      let total = sum / numbersCnt;
      this.average = Math.round(total);
      if (this.average === 0) {
        this.average = "-";
      }
      localStorage.setItem("posisi", this.average);
    },
    minWeeks: function () {
      // evolusi 1
      ChartLineSatu.data.datasets.forEach((dataset) => {
        ChartLineSatu.data.datasets[0].data[0] = this.allData[0].twoWeeksAgo;
        ChartLineSatu.data.datasets[0].data[1] = this.allData[0].lastWeek;
        ChartLineSatu.data.datasets[0].data[2] = this.allData[0].thisWeek;
      });
      ChartLineSatu.update();
      // evolusi 2
      // ChartLineDua.data.datasets.forEach((dataset) => {
      //   ChartLineDua.data.datasets[0].data[0] = this.twoWeeksAgo[1];
      //   ChartLineDua.data.datasets[0].data[1] = this.lastWeek[1];
      //   ChartLineDua.data.datasets[0].data[2] = this.thisWeek[1];
      // });
      // ChartLineDua.update();
      // // evolusi 3
      // ChartLineTiga.data.datasets.forEach((dataset) => {
      //   ChartLineTiga.data.datasets[0].data[0] = this.twoWeeksAgo[2];
      //   ChartLineTiga.data.datasets[0].data[1] = this.lastWeek[2];
      //   ChartLineTiga.data.datasets[0].data[2] = this.thisWeek[2];
      // });
      // ChartLineTiga.update();
      // // evolusi 4
      // ChartLineEmpat.data.datasets.forEach((dataset) => {
      //   ChartLineEmpat.data.datasets[0].data[0] = this.twoWeeksAgo[3];
      //   ChartLineEmpat.data.datasets[0].data[1] = this.lastWeek[3];
      //   ChartLineEmpat.data.datasets[0].data[2] = this.thisWeek[3];
      // });
      // ChartLineEmpat.update();
      // // evolusi 5
      // ChartLineLima.data.datasets.forEach((dataset) => {
      //   ChartLineLima.data.datasets[0].data[0] = this.twoWeeksAgo[4];
      //   ChartLineLima.data.datasets[0].data[1] = this.lastWeek[4];
      //   ChartLineLima.data.datasets[0].data[2] = this.thisWeek[4];
      // });
      // ChartLineLima.update();

      // pengurangan
      for (let i = 0; i < this.allData.length; i++) {
        this.allData[i].dMW =
          this.allData[i].lastWeek - this.allData[i].thisWeek;
      }

      // up
      var naik = this.allData.filter(function (item) {
        return item.dMW > 0;
      });

      this.up = naik.length;
      localStorage.setItem("up", this.up);

      // down
      var turun = this.allData.filter(function (item) {
        return item.dMW < 0;
      });

      this.down = turun.length;
      localStorage.setItem("down", this.down);
    },
    addNewItems: function () {
      this.allData.push({
        keywords: "",
        thisWeek: 0,
        lastWeek: 0,
        twoWeeksAgo: 0,
        dates: 0,
        dMW: 0,
      });
    },
    deleteItem: function (index) {
      this.allData.splice(index, 1);
      // window.location.reload();
    },
  },
});
