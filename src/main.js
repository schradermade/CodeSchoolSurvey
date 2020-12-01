import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  ("#submitResponse").click(function(event) {
    event.preventDefault();
    let gender = $("input:radio:checked").val();
  })
});