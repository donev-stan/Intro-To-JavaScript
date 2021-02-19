function solve(array){

    // Обхождаме елементите на масива
    // намираме левия и десния сбор 
    // ако i == 0 или i = array.length-1 (последният) - съответния сбор е 0
    // сравняваме сборовете
    // принтираме индекса или 'No'

    let isIndex = false;
    
    for (let i = 0; i < array.length; i++) {
        let sumLeft = 0;
        let sumRight = 0;

        if(i != 0){
            for (let j = 0; j < i; j++) {
                sumLeft += array[j];
            }
        }
        
        if(i != array.length-1){
            for (let g = i+1; g < array.length; g++) {
                sumRight += array[g];
            }
        }

        if (sumLeft === sumRight) {
            isIndex = true;
            console.log(i);
        }
    }

    if (!isIndex) {
        console.log('No nigga');
    }


    console.log("-----------------------");
}

solve([1, 2, 3, 3]);
solve([1, 2]);
solve([1]);
solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);

