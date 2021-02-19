// https://gist.github.com/ahrjarrett/326554ad50e09c7306c1a479fcc66a16 Matrix 3x3
function solve() {
    const tbody = document.querySelector('tbody');
    const resultP = document.querySelector('#check p');
    
    const [checkBtn, clearBtn] = document.querySelectorAll('button');
    checkBtn.addEventListener('click', quickCheck);
    clearBtn.addEventListener('click', clear);

    function quickCheck(e){

        let matrix = [];
        const row1 = []; 
        const row2 = []; 
        const row3 = []; 

        tbody.querySelectorAll('tr')[0].querySelectorAll('td > input').forEach(num => row1.push(Number(num.value)));
        tbody.querySelectorAll('tr')[1].querySelectorAll('td > input').forEach(num => row2.push(Number(num.value)));
        tbody.querySelectorAll('tr')[2].querySelectorAll('td > input').forEach(num => row3.push(Number(num.value)));

        matrix = [row1, row2, row3];
        //console.log(matrix);

        validate(matrix);
        finishded();
    }

    function clear(e){
        document.querySelectorAll('input[type="number"]').forEach(field => field.value = '');
        resultP.textContent = '';
        tbody.parentElement.style.border = "none";
    }

    function finishded(){
        resultP.textContent = 'You solved it! Congratulations!';
        resultP.style.color = "green";
        tbody.parentElement.style.border = "2px solid green";
    }

    function tryAgain(){
        resultP.textContent = 'NOP! You are not done yet!';
        resultP.style.color = "red";
        tbody.parentElement.style.border = "2px solid red";

        setInterval(() => {
            resultP.textContent = '';
            resultP.style.color = "";
            tbody.parentElement.style.border = "";
        }, 3000);
    }

    // Matrix [row] [column]
    function validate(matrix){

        for (let column = 0; column < matrix.length; column++) {
            for (let row = 0; row < matrix.length; row++) {
                console.log(`row and column: ${matrix[column][row]}`);                
                console.log(matrix[row][column]);
            }
        }


        //-- First Column
        //matrix[0][0];
        //matrix[1][0];
        //matrix[2][0];
        
        //-- Second Column
        //matrix[0][0];
        //matrix[1][0];
        //matrix[2][0];
    }
}