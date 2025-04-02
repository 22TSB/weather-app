import './css/reset.css';
import './css/style.css';

const body = document.querySelector('body');

// get month
const getMonth = (month) => {
    switch (month) {
        case '1':
            return 'JAN';
        case '2':
            return 'FEB';
        case '3':
            return 'MAR';
        case '4':
            return 'APR';
        case '5':
            return 'MAY';
        case '6':
            return 'JUN';
        case '7':
            return 'JUL';
        case '8':
            return 'AUG';
        case '9':
            return 'SEP';
        case '10':
            return 'OCT';
        case '11':
            return 'NOV';
        case '12':
            return 'DEC';
    }
};

// svg
const setSvg = (icon, div) => {
    switch (icon) {
        case 'snow':
            div.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                    <path
                        d="M9.5 15H9.51M15.5 15H15.51M9.5 19H9.51M12.5 17H12.51M12.5 21H12.51M15.5 19H15.51M6 16.4438C4.22194 15.5683 3 13.7502 3 11.6493C3 9.20008 4.8 6.9375 7.5 6.5C8.34694 4.48637 10.3514 3 12.6893 3C15.684 3 18.1317 5.32251 18.3 8.25C19.8893 8.94488 21 10.6503 21 12.4969C21 14.0582 20.206 15.4339 19 16.2417"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ></path>
                </g>
            </svg>
            `;
            break;
        case 'rain':
            div.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                    <path
                        d="M10.5 21L12 18M14.5 21L16 18M6.5 21L8 18M8.8 15C6.14903 15 4 12.9466 4 10.4137C4 8.31435 5.6 6.375 8 6C8.75283 4.27403 10.5346 3 12.6127 3C15.2747 3 17.4504 4.99072 17.6 7.5C19.0127 8.09561 20 9.55741 20 11.1402C20 13.2719 18.2091 15 16 15L8.8 15Z"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ></path>
                </g>
            </svg>
            `;
            break;
        case 'fog':
            div.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                    <path
                        d="M3 18H7M10 18H21M5 21H12M16 21H19M8.8 15C6.14903 15 4 12.9466 4 10.4137C4 8.31435 5.6 6.375 8 6C8.75283 4.27403 10.5346 3 12.6127 3C15.2747 3 17.4504 4.99072 17.6 7.5C19.0127 8.09561 20 9.55741 20 11.1402C20 13.2719 18.2091 15 16 15L8.8 15Z"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ></path>
                </g>
            </svg>
            `;
            break;
        case 'wind':
            div.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                    <path
                        d="M15.7639 7C16.3132 6.38625 17.1115 6 18 6C19.6569 6 21 7.34315 21 9C21 10.6569 19.6569 12 18 12H3M8.50926 4.66667C8.87548 4.2575 9.40767 4 10 4C11.1046 4 12 4.89543 12 6C12 7.10457 11.1046 8 10 8H3M11.5093 19.3333C11.8755 19.7425 12.4077 20 13 20C14.1046 20 15 19.1046 15 18C15 16.8954 14.1046 16 13 16H3"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ></path>
                </g>
            </svg>
            `;
            break;
        case 'cloudly':
            div.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                    <path
                        d="M3 13.6493C3 16.6044 5.41766 19 8.4 19L16.5 19C18.9853 19 21 16.9839 21 14.4969C21 12.6503 19.8893 10.9449 18.3 10.25C18.1317 7.32251 15.684 5 12.6893 5C10.3514 5 8.34694 6.48637 7.5 8.5C4.8 8.9375 3 11.2001 3 13.6493Z"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ></path>
                </g>
            </svg>
            `;
            break;
        case 'partly-cloudy-day':
            div.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                    <path
                        d="M7.45508 2V3M11.3438 3.61084L10.6366 4.31795M4.27344 10.6821L3.56633 11.3892M1.95508 7.5H2.95508M3.56641 3.61084L4.27351 4.31795M6.50049 9.21251C6.38862 9.15163 6.2832 9.08038 6.18553 9.00006C5.73952 8.63325 5.45508 8.07714 5.45508 7.45459C5.45508 6.35002 6.35051 5.45459 7.45508 5.45459C8.21398 5.45459 8.87416 5.87727 9.21303 6.50006C9.29756 6.65541 9.3621 6.82321 9.40319 7M9.8 21C7.14903 21 5 18.9466 5 16.4137C5 14.3144 6.6 12.375 9 12C9.75283 10.274 11.5346 9 13.6127 9C16.2747 9 18.4504 10.9907 18.6 13.5C20.0127 14.0956 21 15.5574 21 17.1402C21 19.2719 19.2091 21 17 21L9.8 21Z"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ></path>
                </g>
            </svg>
            `;
            break;
        case 'partly-cloudy-night':
            div.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                    <path
                        d="M21 15.5018C18.651 14.5223 17 12.2039 17 9.5C17 6.79774 18.6534 4.48062 21 3.5C20.2304 3.17906 19.3859 3 18.5 3C15.7977 3 13.4806 4.64899 12.5 6.9956M6.9 21C4.74609 21 3 19.2889 3 17.1781C3 15.4286 4.3 13.8125 6.25 13.5C6.86168 12.0617 8.30934 11 9.9978 11C12.1607 11 13.9285 12.6589 14.05 14.75C15.1978 15.2463 16 16.4645 16 17.7835C16 19.5599 14.5449 21 12.75 21L6.9 21Z"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ></path>
                </g>
            </svg>
            `;
            break;
        case 'clear-day':
            div.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                    <path
                        d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ></path>
                </g>
            </svg>
            `;
            break;
        case 'clear-night':
            div.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                    <path
                        d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ></path>
                </g>
            </svg>
            `;
            break;
    }
};

// heading
const heading = (
    location_name,
    currentTemp,
    descriptionTemp,
    minTemp,
    maxTemp,
    feelslikeTemp,
    icon,
    sunriseDate,
    sunsetDate,
    windSpeed,
    humidity,
    pressure,
    windGust
) => {
    const name = document.querySelector('.location-name-city');
    name.textContent = location_name;
    const temp = document.querySelector('.location-weather-temp-number');
    temp.textContent = currentTemp;
    const weather = document.querySelector('.location-name-condition');
    weather.textContent = descriptionTemp;
    const mintemp = document.querySelector('.min-temp-num');
    mintemp.textContent = minTemp;
    const maxtemp = document.querySelector('.max-temp-num');
    maxtemp.textContent = maxTemp;
    const feelsliketemp = document.querySelector('.feels-like-temp');
    feelsliketemp.textContent = feelslikeTemp;

    const div = document.querySelector('.location-weather-temp-svg');
    setSvg(icon, div);

    const sunrise_t = document.querySelector('.sunrise-time');
    sunrise_t.textContent = sunriseDate;
    const sunset_t = document.querySelector('.sunset-time');
    sunset_t.textContent = sunsetDate;
    const wind_s = document.querySelector('.wind-speed');
    wind_s.textContent = windSpeed;
    const humidity_p = document.querySelector('.humidity-percentage');
    humidity_p.textContent = humidity;
    const pressure_mb = document.querySelector('.pressure-mb');
    pressure_mb.textContent = pressure;
    const gusts_s = document.querySelector('.gusts-speed');
    gusts_s.textContent = windGust;
};

// hour
const hourly = (liveHour, data) => {
    let firstHour = liveHour;
    let sw;
    let lastHour;
    let amOrPm;
    if (liveHour <= 23 && liveHour >= 12) {
        amOrPm = true;
    } else {
        amOrPm = false;
    }
    if (liveHour + 7 > 23) {
        sw = true;
        lastHour = firstHour - 17;
    } else {
        sw = false;
        lastHour = liveHour + 7;
    }
    let i = firstHour;
    let day = 0;
    let j = 1;
    while (i !== lastHour + 1) {
        // console.log(i, day);
        const div = document.querySelector(`.weather-icon-${j}`);
        const icon = data.days[day].hours[i].icon;
        const p = document.querySelector(`.hour-p-${j}`);
        if (amOrPm) {
            p.textContent = i + 'PM';
        } else {
            p.textContent = i + 'AM';
        }
        setSvg(icon, div);
        // const day =
        // console.log(icon);
        if (i === 23) {
            i = -1;
            if (lastHour === 23) {
                break;
            }
            if (sw) {
                day++;
            }
            amOrPm = false;
        }
        i++;
        j++;
    }
};

// week
const week = (
    minT0,
    maxT0,
    date0,
    icon0,
    minT1,
    maxT1,
    date1,
    icon1,
    minT2,
    maxT2,
    date2,
    icon2
) => {
    const div0 = document.querySelector('.week-weathericon-0');
    const div1 = document.querySelector('.week-weathericon-1');
    const div2 = document.querySelector('.week-weathericon-2');
    setSvg(icon0, div0);
    setSvg(icon1, div1);
    setSvg(icon2, div2);
    const p0 = document.querySelector('.week-date-p-0');
    const p1 = document.querySelector('.week-date-p-1');
    const p2 = document.querySelector('.week-date-p-2');

    const mo0 = getMonth(date0.slice(1, 2));
    const day0 = date0.slice(3, 5);
    const mo1 = getMonth(date1.slice(1, 2));
    const day1 = date1.slice(3, 5);
    const mo2 = getMonth(date2.slice(1, 2));
    const day2 = date2.slice(3, 5);
    let ptext0 = mo0 + ' ' + day0;
    let ptext1 = mo1 + ' ' + day1;
    let ptext2 = mo2 + ' ' + day2;
    
    p0.textContent = ptext0;
    p1.textContent = ptext1;
    p2.textContent = ptext2;

    const weekminp0 = document.querySelector('.week-min-p-0');
    const weekminp1 = document.querySelector('.week-min-p-1');
    const weekminp2 = document.querySelector('.week-min-p-2');
    weekminp0.textContent = minT0;
    weekminp1.textContent = minT1;
    weekminp2.textContent = minT2;
    const weekmaxp0 = document.querySelector('.week-max-p-0');
    const weekmaxp1 = document.querySelector('.week-max-p-1');
    const weekmaxp2 = document.querySelector('.week-max-p-2');
    weekmaxp0.textContent = maxT0;
    weekmaxp1.textContent = maxT1;
    weekmaxp2.textContent = maxT2;
};

// dom
const dom = (data) => {
    const location_name = data.resolvedAddress;
    const currentTemp = data.days[0].temp + ' °';
    const descriptionTemp = data.days[0].conditions;
    const minTemp = data.days[0].tempmin + ' °';
    const maxTemp = data.days[0].tempmax + ' °';
    const feelslikeTemp = data.days[0].feelslike + ' °';
    const icon = data.days[0].icon;

    let sunriseDate = data.days[0].sunrise;
    let sunsetDate = data.days[0].sunset;
    const windSpeed = data.days[0].windspeed + ' km/h';
    const humidity = data.days[0].humidity + ' %';
    const pressure = data.days[0].pressure + ' mb';
    const windGust = data.days[0].windgust + ' km/h';

    const date0 = data.days[0].datetime.slice(5, 10);

    const minT1 = data.days[1].tempmin + ' °';
    const maxT1 = data.days[1].tempmax + ' °';
    const date1 = data.days[1].datetime.slice(5, 10);
    const icon1 = data.days[1].icon;

    const minT2 = data.days[2].tempmin + ' °';
    const maxT2 = data.days[2].tempmax + ' °';
    const date2 = data.days[2].datetime.slice(5, 10);
    const icon2 = data.days[1].icon;

    if (Number(sunriseDate.slice(0, 2)) >= 12) {
        sunriseDate += ' PM';
    } else {
        sunriseDate += ' AM';
    }

    if (Number(sunsetDate.slice(0, 2)) >= 12) {
        sunsetDate += ' PM';
    } else {
        sunsetDate += ' AM';
    }

    heading(
        location_name,
        currentTemp,
        descriptionTemp,
        minTemp,
        maxTemp,
        feelslikeTemp,
        icon,
        sunriseDate,
        sunsetDate,
        windSpeed,
        humidity,
        pressure,
        windGust
    );

    const liveDate = data.currentConditions.datetime;
    let liveHour = Number(liveDate.slice(0, 2));
    hourly(liveHour, data);

    week(
        minTemp,
        maxTemp,
        date0,
        icon,
        minT1,
        maxT1,
        date1,
        icon1,
        minT2,
        maxT2,
        date2,
        icon2
    );
};

// fetch api
const fetchApi = (name) => {
    const asyncFunction = async () => {
        try {
            // throw new Error('throw error!');
            const res = await fetch(
                `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${name}?unitGroup=metric&key=KQJHHGW5NCX7N2F266NJ7ZFHA&contentType=json`,
                { mode: 'cors' }
            );
            /**
             * fetched data
             */
            const data = await res.json();
            dom(data);
            const input = document.querySelector('.search-location-input');
            input.value = '';
            input.placeholder = 'Search a location...';
        } catch (err) {
            console.log(err);
            // not found, ez
            const input = document.querySelector('.search-location-input');
            input.placeholder = 'unknown location';
        }
    };
    asyncFunction();
};

// fetchApi("Bucharest");

// toggle darkmode
const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
};
const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
};
let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.querySelector('.ld-settings');

if (darkmode === 'active') {
    enableDarkMode();
}

themeSwitch.addEventListener('click', () => {
    darkmode = localStorage.getItem('darkmode');
    darkmode !== 'active' ? enableDarkMode() : disableDarkMode();
});

// config
// config 4 dropdown
/**
 * 
 * @param {*} parent is the searched elem
 * @param {*} child is the starting elem
 * @returns {*} false or true if child belongs to parent
 */
const isChildToParent = (parent, child) => {
    let elem = child;
    while (elem !== body) {
        const className = elem.getAttribute('class');
        if (className === parent) {
            return false;
        }
        elem = elem.parentElement;
    }
    return true;
};

// mph kmh conversion
const speedConversion = (sw) => {
    const speedTitle =
        document.querySelector('.speed-settings').lastElementChild;
    const windSpeed = document.querySelector('.wind-speed');
    const gustsSpeed = document.querySelector('.gusts-speed');
    if (sw) {
        speedTitle.textContent = 'mp/h';

        let wind = windSpeed.textContent;
        wind = wind.slice(0, wind.length - 5);
        wind /= 1.609344;
        wind = wind.toFixed(1);
        wind += ' mp/h';
        windSpeed.textContent = wind;

        let gusts = gustsSpeed.textContent;
        gusts = gusts.slice(0, gusts.length - 5);
        gusts /= 1.609344;
        gusts = gusts.toFixed(1);
        gusts += ' mp/h';
        gustsSpeed.textContent = gusts;

        speedSwitch = false;
    } else {
        speedTitle.textContent = 'km/h';

        let wind = windSpeed.textContent;
        wind = wind.slice(0, wind.length - 5);
        wind *= 1.609344;
        wind = wind.toFixed(1);
        wind += ' km/h';
        windSpeed.textContent = wind;

        let gusts = gustsSpeed.textContent;
        gusts = gusts.slice(0, gusts.length - 5);
        gusts *= 1.609344;
        gusts = gusts.toFixed(1);
        gusts += ' km/h';
        gustsSpeed.textContent = gusts;

        speedSwitch = true;
    }
};

// celsius farenheit converion
const tempConversion = (sw) => {
    const temp1 = document.querySelector('.location-weather-temp-number');
    const temp2 = document.querySelector('.min-temp-num');
    const temp3 = document.querySelector('.max-temp-num');
    const temp4 = document.querySelector('.feels-like-temp');

    const temp5 = document.querySelector('.week-min-p-0');
    const temp6 = document.querySelector('.week-max-p-0');
    const temp7 = document.querySelector('.week-min-p-1');
    const temp8 = document.querySelector('.week-max-p-1');
    const temp9 = document.querySelector('.week-min-p-2');
    const temp10 = document.querySelector('.week-max-p-2');

    const temp11 = document.querySelector('.temp-settings').lastElementChild.firstElementChild;

    const toFarenheit = (temp) => {
        let len = temp.textContent;
        let num = len.slice(0, len.length - 1);
        num = num * 1.8 + 32;
        num = num.toFixed(1);
        num += '°';
        temp.textContent = num;
    };

    const toCelsius = (temp) => {
        const len = temp.textContent;
        let num = len.slice(0, len.length - 1);
        num = (num - 32) * 0.5555555555;
        num = num.toFixed(1);
        num += '°';
        temp.textContent = num;
    };

    if (sw) {
        toFarenheit(temp1);
        toFarenheit(temp2);
        toFarenheit(temp3);
        toFarenheit(temp4);
        toFarenheit(temp5);
        toFarenheit(temp6);
        toFarenheit(temp7);
        toFarenheit(temp8);
        toFarenheit(temp9);
        toFarenheit(temp10)
        tempSwitch = false;
        temp11.textContent = 'Farenheit';
    } else {
        toCelsius(temp1);
        toCelsius(temp2);
        toCelsius(temp3);
        toCelsius(temp4);
        toCelsius(temp5);
        toCelsius(temp6);
        toCelsius(temp7);
        toCelsius(temp8);
        toCelsius(temp9);
        toCelsius(temp10);
        tempSwitch = true;
        temp11.textContent = 'Celsius';
    }
};

let speedSwitch = true;
let tempSwitch = true;

const tryToFetch = (name) => {
    if (name !== null && name.includes('sb')) {
        const input = document.querySelector('.search-location-input');
        if (input.value.length > 0) {
            fetchApi(input.value);
        }
    }
};

body.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const input = document.querySelector('.search-location-input');
        if (input.value.length > 0) {
            fetchApi(input.value);
        }
    }
});

body.addEventListener('click', (e) => {
    const isDropDownButton = e.target.getAttribute('class');
    tryToFetch(isDropDownButton);

    if (
        isDropDownButton === null ||
        !isDropDownButton.includes('configdropdown')
    ) {
        const isActive = document.querySelector('.config-button-container');
        const className = isActive.getAttribute('class');
        if (className.includes('active')) {
            // active and != config-settings
            if (isChildToParent('config-settings', e.target)) {
                isActive.classList.toggle('active');
            } else {
                if (!isChildToParent('temp-settings', e.target)) {
                    tempConversion(tempSwitch);
                } else if (!isChildToParent('speed-settings', e.target)) {
                    speedConversion(speedSwitch);
                }
            }
        }
        return;
    }

    let currentDropdown;

    if (isDropDownButton) {
        currentDropdown = e.target.closest('[data-dropdown]');
        currentDropdown.classList.toggle('active');
    }
});
