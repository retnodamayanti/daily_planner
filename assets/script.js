var currentDay = $("#currentDay");
var currentTime = dayjs().format("H");
console.log(currentTime);

// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
function getInput() {
  $(".row").each(function () {
    var attrId = $(this).attr("id");
    var storageValue = localStorage.getItem(attrId);
    $(this).children(".description").text(storageValue);
  });
}

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
$(".btn").on("click", function () {
  var textInput = $(this).siblings(".description").val();
  var id = $(this).parent().attr("id");
  console.log(id, textInput);
  localStorage.setItem(id, textInput);
});

// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
for (var i = 9; i < 18; i++) {
  var hourEl = $(`#hour-${i}`);
  hourEl.removeClass(["past", "present", "future"]);
  if (i == currentTime) {
    hourEl.addClass("present");
  } else if (i > currentTime) {
    hourEl.addClass("future");
  } else {
    hourEl.addClass("past");
  }
}

// TODO: Add code to display the current date in the header of the page.
function showDate() {
  var today = dayjs().format("dddd, MMMM D");
  currentDay.text(today);
}

showDate();
getInput();
