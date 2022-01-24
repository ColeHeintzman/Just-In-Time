//*Sets Date on Main Header
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);
//*Save button for input field
$(document).ready(function() {
    $('.saveBtn').click(function() {
    var text = $(this).siblings(".description").val();
    localStorage.setItem(time, text);
    })
})
