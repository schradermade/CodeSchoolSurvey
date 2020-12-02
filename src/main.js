import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  $("#response").click(function(event) {
    event.preventDefault();
    let gender = $("input:radio:checked").val();
    console.log(`The user input is: ${gender}`);
    
  });
});