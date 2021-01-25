
$(document).ready(function () {

  $("#currentDay").text(moment().format("dddd, MMMM, Do"))

  function checkTime() {
    var time = moment().format("k");
    var timeInt = parseInt(time);
    var timeObj = {
      "#9": 9,
      "#10": 10,
      "#11": 11,
      "#12": 12,
      "#13": 13,
      "#14": 14,
      "#15": 15,
      "#16": 16,
      "#17": 17
    }

    for (property in timeObj) {

      if (timeInt > timeObj[property]) {

        $(property).addClass("past");

      } else if (timeInt === timeObj[property]) {

        $(property).addClass("present");

      } else {
        $(property).addClass("future");
      }
    }
  };

  checkTime();


  $(document).on('click', ".saveBtn", function () {

    var textVal = $(".textarea").val();
    console.log(this.attr("#id"));

    /*
    localStorage.setItem(text, value);
    var text = $(this).parent().attr("id");
  
    */

  })
});
