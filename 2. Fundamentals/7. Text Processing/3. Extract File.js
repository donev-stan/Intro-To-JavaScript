/*
    Write a function that receives a single string - the path to a file (the '\' character is escaped)
    Your task is to subtract the file name and its extension. (Beware of files like template.bak.pptx, as template.bak should be the file name, while pptx is the extension).
*/

function solve(path){
    let dotIndex = path.lastIndexOf('.');

    let extension = path.substring(dotIndex + 1); // +1 so we dont get the dot .    ----  [...)

    let startIndex = path.lastIndexOf('\\') + 1;
    let fileName = path.slice(startIndex, dotIndex);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}

solve('C:\\Internal\\training-internal\\Template.pptx')
solve('C:\\Projects\\Data-Structures\\LinkedList.cs')