// const person = {
// 	firstName: 'Stan',
// 	lastName: 'Donev',
// 	hobbies: ['coding', 'hiking', 'petting'],
// 	school: {
// 		name: 'Paisii',
// 		address: 'Plovdiv',

//         showSchoolName: function(){
//             console.log(this.name);
//         }
// 	}
// };

// // let { firstName, hobbies, ...otherProperties} = person;

// // console.log(otherProperties);
// // console.log(firstName);
// // console.log(hobbies);

// let { showSchoolName } = person.school;
// showSchoolName.call(person.school);


// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// let [firstRow, secondRow, thirdRow] = matrix;
// console.log(firstRow); // [1, 2, 3]
// console.log(secondRow); // [4, 5, 6]
// console.log(thirdRow); // [7, 8, 9]

// let [[firstElement, secondElement]] = matrix;
// console.log(firstElement); // 1
// console.log(secondElement); // 2


// let cats = [
//     { name: 'Lilly', age: 0.5 },
//     { name: 'Garry', age: 3 },
//     { name: 'Garfield', age: 5 }
// ];

// let [ firstCat, secondCat ] = cats;
// console.log(firstCat); // { name: 'Lilly', age: 0.5 }

// let [ {name, age}, secondKitty ] = cats;
// console.log(name); // Lilly


// let students = [
//     { name: 'Stan', score: 3},
//     { name: 'Ban', score: 1},
//     { name: 'Dan', score: 7},
//     { name: 'Fan', score: 5},
//     { name: 'Man', score: 4},
//     { name: 'Ran', score: 2},
//     { name: 'Danan', score: 1},
// ];

// function aggregate(acc, student){
    
//     if (acc.some(x => x.name == )) {
        
//     }
     
//     return acc;
// }

// let result = students.reduce(aggregate, []);


let props = [
    { name: 'stan'},
    { age: 22},
    { height: 173},
    { eyeColor: 'brown'}
];

let person = props.reduce((acc, x) => {
    // return {...acc, ...x};
    return Object.assign({}, acc, x);
}, {});

console.log(person);