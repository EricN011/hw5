$(document).ready(function() {
  // variables
  var tasks = JSON.parse(localStorage.getItem("mySched")) || {};
  // today's date
  function timeDate() {
    var todaysDate = moment().format("MMM Do YYYY");
    var todaysTime = moment().format("h:mm a");
    $("#date").html(`Today is: ${todaysDate}, ${todaysTime}`);
    var currentHour = moment().hours();
    console.log(currentHour);
    var inputTime = $("input");
  }
  // helper functions

  // events
  // clicking save button
  $(".js-save").on("click", function() {
    // get key and value
    var key = $(this).data("key");
    var value = $(`#${key}`).val();
    // takes text and saves it to local storage
    tasks[key] = value;
    localStorage.setItem("mySched", JSON.stringify(tasks));
  });
  // init
  $("hour-9").val(tasks["hour-9"]);
  $("hour-10").val(tasks["hour-10"]);
  $("hour-11").val(tasks["hour-11"]);
  // check local storage object for matching id
  // set todays date in the header
  // color code past, current, and future bars

  console.log(tasks);
  timeDate();
});
