function meet(input){
    const schedule = {};

    input.map(x => x.split(' ')).forEach(([weekday, name]) => {
        if (schedule.hasOwnProperty(weekday)) {
            console.log(`Conflict on ${weekday}`);
        } else {
            schedule[weekday] = name;
            console.log(`Scheduled for ${weekday}`);
        }
    });

    Object.entries(schedule).forEach(([weekday, name]) => console.log(`${weekday} -> ${name}`));
}

meet(
    [
        'Monday Peter',
        'Wednesday Bill',
        'Monday Tim',
        'Friday Tim'
    ]
);