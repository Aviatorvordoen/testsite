const LIST_OF_FLIGHTS = document.getElementById('act1')
const ADD_FLIGHT = document.getElementById('act2')
const CURRENT_FLIGHT = document.getElementById('act3')


function gotocurrent()
{
  window.location.href = "enroute.html"
}

function Getlist()
{
  window.location.href = "listofflts.html";
}

function CreateNewFlight()
{
  window.location.href = "createflight.html";
}

LIST_OF_FLIGHTS.addEventListener('click', Getlist)
ADD_FLIGHT.addEventListener('click', CreateNewFlight)
CURRENT_FLIGHT.addEventListener('click', gotocurrent)