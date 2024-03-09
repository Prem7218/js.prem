
const form = document.querySelector('form');
form.addEventListener('submit', (item) => {
  item.preventDefault();
  const height = parseInt(document.querySelector('#height').value);

  const weight = parseInt(document.querySelector('#weight').value);

  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Height ${height} Not Valid`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Weight ${weight} Not Valid`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // Result

    
    if(bmi < 18.6) {
      result.innerHTML = `<span>
      Under Weight :- ${bmi}</span>`;
    }
    else if(bmi < 24.9) {
      result.innerHTML = `<span>
      Normal Weight :- ${bmi}</span>`;
    }
    else {
      result.innerHTML = `<span>
      Over Weight :- ${bmi}</span>`;
    }
  }
});
