function solve(input){
    const listProcessorBuilder = function(){
        let list = [];

        // return {
        //     add: (text) => list.push(text),
        //     remove: (text) => list.splice(list.indexOf(text), 1),
        //     print: () => console.log(list.join(', '))
        // };

        // не мутиращ вариант:
        return {
            add: (text) => list = [...list, text],
            remove: (text) => list = list.filter(x => x != text),
            print: () => console.log(list.join(', '))
        };
    }

    let listProcessor = listProcessorBuilder();

    input
        .map(x => x.split(' '))
        .forEach(([command, argument]) => listProcessor[command](argument));
}

solve(
    ['add hello', 'add again', 'remove hello', 'add again', 'print']
);