const form = document.querySelector('#form');
const input = document.querySelector('#input');
const select = document.querySelector('#select');
const btn = document.querySelector('#button');
const total = document.querySelector('#total');
const usd = 12.611;
const rubl = 136.2;
const dinor = 41.087;
const euro = 13.622;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputValue = input.value;
  const selectValue = select.value;

  if (selectValue == 'USD') {
    const usdToUzs = (inputValue * usd).toFixed(2);
    total.placeholder = `${usdToUzs} uzs`;
  } else if (selectValue == 'YEVRO') {
    const euroToUzs = (inputValue * euro).toFixed(2);
    total.placeholder = `${euroToUzs} uzs`;
  } else if (selectValue == 'RUBL') {
    const rublToUzs = (inputValue * rubl).toFixed(2);
    total.placeholder = `${rublToUzs} uzs`;
  } else if (selectValue == 'DINOR') {
    const dinorToUzs = (inputValue * dinor).toFixed(2);
    total.placeholder = `${dinorToUzs} uzs`;
  }
});
