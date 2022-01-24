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
$("#1600 .description").val(localStorage.getItem("1600"));
$("#1700 .description").val(localStorage.getItem("1700"));
//*Updating Schedule css based on current time
function formatRows() {
    $(".time-block").each(function() {
        var scheduleTime = Array.from(document.getElementsByTagName('section'));
        console.log(scheduleTime);
        if (scheduleTime < currentTime) {
            $(this).addClass("past");
        }
        else if (scheduleTime === currentTime) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("future");
        }
    })
}

formatRows();