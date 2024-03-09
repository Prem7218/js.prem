```
const buttons = document.querySelectorAll('.button');
//console.log(buttons);
const body = document.querySelector('body');

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener('click', function (item) {
    // console.log(item)
    // console.log(item.target)
    switch (item.target.id) {
      case 'grey':
        body.style.backgroundColor = item.target.id;
        break;

      case 'white':
        body.style.backgroundColor = 'white';
        break;

      case 'blue':
        body.style.backgroundColor = item.target.id;
        break;

      case 'yellow':
        body.style.backgroundColor = 'yellow';
        break;

      case 'purple':
        body.style.backgroundColor = item.target.id;
        break;

      case 'black':
        body.style.backgroundColor = 'black';
        break;

      case 'brown':
        body.style.backgroundColor = item.target.id;
        break;

      case 'green':
        body.style.backgroundColor = 'green';
        break;

      case 'red':
        body.style.backgroundColor = item.target.id;
        break;

      case 'orange':
        body.style.backgroundColor = 'orange';
        break;

      case 'indigo':
        body.style.backgroundColor = item.target.id;
        break;

      case 'pink':
        body.style.backgroundColor = 'pink';
        break;
      
    }
  });
});


```