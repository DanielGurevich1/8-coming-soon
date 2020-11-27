
// Target date is New Year evening.
// 2021-01-01 00:00:00
/**
 * Generuoja statini laikrodi, kuris rodo kiek laiko liko iki Naujuju Metu
 * @param {string} selector Css taisykle, kaip rasti vieta, kur bus generuojams laikrodzio HTML turinys.
 * @returns {*}
 */
function renderClock(selector) {
    const DOM = document.querySelector(selector);
    if (!DOM) {
        console.error('ERROR: nerandu vietos kur sugeneruoti laikrodi.');
        return false;
    }
// const currentYear = 2020;
const date = new date();
const currentYear = date.getFullTear();

const newYear = currentYear + 1;

const newYearDate = `${newYear}-01-01 00:00:00`;
const newYearObject = new Date(newYearDate);
const newYearMiliseconds = newYearObject.getTime();

//einamasis laikas
const currentTimeMilliseconds = date.getTime();

const timeLeft = newYearMiliseconds - currentTimeMilliseconds;
let secondsLeft = timeLeft /1000;

// console.log(newYearDate);

const days = Math.floor(secondsLeft / 60 / 60 / 24);
secondsLeft -= days * 60 * 60 * 24;
const hours = Math.floor(secondsLeft / 60 / 60);
secondsLeft -= hours * 60 * 60;

const minutes = Math.floor(secondsLeft /60);

const seconds = Math.floor(secondsleft - minutes * 60);

    const HTML = `<div class="time-box">
                        <div class='time'>${days}</div>
                        <span>Days</span>
                        </div>
                        <div class="time">${hours}</div>
                        <span>Hours</span>
                        </div>
                        <div class="time">${minutes}</div>
                        <span>minutes</span>
                        </div>
                        <div class="time">${seconds}</div>
                        <span>seconds</span>
                        </div>`;

      DOM.innerHTML = HTML;
return true;
    // console.log(DOM);
}



export { renderClock }