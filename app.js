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
    var inputTime = $("button");
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
  $("hour-12").val(tasks["hour-12"]);
  $("hour-1").val(tasks["hour-1"]);
  $("hour-2").val(tasks["hour-2"]);
  $("hour-3").val(tasks["hour-3"]);
  $("hour-4").val(tasks["hour-4"]);
  $("hour-5").val(tasks["hour-5"]);
  $("hour-6").val(tasks["hour-6"]);
  $("hour-7").val(tasks["hour-7"]);
  $("hour-8").val(tasks["hour-8"]);
  // check local storage object for matching id
  // set todays date in the header
  // color code past, current, and future bars

  console.log(tasks);
  timeDate();
});
