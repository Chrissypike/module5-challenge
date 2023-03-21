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

  
  });

  // function to upload the data 
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