function attachEventsListeners() {
   
    const ratios = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    };

    function convertDistance(value, unitFrom, unitTo){
        const inMeters = Number(value) * ratios[unitFrom];
        let result;
        switch (unitTo) {
            case 'km':
                result = inMeters / ratios.km;
                break;
            case 'm':
                result = inMeters / ratios.m;
                break;
            case 'cm':
                result = inMeters / ratios.cm;
                break;
            case 'mm':
                result = inMeters / ratios.mm;
                break;  
            case 'mi':
                result = inMeters / ratios.mi;
                break;  
            case 'yrd':
                result = inMeters / ratios.yrd;
                break;  
            case 'ft':
                result = inMeters / ratios.ft;
                break;  
            case 'in':
                result = inMeters / ratios.in;
                break;  
        }
        return result;
    }

    const [input, output] = document.querySelectorAll('input[type="text"]')
    document.querySelector('input[type="button"][id="convert"]').addEventListener('click', convert);

    const [inputUnits, outputUnits] = document.querySelectorAll('select');

    function convert(e){

        const unitsFrom = inputUnits.value;
        const unitsTo = outputUnits.value;

        const result = convertDistance(input.value, unitsFrom, unitsTo);
        output.value = result.toFixed(2);
    }
}