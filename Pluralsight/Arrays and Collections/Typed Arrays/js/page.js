var yearlyRevenueLabel = document.getElementById('yearlyTotal');
var newAmount = document.getElementById('itemAmount');
var newMonth = document.getElementById('monthId');
let hikingRadio = document.getElementById('hiking');
let runningRadio = document.getElementById('running');
let huntingRadio = document.getElementById('hunting');


// Every view changes the buffer
let testBuffer = new ArrayBuffer(16);
//if (testBuffer.byteLength == 16) alert('Yes'); // yes

let view1 = new Int16Array(testBuffer); // saying what the arrayBuffer is
view1[0] = 32;
console.log(view1);

// Int8 Range: [-128 to 127] 
//-- If we go beyond the range the data would be stored incorrectrly

let view2 = new DataView(testBuffer);
view2.setInt8(2, 43);
let num = view2.getInt8(2); 
//console.log(num);

let view3 = new DataView(testBuffer);
let num2 = view3.getInt8(2);
console.log(num2);

let view4 = new DataView(testBuffer, 7, 3); // start at position 7 and move over 3 poitions
// view4 has only 3 positions we can work on
view4.setInt8(0, 54);
view4.setInt8(1, 23);
view4.setInt8(2, 32);

let numAlert = view4.getInt8(0);
console.log(numAlert);



function addSale(){}

function findSale(){}

// Bar chart
// var monthlySalesChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: [],
//         datasets: [{
//             label: '# of Sales',
//             data: [],
//             backgroundColor: [
//                 'rgba(238, 184, 104, 1)',
//                 'rgba(75, 166, 223, 1)',
//                 'rgba(239, 118, 122, 1)',
//             ],
//             borderWidth: 0
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });

// Pie Chart
// var deptSalesChart = new Chart(pieCtx, {
//     type: 'pie',
//     data: {
//         labels: deptLabels,
//         datasets: [{
//             label: '# of Sales',
//             data: deptSales,
//             backgroundColor: [
//                 'rgba(238, 184, 104, 1)',
//                 'rgba(75, 166, 223, 1)',
//                 'rgba(239, 118, 122, 1)',
//             ],
//             borderWidth: 0
//         }]
//     },
//     options: {
        
//     }
// })