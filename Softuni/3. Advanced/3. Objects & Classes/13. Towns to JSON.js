function solve(array){
    
    let data = array
        .map(row => row.split('|')
            .filter(x => x != '')
            .map(x => x.trim()));

    let properties = data.shift(); // ['Town', ']

    let result = [];

    data.forEach(row => {
        
        let [townName, latitude, longitude] = row;

        let instance = {        // to be more dynamic we can use..
            town: townName,                                 // properties[0] == 'Town'
            latitude: Number(Number(latitude).toFixed(2)),  // properties[1] == 'Latitude'
            longitude: Number(Number(longitude).toFixed(2)) // properties[2] == 'Longitude'
        }

        result.push(instance);
    });

    console.log(JSON.stringify(result));
}

solve(
    ['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
)

solve(
    ['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']
)