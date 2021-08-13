// demo-2
var picker = new Lightpick({
    field: document.getElementById('demo-2'),
    singleDate: false,
    onSelect: function (start, end) {
        var str = '';
        str += start ? start.format('DD/MM/YYYY') + ' - ' : '';
        str += end ? end.format('DD/MM/YYYY') : '...';
        document.getElementById('result-2').innerHTML = str;

        // local storage
        var result = document.getElementById('result-2').innerHTML;
        result = str;
        localStorage.setItem('tanggal', result);
    }
});

// // local storage get item
localStorage.getItem('tanggal') === null ? document.getElementById('demo-2').placeholder = "Date Range Picker" : document.getElementById('demo-2').value = localStorage.getItem('tanggal');



