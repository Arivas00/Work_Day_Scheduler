
$("#currentDay").text(moment().format("dddd, MMMM, Do"))


function checkTime() {
    var time = moment().format("hA");
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


var time = moment().format("hA");

var timeInt = parseInt(time);

console.log(timeInt);
console.log(time);




$(".saveBtn").on('click', function() {

    var text = $(".text").val();
    localStorage.setItem(text, value);
    var text = $(this).parent().attr("id");

}) 


