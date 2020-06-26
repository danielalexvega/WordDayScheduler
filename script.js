// var a = moment();
// # 05 Third-Party APIs: Work Day Scheduler

// Create a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

// You'll need to use the [Moment.js](https://momentjs.com/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.

// ## User Story

// AS AN employee with a busy schedule
// I WANT to add important events to a daily planner
// SO THAT I can manage my time effectively
// ```

// ## Acceptance Criteria

// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
// ```


//when I click the lock I need to see what's in the text area
//on load

// 9 10 11 12 1 2 3 4 5
//['','todo','','','','','','','','']
//$(document).ready(function () {

$("#currentDay").text(moment().format('MMMM Do, YYYY'));

let storedData = JSON.parse(localStorage.getItem('schedule'));
let schedule;
if (storedData === null) {
    schedule = ['', '', '', '', '', '', '', '', ''];
} else {
    schedule = storedData;
}

fillRows();


//go through the rows... 
function fillRows() {
    let hour = moment().hour();
    for (let i = 0; i < schedule.length; i++) {
        let tArea = $(`textarea[id=${i}]`);
        tArea.text(schedule[i]);
        let trueHour = i + 9;
        if (trueHour < hour) {
            tArea.addClass('past');
        } else if (trueHour === hour) {
            tArea.addClass('present');
        } else {
            tArea.addClass('future');
        }
    }
}




$('.time-block').click(function (event) {
    event.preventDefault();
    if (event.target.className === "fa fa-lock") {
        let todo = this.children[1].value;  //the value in the text area
        let index = parseInt(this.id);  //the index in the array
        console.log(index);
        schedule[index] = todo;   //updating the schedule
        localStorage.setItem('schedule', JSON.stringify(schedule));  //storing information
    }
});
//});

//function to change classes    


//typeof this.id --> a string  parseInt("1") -->  1