var currentDay = $("#currentDay");
var buttonEl = $(".btn");

// for each loop is used to iterate through an array 
// create an array of ["9","10","11",etc] , then assign to hourEl
// OR create an array of ["#hour-9", "hour-10"], then access the second element




function clickSaveInput (event) {
  // read user input?

  // add to the localstorage


};
// uncomment below to run function
// var currentTime = dayjs().format("H");


// to test current time
var currentTime = 15

// when I click the save button, the input text should be saved in the local storage and the input stays
buttonEl.on("click", clickSaveInput);

// // var hourEl = rowEL.map(getHour() {
// //   var id = $(this).attr("id");
// //   var hourEl = id.split("-")[1];
// //   return hourEl;
// // });
// console.log(hourEl);
for (var i = 9; i < 18; i++){
  var hourEl = $(`#hour-${i}`)
  hourEl.removeClass(["past", "present", "future"]);
if (i === currentTime) {
  console.log(`current time${i}`);
    // add class present
    hourEl.addClass("present");
  } else if (i > currentTime){
    // add class present
    hourEl.addClass("future");
  } else {
    hourEl.addClass("past")
  }
}
  
// use loop for the colorCode
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.



  
});

// TODO: Add code to display the current date in the header of the page.
function showDate() {
  var today = dayjs().format("dddd, MMMM D");
  currentDay.text(today);
}

showDate();