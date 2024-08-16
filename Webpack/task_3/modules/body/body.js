import $ from 'jquery';
import _ from 'lodash';

console.log('Init body');

function updateCounter() {
  let count = 0;
  $('button').on('click', _.debounce(function () {
    $('#count').text(`${++count} clicks on the button`);
  }, 500));
}

$(document).ready(function () {
  $('body').append('<button id="start-button">Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');

  updateCounter();
});
