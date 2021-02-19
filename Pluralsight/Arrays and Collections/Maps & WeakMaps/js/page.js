// Accessing the objects
var barChartMonthlySales = document.getElementById('monthlySales').getContext('2d');
var pieChartDepartmentSales = document.getElementById('deptSales').getContext('2d');
var yearlyRevenueLabel = document.getElementById('yearlyTotal');
var newAmount = document.getElementById('itemAmount');
var newMonth = document.getElementById('monthId');
let hikingRadio = document.getElementById('hiking');
let runningRadio = document.getElementById('running');
let huntingRadio = document.getElementById('hunting');

var yearlyRevenueTotal = 0;

// WeakMap --- 
{
    let salesA = {
        a: [1, 2]
    }

    var map = new WeakMap();
    map.set(salesA, 'Hiking');

    console.log(`First ${salesA}`);
}
const monthlySales = new Map();
// ---

function addSale(){
	monthlySales.set(newMonth.value, Number(newAmount.value));

    // UPDATE chart labels
    monthlySalesChart.data.labels = Array.from(monthlySales.keys());

    yearlyRevenueTotal = 0;

    monthlySalesChart.data.datasets.forEach( dataset => {
        dataset.data = [];
    });

    for (const amount of monthlySales.values()) {
        yearlyRevenueTotal += amount;
        yearlyRevenueLabel.textContent = yearlyRevenueTotal;

        monthlySalesChart.data.datasets.forEach( dataset => {
            dataset.data.push(amount);
        });
    }

    monthlySalesChart.update();
}

function findSale(){
}

function fillValue(){
}

// Bar chart
var monthlySalesChart = new Chart(barChartMonthlySales, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: '# of Sales',
            data: [],
            backgroundColor: [
                'rgba(238, 184, 104, 1)',
                'rgba(75, 166, 223, 1)',
                'rgba(239, 118, 122, 1)',
            ],
            borderWidth: 0
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});