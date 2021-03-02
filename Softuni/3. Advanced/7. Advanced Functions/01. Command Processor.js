// Write a program, which:
//- Keeps a string inside its scope
//- Can ececute different commands that modify a string:
//-- append() - add a str to the end of the internal string
//-- removeStart() - remove the first n characters
//-- removeEnd() - remove the last n characters
//-- print() - print the stored string

function solution(){
    let str = '';
    return {
        append: (string) => str += string,
        removeStart: (n) => str = str.substring(n),
        removeEnd: (n) => str = str.substring(0, str.length - n),
        print: () => console.log(str)
    }
}