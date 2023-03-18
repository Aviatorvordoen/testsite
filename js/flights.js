const LIST_OF_FLIGHTS = document.getElementById('act1')
const fs = require('fs');

function Readedfile (){
  let file_readed = fs.readFileSync('../docs/text.txt', 'utf8')
  console.log(file_readed);

}


LIST_OF_FLIGHTS.addEventListener('click', Readedfile)