google.charts.load('current', {'packages':['bar']});
      
google.charts.setOnLoadCallback(currentBudget);
google.charts.setOnLoadCallback(currentSpending);
google.charts.setOnLoadCallback(tenPercentTax);

function currentBudget(){
    const currentData = google.visualization.arrayToDataTable([
        ['Budget Category', 'Individual Income Taxes', 'Payroll Taxes', 'Other Taxes', 'Corporate Income Taxes'],
        ['Current', 1700000000000, 1200000000000, 271000000000, 230000000000],
        ['10 Percent Tax', 757980150139.2, 526731968740.8, 271000000000, 230000000000]
    ]);

    const options = {
        bars: 'horizontal',
        // width: 1000,
        height: 150,
        legend: {position: 'none', maxLines: 2},
        bar: {groupWidth: '75%'},
        isStacked: true
    };

    const chart = new google.charts.Bar(document.getElementById('currentData'));
    chart.draw(currentData, google.charts.Bar.convertOptions(options));
}

function currentSpending(){
    const currentSpendingData = google.visualization.arrayToDataTable([
        ['Spending', 'Social Security', 'Medicare', 'Medicaid', 'Other', 'NonDefense', 'Defense', 'Net Interest'],
        ['2019 Spending', 1000000000000, 644000000000, 409000000000, 642000000000, 661000000000, 719000000000, 375000000000]
    ]);

    const options2 = {
        bars: 'horizontal',
        // width: 1000,
        height: 100,
        legend: {position: 'none', maxLines: 1},
        bar: {groupWidth: '75%'},
        isStacked: true
    };
    const chart = new google.charts.Bar(document.getElementById('currentSpending'));
    chart.draw(currentSpendingData, google.charts.Bar.convertOptions(options2));
}

function tenPercentTax(){
    
}