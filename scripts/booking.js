/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let costPerDay = 0;
let noOfDays = 0;
let ratePerDay = 35;
let half = document.getElementById("half");
let full = document.getElementById("full");
let total = document.getElementById("calculated-cost");
/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
function funtclicked(day) 
{
    if (day.classList.contains("blue-hover-selected"))
    {
        day.classList.remove("blue-hover-selected");
        noOfDays = noOfDays - 1;
    }
    else 
    {
        day.classList.add("blue-hover-selected");
        noOfDays = noOfDays + 1;
    }
    totalcost();
}

document.getElementById("monday").onclick = function() 
{
    funtclicked(monday);
};
document.getElementById("tuesday").onclick = function() 
{
    funtclicked(tuesday);
};
document.getElementById("wednesday").onclick = function() 
{
    funtclicked(wednesday);
};
document.getElementById("thursday").onclick = function() 
{
    funtclicked(thursday);
};
document.getElementById("friday").onclick = function() 
{
    funtclicked(friday);
};
/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
let clearButton = document.getElementById("clear-button");
clearButton.onclick = () => {
    noOfDays=0;
    costPerDay=0;
    document.getElementById("monday").classList.remove("blue-hover-selected");
    document.getElementById("tuesday").classList.remove("blue-hover-selected");
    document.getElementById("wednesday").classList.remove("blue-hover-selected");
    document.getElementById("thursday").classList.remove("blue-hover-selected");
    document.getElementById("friday").classList.remove("blue-hover-selected");
    totalcost();
} ;
/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
half.onclick = () => {
    ratePerDay= 20;
    half.classList.add("blue-hover-selected");
    full.classList.remove("blue-hover-selected");
    totalcost();
};
// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
full.onclick = () => {
    ratePerDay= 35;
    half.classList.remove("blue-hover-selected");
    full.classList.add("blue-hover-selected");
    totalcost();
};
/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function totalcost() 
{
    costPerDay = ratePerDay*noOfDays;
    total.innerHTML = `${costPerDay}`;
}