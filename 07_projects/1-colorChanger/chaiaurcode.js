const buttons = document.querySelectorAll('.button');
console.log(buttons);
console.log(buttons[0].getAttribute('id'));
// document.body.style.backgroundColor = `${buttons[0].getAttribute("id")}`

buttons.forEach((but) => {
  but.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.target);

    document.body.style.backgroundColor = `${but.getAttribute('id')}`;
  });
});
