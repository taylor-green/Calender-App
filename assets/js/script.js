// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// stored data from local storage
$(document).ready(function(){
    $(".time-block").each(function() {
        var time = $(this).attr("id");
        var value = localStorage.getItem(time);
        if (value !== null) {
          $(this).children(".description").val(value);
        }
      });

    //event listener to store the data in local
      $(".saveBtn").click(function (event) {
        event.preventDefault();
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, value);
      });

// displays date and time in header
    var rightNow = dayjs().format('MMMM DD, YYYY');
    var displayDate = document.getElementById('currentDay');
    displayDate.innerHTML = rightNow;
    var currentHour = dayjs().format('h:mm');
    var displayTime = document.getElementById('currentHour');
    displayTime.innerHTML = currentHour;
    
    $('#clearFieldsBtn').click(function(event){
        event.preventDefault();
        $('textarea').val('');
        localStorage.clear();
    })
    
})



function updateColors() {
    var currentTime = dayjs().format('h');
    $(".time-block").each(function() {
      var timeBlock = parseInt($(this).attr("id").split("-")[1]);
      if (timeBlock < currentTime) {
        $(this).removeClass('present future').addClass('past');
      }
      else if (timeBlock === currentTime) {
        $(this).removeClass('past future').addClass('present');
      }
      else {
        $(this).removeClass('past present').addClass('future');
      }
    });
    console.log(currentTime);
    console.log(timeBlock);
  }

  // Update time block colors every minute
  setInterval(updateColors, 6000);

  // Initialize the app
  updateColors();


















// $('.time-block').each(function (){
//     var timeBlock = parseInt($(this).attr('class').split('-')[1]);

//     if (currentHour == timeBlock){
//         $(this).addClass('present');

//     } else if (currentHour < timeBlock){
//         $(this).removeClass('present');
//         $(this).addClass('future');

//     } else if (currentHour > timeBlock){
//         $(this).removeClass('future');
//         $(this).addClass('past');
//     }
// });



// $(function () {
//     // TODO: Add a listener for click events on the save button. This code should
//     // use the id in the containing time-block as a key to save the user input in
//     // local storage. HINT: What does `this` reference in the click listener
//     // function? How can DOM traversal be used to get the "hour-x" id of the
//     // time-block containing the button that was clicked? How might the id be
//     // useful when saving the description in local storage?
//     //
//     // TODO: Add code to apply the past, present, or future class to each time
//     // block by comparing the id to the current hour. HINTS: How can the id
//     // attribute of each time-block be used to conditionally add or remove the
//     // past, present, and future classes? How can Day.js be used to get the
//     // current hour in 24-hour time?
//     //
//     // TODO: Add code to get any user input that was saved in localStorage and set
//     // the values of the corresponding textarea elements. HINT: How can the id
//     // attribute of each time-block be used to do this?
//     //
//     // TODO: Add code to display the current date in the header of the page.
//   });
  