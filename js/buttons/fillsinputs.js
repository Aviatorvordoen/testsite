// get elements
const GO_flight = document.querySelector('.GoFlight')


// functions

function StartFlight()
{
  let input_departure = document.getElementById('depid').value
  let input_arrival = document.getElementById('arrid').value
  let routefield = document.getElementById('tm').value
  
  if (input_departure == input_departure)
  {
    localStorage.setItem('Departure', input_departure)
  }

  if (input_arrival == input_arrival)
  {
    localStorage.setItem("Arrival", input_arrival)
  }

  if (routefield == routefield)
  {
    localStorage.setItem("Route", routefield)
  }

  location.href="./done.html"


}


// bind actions
GO_flight.addEventListener('click', StartFlight)