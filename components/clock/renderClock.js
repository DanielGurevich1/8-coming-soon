
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

const newYearMilliseconds = date.getTime();

const timeLeft = newYearMilliseconds - currentTimeMilliseconds;

console.log(newYearDate);

const days = Math.floor(secondsLeft /60/60/24);
secondsLeft -= days * 60 * 60 * 24;
const hours = Math.floor(secondsLeft /60/60);
secondsLeft -= days * 60 * 60;
const minutes = Math.floor(secondsLeft /60);
secondsLeft -= days * 60;
const seconds = Math.floor(secondsleft - minutes * 60);

    const HTML = `<div class="time-box">
                        <div>432</div>
                        <span>Days</span>
                        </div>
                        <div>
                        <h2>39</h2>
                        <span>Hours</span>
                        </div>
                        <div>
                        <h2>333</h2>
                        <span>minutes</span>
                        </div> 
      
      <h2></h2>
      <span></span>`

      DOM.innerHTML = HTML;

    console.log(DOM);
}



export { renderClock }