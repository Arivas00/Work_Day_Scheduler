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

    var textVal = $(this).prev().val();
    console.log(textVal);
    var key = $(this).prev().attr("id");
    console.log(key);
    
    localStorage.setItem(key, textVal);
    localStorage.getItem(key, textVal);
    
  

  })
});
