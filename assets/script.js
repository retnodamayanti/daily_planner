var currentDay = $("#currentDay");
var buttonEl = $(".btn");




function clickSaveInput (event) {
  // read user input?

  // add to the localstorage


};
// uncomment below to run function
// var currentTime = dayjs().format("H");


// to test current time
var currentTime = 9
console.log(currentTime);

// when I click the save button, the input text should be saved in the local storage and the input stays
buttonEl.on("click", clickSaveInput);

// // var hourEl = rowEL.map(getHour() {
// //   var id = $(this).attr("id");
// //   var hourEl = id.split("-")[1];
// //   return hourEl;
// // });
// console.log(hourEl);
function colorCode() {
  var divEl = $("#hour-9");
  var hourEl = divEl.attr("id").split("-")[1];
  console.log(hourEl);

  if (currentTime == hourEl) {
    // add class present
    divEl.addClass("present");
    // remove the future class
    divEl.removeClass("future");
    // remove the past class
    divEl.removeClass("past");
  }
  // add else if, if current time > hourEl,
  else if (currentTime > hourEl) {
    divEl.addClass("past");
    divEl.removeClass("present");
    divEl.removeClass("future");
  } else if (currentTime < hourEl) {
    divEl.addClass("future");
    divEl.removeClass("present");
    divEl.removeClass("past");
  }
  var divEl = $("#hour-10");
  var hourEl = divEl.attr("id").split("-")[1];
  console.log(hourEl);

  if (currentTime == hourEl) {
    // add class present
    divEl.addClass("present");
    // remove the future class
    divEl.removeClass("future");
    // remove the past class
    divEl.removeClass("past");
  }
  // add else if, if current time > hourEl,
  else if (currentTime > hourEl) {
    divEl.addClass("past");
    divEl.removeClass("present");
    divEl.removeClass("future");
  } else if (currentTime < hourEl) {
    divEl.addClass("future");
    divEl.removeClass("present");
    divEl.removeClass("past");
  }

  var divEl = $("#hour-11");
  var hourEl = divEl.attr("id").split("-")[1];
  console.log(hourEl);

  if (currentTime == hourEl) {
    // add class present
    divEl.addClass("present");
    // remove the future class
    divEl.removeClass("future");
    // remove the past class
    divEl.removeClass("past");
  }
  // add else if, if current time > hourEl,
  else if (currentTime > hourEl) {
    divEl.addClass("past");
    divEl.removeClass("present");
    divEl.removeClass("future");
  } else if (currentTime < hourEl) {
    divEl.addClass("future");
    divEl.removeClass("present");
    divEl.removeClass("past");
  }

  var divEl = $("#hour-12");
  var hourEl = divEl.attr("id").split("-")[1];
  console.log(hourEl);

  if (currentTime == hourEl) {
    // add class present
    divEl.addClass("present");
    // remove the future class
    divEl.removeClass("future");
    // remove the past class
    divEl.removeClass("past");
  }
  // add else if, if current time > hourEl,
  else if (currentTime > hourEl) {
    divEl.addClass("past");
    divEl.removeClass("present");
    divEl.removeClass("future");
  } else if (currentTime < hourEl) {
    divEl.addClass("future");
    divEl.removeClass("present");
    divEl.removeClass("past");
  }
  var divEl = $("#hour-13");
  var hourEl = divEl.attr("id").split("-")[1];
  console.log(hourEl);

  if (currentTime == hourEl) {
    // add class present
    divEl.addClass("present");
    // remove the future class
    divEl.removeClass("future");
    // remove the past class
    divEl.removeClass("past");
  }
  // add else if, if current time > hourEl,
  else if (currentTime > hourEl) {
    divEl.addClass("past");
    divEl.removeClass("present");
    divEl.removeClass("future");
  } else if (currentTime < hourEl) {
    divEl.addClass("future");
    divEl.removeClass("present");
    divEl.removeClass("past");
  }
  var divEl = $("#hour-14");
  var hourEl = divEl.attr("id").split("-")[1];
  console.log(hourEl);

  if (currentTime == hourEl) {
    // add class present
    divEl.addClass("present");
    // remove the future class
    divEl.removeClass("future");
    // remove the past class
    divEl.removeClass("past");
  }
  // add else if, if current time > hourEl,
  else if (currentTime > hourEl) {
    divEl.addClass("past");
    divEl.removeClass("present");
    divEl.removeClass("future");
  } else if (currentTime < hourEl) {
    divEl.addClass("future");
    divEl.removeClass("present");
    divEl.removeClass("past");
  }

  var divEl = $("#hour-15");
  var hourEl = divEl.attr("id").split("-")[1];
  console.log(hourEl);

  if (currentTime == hourEl) {
    // add class present
    divEl.addClass("present");
    // remove the future class
    divEl.removeClass("future");
    // remove the past class
    divEl.removeClass("past");
  }
  // add else if, if current time > hourEl,
  else if (currentTime > hourEl) {
    divEl.addClass("past");
    divEl.removeClass("present");
    divEl.removeClass("future");
  } else if (currentTime < hourEl) {
    divEl.addClass("future");
    divEl.removeClass("present");
    divEl.removeClass("past");
  }

  var divEl = $("#hour-16");
  var hourEl = divEl.attr("id").split("-")[1];
  console.log(hourEl);

  if (currentTime == hourEl) {
    // add class present
    divEl.addClass("present");
    // remove the future class
    divEl.removeClass("future");
    // remove the past class
    divEl.removeClass("past");
  }
  // add else if, if current time > hourEl,
  else if (currentTime > hourEl) {
    divEl.addClass("past");
    divEl.removeClass("present");
    divEl.removeClass("future");
  } else if (currentTime < hourEl) {
    divEl.addClass("future");
    divEl.removeClass("present");
    divEl.removeClass("past");
  }

  var divEl = $("#hour-17");
  var hourEl = divEl.attr("id").split("-")[1];
  console.log(hourEl);

  if (currentTime == hourEl) {
    // add class present
    divEl.addClass("present");
    // remove the future class
    divEl.removeClass("future");
    // remove the past class
    divEl.removeClass("past");
  }
  // add else if, if current time > hourEl,
  else if (currentTime > hourEl) {
    divEl.addClass("past");
    divEl.removeClass("present");
    divEl.removeClass("future");
  } else if (currentTime < hourEl) {
    divEl.addClass("future");
    divEl.removeClass("present");
    divEl.removeClass("past");
  }
}
colorCode();

// use loop for the colorCode

colorCode();
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