const form = document.getElementById('cardForm');
const tableBody = document.querySelector('#cardTable tbody');
let cards = JSON.parse(localStorage.getItem('cards')) || [];

function renderTable() {
  tableBody.innerHTML = '';
  cards.forEach((card, index) => {
    const profit = (card.sell - card.buy).toFixed(2);
    const row = `
      <tr>
        <td>${card.player}</td>
        <td>$${card.buy}</td>
        <td>$${card.sell}</td>
        <td class="${profit >= 0 ? 'positive' : 'negative'}">$${profit}</td>
        <td><button onclick="deleteCard(${index})">🗑️</button></td>
      </tr>
    `;
    tableBody.insertAdjacentHTML('beforeend', row);
  });
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const player = document.getElementById('player').value;
  const buyPrice = parseFloat(document.getElementById('buyPrice').value);
  const sellPrice = parseFloat(document.getElementById('sellPrice').value);

  cards.push({ player, buy: buyPrice, sell: sellPrice });
  localStorage.setItem('cards', JSON.stringify(cards));
  renderTable();
  form.reset();
});

function deleteCard(index) {
  cards.splice(index, 1);
  localStorage.setItem('cards', JSON.stringify(cards));
  renderTable();
}

renderTable();
