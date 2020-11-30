// const currentYear = 2020;

function countTimeDiff() {
const date = new date();
const currentYear = date.getFullYear();

const newYear = currentYear + 1;

const newYearDate = `${newYear}-01-01 00:00:00`;
const newYearObject = new Date(newYearDate);
const newYearMiliseconds = newYearObject.getTime();

//einamasis laikas
const currentTimeMiliseconds = date.getTime();

const timeLeft = newYearMiliseconds - currentTimeMiliseconds;
let secondsLeft = timeLeft / 1000;

// console.log(newYearDate);

const days = Math.floor(secondsLeft / 60 / 60 / 24);
secondsLeft -= days * 60 * 60 * 24;

const hours = Math.floor(secondsLeft / 60 / 60);
secondsLeft -= hours * 60 * 60;

const minutes = Math.floor(secondsLeft /60);

const seconds = Math.floor(secondsleft - minutes * 60);

return {
    days: days < 10 ? '0' + days : days,
    hours: hours < 10 ? '0' + hours : hours,
    minutes: minutes < 10 ? '0' + minutes : minutes,
    seconds: seconds < 10 ? '0' + seconds : seconds,
}
}

export { countTimeDiff }