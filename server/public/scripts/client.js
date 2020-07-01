$(document).ready(onReady);

let primeStaff = [];

function onReady() {
  console.log('1');

  $.ajax({
    type: 'GET',
    url: '/staff',
  }).then((dataFromServer) => {
    console.log('3');
    console.log(dataFromServer);
    primeStaff = dataFromServer;
    render();
  });

  console.log('2');
}

function render() {
  // Write the array of staff to the DOM
  for (let person of primeStaff) {
    $('.js-container').append(`<p>${person}</p>`);
  }
}
