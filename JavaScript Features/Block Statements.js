const a = 1;

function main() {
    const a = 2;
    console.log(`In Main: ${a}`); // 1
}
main();

console.log(`In Global: ${a}`); // 2

// Scope:
{
    const a = 3;
    console.log(`In Brackets: ${a}`); //3
}

// =============================================================

// Will result in ERROR because they are in the same scope
// switch (a) {
//     case 1:
//         const result = a * 2;
//         console.log(result);
//         break;

//     case 2:
//         const result = a + 2;
//         console.log(result);
//         break;
// }

switch (a) {
    case 1: {

        const result = a * 2;
        console.log(result); // 2
        break;
    }

    case 2: {

        const result = a + 2;
        console.log(result);
        break;
    }
}