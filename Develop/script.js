$(function () {
    let greybtn = document.querySelector('#saveText');
    greybtn.addEventListener('click', function() {
    console.log('working');
})

    let redbtn = document.querySelector('#saveText2');
    redbtn.addEventListener('click', function() {
        console.log('working');
    })
    
    let greenbtn = document.querySelector('#saveText3');
    greenbtn.addEventListener('click', function() {
        console.log('working');
    })



    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?


    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //

  
  });

  const day = document.getElementById("currentDay");

  function updateDay() {
    const now = new Date();
    const dayString = now.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    day.textContent = dayString;
  };

  updateDay();