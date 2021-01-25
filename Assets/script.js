
$("#currentDay").text(moment().format("dddd, MMMM, Do"))

var timeArr = ["#9", "#10", "#11", "#12", "#13", "#14", "#15", "#16", "#17"]

function checkTime() {
    var time = moment().format("h");
    var timeInt = parseInt(time);

    
    if (timeInt < 9) {
        $("#9").addClass("past");
    } else if (timeInt === 9) {
        $("#9").addClass("present");
    } else {
        $("#9").addClass("future");
    }

};


checkTime();


var time = moment().format("h");

var timeInt = parseInt(time);

console.log(timeInt);
console.log(time);

console.log(parseInt("#9"));




$(".saveBtn").on('click', function() {

    var text = $(".text").val();
    localStorage.setItem(text, value);
    var text = $(this).parent().attr("id");

}) 


