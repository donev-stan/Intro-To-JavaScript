// Charts
let ctx = document.getElementById('monthlySales').getContext('2d');
let pieCtx = document.getElementById('departmentSales').getContext('2d');
//  .getContext() -> https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext
// Now I have the 2D rendering context for a canvas and I can draw within it.
let yearlyLabel = document.getElementById('yearlyTotal');

// Create an array from a list of arguments
let monthlySales = Array.of(500, 9000, 30, 4000);
let monthlyLabels = Array.of('Oct', 'Nov', 'Dec');

let departmentSales = Array.of(12, 9, 3);
let departmenLabels = Array.of('Hiking', 'Running', 'Hunting');
// Array.of() is going to take a list of arguments and convert in into array


let yearlyTotal = 0;
monthlySales.forEach(addYearlyTotal);
//      let yearlyTotal = addYearlyTotal(...monthlySales);
// ... is spread operator and in this case it takes each element from the array and passes it as an argument
yearlyLabel.textContent = "$" + yearlyTotal;


let octoberNums = Array.of(1200, 1000, 5000);
let novemberNums = Array.of(200, 100, 6000);
let decemberNums = Array.of(4000, 8000, 3000);

//      let total = Array.of(addYearlyTotal(...octoberNums), addYearlyTotal(...novemberNums), addYearlyTotal(...decemberNums));

// Calculate yearly total
function addYearlyTotal(x){
    yearlyTotal += x;
}

// Bar chart
var monthlySalesChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: monthlyLabels,
        datasets: [{
            label: '# of Sales',
            data: monthlySales,
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

// Pie chart
var deptSalesChart = new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: departmenLabels,
        datasets: [{
            label: '# of Sales',
            data: departmentSales,
            backgroundColor: [
                'rgba(238, 184, 104, 1)',
                'rgba(75, 166, 223, 1)',
                'rgba(239, 118, 122, 1)',
            ],
            borderWidth: 0
        }]
    },
    options: {
        
    }
});

function findOver1000(){
    let firstThousandValue = monthlySales.find(element => element > 1000); // gets value
    let firstThousandIndex = monthlySales.findIndex(element => element > 1000); // gets index
    alert(firstThousandValue);
}

function resetNum(){
    monthlySales.fill(0);
    monthlySalesChart.update();
}