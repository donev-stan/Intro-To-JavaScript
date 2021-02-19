function solve(array){

    // Изваждаме първият елемент който е '32 54 21 12 4 0 23'
    // Чрез .split(' ') го правим на масив от елементи(string) без white spaces
    // .map(Number) го правим на масив от числа
    let wagons = array.shift().split(' ').map(Number); 
    console.log(wagons);

    // Запазваме лимита в проенлива
    let capacity = Number(array.shift());

    // Минаваме през всяка следваща команда и 
    for (let i = 0; i < array.length; i++) {
        // .split() returns an array. In this case: ['Add', 10] (for example)
        // .includes() returns True or False
        let commandIsAdd = array[i].split(' ').includes('Add'); // return true or false

        // if it's true then we need to add a new wagon at the end of the array
        if (commandIsAdd) {
            let newWagon = array[i].split(' ')[1]; // сплитва елемента като го разделя на 2 стринга и вземаме втория който съдържа число(под формата на стринг)
            wagons.push(Number(newWagon));
        }
        else{ // Ако нямаме команда значи имаме число(стринг) което отговаря за пътниците
            let passangers = Number(array[i]);

            // Минаваме през вагоните
            for (let j = 0; j < wagons.length; j++) {  
                //Проверяваме дали вагона[j] с бр пътници + пътници ще се съберът 
                if (wagons[j] + passangers <= capacity) {
                    wagons[j] += passangers;
                    break; // За да не ги добавяме на други места
                }
            }
        }

        
    }
    console.log(wagons.join(' '));
    console.log("----------------");
}

solve(['32 54 21 12 4 0 23','75','Add 10','Add 0','30','10','75']);
solve(['0 0 0 10 2 4','10','Add 10','10','10','10','8','6']);