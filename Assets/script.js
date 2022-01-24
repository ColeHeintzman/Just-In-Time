//*Sets Date and Time on Main Header
var todayDate = moment().format('dddd, MMM Do YYYY');
var currentTime = moment().format("HH:mm:ss");
$("#currentDay").html(todayDate);
$("#currentTime").html(currentTime);
//*Update Time Clock
function update() {
    $('#currentTime').html(moment().format('HH:mm:ss'));
  }
  setInterval(update, 1000)
//*Save button for input field-Local Storage
$(document).ready(function() {
    $('.saveBtn').click(function() {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, text);
    localStorage.getItem("value");
    })
})
//*Recalling local storage for data persistence after refresh browser
$("#0800 .description").val(localStorage.getItem("0800"));
$("#0900 .description").val(localStorage.getItem("0900"));
$("#1000 .description").val(localStorage.getItem("1000"));
$("#1100 .description").val(localStorage.getItem("1100"));
$("#1200 .description").val(localStorage.getItem("1200"));
$("#1300 .description").val(localStorage.getItem("1300"));
$("#1400 .description").val(localStorage.getItem("1400"));
$("#1500 .description").val(localStorage.getItem("1500"));
$("#2100 .description").val(localStorage.getItem("2100"));
$("#2200 .description").val(localStorage.getItem("2200"));
//*Updating Schedule css based on current time
function timeClock() {
    $(".time-block").each(function() {
        var currentHour = moment().hour();
        var scheduleTime = parseInt($(this).attr("id").split("hour")[1]);
        if (scheduleTime < currentHour) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (scheduleTime === currentHour) {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}
timeClock();