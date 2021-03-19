function solve() {
  // слагаме eventListener на първия бутон

  // прочитаме и парсваме входа
  // за вс елемент създаваме ред със съответното съдържание и добавяме към таблицата

  // добавяме eventListener за купуване

  // обхождаме таблицата и взимаме само избраните редове
  // композираме резултата

  const tbody = document.querySelector('tbody');

  const [input, output] = [...document.querySelectorAll('textarea')];
  const [generate, buy] = [...document.querySelectorAll('button')];
  generate.addEventListener('click', onGenerate);
  buy.addEventListener('click', onBuy);

  function onGenerate(e){

    const data = JSON.parse(input.value);
  
    for (const item of data) {
      const row = document.createElement('tr');
      const html = `
        <td>
          <img src="${item.img}">
        </td>
        <td>
            <p>${item.name}</p>
        </td>
        <td>
            <p>${item.price}</p>
        </td>
        <td>
            <p>${item.decFactor}</p>
        </td>
        <td>
            <input type="checkbox"/>
        </td>`;

        row.innerHTML = html;
        tbody.appendChild(row);
    }
  }

  function onBuy(e){
    const boughtItems = [...tbody.querySelectorAll('input')]
      .filter(i => i.checked)
      .map(i => i.parentNode.parentNode)
      .map(row => ({
        name: row.children[1].textContent.trim(),
        price: Number(row.children[2].textContent),
        decFactor: Number(row.children[3].textContent)
      }));

    const result = [ 
      `Bought furniture: ${boughtItems.map(i => i.name).join(', ')}`,
      `Total price: ${boughtItems.reduce((p, c, i, a) => p + c.price, 0)}`, //(p, c, i, a) = previous, current, index, array
      `Average decoration factor: ${boughtItems.reduce((p, c, i, a) => p + c.decFactor, 0) / boughtItems.length}`, //(p, c, i, a) = previous, current, index, array
    ];

    output.value = result.join('\n');
  }
} 

