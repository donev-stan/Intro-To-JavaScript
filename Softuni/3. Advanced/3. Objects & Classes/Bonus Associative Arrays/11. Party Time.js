function partyBook(array){

    const list = {
        'VIP': [],
        'regular': []
    };

    let guest = array.shift();

    while(guest != 'PARTY'){
        let isVip = isNaN(guest[0]) ? false : true;

        if (isVip) {
            list['VIP'].push(guest);
        } else {
            list['regular'].push(guest);
        }

        guest = array.shift();
    }

    array.forEach(guestWhoShowed => {
        const vipList = list['VIP'];
        const regularList = list['regular'];
        if (vipList.includes(guestWhoShowed)) {
            vipList.splice(vipList.indexOf(guestWhoShowed), 1);
        } else if (regularList.includes(guestWhoShowed)) {
            regularList.splice(regularList.indexOf(guestWhoShowed), 1);
        }
    });

    console.log(list['VIP'].length + list['regular'].length);
    console.log(list['VIP'].join('\n'));
    console.log(list['regular'].join('\n'));
}

partyBook(
    [
        '7IK9Yo0h',
        '9NoBUajQ',
        'Ce8vwPmE',
        'SVQXQCbc',
        'tSzE5t0p',
        'PARTY',
        '9NoBUajQ',
        'Ce8vwPmE',
        'SVQXQCbc'
    ]
);