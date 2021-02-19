let barChartMonthlySales = document.getElementById('monthlySales').getContext('2d');
let pieChartDepartmentSales = document.getElementById('departmentSales').getContext('2d');
let yearlyRevenueLabel = document.getElementById('yearlyTotal');

let yearlyRevenueTotal = 0;

// Values from the form
let newAmount = document.getElementById('itemAmount');
let newMonth = document.getElementById('monthId');

const monthlySalesSet = new Set();
const monthlyLabelsSet = new Set();

function addSale(){
    monthlySalesSet.add(parseInt(newAmount.value));
    monthlyLabelsSet.add(newMonth.value);

    yearlyRevenueTotal = 0;

    monthlySalesChart.data.datasets.forEach( (dataset) => {
        dataset.data = [];
    });

    for (let amount of monthlySalesSet) {
        yearlyRevenueTotal += amount;
        yearlyRevenueLabel.textContent = yearlyRevenueTotal;

        monthlySalesChart.data.datasets.forEach( (dataset) => {
            dataset.data.push(amount);
        });
    }
   
    monthlySalesChart.data.labels = Array.from(monthlyLabelsSet);
    monthlySalesChart.update();
}

function deleteValue(){
    for (const value of monthlySalesSet) {
        alert(value);
    }
}

function addTotal() {}

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