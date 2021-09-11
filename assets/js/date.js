// demo-2
var picker = new Lightpick({
  field: document.getElementById("demo-2"),
  singleDate: false,
  onSelect: function (start, end) {
    var str = "";
    str += start ? start.format("DD/MM/YYYY") + " - " : "";
    str += end ? end.format("DD/MM/YYYY") : "...";
    document.getElementById("result-2").innerHTML = str;

    // local storage
    var result = document.getElementById("result-2").innerHTML;
    result = str;
    localStorage.setItem("tanggal", result);
  },
});
// // local storage get item demo 2
localStorage.getItem("tanggal") === null
  ? (document.getElementById("demo-2").placeholder = "Date Range Picker")
  : (document.getElementById("demo-2").value = localStorage.getItem("tanggal"));

// // dates 1
// var picker = new Lightpick({
//   field: document.getElementById("date-1"),
//   onSelect: function (date) {
//     document.getElementById("result-1").innerHTML = date.format("Do MMMM YYYY");
//   },
// });
// // dates 2
// var picker = new Lightpick({
//   field: document.getElementById("date-2"),
//   onSelect: function (date) {
//     document.getElementById("result-2").innerHTML = date.format("Do MMMM YYYY");
//   },
// });
// // dates 3
// var picker = new Lightpick({
//   field: document.getElementById("date-3"),
//   onSelect: function (date) {
//     document.getElementById("result-3").innerHTML = date.format("Do MMMM YYYY");
//   },
// }); // dates 4
// var picker = new Lightpick({
//   field: document.getElementById("date-4"),
//   onSelect: function (date) {
//     document.getElementById("result-4").innerHTML = date.format("Do MMMM YYYY");
//   },
// }); // dates 5
// var picker = new Lightpick({
//   field: document.getElementById("date-5"),
//   onSelect: function (date) {
//     document.getElementById("result-5").innerHTML = date.format("Do MMMM YYYY");
//   },
// });
// dates 6
// var picker = new Lightpick({
//   field: document.getElementById("date-6"),
//   onSelect: function (date) {
//     document.getElementById("result-6").innerHTML = date.format("Do MMMM YYYY");
//   },
// }); // dates 7
// var picker = new Lightpick({
//   field: document.getElementById("date-7"),
//   onSelect: function (date) {
//     document.getElementById("result-7").innerHTML = date.format("Do MMMM YYYY");
//   },
// }); // dates 8
// var picker = new Lightpick({
//   field: document.getElementById("date-8"),
//   onSelect: function (date) {
//     document.getElementById("result-8").innerHTML = date.format("Do MMMM YYYY");
//   },
// }); // dates 9
// var picker = new Lightpick({
//   field: document.getElementById("date-9"),
//   onSelect: function (date) {
//     document.getElementById("result-9").innerHTML = date.format("Do MMMM YYYY");
//   },
// }); // dates 10
// var picker = new Lightpick({
//   field: document.getElementById("date-10"),
//   onSelect: function (date) {
//     document.getElementById("result-10").innerHTML =
//       date.format("Do MMMM YYYY");
//   },
// });
