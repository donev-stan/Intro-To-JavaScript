function solve(array) {
  let rows = [];

  array.forEach((element) => {
    const person = JSON.parse(element); // Obj person with his position and salary

    rows.push(
      `\t<tr>\n\t\t<td>${person.name}</td>\n\t\t<td>${person.position}</td>\n\t\t<td>${person.salary}</td>\n\t</tr>`
    );
  });
 
  console.log("<table>");
  console.log(rows.join("\n"));
  console.log("</table>"); 
}

solve([
  '{"name":"Pesho","position":"Promenliva","salary":100000}',
  '{"name":"Teo","position":"Lecturer","salary":1000}',
  '{"name":"Georgi","position":"Lecturer","salary":1000}',
]);
