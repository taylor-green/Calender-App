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

// updates colors in text fields based on the time
function updateColors() {
    var currentTime = dayjs().format('h');
    $(".time-block").each(function() {
      var timeBlock = parseInt($(this).attr("id").split("-")[1]);
      if (timeBlock < currentTime) {
        $(this).removeClass('present future').addClass('past');
      }
      else if (timeBlock == currentTime) {
        $(this).removeClass('past future').addClass('present');
      }
      else {
        $(this).removeClass('past present').addClass('future');
      }
    });
    
  
  }

  // Update time block colors every minute
  setInterval(updateColors, 60000);


  updateColors();




















