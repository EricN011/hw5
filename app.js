$(document).ready(function() {
  // variables
  var tasks = JSON.parse(localStorage.getItem("mySched")) || {};
  // today's date
  function timeDate() {
    var todaysDate = moment().format("MMM Do YYYY, h:mm:ss a");
    $("#date").html(`Today is: ${todaysDate}`);
    var currentHour = moment().hours();
    console.log(currentHour);
    var inputTime = $("button");
  }
  // helper functions
  // events
  //   for (i = 0; i < inputTime.length; i++) {
  //     let idTime = inputTime[i].id;
  //     idTime = parseInt(idTime.slice(0, -1));
  //     console.log("id tags", inputTime[i].id);
  //     console.log("idTime", idTime);
  //     if (currentHour > idTime) {
  //       $(`#${inputTime[i].id}`).attr("style", "background-color:silver");
  //     } else if (currentHour < idTime) {
  //       $(`#${inputTime[i].id}`).attr("style", "background-color: coral");
  //     } else if (currentHour === idTime) {
  //       $(`#${inputTime[i].id}`).attr("style", "background-color: RosyBrown");
  //     }
  //   }
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
