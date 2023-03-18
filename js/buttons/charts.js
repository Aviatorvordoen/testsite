// page load
window.onload = () => {
    body_html.classList.remove('body_content_center');
    
}


// get elements
const body_html = document.querySelector('body')
const AIRPORTOPT_BUTTON = document.querySelector('.airportopt')
const frame = document.querySelector('.frclass')
const AIPRORT_CHART_CHAPTER_ACC1 = document.getElementById('acc1')
const AIPRORT_CHART_CHAPTER_ACC2 = document.getElementById('acc2')
const AIPRORT_CHART_CHAPTER_ACC3 = document.getElementById('acc3')
const AIPRORT_CHART_CHAPTER_ACC4 = document.getElementById('acc4')
const AIPRORT_CHART_CHAPTER_ACC5 = document.getElementById('acc5')
const AIPRORT_CHART_CHAPTER_ACC6 = document.getElementById('acc6')
const AIRPORT_MAP = document.getElementById('mbtn')
const RUNWAYS_INF_BUTTON = document.getElementById('rwy')
const WX_BUTTON = document.getElementById('wxid')
const RETURN_BUTTON = document.querySelector('.returnmark')
const RTE_CREATE_BUTTON = document.querySelector('.goflight')
const SEARCH_BUTTON = document.querySelector('.material-symbols-outlined')
const ARROW = document.getElementById('mso_span')
const FLIGHTS = document.getElementById('bflt')
// CONST FOR MENU

const AIRPORT_MENU = document.querySelector('.airport_options_list')
const REF_MENU = document.querySelector('.refmenu_list')
const CO_MENU = document.querySelector('.comenu_list')
const STAR_MENU = document.querySelector('.starmenu_list')
const APPR_MENU = document.querySelector('.apprmenu_list')
const TAXI_MENU = document.querySelector('.taximenu_list')
const SID_MENU = document.querySelector('.sidmenu_list')



// airport arrays
const AIRPORT_LIST =
[
    'LDZA', 'LIML', 'LDSP', 'LSZH', 'LKPR', 'EKRN', 'ESMT', 'ESGG', 'ESKN', 'EDDH', 'EDDK',
    'LOWW', 'EDDP', 'ESSV', 'EDDF', 'LIRF', 'LIPZ', 'LFSB', 'EGLL', 'LOWI', 'EDDL', 'EDDL',
    'LSME', 'EBBR'
]

const AIRPROT_LIST_LOWER =
[
    'ldza', 'liml', 'ldsp', 'lszh', 'lkpr', 'ekrn', 'esmt', 'esgg', 'eskn', 'eddh', 'eddk',
    'loww', 'eddp', 'essv', 'eddf', 'lirf', 'lipz', 'lfsb', 'egll', 'lowi', 'eddl', 'eddl',
    'lsme', 'ebbr'
]
// functions
function GetAirportOptions(){
    // change light sel
    AIRPORTOPT_BUTTON.classList.toggle('airportopt_clicked')
    AIPRORT_CHART_CHAPTER_ACC1.classList.remove('airport_charts_chapters_clicked')
    AIPRORT_CHART_CHAPTER_ACC2.classList.remove('airport_charts_chapters_clicked')
    AIPRORT_CHART_CHAPTER_ACC3.classList.remove('airport_charts_chapters_clicked')
    AIPRORT_CHART_CHAPTER_ACC4.classList.remove('airport_charts_chapters_clicked')
    AIPRORT_CHART_CHAPTER_ACC5.classList.remove('airport_charts_chapters_clicked')
    AIPRORT_CHART_CHAPTER_ACC6.classList.remove('airport_charts_chapters_clicked')




    // show dropdown menu
    AIRPORT_MENU.classList.toggle('dropdown_menu_list_show')
    REF_MENU.classList.remove('dropdown_menu_list_show')
    CO_MENU.classList.remove('dropdown_menu_list_show')
    STAR_MENU.classList.remove('dropdown_menu_list_show')
    APPR_MENU.classList.remove('dropdown_menu_list_show')
    TAXI_MENU.classList.remove('dropdown_menu_list_show')
    SID_MENU.classList.remove('dropdown_menu_list_show')




}

function OpenACC_Menu1(){
    // change light sel
    AIRPORTOPT_BUTTON.classList.remove('airportopt_clicked')
    AIPRORT_CHART_CHAPTER_ACC1.classList.toggle('airport_charts_chapters_clicked')
    AIPRORT_CHART_CHAPTER_ACC2.classList.remove('airport_charts_chapters_clicked')
    AIPRORT_CHART_CHAPTER_ACC3.classList.remove('airport_charts_chapters_clicked')
    AIPRORT_CHART_CHAPTER_ACC4.classList.remove('airport_charts_chapters_clicked')
    AIPRORT_CHART_CHAPTER_ACC5.classList.remove('airport_charts_chapters_clicked')
    AIPRORT_CHART_CHAPTER_ACC6.classList.remove('airport_charts_chapters_clicked')



    //show dropdown menu
    // dropdown_menu_list_show

    AIRPORT_MENU.classList.remove('dropdown_menu_list_show')
    REF_MENU.classList.toggle('dropdown_menu_list_show')
    CO_MENU.classList.remove('dropdown_menu_list_show')
    STAR_MENU.classList.remove('dropdown_menu_list_show')
    APPR_MENU.classList.remove('dropdown_menu_list_show')
    TAXI_MENU.classList.remove('dropdown_menu_list_show')
    SID_MENU.classList.remove('dropdown_menu_list_show')
}

function OpenACC_Menu2(){
    AIRPORTOPT_BUTTON.classList.remove('airportopt_clicked')
    AIPRORT_CHART_CHAPTER_ACC1.classList.remove('airport_charts_chapters_clicked')
    AIPRORT_CHART_CHAPTER_ACC2.classList.toggle('airport_charts_chapters_clicked')
    AIPRORT_CHART_CHAPTER_ACC3.classList.remove('airport_charts_chapters_clicked')
    AIPRORT_CHART_CHAPTER_ACC4.classList.remove('airport_charts_chapters_clicked')
    AIPRORT_CHART_CHAPTER_ACC5.classList.remove('airport_charts_chapters_clicked')
    AIPRORT_CHART_CHAPTER_ACC6.classList.remove('airport_charts_chapters_clicked')



    //show dropdown menu
    AIRPORT_MENU.classList.remove('dropdown_menu_list_show')
    REF_MENU.classList.remove('dropdown_menu_list_show')
    CO_MENU.classList.toggle('dropdown_menu_list_show')
    STAR_MENU.classList.remove('dropdown_menu_list_show')
    APPR_MENU.classList.remove('dropdown_menu_list_show')
    TAXI_MENU.classList.remove('dropdown_menu_list_show')
    SID_MENU.classList.remove('dropdown_menu_list_show')
}

function OpenACC_Menu3(){
    AIRPORTOPT_BUTTON.classList.remove('airportopt_clicked')
    AIPRORT_CHART_CHAPTER_ACC1.classList.remove('airport_charts_chapters_clicked')
    AIPRORT_CHART_CHAPTER_ACC2.classList.remove('airport_charts_chapters_clicked')
    AIPRORT_CHART_CHAPTER_ACC3.classList.toggle('airport_charts_chapters_clicked')
    AIPRORT_CHART_CHAPTER_ACC4.classList.remove('airport_charts_chapters_clicked')
    AIPRORT_CHART_CHAPTER_ACC5.classList.remove('airport_charts_chapters_clicked')
    AIPRORT_CHART_CHAPTER_ACC6.classList.remove('airport_charts_chapters_clicked')



    //show dropdown menu
    AIRPORT_MENU.classList.remove('dropdown_menu_list_show')
    REF_MENU.classList.remove('dropdown_menu_list_show')
    CO_MENU.classList.remove('dropdown_menu_list_show')
    STAR_MENU.classList.toggle('dropdown_menu_list_show')
    APPR_MENU.classList.remove('dropdown_menu_list_show')
    TAXI_MENU.classList.remove('dropdown_menu_list_show')
    SID_MENU.classList.remove('dropdown_menu_list_show')
}

function OpenACC_Menu4(){
    AIRPORTOPT_BUTTON.classList.remove('airportopt_clicked')
    AIPRORT_CHART_CHAPTER_ACC1.classList.remove('airport_charts_chapters_clicked')
    AIPRORT_CHART_CHAPTER_ACC2.classList.remove('airport_charts_chapters_clicked')
    AIPRORT_CHART_CHAPTER_ACC3.classList.remove('airport_charts_chapters_clicked')
    AIPRORT_CHART_CHAPTER_ACC4.classList.toggle('airport_charts_chapters_clicked')
    AIPRORT_CHART_CHAPTER_ACC5.classList.remove('airport_charts_chapters_clicked')
    AIPRORT_CHART_CHAPTER_ACC6.classList.remove('airport_charts_chapters_clicked')

    //menu
    // show dropdown menu
    AIRPORT_MENU.classList.remove('dropdown_menu_list_show')
    REF_MENU.classList.remove('dropdown_menu_list_show')
    CO_MENU.classList.remove('dropdown_menu_list_show')
    STAR_MENU.classList.remove('dropdown_menu_list_show')
    APPR_MENU.classList.toggle('dropdown_menu_list_show')
    TAXI_MENU.classList.remove('dropdown_menu_list_show')
    SID_MENU.classList.remove('dropdown_menu_list_show')






}

function OpenACC_Menu5(){
    AIRPORTOPT_BUTTON.classList.remove('airportopt_clicked')
    AIPRORT_CHART_CHAPTER_ACC1.classList.remove('airport_charts_chapters_clicked')
    AIPRORT_CHART_CHAPTER_ACC2.classList.remove('airport_charts_chapters_clicked')
    AIPRORT_CHART_CHAPTER_ACC3.classList.remove('airport_charts_chapters_clicked')
    AIPRORT_CHART_CHAPTER_ACC4.classList.remove('airport_charts_chapters_clicked')
    AIPRORT_CHART_CHAPTER_ACC5.classList.toggle('airport_charts_chapters_clicked')
    AIPRORT_CHART_CHAPTER_ACC6.classList.remove('airport_charts_chapters_clicked')


    //menu
    //show dropmenu menu
    AIRPORT_MENU.classList.remove('dropdown_menu_list_show')
    REF_MENU.classList.remove('dropdown_menu_list_show')
    CO_MENU.classList.remove('dropdown_menu_list_show')
    STAR_MENU.classList.remove('dropdown_menu_list_show')
    APPR_MENU.classList.remove('dropdown_menu_list_show')
    TAXI_MENU.classList.toggle('dropdown_menu_list_show')
    SID_MENU.classList.remove('dropdown_menu_list_show')




}

function OpenACC_Menu6(){
    AIRPORTOPT_BUTTON.classList.remove('airportopt_clicked')
    AIPRORT_CHART_CHAPTER_ACC1.classList.remove('airport_charts_chapters_clicked')
    AIPRORT_CHART_CHAPTER_ACC2.classList.remove('airport_charts_chapters_clicked')
    AIPRORT_CHART_CHAPTER_ACC3.classList.remove('airport_charts_chapters_clicked')
    AIPRORT_CHART_CHAPTER_ACC4.classList.remove('airport_charts_chapters_clicked')
    AIPRORT_CHART_CHAPTER_ACC5.classList.remove('airport_charts_chapters_clicked')
    AIPRORT_CHART_CHAPTER_ACC6.classList.toggle('airport_charts_chapters_clicked')

    //menu
    // show dropdown menu
    AIRPORT_MENU.classList.remove('dropdown_menu_list_show')
    REF_MENU.classList.remove('dropdown_menu_list_show')
    CO_MENU.classList.remove('dropdown_menu_list_show')
    STAR_MENU.classList.remove('dropdown_menu_list_show')
    APPR_MENU.classList.remove('dropdown_menu_list_show')
    TAXI_MENU.classList.remove('dropdown_menu_list_show')
    SID_MENU.classList.toggle('dropdown_menu_list_show')
}

function Maptoggle(){
    frame.src = '/img/ldza/ldza_map_view.jpg';
}

function Show_runways_information(){
    frame.src = './testpage.html';
}


function getwx(){
    frame.src = 'https://www.checkwx.com/weather/LDZA/metar';
}


function Getqueryairport(){
    let find_airport_inp_field = document.querySelector('.find_airport').value
    if ((find_airport_inp_field == AIRPORT_LIST[1] && AIRPROT_LIST_LOWER[1])){
        window.location.replace("./liml_chart.html");
    }
}





function BackToChart(){
    OVERLAY.classList.remove('flight_menu_show')

}


function ToInputFieldGetValue(){
    let flight_to_input_field = document.getElementById('toflightinput').value
    let flight_from_input_field = document.getElementById('fromflightinput').value
    if ((flight_from_input_field == AIRPORT_LIST[0]) && (flight_to_input_field == AIRPORT_LIST[1]) || (flight_from_input_field == AIRPROT_LIST_LOWER[0]) && (flight_to_input_field == AIRPROT_LIST_LOWER[1])){

        window.location.replace('/pages/rte/rte_ldza_liml.html');

    }
}


function ChageValue(){
    let flight_from_input_field = document.getElementById('fromflightinput').value
    let flight_to_input_field = document.getElementById('toflightinput').value
    document.getElementById('fromflightinput').value = flight_to_input_field
    document.getElementById('toflightinput').value = flight_from_input_field
}



function OpenMyFlightsPage(){
    frame.src = './MyFlights.html';
}

// bind functions
AIRPORTOPT_BUTTON.addEventListener('click', GetAirportOptions)
AIPRORT_CHART_CHAPTER_ACC1.addEventListener('click', OpenACC_Menu1)
AIPRORT_CHART_CHAPTER_ACC2.addEventListener('click', OpenACC_Menu2)
AIPRORT_CHART_CHAPTER_ACC3.addEventListener('click', OpenACC_Menu3)
AIPRORT_CHART_CHAPTER_ACC4.addEventListener('click', OpenACC_Menu4)
AIPRORT_CHART_CHAPTER_ACC5.addEventListener('click', OpenACC_Menu5)
AIPRORT_CHART_CHAPTER_ACC6.addEventListener('click', OpenACC_Menu6)
AIRPORT_MAP.addEventListener('click', Maptoggle)
RUNWAYS_INF_BUTTON.addEventListener('click', Show_runways_information)
WX_BUTTON.addEventListener('click', getwx)
FLIGHTS.addEventListener('click', OpenMyFlightsPage)

// FLIGHT MENU
//RETURN_BUTTON.addEventListener('click', BackToChart)
//RTE_CREATE_BUTTON.addEventListener('click', ToInputFieldGetValue)
//SEARCH_BUTTON.addEventListener('click', Getqueryairport)
//ARROW.addEventListener('click', ChageValue)


