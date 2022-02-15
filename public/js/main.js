const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp_real_val = document.getElementById('temp_real_val');
// const datahide = document.getElementById('.middle_layer');
const day = document.getElementById('day');
const today_date = document.getElementById('today_date');


const getinfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;

    if (cityVal === "") {
        city_name.innerText = `Plz write the name before search`;
        // datahide.classList.add('data_hide');
    }
    else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=bb783ac6ef4318c5ae72153fa2cd5721`
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            console.log(arrData);

            temp_real_val.innerText = arrData[0].main.temp;
            // temp_status.innerText = arrData[0].weather[0].main;
            city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;

            const tempStatus = arrData[0].weather[0].main;

            //condition to check sunny or cloudy
            if(tempStatus == "Sunny"){
                temp_status.innerHTML = `<i class="fas fa-sun" style="color: #eccc68;"></i>`
            }
            else if(tempStatus == "Clouds"){
                temp_status.innerHTML = `<i class="fas fa-cloud" style="color: f1f2f6;"></i>`
            }
            else if(tempStatus == "Rainy"){
                temp_status.innerHTML = `<i class="fas fa-rain" style="color: a4b0be;"></i>`
            }
            else {
                temp_status.innerHTML = `<i class="fas fa-sun" style="color: eccc68;"></i>`
            }
            // datahide.classList.remove('data_hide');
        }
        catch {
            city_name.innerText = `Plz write the city name properly`;
            // datahide.classList.add('data_hide');
        }

    }
}
submitBtn.addEventListener('click', getinfo)


const getCurrentDay = () => {
    var weekday = new Array(7);
    weekday[0] = 'SUN';
    weekday[1] = 'MON';
    weekday[2] = 'TUE';
    weekday[3] = 'WED';
    weekday[4] = 'THU';
    weekday[5] = 'FRI';
    weekday[6] = 'SAT';
    let currentTime = new Date();
    let day = (weekday[currentTime.getDay()]);
    return day;
};

day.innerText = getCurrentDay();

const getCurrentTime = () =>{
    var months = [
        'jan','fab','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'
    ];
    var now = new Date;
    var month = months[now.getMonth()];
    var date = now.getDate();
    return `${date} ${month}`;
}

today_date.innerText = getCurrentTime();