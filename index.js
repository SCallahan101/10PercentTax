google.charts.load('current', {'packages':['bar']});
      
google.charts.setOnLoadCallback(currentBudget);
google.charts.setOnLoadCallback(tenPercentTax)

function currentBudget(){
    const currentData = google.visualization.arrayToDataTable([
        ['Budget Category', 'Individual Income Taxes', 'Payroll Taxes', 'Other Taxes', 'Corporate Income Taxes'],
        ['Current', 1700000000000, 1200000000000, 271000000000, 230000000000],
        ['10 Percent Tax', 757980150139.2, 526731968740.8, 271000000000, 230000000000]
    ]);

    const options = {
        bars: 'horizontal',
        width: 1000,
        height: 150,
        legend: {position: 'top', maxLines: 2},
        bar: {groupWidth: '75%'},
        isStacked: true
    };

    const chart = new google.charts.Bar(document.getElementById('currentData'));
    chart.draw(currentData, google.charts.Bar.convertOptions(options));
}

function tenPercentTax(){
    
}